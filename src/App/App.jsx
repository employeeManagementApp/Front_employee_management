import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import '../Components/Header/Header.jsx';
import NotFound from '../Pages/NotFound.jsx';
import LoginPage from '../Pages/LoginPage.jsx';
import Home from '../Pages/Home.jsx';

function App() {
  return (
<Router>
  <Routes>
  <Route exact path='/login' element={<LoginPage></LoginPage>}/>
    <Route exact path='/' element={<Home></Home>}/>
    <Route exact path='/*' element={<NotFound></NotFound>}/>
  </Routes>
</Router>
  );
}

export default App;
