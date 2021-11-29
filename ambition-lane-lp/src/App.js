import React from "react";
import Header from './components/Header';
import Footer from'./components/Footer';
import Home from './components/Home'
import Service from './components/Service'
import Contact from './components/Contact'
import Login from './components/Login'
import Error404 from './components/Error404'
import {Switch,Route} from 'react-router-dom';
import PhoneButton from './components/helperComponents/PhoneButton.jsx'

function App() {
  return (
    <>
    <Header />
    <PhoneButton/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/service' component={Service}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/login' component={Login}/>
      <Route component={Error404}/>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
