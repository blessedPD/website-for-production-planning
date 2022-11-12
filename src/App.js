import {useEffect, useState} from "react";
import NavBar from "./component/NavBar.js";
import Login from "./component/Login.js"
import { render } from '@testing-library/react';


function App() {
  const [isLogin, changeIsLogin] = useState(false); //로그인 여부 나타내는 변수
  const [isLoginSuccess, changeIsLoginSuccess] = useState(true);
  const [userName, changeUserName] = useState("");
  const [userTeam, changeUserTeam] = useState("");
  const [userRank, changeUserRank] = useState("");

  //로그인 여부 나타내는 함수 (Login 에 전달)
  const checkLogin = (id,pw) =>{

    //임시로 sejin, 1234로 해놓음. 나중에는 백엔드랑 소통해야함
    if (id==="sejin" && pw==="1234"){
      changeIsLogin(true);
      console.log(`로그인 성공`);

      ////// 삭제 예정
      changeUserName("김세진");     
      changeUserTeam("생산관리 1팀");
      changeUserRank("사원");
      
      //////
    }else{
      console.log("로그인 실패");
      changeIsLoginSuccess(false);
    }
    
    
  };
  
  //로그아웃 전달 받는 함수 (NavBar 컴포넌트에 전달)
  const logOutClicked =()=>{
    changeIsLogin(false);
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
      userRankFromApp={userRank} logOutClick={logOutClicked} /> 
      {isLogin? null : <Login checkLogin={checkLogin} isLoginSuccess={isLoginSuccess}/>}
      {isLogin? "Main Contetns 두두등장": null}
    </div>
  );
}

export default App;
