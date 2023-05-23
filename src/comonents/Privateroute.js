import React, { useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';

const Privateroute = ({ component: Component, ...rest }) => {
  const isLoggedIn = !!localStorage.getItem('isLoggedIn');

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

// const Privateroute = (props) =>{
//     let Cmp=props.Cmp
//     const history = useHistory();
//     useEffect(() => {
//         if(!!localStorage.getItem('isLoggedIn')){
//             history.push('./login')
//         }
//     },[])

//     return (
//         <div>
//             <Cmp/>
//         </div>
//     )

// }

export default Privateroute;
