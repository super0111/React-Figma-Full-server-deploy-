import React from "react";
import { Styles } from './style/listStyle';

export default function StyledList({ data, setCurrentKey, setShowKeywordList }){

  return (
    <Styles>
      <div className="list-container">
        {data.map((item, index) => (
          <div 
            className="list-item" 
            key={index}
            onClick={() => {setCurrentKey(item.keyword);setShowKeywordList(false)}}
          >
            {item.keyword}
          </div>
        ))}
      </div>
    </Styles>
  )
}