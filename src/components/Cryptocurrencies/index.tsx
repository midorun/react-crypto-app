import React, { FC } from 'react'
import { ISimplifiable } from 'types';

export type TCryptocurrenciesProps = {
}

const Cryptocurrencies: FC<TCryptocurrenciesProps & ISimplifiable> = ({simplified}) => {
    return (
       <div className=''>
         Cryptocurrencies
       </div>
    );
};

export default Cryptocurrencies;
