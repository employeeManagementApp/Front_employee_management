import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import '../Components/Header/Header.jsx';
import NotFound from '../Pages/NotFound.jsx';
import LoginPage from '../Pages/LoginPage.jsx';
import Home from '../Pages/Home.jsx';
import Page from '../Pages/Page.jsx';
import Profil from '../Components/Profil/Profil.jsx';
import PrivateRoute from '../Components/PrivateRoute.jsx';


function App() {
  return (
<Router>
  <Routes>
  <Route exact path='/' element={<LoginPage></LoginPage>}/>
  <Route path='/home' element={<PrivateRoute Component={Home}></PrivateRoute>} />
    <Route exact path='/*' element={<NotFound></NotFound>}/>
    <Route path='/page' element={<PrivateRoute Component={Page}></PrivateRoute>} />
  </Routes>
</Router>
  );
}

export default App;
