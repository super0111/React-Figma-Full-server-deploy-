import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import ArrowButton from './arrowButton';
import { Styles } from './style/imageGalleryStyle';

export default function ImageGallery(){
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const count = ['', '', '', ''];
  return (
      <Styles>
        <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={3}
                gutter={20}
                leftChevron={
                    <ArrowButton />
                }
                rightChevron={
                    <ArrowButton />
                }
                outsideChevron
                chevronWidth={chevronWidth}
            >
                {count.map((val, index) => <img className='gallery' style={{width: index === activeItemIndex?200: 100, height: 200}} src={`/img/carousel/${index}.png`} alt='' key={index}/>)}
            </ItemsCarousel>
        </div>
      </Styles>
    
  );
};