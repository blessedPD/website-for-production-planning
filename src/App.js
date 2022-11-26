import {useEffect, useState} from "react";
import NavBar from "./component/NavBar.js";
import Login from "./component/Login.js";
import Dashboard from "./component/Dashboard.js";
import { render } from '@testing-library/react';


function App() {
  const [isLogin, changeIsLogin] = useState(false); //로그인 여부 나타내는 변수
  const [isLoginSuccess, changeIsLoginSuccess] = useState(true);
  const [userName, changeUserName] = useState(""); //사용자 이름
  const [userTeam, changeUserTeam] = useState(""); //사용자 부서
  const [userRank, changeUserRank] = useState(""); //사용자 직급

  //현재 어느 메뉴인지
  const [isHome, changeIsHome] = useState(false);
  const [isMaterial, changeIsMaterial] = useState(false);
  const [isDoc, changeIsDoc] = useState(false);
  const [isImport, changeIsImport] = useState(false);

  //로그인 여부 나타내는 함수 (Login 에 전달)
  const conveyUserInfo = (id,pw,name,team,rank) =>{
    changeIsLogin(true);
    changeUserName(name);
    changeUserTeam(team);
    changeUserRank(rank);
    changeIsHome(true);    
  };
  
  //로그아웃 전달 받는 함수 (NavBar 컴포넌트에 전달)
  const logOutClicked =()=>{
    changeIsLogin(false);
    changeIsHome(false);
    changeUserName("");
    changeUserTeam("");
    changeUserRank("");
    changeIsLoginSuccess(true);
  };

  return (
    <div 
      style = 
      {{display : "flex",
        flexDirection : "column",
        
      }}>

      <NavBar userNameFromApp={userName} userTeamFromApp={userTeam} 
      userRankFromApp={userRank} logOutClick={logOutClicked} isHome={isHome} /> 
      {isLogin? null : <Login conveyUserInfo={conveyUserInfo} isLoginSuccess={isLoginSuccess}/>}
      {isLogin? <Dashboard />: null} 
      
    </div>
  );
}

export default App;
