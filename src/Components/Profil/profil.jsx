import React from "react";
import './profil.css';
import { TfiLineDouble } from "react-icons/tfi";
import { SiCircle } from "react-icons/si";
import { CgMenuGridO } from "react-icons/cg";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";


function profil(){
    return(
   
            <main>
         <div class="profil">
            <section class="section1">
          <div class="first">
         <a href=""> <TfiLineDouble class="linedouble" /> </a>
          </div>
          <div class="second">
          <a href=""><SiCircle class="circle"/></a>
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

            </section>
           </div>
            </main>
    )
}
export default profil