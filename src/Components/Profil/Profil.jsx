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


function Profil() {
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
                    <div className="middle">
                        <div className="middle-left">

                        </div>
                        <div className="middle-right">
                            <div className="right-top">
                                <div className="rt-left">

                                </div>
                                <div className="rt-right">

                                </div>
                            </div>
                            <div className="right-bottom">

                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </main>
    )
}
export default Profil