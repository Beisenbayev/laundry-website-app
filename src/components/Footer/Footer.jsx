import React from 'react';
import { RiWhatsappLine, RiFacebookBoxLine } from 'react-icons/ri';
import { FiYoutube } from 'react-icons/fi';
import s from './Footer.module.css';

import Wrapper from '../common/Wrapper/Wrapper';
import Logotype from '../common/Logotype/Logotype';

const Footer = (props) => {
   return (
      <footer className={s.block}>
         <Wrapper>
            <div className={s.inner}>
               <div className={s.logo}>
                  <Logotype />
               </div>

               <div className={s.networks}>
                  <a href='https://www.whatsapp.com/' target='_blank' rel="noreferrer"><RiWhatsappLine /></a>
                  <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><RiFacebookBoxLine /></a>
                  <a href='https://www.youtube.com/' target='_blank' rel="noreferrer"><FiYoutube /></a>
               </div>

               <div className={s.phoneNumber}>
                  <a href='tel:+77083807009'>+7 (708) 380 - 70 - 09</a>
               </div>
            </div>
         </Wrapper>
      </footer>
   );
}


export default Footer;