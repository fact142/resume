
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import { Error } from './components/Error';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" component={Main} />
        <Redirect exact strict from="/" to="main" />
        <Route path="/" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
