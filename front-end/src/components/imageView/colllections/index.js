import { useEffect, useState } from 'react';
import { Styles } from './style/collectionStyle';

export default function Collection({info, selectedId, setSelectedId}){
    const [createdAt, setCreatedAt] = useState('');
    useEffect(() => {
        const date = new Date(info.createdDate);
        setCreatedAt(date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear());
    }, [info])    
    return (
        <Styles>
            <div 
                className={`collection-card ${info._id === selectedId && 'focus'}`}
                onClick={() => setSelectedId(info._id)}
            >
                <div className='collection-txt'>
                    <div className='collection-name'>
                        {info.collectionName}
                    </div>
                    <div className='sub-name'>
                        {info.description}
                    </div>
                    <div className='txt'>
                        {createdAt}
                    </div>
                </div>
                <div className='image-group'>
                    <div className='image-item'>
                    </div>
                    <div className='image-item'>
                    </div>
                    <div className='image-item'>
                    </div>
                </div>
            </div>
        </Styles>
    )
}