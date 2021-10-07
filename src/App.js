import { StoreProvider} from 'easy-peasy';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import store from './store/hooks';
import Routes from './web/routes';

function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <Routes />
      </Router>
    </StoreProvider>
  );
}

export default App;
