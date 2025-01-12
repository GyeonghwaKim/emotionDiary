import './App.css';
import { Routes,Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import React,{ useEffect, useReducer,useRef, useState} from 'react';

function reducer(state,action){
  switch(action.type){
    case "INIT":{
      return action.data;
    }
    case "CREATE":{

      const newState=[action.data,...state];
      localStorage.setItem("diary",JSON.stringify(newState));
      return [action.data,...state];
    }
    case "UPDATE":{
      const newState= state.map((it) => 
        String(it.id) === String(action.data.id) ? {...action.data}: it);

      localStorage.setItem("diary",JSON.stringify(newState));
      return newState;
    }
    case "DELETE":{
      const newState= state.filtier((it) => String(it.id) !== String(action.targetId));
      localStorage.setItem("diary",JSON.stringify(newState));
      return newState;
    }
    default:{
      return state;
    }
  }
}

export const DiaryStateContext= React.createContext();
export const DiaryDispatchContext=React.createContext();

function App() {
  const [isDataLoaded,setIsDataLoaded] = useState(false);
  const [data,dispatch] = useReducer(reducer,[]);
  const idRef=useRef(0);

  useEffect(()=>{
    const rawData = localStorage.getItem("diary");
    if(!rawData){
      setIsDataLoaded(true);
      return;
    }
    const localData=JSON.parse(rawData);
    if(localData.length ===0){
      setIsDataLoaded(true);
      return;
    }

    localData.sort((a,b) => Number(b.id) - Number(a.id));
    idRef.current=localData[0].id+1;


    dispatch({type:"INIT",data:localData});
    setIsDataLoaded(true);
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
  };

  if(!isDataLoaded){
    return <div>데이터를 불러오는 중입니다</div>;
  }else{
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}>
          <div className="App">
            {/*switch문 느낌 */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                {/*동적경로 중 url 파라미터*/}
                <Route path="/diary/:id" element={<Diary />} />
                <Route path="/edit/:id" element={<Edit />} />
              </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
 
}



export default App;
