import {useEffect, useState} from "react";
import NavBar from "./component/NavBar.js";
import Login from "./component/Login.js"


function App() {
  const[isLogin, changeIsLogin] = useState(false); //로그인 여부 나타내는 변수
  const [userName, changeUserName] = useState("홍길동");
  const [userTeam, changeUserTeam] = useState("생산관리 1팀");
  const [userRank, changeUserRank] = useState("사원");

  return (
    <div 
      style = 
      {{display : "flex",
        flexDirection : "column",
        
      }}>

      <NavBar />
      {isLogin? null : <Login />}
      
    </div>
  );
}

export default App;
