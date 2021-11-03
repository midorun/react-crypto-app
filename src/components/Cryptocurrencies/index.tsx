import { Card, Col, Input, Row } from 'antd';
import millify from 'millify';
import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { cryptoCurrencyApi } from 'services/cryptoCurrencyApi';
import { TCoin } from 'services/cryptoCurrencyApi/types';
import { ISimplifiable } from 'types';

export type TCryptocurrenciesProps = {}

const Cryptocurrencies: FC<TCryptocurrenciesProps & ISimplifiable> = ({simplified}) => {
  const amountOfCoinsToShow = simplified ? 10 : 100;
  const {data, isLoading} = cryptoCurrencyApi.useGetCoinsQuery(amountOfCoinsToShow);
  const [coins, setCoins] = useState<TCoin[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filterCoinsByTerm = (coins: TCoin[], filterTerm: string) => {
    return coins.filter(coin => coin.name.toLowerCase().includes(filterTerm));
  };

  useEffect(() => {
    if (data){
      const filteredCoins = filterCoinsByTerm(data?.data.coins, searchTerm)
      setCoins(filteredCoins)
    }
  }, [data, searchTerm]);

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}/>
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {coins?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link key={currency.id} to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={currency.iconUrl}
                    alt={'coin icon'}
                  />
                }
                hoverable
              >
                <p>Price: {millify(+currency.price)}</p>
                <p>Market Cap: {millify(+currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
