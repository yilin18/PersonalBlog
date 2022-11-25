import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Navigator from './router/navigator/navigator.component';
import About from './router/about/about.component';
import Home from './router/home/home.component';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigator/>}>
        <Route index element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
      </Route>
      
    </Routes>
  );
}

export default App;
