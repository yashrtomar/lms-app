import React from 'react';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import Navigator from './navigation/Navigator';

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
