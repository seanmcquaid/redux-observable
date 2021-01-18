import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Pinging from './containers/Pinging';
import HttpExample from './containers/HttpExample';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path='/' component={Pinging} />
      <Route exact path='/http' component={HttpExample} />
    </BrowserRouter>
  </Provider>
);

export default App;
