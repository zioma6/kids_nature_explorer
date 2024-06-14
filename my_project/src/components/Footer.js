import React from 'react';
import '../sass/_footer.scss'
import treeLeft from "../assets/images/Tree_l.png"
import treeRight from "../assets/images/Tree_R.png"

const Footer = () => {
    return (
        <div>
           <footer className='footer'>
               <div className='footer__img'>
                   <img className='footer__img--left' src={treeLeft} alt="tree"/>
                   <img className='footer__img--right' src={treeRight} alt="tree"/>
               </div>
           </footer>
        </div>
    );
};

export default Footer;