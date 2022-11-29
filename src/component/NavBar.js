import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import styles from "./NavBar.module.css";

function NavBar ({userNameFromApp,userTeamFromApp, userRankFromApp,logOutClick, curMenu, changeMenu}) {
    
    const clickMenu = (event) =>{
        let clickedMenu = event.target.innerText;
        if (clickedMenu==="생산 준비 현황 Dashboard"){
            changeMenu(0);
        }else if (clickedMenu==="자재 준비 현황"){
            changeMenu(1);
        }else if (clickedMenu==="문서 승인 현황"){
            changeMenu(2);
        }else{
            changeMenu(3);
        }
    };

    return (
        <section id={styles.navbar}>
            <div class={styles.navbar__upper}>
                <div class={styles.navbar__title}>
                    <FontAwesomeIcon icon={faHouseChimney} size="2x" 
                    id={styles.navbar__title__logo} 
                    />
                    <h1 class={curMenu===0? styles.activeMenu: null}
                    style={{cursor:'pointer'}} 
                    onClick={clickMenu}
                    >생산 준비 현황 Dashboard</h1>
                </div>
                <div class={styles.navbar__userInfo}>
                    <div class={styles.navbar__userInfo__left}>
                        <FontAwesomeIcon icon={faUser} id={styles.navbar__userInfo__logo}/>
                        <button class={styles.navbar__userInfo__logout}
                        onClick={logOutClick}
                        >
                            Logout
                        </button> 
                    </div>
                    
                    <div class={styles.navbar__userInfo__profile}>
                        <h3 class={styles.navbar__userInfo__name}>{userNameFromApp}</h3>
                        <span class="navbar__userInfo__about">{userTeamFromApp} / {userRankFromApp}</span>
                    </div>
                    
                </div>
            </div>
            <hr class={styles.hr} />
            <div class={styles.navbar__under}>
                <div class={styles.navbar__under__menu}>
                    <h2 class={curMenu===1? styles.activeMenu: null}
                    style={{cursor:'pointer'}} 
                    onClick={clickMenu} >자재 준비 현황</h2>
                </div>
                <div class={styles.navbar__under__vl}>

                </div>
                <div class={styles.navbar__under__menu}>
                    <h2 class={curMenu===2? styles.activeMenu: null}
                    style={{cursor:'pointer'}} 
                    onClick={clickMenu} >문서 승인 현황</h2>
                </div>
                <div class={styles.navbar__under__vl}>

                </div>
                <div class={styles.navbar__under__menu}>
                    <h2 class={curMenu===3? styles.activeMenu: null}
                    style={{cursor:'pointer'}} 
                    onClick={clickMenu} >Raw Data 입력</h2>
                </div>
            </div>
            
        </section>
    );
};

export default NavBar;