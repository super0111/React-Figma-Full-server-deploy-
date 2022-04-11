import CollectionCard from '../collectionCard';
import { useEffect, useContext, useCallback } from 'react';

import { getAllCollection } from '../../../../api/collection';
import { CollectionsContext } from '../../../../context/collections';
import { Styles } from './style/allCollectionStyle';
const AllCollections = () => {
    const [collections, setCollections] = useContext(CollectionsContext);

    
    const getInitialData = useCallback( async() => {
        const { collections } = await getAllCollection();
        setCollections(collections);
    }, [setCollections])

    useEffect(() => {
        getInitialData();
    }, [getInitialData])
    
    return (
        <Styles>
            <div className="all-collection">
                {(collections && collections.length > 0) &&
                    <div className='collection-list'>
                        {collections.map((info, idx) => {
                            return (
                                    <CollectionCard 
                                        info={info} 
                                        key={idx}
                                    />
                            )
                        })}
                    </div>
                }
                {(!collections || collections.length === 0) && <div className='empty'>Click the “Add Collection” button to create your first Collection ❤️</div>}
            </div>
        </Styles>
    )
}

export default AllCollections;