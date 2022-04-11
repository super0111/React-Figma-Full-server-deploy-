import './App.css';
import { CollectionsProvider } from './context/collections';
import Routers from './router';

function App() {
  return (
      <CollectionsProvider>
            <Routers />
      </CollectionsProvider>
  );
}

export default App;
