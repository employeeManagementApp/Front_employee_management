import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NotFound from '../Pages/NotFound.jsx';
import LoginPage from '../Pages/LoginPage.jsx';
import Home from '../Pages/Home.jsx';
import BackOffice from '../Pages/BackOffice.jsx';

function App() {
  return (
<Router>
  <Routes>
  <Route exact path='/login' element={<LoginPage></LoginPage>}/>

  <Route exact path='/backoffice' element={<BackOffice></BackOffice>}/>
    <Route exact path='/' element={<Home></Home>}/>
    <Route exact path='/*' element={<NotFound></NotFound>}/>
  </Routes>
</Router>
  );
}

export default App;
