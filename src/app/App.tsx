import { AppRouter } from './AppRouter';
import { RootStoreContext } from './../shared/hooks/useStores';
import RootStore from './stores/rootStore';
import { ReactFlowProvider } from 'reactflow';

export function App() {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <ReactFlowProvider>
        <AppRouter />
      </ReactFlowProvider>
    </RootStoreContext.Provider>
  );
}
