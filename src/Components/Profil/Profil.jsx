import React from "react";
import './profil.css';
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
import { useNavigate } from "react-router-dom";
import { FaWrench } from "react-icons/fa";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import { IoIosTrophy } from "react-icons/io";

function Profil() {
    const [user, setUser] = useState()
    const [error, setError] = useState()
    const progressValue = 36;
    const progressValueRate = 92;
    const navigate = useNavigate();
    const baseUrl = process.env.REACT_APP_BASE_URL; 
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
  const handleLogout = () => {
    localStorage.removeItem('ematoken');
    navigate('/')
  };
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
                    <div class="forth"><HiOutlineArrowRightOnRectangle onClick={handleLogout}  class="rectangle" /></div>
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
                            <a href=""><FiMessageCircle /></a><a href=""><IoMdNotifications /></a>
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
                       <Chartt></Chartt>
                       <Chart2></Chart2>
                        </div>
                        <div className="middle-right">
                            <div className="right-top">
                                <div className="rt-left">
                                    <p className="pr-pg"> <div className="trophy-content"><FaWrench className="trophy"></FaWrench> </div> Project in progress</p>
                                   <p className="pr-v"> {progressValue}</p>
                                    <ProgressBar percentage={progressValue} />
                                </div>
                                <div className="rt-right">
                                    <p className="pr-pg"> <div className="trophy-content"><IoIosTrophy className="trophy"></IoIosTrophy></div> Competition rate</p>
                                    <p className="pr-v"> %{progressValueRate}</p>
                                    <ProgressBar percentage={progressValueRate} />
                                </div>
                            </div>
                            <div className="right-bottom">
                            <Calendar></Calendar>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </main>
    )
}
export default Profil