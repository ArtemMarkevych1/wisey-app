import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home, SingleCourse} from './pages';
import Navbar from './components/Navbar';

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" exact={true} element={<Home/>}/>
                <Route path="/:courseId" exact={true} element={<SingleCourse/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
