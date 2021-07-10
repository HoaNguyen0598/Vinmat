//lib
import 'antd/dist/antd.css';
import React from 'react'
import { Switch, Route } from "react-router-dom";


//cus
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Test from './Pages/Test';
import DashBoard from './Pages/DashBoard/DashBoard';

function App() {
 
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="content_right">
            <Switch>
                    <Route exact path="/" component={DashBoard} />
                    <Route exact path="/123" component={Test} />
                    {/* <Route component={Error} /> */}
            </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
