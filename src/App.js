import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Objects from './components/Objects';
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';
import BasicVideo from './components/BasicVideo';
import SequenceVideo from './components/SequenceVideo';
import LoopVideo from './components/LoopVideo';
import FunctionVideo from './components/FunctionVideo';
import ArrayVideo from './components/ArrayVideo';
import BasicExplain from './components/BasicExplain';
import SequenceExplain from './components/SequenceExplain';
import LoopExplain from './components/LoopExplain';
import FunctionExplain from './components/FunctionExplain';
import ArrayExplain from './components/ArrayExplain';
const App = () => {
  return ( 
    <BrowserRouter>
      <div className="App"> 
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/objects" component={Objects} />
        <Route path="/forget" component={ForgetPassword} />
        <Route path="/reset" component={ResetPassword} />
        <Route path="/basic-v" component={BasicVideo} />
        <Route path="/sequence-v" component={SequenceVideo} />
        <Route path="/loop-v" component={LoopVideo} />
        <Route path="/function-v" component={FunctionVideo} />
        <Route path="/array-v" component={ArrayVideo} />
        <Route path="/basic-e" component={BasicExplain} />
        <Route path="/sequence-e" component={SequenceExplain} />
        <Route path="/loop-e" component={LoopExplain} />
        <Route path="/function-e" component={FunctionExplain} />
        <Route path="/array-e" component={ArrayExplain} />
      </div>
    </BrowserRouter>
   );
}
export default App;
