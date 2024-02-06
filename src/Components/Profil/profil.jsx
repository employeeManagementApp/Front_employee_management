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


function profil() {
    return (

        <main>
            <div class="profil">
                <section class="section1">
                                    {/* Navbar verticale à gauche */}

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
                <div className="right-container">
                <section class="section2">
                    {/* Première div avec une sorte de navbar horizontale en haut */}
                    <div class="top">
                        <div class="title">
                            <h1>Overview</h1>
                            <div class="custom-select">
                                <select>
                                    <option value="0">All Teams</option>
                                    <option value="1">one person</option>
                                    <option value="2">two person</option>
                                </select>
                            </div></div>

                        <div class="search">
                            <CiSearch class="icon" /><input type="text" placeholder="Search" />
                        </div>
                        <div class="notiMessage">
                            <a href=""><FiMessageCircle /></a><a href=""><IoMdNotifications /></a>
                        </div>
                    </div>

                </section>
                    <div className="employee-info-container">
                        <div className="employee-info-left">
                            <div className="namecontainer">
                                <h1>Patrick Kennedy</h1>
                                <div className="photo-container">
                                    <img src="url_de_la_photo" alt="Photo de l'employé" />
                                </div>
                            </div>
                            <div className="emailcontainer">
                                <p>email: exemple email</p>
                            </div>
                            <div><p>graph</p></div>
                            <div><p>stat comportement</p></div>
                        </div>
                        <div className="employee-info-right">
                            <div className="xxx">
                                <div className="projectinprogresscontainer"><h1>projjection</h1></div>
                                <div className="competitionratecontainer"><h1>competitionrate</h1></div>
                                <div className="bundlestudiocontainer"><h1>bundlestudio</h1></div>
                            </div>
                            <div className="dateholder"><h1>date</h1></div>

                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}
export default profil