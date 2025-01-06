import './App.css';
import { Routes,Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import { useEffect, useReducer,useRef } from 'react';

const mockData = [
  {
    id: "mock1",
    date: new Date().getTime(),
    content: "mock1",
    emotionId: 1,
  },
  {
    id: "mock2",
    date: new Date().getTime(),
    content: "mock2",
    emotionId: 1,
  },
  {
    id: "mock3",
    date: new Date().getTime(),
    content: "mock3",
    emotionId: 1,
  },
];

function reducer(state,action){
  switch(action.type){
    case "INIT":{
      return [action.data,...state];
    }
    case "CREATE":{
      return [action.data,...state];
    }
    case "UPDATE":{
      return state.map((it) => 
        String(it.id) === String(action.data.id) ? {...action.data}: it);
    }
    case "DELETE":{
      return state.filtier((it) => String(it.id) !== String(action.targetId));
    }
    default:{
      return state;
    }
  }
}

function App() {
  const [data,dispatch] = useReducer(reducer,[]);
  const idRef=useRef(0);

  useEffect(()=>{
    dispatch({
      type:"INIT",
      data: mockData,
    });
  },[]);

  const onCreate = (date,content,emotionId) => {
    dispatch({
      type:"CREATE",
      data:{
        id:idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current+=1;
  }

  const onUpdate = (targetId,date,content,emotionId) => {
    dispatch({
      type:"UPDATE",
      data: {
        id:targetId,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  }

  const onDelete = (targetId) => {
    dispatch({
      type:"DELETE",
      targetId,
    });
  }


  return (
    <div className="App">
      {/*switch문 느낌 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          {/*동적경로 중 url 파라미터*/}
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
    </div>
  );
}

export default App;
