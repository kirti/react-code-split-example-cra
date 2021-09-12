import React , { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Home = React.lazy(() => import('./Home'));
const ContactUs = React.lazy(() => import('./ContactUs'));
const Coffee = React.lazy(() => import('./Coffee'));
const AboutUs = React.lazy(() => import('./AboutUs'));

function Header() {

  return (
    <Router>
        <header>
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li> <Link to="/coffee">Coffee</Link></li>
                    <li> <Link to="/contactUs">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
        <Switch>
        <Suspense fallback={<div>Loading...</div>}>
            <Route path="/about"> <AboutUs /></Route>
            <Route path="/coffee"><Coffee /></Route>
            <Route path="/contactUs"> <ContactUs /> </Route>
            <Route path="/"><Home /> </Route>
            </Suspense>
        </Switch>
      </Router>
  );
}

export default Header;


 