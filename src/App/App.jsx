import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import '../Components/Header/Header.jsx';
import NotFound from '../Pages/NotFound.jsx';
import LoginPage from '../Pages/LoginPage.jsx';
import Home from '../Pages/Home.jsx';
import Page from '../Pages/Page.jsx';

function App() {
  return (
<Router>
  <Routes>
  <Route exact path='/' element={<LoginPage></LoginPage>}/>
    <Route exact path='/home' element={<Home></Home>}/>
    <Route exact path='/*' element={<NotFound></NotFound>}/>
    <Route exact path='/page'element={<Page></Page>}/>
  </Routes>
</Router>
  );
}

export default App;
