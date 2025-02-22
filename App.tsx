//Navigator
import AppNavigation from "./src/components/Navigator/AppNavigation";
//TailwindCSS
import "./global.css";
//Global State
import { Provider } from "react-redux";
import { store, persistedStore } from "./src/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
}
