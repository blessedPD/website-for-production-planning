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
  const [curMenu, changeCurMenu] = useState(-1); //0이 홈, 1이 자재 준비 현황, 2가 문서 승인 현황, 3이 Raw Data 입력


  //메뉴 바꿔주는 함수
  const changeMenu = (idx) => {
    changeCurMenu(idx);
  };

  //로그인 여부 나타내는 함수 (Login 에 전달)
  const conveyUserInfo = (id,pw,name,team,rank) =>{
    changeIsLogin(true);
    changeUserName(name);
    changeUserTeam(team);
    changeUserRank(rank);   
    changeCurMenu(0);
  };
  
  //로그아웃 전달 받는 함수 (NavBar 컴포넌트에 전달)
  const logOutClicked =()=>{
    changeIsLogin(false);
    changeUserName("");
    changeUserTeam("");
    changeUserRank("");
    changeIsLoginSuccess(true);
    changeCurMenu(-1);
  };

  return (
    <div 
      style = 
      {{display : "flex",
        flexDirection : "column",
        
      }}>

      <NavBar userNameFromApp={userName} userTeamFromApp={userTeam} 
      userRankFromApp={userRank} logOutClick={logOutClicked} curMenu= {curMenu} changeMenu = {changeMenu} /> 
      {isLogin? null : <Login conveyUserInfo={conveyUserInfo} isLoginSuccess={isLoginSuccess}/>}
      {isLogin? <Dashboard activeMenu={curMenu} />: null} 
      
    </div>
  );
}

export default App;
