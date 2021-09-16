import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const withAuthRedirect = (Component) => {
   const ComponentRedirectContainer = (props) => {
      if (!props.isActive) return <Redirect to='/login' />
      return <Component {...props} />
   }

   const mapStateToProps = (state) => ({
      isActive: state.profile.isActive
   })

   const ComponentContainer = connect(mapStateToProps)(ComponentRedirectContainer);

   return ComponentContainer;
}


export default withAuthRedirect;