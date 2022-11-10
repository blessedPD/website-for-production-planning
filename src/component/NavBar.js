import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import styles from "./NavBar.module.css";

function NavBar () {
    const [userName, changeUserName] = useState("");
    const [userTeam, changeUserTeam] = useState("");
    const [userRank, changeUserRank] = useState("");

    return (
        <section id={styles.navbar}>
            <div class={styles.navbar__upper}>
                <div class={styles.navbar__title}>
                    <FontAwesomeIcon icon={faHouseChimney} id={styles.navbar__title__logo} />
                    <h1>생산 준비 현황 Dashboard</h1>
                </div>
                <div class={styles.navbar__userInfo}>
                    <div class={styles.navbar__userInfo__left}>
                        <FontAwesomeIcon icon={faUser} id={styles.navbar__userInfo__logo}/>
                        <button class={styles.navbar__userInfo__logout}>Logout</button> 
                    </div>
                    
                    <div class={styles.navbar__userInfo__profile}>
                        <h3 class={styles.navbar__userInfo__name}>{userName}</h3>
                        <span class="navbar__userInfo__about">{userTeam} / {userRank}</span>
                    </div>
                    
                </div>
            </div>
            <hr class={styles.hr} />
            <div class={styles.navbar__under}>
                <div class="navbar__under__menu">
                    <h2>자재 준비 현황</h2>
                </div>
                <div class={styles.navbar__under__vl}>

                </div>
                <div class="navbar__under__menu">
                    <h2>문서 승인 현황</h2>
                </div>
                <div class={styles.navbar__under__vl}>

                </div>
                <div class="navbar__under__menu">
                    <h2>Raw Data 입력</h2>
                </div>
            </div>
            
        </section>
    );
};

export default NavBar;