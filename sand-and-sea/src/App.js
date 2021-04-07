import styles from './Shared/styles.module.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/home';

const App = () => {
  return (
    <div className={styles.page}>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
