import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppComp from './AppComp';
import EventPractice from './EventPratice'
import ValidationSample from './ValidationSample'
import ScrollBox from './ScrollBox'
import IterationSample from './IterationSample'
import Counter from './Counter'
import reportWebVitals from './reportWebVitals';
import Average from './Average'
import CSSModule from './CSSModule';
//console.log(App());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CSSModule />
    <Average />
    {/* <Counter />
    <App / >
    
    <ScrollBox /> 

    <EventPractice name='홍길동'/>
    <ValidationSample /> 
    <App />
    <AppComp />  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
