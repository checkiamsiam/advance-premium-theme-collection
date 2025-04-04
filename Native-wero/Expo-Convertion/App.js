import React from "react";
import FlashMessage from "react-native-flash-message";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "./app/Navigations/Route";
import FontProvider from "./app/components/FontsProvider";
import { persistor, store } from "./app/features/app/store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FontProvider>
          <SafeAreaProvider>
            <Routes />
            <FlashMessage position="top" />
          </SafeAreaProvider>
        </FontProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
