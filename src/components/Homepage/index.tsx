import Title from 'antd/es/typography/Title';
import React, { FC } from 'react';
import millify from 'millify';
import { Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { News, Cryptocurrencies } from 'components/index';
import { cryptoApi } from 'services/cryptoApi';


export type THomepageProps = {}

const Homepage: FC<THomepageProps> = () => {
  const {data, error, isLoading} = cryptoApi.useGetCoinsQuery('')
  const globalStats = data?.data?.stats

  console.log(data);

  return (

    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`}/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`}/></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified/>
    </>
  );
};

export default Homepage;
