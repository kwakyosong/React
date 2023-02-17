import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

function App() {
  return (
    <ColorContext.Provider value={{color:'yellow'}}>
      <div className="App">
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
