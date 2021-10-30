import React, { FC } from 'react'
import { ISimplifiable } from 'types';

export type TNewsProps = {}

const News: FC<TNewsProps & ISimplifiable> = ({simplified}) => {
    return (
       <div className=''>
         News
       </div>
    );
};

export default News;
