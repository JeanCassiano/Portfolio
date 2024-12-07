import React from "react";
import { FooterContainer } from "./styles.tsx";
import {FaFacebook, FaInstagram, FaLinkedin, FaEnvelope} from 'react-icons/fa';



const Footer = ()=>{
    return(

        <FooterContainer>
      
            <h1>Conecte comigo</h1>
            <h2>Jean Cassiano</h2>
                    
            <div>
                <a href="https://www.facebook.com/jean.c.p.cassiano/"><FaFacebook className="svg"/></a>
                <a href="https://www.instagram.com/Jean_Cassiano_"><FaInstagram className="svg"/></a>
                <a href="https://www.linkedin.com/in/jean-cassiano/">< FaLinkedin className="svg"/></a>
                <a href="mailto:jean_cassiano_@hotmail.com">< FaEnvelope className="svg"/></a>
            </div>
        </FooterContainer>
    );
}

export default Footer;