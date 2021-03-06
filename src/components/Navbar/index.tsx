import { BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import { Avatar, Menu, Typography } from 'antd';
import React, { FC } from 'react'
import { Link } from 'react-router-dom';

import cryptocurrency from 'assets/imgs/cryptocurrency.png'

export type TNavbarProps = {}

const Navbar: FC<TNavbarProps> = () => {
    return (
       <div className='nav-container'>
         <div className='logo-container'>
           <Avatar src={cryptocurrency} size={'large'}/>
           <Typography.Title level={2} className={'logo'}>
             <Link to={'/'}>Cryptoverse</Link>
           </Typography.Title>
         </div>
         <Menu theme="dark">
           <Menu.Item icon={<HomeOutlined />}>
             <Link to="/">Home</Link>
           </Menu.Item>
           <Menu.Item icon={<FundOutlined />}>
             <Link to="/cryptocurrencies">Cryptocurrencies</Link>
           </Menu.Item>
           <Menu.Item icon={<MoneyCollectOutlined />}>
             <Link to="/exchanges">Exchanges</Link>
           </Menu.Item>
           <Menu.Item icon={<BulbOutlined />}>
             <Link to="/news">News</Link>
           </Menu.Item>
         </Menu>
       </div>
    );
};

export default Navbar;
