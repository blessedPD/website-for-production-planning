import {useEffect, useState} from "react";
import NavBar from "./component/NavBar.js";
import Login from "./component/Login.js"


function App() {
  const [isLogin, changeIsLogin] = useState(false); //로그인 여부 나타내는 변수
  const checkLogin = ()=>{

  };
  const [userName, changeUserName] = useState("");
  const [userTeam, changeUserTeam] = useState("");
  const [userRank, changeUserRank] = useState("");

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
