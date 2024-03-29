//lib
import 'antd/dist/antd.css';
import React from 'react'
import { Switch, Route } from "react-router-dom";


//cus
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DashBoard from './Pages/DashBoard/DashBoard';
import History from './Pages/History/History';
import Admin from './Pages/Admin/Admin';
import ActionLogs from './Pages/ActionLogs/ActionLogs';

function App() {
 
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="content_right">
            <Switch>
                    <Route exact path="/" component={DashBoard} />
                    <Route exact path="/history" component={History} />
                    <Route exact path="/account" component={Admin} />
                    <Route exact path="/action" component={ActionLogs} />
                    {/* <Route component={Error} /> */}
            </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
