import React from 'react';
import { Reset } from 'styled-reset';
import { Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PageLayout from './pages/PageLayout';
import MyPage from './pages/MyPage';
import Lists from './components/Lists';

function App() {
  return (
    <div>
      <Reset />
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="lists" element={<Home />}>
            <Route path="private" element={<Lists />} />
            <Route path="shared" element={<Lists />} />
          </Route>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="my-page" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
