import React, { useReducer, useRef } from 'react';

import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';


import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';

const reducer = (state, action) => {
  let newState = [];
  switch(action.type) {
    case 'INIT' : {
      return action.data
    };
    case 'CREATE' : {
      newState = [action.data, ...state];
      break; //default를 실행시키지 않기 위해
    }
    case 'REMOVE' : {
      newState = state.filter((it)=>it.id !== action.targetId); //filter를 이용해 거름망에 거름
      break;
    }
    case 'Edit' : {
      newState = state.map((it)=>it.id === action.data.id ? {...action.data} : it); //map을 이용해 수정한뒤 모든 걸 다시 반환
      break;
    }
    default:
      return state;
  }
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {

  const [data, dispatch] = useReducer(reducer, []); 
  const dataId = useRef(0);
  
  const onCreate = (date, content, emotion) => {
    dispatch({type:'CREATE', data: {
      id: dataId.current,
      date: new Date(date).getTime(),
      content,
      emotion,
    }});
    dataId.current += 1;
  }

  const onRemove = (targetId) => {
    dispatch({type: 'REOMOVE', targetId})
  }

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({type: 'EDIT', data: {
      id: dataId.current,
      date: new Date(date).getTime(),
      content,
      emotion
    }})
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{
        onCreate,
        onRemove,
        onEdit,
      }}>
        <BrowserRouter>
          <div className="App">
            <h1>App.js</h1>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/new" element={<New />}/>
              <Route path="/diary/:id" element={<Diary />}/>
              <Route path="/edit" element={<Edit />}/>
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;

//1. url이 바뀌면 어떤 컴포넌트를 렌더링하여 페이지 역할을 할것인가 - 페이지 역할을 할 컴포넌트를 <Routes> 태그로 감싸준다.
//2. <Route /> 컴포넌트 - url과 다른 컴포넌트들을 실질적으로 매칭해주는 컴포넌트이다. 
//   <Route path="/" element={<Home />}/> --> 경로가 / 인 경우 <Home> 컴포넌트 매칭(/는 url의 메인을 의미)

