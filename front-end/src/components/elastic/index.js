import Carousel, { consts } from 'react-elastic-carousel'
import { Button } from 'semantic-ui-react';
import './style/style.css';
import { Styles } from './style/elasticStyle';

export default function ElasticCarousel(){
    return (
        <Styles>
            <div className='container'>
                <Carousel 
                    itemPadding={[0, 0]} 
                    itemsToShow={1} 
                    outerSpacing={110} 
                    pagination={false}
                >
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                </Carousel>
                <div className='cover'>
                </div>
            </div>
        </Styles>
        
    )
}