import { Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  return (
    <div>
      <h1>테스트</h1>
      <div>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/about" component={About} />
      </div>
    </div>
  )
}

export default App;
