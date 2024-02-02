import React from "react";
import '../Components/Header/Header.jsx'
import Header from "../Components/Header/Header.jsx";
import legend from "../Components/image/legend-min.jpg";
import './Home.css';

const Home = ()=>{
    return(
      <div>
        <Header></Header>
       <main>
        <img src={legend} alt="" class="image"/>
       </main>
      
      </div> 
    )
}

export default Home