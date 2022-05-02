import React, { useEffect } from 'react';
import './App.css';
import SignUp from './pages/sign-up/sign-up.component';
import IndexPage from './pages/index-page/index.component';
import { Routes, Route } from 'react-router-dom';
import Wallet from './pages/wallet/wallet-component';
import Profile from './pages/profile/profile.component';
import Notification from './pages/notification/notification';
import NotificationDetails from './pages/notification-details/notification-details';
import History from './pages/history/history.component';
import Settings from './pages/settings/settings.component';
import Login from './pages/login/login.component';
import $ from 'jquery'


function App() {
 
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/index/:id' element={<IndexPage />} />
      <Route path='/wallet' element={<Wallet />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/notification' element={<Notification />} />
      <Route path='/notification-details' element={<NotificationDetails />} />
      <Route path='/history' element={<History />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
