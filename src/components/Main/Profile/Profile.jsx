import React from 'react';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import withAuthRedirect from '../../../hoc/withAuthRedirect.js';
import {
   logoutThunkCreater as logout,
   updateUserSettingsThunkCreater as updateUserSettings
} from '../../../redux/reducers/user-reducer.js';
import s from './Profile.module.css';

import ModalWindow from '../../common/ModalWindow/ModalWindow';
import { CloseButton } from '../../common/ControlPanel/ControlPanel';
import { MyToggleSwitch } from '../../common/FormElements/FormElements';

const Profile = (props) => {
   const history = useHistory();
   const dispatch = useDispatch();
   const profile = useSelector(state => state.profile.userData);
   const username = profile.username;
   const notifyState = profile.settings.notify;

   const handleLogout = () => {
      dispatch(logout());
   }

   const handleNotifySwitch = (event) => {
      dispatch(updateUserSettings(event.target.checked));
   }

   return (
      <ModalWindow>
         <CloseButton onClick={() => history.push('/')} />
         <div className={s.block}>
            <h2>Профиль {username}</h2>
            <div className={s.notifyPanel}>
               <span>Уведомления</span>
               <MyToggleSwitch
                  name='notify'
                  checked={notifyState}
                  onChange={handleNotifySwitch} />
            </div>
            <button onClick={handleLogout}>Выйти</button>
         </div>
      </ModalWindow>
   );
}


export default compose(
   withAuthRedirect
)(Profile);