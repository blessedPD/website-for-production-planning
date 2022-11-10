import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faHouseChimney,faKey } from "@fortawesome/free-solid-svg-icons";
import loginStyles from "./Login.module.css";

function Login ({checkLogin}) {
    const [id, changeId] = useState("");
    const onIdChange = (event)=>{
        changeId(event.target.value);
    };

    const [pw, changePw] = useState("");
    const onPwChange = (event)=>{
        changePw(event.target.value);
    };

    const ClickLogin = ()=>{
        console.log(id);
        console.log(pw);

    };
    return(
        <section id={loginStyles.login}>
            <div class={loginStyles.login__upper}>
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