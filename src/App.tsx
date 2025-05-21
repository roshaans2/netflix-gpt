import React from 'react';
import Body from './components/Layout/Body';
import Header from './components/Layout/Header';
import { Provider } from 'react-redux';
import appStore from './utils/store/appStore';

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
