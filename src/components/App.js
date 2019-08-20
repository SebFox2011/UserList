import React,{Component} from 'react';
import logo from '../logo.svg';
import UserList from "../containers/user_list";
import UserDetail from "../containers/user_detail"
import '../App.css';

function App() {
  return (
      <div>
        <UserList/>
        <UserDetail/>
      </div>
  );
}

export default App;
