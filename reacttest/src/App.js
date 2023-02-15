import logo from './logo.svg';
import React , {useState} from 'react'
import './App.css';
import MyComponent from './MyComponent';
import Say from './Say';
import IterationSample from './IterationSample';

const App = () => { 

  const [visible,setVisible] = useState(false);
  const onClick = () => { 
    setVisible(!visible);
  }
  return (
    <div>
      <button onClick={onClick} >{visible? '숨기기':'보이기'} </button>
      <hr />
      {visible && <IterationSample />}
    </div>
  );
}

export default App;
