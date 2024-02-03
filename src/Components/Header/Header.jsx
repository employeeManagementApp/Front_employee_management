import React from "react";
import './Header.css';
import { TfiAlignJustify } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";

function Header () {
    return(
        <header>
            <div className="NavigationBar">
                <div className="Logo">
                    <div><TfiAlignJustify /></div>
                    <h3>UPLABS</h3>
                </div>
                 <nav className="Navigation">
                   <a href=""><IoIosSearch class="search" /></a>
                   <a href="">UPLOAD</a>
                   <a href="">LOGIN</a>
                 </nav>

            </div>
        </header>
    )  
 }
 export default Header
