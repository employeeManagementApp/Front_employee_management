import React from "react";
import { TfiLineDouble } from "react-icons/tfi";
import { SiCircle } from "react-icons/si";
import { CgMenuGridO } from "react-icons/cg";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { CiSettings, CiSearch } from "react-icons/ci";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { FiMessageCircle } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import Chartt from "../Chart/chart.js";
import Chart2 from "../Chart2/chart2.js";
import Calendar from "../Calendar/Calendar";
import Avatar from "../../pictures/avatar.png"
import { useState , useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import './BackOfficeComponent.css'
import BackOffice from "../../Pages/BackOffice.jsx";
import {ActionList} from './ActionList.jsx'
import DefaultField from "./UtilsComponent/DefaultField/DefaultField.jsx";

function BackOfficeComponent() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [user, setUser] = useState()
    const [error, setError] = useState()
    const baseUrl = process.env.REACT_APP_BASE_URL; 

    const handleItemClick = (item) => {
        setSelectedItem(item);
      };

  useEffect(()=>{
    const token = localStorage.getItem('ematoken');
    if(token){
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;
        axios.get(`${baseUrl}/user/${userId}`)
        .then((response)=>{
            setUser(response.data)
        })
        .catch((err)=>{
            setError(err)
        })
    }
  }, [])
    return (

        <main>
            <div class="profil">
                <section class="section1">
                    <div class="first">
                        <a href=""> <TfiLineDouble class="linedouble" /> </a>
                    </div>
                    <div class="second">
                        <a href=""><SiCircle class="circle" /></a>
                    </div>
                    <div class="third">
                        <a href=""><CgMenuGridO class="menu" /></a>
                        <a href=""><FaRegEnvelope class="menu" /></a>
                        <a href=""><FaUser class="menu" /></a>
                        <a href=""><CiSettings class="menu" /></a>
                    </div>
                    <div class="forth"><HiOutlineArrowRightOnRectangle class="rectangle" /></div>
                </section>
                <section class="section2">
                    <div class="top">
                        <div class="title">
                            <h1>Overview</h1>
                            <div class="custom-select">
                           
                            </div></div>

                        <div class="search">
                           
                        </div>
                        <div class="notiMessage">
                            <a href=""><FiMessageCircle /></a><a href="http://localhost:3000/notification"><IoMdNotifications /></a>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="middle-left">
                       {user && (
                        <div class="person-profil">
                        <div class='name-email'>
                               <h3 class="name">{user.firstname} {user.lastname}</h3>
                           <p class="email">{user.email}</p>
                        </div>
                        <div class="photo"><img src={Avatar} alt="" class="imge" /></div>
                        
                      </div>
                       )}
                        {ActionList.map((element)=>(
                            <li className="list-action" key={element.id} onClick={()=>handleItemClick(element)}>
                              <span>
                              {element.icon} 
                              </span>
                              {element.title}
                            </li>
                        ))}
                        </div>
                        <div className="middle-right">
                            <div className="right-top-admin">
                                {selectedItem ? (
                                    <div>
                                        {selectedItem.component()}
                                    </div>
                                ):
                                <div>
                                    <DefaultField></DefaultField>    
                                </div>}
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </main>
    )
}
export default BackOfficeComponent