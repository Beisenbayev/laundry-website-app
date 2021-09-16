import React from 'react';
import { Switch, Route } from 'react-router-dom';
import s from './Main.module.css';

import Wrapper from '../common/Wrapper/Wrapper';
import Login from './Login/Login';
import Categories from './Categories/Categories';
import Services from './Services/Services';
import Search from './Search/Search';
import Basket from './Basket/Basket';
import Profile from './Profile/Profile';

const Main = (props) => {
   return (
      <main className={s.block}>
         <Wrapper>
            <Switch>
               <Route path='/login' render={() => <Login />} />
               <Route path='/services/:categoryId' render={() => <Services />} />
               <Route path='/search/:serviceName' render={() => <Search />} />
               <Route path='/basket' render={() => <Basket />} />
               <Route path='/profile' render={() => <Profile />} />
               <Route exact path='/' render={() => <Categories />} />
            </Switch>
         </Wrapper>
      </main>
   );
}


export default Main;