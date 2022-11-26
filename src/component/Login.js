import { useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import loginStyles from "./Login.module.css";
import axios from "axios";

function Login ({conveyUserInfo, isLoginSuccess}) {
    const [id, changeId] = useState("");
    const onIdChange = (event)=>{
        changeId(event.target.value);
    };

    const [pw, changePw] = useState("");
    const onPwChange = (event)=>{
        changePw(event.target.value);
    };

    const [isLogined , changeIsLogined] = useState(isLoginSuccess);

    const ClickLogin = ()=>{
        const res =axios.get(`http://127.0.0.1:8000/api/user/${id}/`).then(response =>{
            if (response.data.user_id === id && response.data.password === pw){
                console.log('로그인 성공');
                conveyUserInfo(response.data.user_id, response.data.password, response.data.name,response.data.team, response.data.rank);
            }else{
                console.log('로그인 실패');
                changeIsLogined(false);
            }
        });
    };

    return(
        <section id={loginStyles.login}>
            <div class={loginStyles.login__upper}>
                {isLogined? null 
                :<span style={{color: "red"}}>
                    * 로그인 실패!! ID와 Password를 확인해주세요 *
                </span>
                }
                <div class={loginStyles.login__upper__inputBox}>
                    <label htmlFor ="userIcon" class={loginStyles.login__inputBox__label}>
                        <FontAwesomeIcon icon={faUser} />
                    </label>
                    <input placeholder="Username" id="userIcon" 
                    class={loginStyles.login__inputBox__input}
                    value={id}
                    type = "text"
                    onChange={onIdChange}
                    />
                </div>
                <div class={loginStyles.login__upper__inputBox}>
                    <label htmlFor ="pwIcon" class={loginStyles.login__inputBox__label}>
                        <FontAwesomeIcon icon={faKey} />
                    </label>
                    <input placeholder="****" id="pwIcon" 
                    class={loginStyles.login__inputBox__input} 
                    value={pw} 
                    type = "text"
                    onChange={onPwChange}
                    />
                </div>
            </div>

            <div class={loginStyles.login__buttons}>
                <div class={loginStyles.login__buttons__left}>
                    <button>회원 가입</button>
                    <button>ID/PW 찾기</button>
                </div>
                <div class={loginStyles.login__buttons__right}>
                    <button onClick={ClickLogin}
                    >
                        Login
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Login;