import React, { useState } from 'react';
import './App.css';

// import SideNav from './comonents/MySidenav';

import MySidenav from './comonents/MySidenav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Postedloads from './pages/Postedloads';
import Cancledbookings from './pages/Cancledbookings';
import Trukcompines from './pages/Trukcompines';
import Completedloads from './pages/Completedloads';
import Referrals from './pages/Referrals';
import Communications from './pages/Communications';
import Support from './pages/Support';
import LoginForm from './comonents/LoginForm';
import Maybeshownavbar from './comonents/Maybeshownavbar/Maybeshownavbar';
import Privateroute from './comonents/Privateroute';


function App() {

  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))


  return (
    <>

      <BrowserRouter>
        {/* { isLoggedIn ? <MySidenav /> : null} */}
        <Maybeshownavbar>
        <MySidenav /> 
        </Maybeshownavbar>
        <Routes>
          <Route path='/login' element={<LoginForm />  } />
          <Route path="/" element={<Dashboard />} />
          <Privateroute path="/postedloads" component={Postedloads } />
          <Route path="/cancledbookings" element={<Cancledbookings />} />
          <Route path="/trukcompines" element={<Trukcompines />} />
          <Route path="/completeddeals" element={<Completedloads />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/communications" element={<Communications />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;


// import React, { useState } from 'react';
// import './App.css';

// import MySidenav from './comonents/MySidenav';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import Postedloads from './pages/Postedloads';
// import Cancledbookings from './pages/Cancledbookings';
// import Trukcompines from './pages/Trukcompines';
// import Completedloads from './pages/Completedloads';
// import Referrals from './pages/Referrals';
// import Communications from './pages/Communications';
// import Support from './pages/Support';
// import LoginForm from './comonents/LoginForm';


// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     // Perform login logic here
//     setIsLoggedIn(true);
//     localStorage.setItem('isLoggedIn', JSON.stringify(true));
//   };

//   const handleLogout = () => {
//     // Perform logout logic here
//     setIsLoggedIn(false);
//     localStorage.setItem('isLoggedIn', JSON.stringify(false));
//   };

//   return (
//     // <BrowserRouter>
//     //   {isLoggedIn ? (
//     //     <>
//     //       <MySidenav />
//     //       <Routes>
//     //         <Route path='/login' element={<LoginForm />} />
//     //         <Route exact path="/" element={<Dashboard />} />
//     //         <Route path="/postedloads" element={<Postedloads />} />
//     //         <Route path="/cancledbookings" element={<Cancledbookings />} />
//     //         <Route path="/trukcompines" element={<Trukcompines />} />
//     //         <Route path="/completeddeals" element={<Completedloads />} />
//     //         <Route path="/referrals" element={<Referrals />} />
//     //         <Route path="/communications" element={<Communications />} />
//     //         <Route path="/support" element={<Support />} />
//     //       </Routes>
//     //     </>
//     //   ) : (

//     //     <LoginForm />
//     //   )}
//     // </BrowserRouter>



//     <BrowserRouter>
//       {isLoggedIn ? <MySidenav /> : null}
//       <Routes>
//         <Route path='/login' element={<LoginForm />} />
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/postedloads" element={<Postedloads />} />
//         <Route path="/cancledbookings" element={<Cancledbookings />} />
//         <Route path="/trukcompines" element={<Trukcompines />} />
//         <Route path="/completeddeals" element={<Completedloads />} />
//         <Route path="/referrals" element={<Referrals />} />
//         <Route path="/communications" element={<Communications />} />
//         <Route path="/support" element={<Support />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
