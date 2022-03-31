import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// react의 모든 요소들은 id=root인 div 안에 들어온다. 즉 app 태그는 <div id=root> 태그의 자식 태그라고 할 수 있다.