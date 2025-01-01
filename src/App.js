import './App.css';
import { Routes,Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';

function App() {
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
        {/*페이지 이동구현*/}
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/new"}>New</Link>
          <Link to={"/diary"}>Diary</Link>
          <Link to={"/edit"}>Edit</Link>
        </div>

    </div>
  );
}

export default App;
