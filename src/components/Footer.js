import React from 'react';
import {CgGoogle} from "react-icons/cg";
import {BsInstagram} from "react-icons/bs";
import {CiMail} from "react-icons/ci";



const Footer = () => {
  return (
    <>
    <div className="footer">
          <div className="copy-mark">
            <p className="cpy">&copy; reserved by food wala
            <p>Add: Jaunpur Uttar Pradesh India, 222165</p>
            </p>
              <div className="icon-link">
                <i><CiMail/></i>
                <i><BsInstagram/></i>
                <i><CgGoogle/></i>
              </div>
          </div> 
    </div>
    </>
  )
}

export default Footer