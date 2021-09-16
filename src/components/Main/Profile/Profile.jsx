import React from 'react';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import withAuthRedirect from '../../../hoc/withAuthRedirect.js';
import {
   logoutThunkCreater as logout
} from '../../../redux/reducers/user-reducer.js';
import s from './Profile.module.css';

import ModalWindow from '../../common/ModalWindow/ModalWindow';
import { CloseButton } from '../../common/ControlPanel/ControlPanel';
import ProfileForm from './ProfileForm/ProfileForm.jsx';

const Profile = (props) => {
   const history = useHistory();
   const dispatch = useDispatch();
   const profile = useSelector(state => state.profile.userData);
   const username = profile.username;

   const handleClose = () => {
      dispatch(logout());
   }

   return (
      <ModalWindow>
         <CloseButton onClick={() => history.push('/')} />
         <div className={s.block}>
            <h2>Профиль {username}</h2>
            <ProfileForm />
            <button onClick={handleClose}>Выйти</button>
         </div>
      </ModalWindow>
   );
}


export default compose(
   withAuthRedirect
)(Profile);