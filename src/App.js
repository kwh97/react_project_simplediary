import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import RouteTest from './components/RouteTest';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>App.js</h1>
        <RouteTest />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/new" element={<New />}/>
          <Route path="/diary/:id" element={<Diary />}/>
          <Route path="/edit" element={<Edit />}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

//1. url이 바뀌면 어떤 컴포넌트를 렌더링하여 페이지 역할을 할것인가 - 페이지 역할을 할 컴포넌트를 <Routes> 태그로 감싸준다.
//2. <Route /> 컴포넌트 - url과 다른 컴포넌트들을 실질적으로 매칭해주는 컴포넌트이다. 
//   <Route path="/" element={<Home />}/> --> 경로가 / 인 경우 <Home> 컴포넌트 매칭(/는 url의 메인을 의미)

