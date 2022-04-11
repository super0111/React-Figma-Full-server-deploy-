import React, { useEffect, useState } from 'react';
import { Styles } from './bannerItemStyle';
import { ReactComponent as InCreaseIcon } from '../../../../../assets/img/admin/increase.svg';
import { ReactComponent as DeCreaseIcon } from '../../../../../assets/img/admin/decrease.svg';

export default function BannerItem(props){
    const {icon, name, percent, todayUser, high} = props.info;
    const {totalUsers, visitors, totalProducts, newUsers} = props;
    const [totalNumber, setTotalNumber] = useState('');

    useEffect(() => {
        if(name === 'Total Users'){
            setTotalNumber(totalUsers);
        }
        else{
            if(name === 'Visitors')
                setTotalNumber(visitors);
            else{
                if(name === 'Total Products')
                    setTotalNumber(totalProducts);
                else
                    setTotalNumber(newUsers);
            }
        }
    }, [props])
    return (
        <Styles>
            <div className='banner-item'>
                <div className='item-header'>
                    {React.createElement(icon, { width: 24, height: 24})}
                    <div className='header-txt'>
                        {name}
                    </div>
                </div>
                <div className='total-counts'>
                    {totalNumber}
                </div>
                <div className='item-footer'>
                    {high?<InCreaseIcon />:<DeCreaseIcon />}
                    <div className='increase-percent'>
                        {`${percent}%`}
                    </div>
                    <div className='today-user'>
                        {`+${todayUser}k today`}
                    </div>
                </div>
            </div>
        </Styles>
    )
}