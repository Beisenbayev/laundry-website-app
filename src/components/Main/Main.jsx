import React from 'react';
import { Switch, Route } from 'react-router-dom';
import s from './Main.module.css';

import Login from './Login/Login';
import Categories from './Categories/Categories';
import Services from './Services/Services';
import Search from './Search/Search';
import Basket from './Basket/Basket';
import Profile from './Profile/Profile';

const Main = (props) => {
   return (
      <main className={s.block}>
         <Switch>
            <Route path='/login' render={() => <Login />} />
            <Route path='/services' render={() => <Services />} />
            <Route path='/search' render={() => <Search />} />
            <Route path='/basket' render={() => <Basket />} />
            <Route path='/profile' render={() => <Profile />} />
            <Route exact path='/' render={() => <Categories />} />
         </Switch>
      </main>
   );
}


export default Main;