import './App.css';
import {
  BrowserRouter as Router,
  Route,Switch,
} from "react-router-dom";
import MainPage from './components/MainPage';
import TodoPage from './components/TodoPage';


function App() {
  return (
   
  <main>
    <Switch>
     <Route path="/" component={MainPage} exact/>
     <Route path="/todos" component={TodoPage}/>
    </Switch>
  </main>
  
  );
}

export default App;
