import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faHouseChimney,faKey } from "@fortawesome/free-solid-svg-icons";
import loginStyles from "./Login.module.css";

function Login () {

    return(
        <section id={loginStyles.login}>
            <div class={loginStyles.login__upper}>
                <div class={loginStyles.login__upper__inputBox}>
                    <label htmlFor ="userIcon" class={loginStyles.login__inputBox__label}>
                        <FontAwesomeIcon icon={faUser} />
                    </label>
                    <input placeholder="Username" id="userIcon" class={loginStyles.login__inputBox__input}/>
                </div>
                <div class={loginStyles.login__upper__inputBox}>
                    <label htmlFor ="pwIcon" class={loginStyles.login__inputBox__label}>
                        <FontAwesomeIcon icon={faKey} />
                    </label>
                    <input placeholder="****" id="pwIcon" class={loginStyles.login__inputBox__input} />
                </div>
            </div>

            <div class={loginStyles.login__buttons}>
                <div class={loginStyles.login__buttons__left}>
                    <button>회원 가입</button>
                    <button>ID/PW 찾기</button>
                </div>
                <div class={loginStyles.login__buttons__right}>
                    <button>Login</button>
                </div>

            </div>
        </section>
    );
}

export default Login;