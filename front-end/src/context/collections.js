import React, { useState } from 'react';

const CollectionsContext = React.createContext([{}, () => {}]);

const CollectionsProvider = (props) => {
  const [collections, setCollections] = useState([]);
  return (
    <CollectionsContext.Provider value={[collections, setCollections]}>
      {props.children}
    </CollectionsContext.Provider>
  );
};

export {CollectionsContext, CollectionsProvider};