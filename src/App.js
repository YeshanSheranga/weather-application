import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
//import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      {/* <h2>Weather Ananlyzer</h2> */}
      {/* <Register/> */}
      {/* <Login/> */}
      <Routes>
        {/* <Route path="/" element={<Register />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
