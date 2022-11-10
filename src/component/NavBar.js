import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import styles from "./NavBar.module.css";

function NavBar () {
    const [userName, changeUserName] = useState("홍길동");
    const [userTeam, changeUserTeam] = useState("생산관리 1팀");
    const [userRank, changeUserRank] = useState("사원");

    return (
        <section id={styles.navbar}>
            <div class={styles.navbar__upper}>
                <div class={styles.navbar__title}>
                    <FontAwesomeIcon icon={faHouseChimney} id={styles.navbar__title__logo} />
                    <h1>생산 준비 현황</h1>
                </div>
                <div class={styles.navbar__userInfo}>
                    
                    <FontAwesomeIcon icon={faUser} id={styles.navbar__userInfo__logo}/>
                    <div class={styles.navbar__userInfo__profile}>
                        <h3 class={styles.navbar__userInfo__name}>{userName}</h3>
                        <span class="navbar__userInfo__about">{userTeam} / {userRank}</span>
                    </div>
                    <button class={styles.navbar__userInfo__logout}>Log Out</button> 
                </div>
            </div>
            <hr />
            <div class={styles.navbar__under}>
                <div class="navbar__under__menu">
                    <h2>자재 준비 현황</h2>
                </div>
                <div class="navbar__under__menu">
                    <h2>문서 승인 현황</h2>
                </div>
                <div class="navbar__under__menu">
                    <h2>Raw Data</h2>
                </div>
            </div>
            
        </section>
    );
};

export default NavBar;