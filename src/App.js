import {useEffect, useState} from "react";
import NavBar from "./component/NavBar.js";


function App() {
  const[isLogin, changeIsLogin] = useState(false); //로그인 여부 나타내는 변수

  return (
    <div>
      <NavBar />
      
    </div>
  );
}

export default App;
