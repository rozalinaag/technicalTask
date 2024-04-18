import { AppRouter } from './AppRouter';
import { RootStoreContext } from './../shared/hooks/useStores';
import RootStore from './stores/rootStore';

export function App() {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <AppRouter />
    </RootStoreContext.Provider>
  );
}
