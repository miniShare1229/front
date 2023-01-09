import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function PageLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-up">SignUp</Link>
          </li>
          <li>
            <Link to="/sign-in">SignIn</Link>
          </li>
          <li>
            <Link to="/not-found">404 NotFound</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
