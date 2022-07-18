import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import ForgetPassword from './components/ForgetPassword';
const App = () => {
  return ( 
    <BrowserRouter>
      <div className="App"> 
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/profile" component={Profile} />
        <Route path="/forget" component={ForgetPassword} />
      </div>
    </BrowserRouter>
   );
}
export default App;
