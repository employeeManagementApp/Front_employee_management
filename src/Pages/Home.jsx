import React from "react";
import '../Components/Header/Header.jsx'
import Header from "../Components/Header/Header.jsx";
import background from "../Components/image/background.jpg";
import './Home.css';

const Home = ()=>{
    return(
      <div>
        <Header></Header>
       <main>
        <img src={background} alt="" class="image"/>
       </main>
      
      </div> 
    )
}

export default Home