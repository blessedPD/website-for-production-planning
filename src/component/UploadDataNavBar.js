import {useEffect, useState, useRef} from "react";
import styles from "./UploadDataNavBar.module.css";
import ExcelUpload from './ExcelUpload.js';

function UploadDataNavBar({curUploadMenu, changeUploadMenu}){

    const clickMenu = (event) =>{
        let clickedMenu = event.target.innerText;
        if (clickedMenu==="생산 계획"){
            changeUploadMenu(0);
        }else if (clickedMenu==="마스터"){
            changeUploadMenu(1);
        }else if (clickedMenu==="BOM"){
            changeUploadMenu(2);
        }else if(clickedMenu=="재고"){
            changeUploadMenu(3);
        }else if(clickedMenu=="예약 내역"){
            changeUploadMenu(4);
        }else if (clickedMenu=="구매 내역"){
            changeUploadMenu(5);
        }else{
            changeUploadMenu(6);
        }
    };

    return(
        <div class={styles.navBar}>
            <div>
                <h3 class={curUploadMenu===0? styles.activeMenu: null} onClick= {clickMenu}
                style={{cursor:'pointer'}}>생산 계획</h3>
            </div>
            <div class={styles.navbar__under__vl}></div>
            <div>
                <h3 class={curUploadMenu===1? styles.activeMenu: null} onClick= {clickMenu} 
                style={{cursor:'pointer'}}>마스터</h3>
            </div>
            <div class={styles.navbar__under__vl}></div>
            <div>
                <h3 class={curUploadMenu===2? styles.activeMenu: null} onClick= {clickMenu} 
                style={{cursor:'pointer'}}>BOM</h3>
            </div>
            <div class={styles.navbar__under__vl}></div>
            <div>
                <h3 class={curUploadMenu===3? styles.activeMenu: null} onClick= {clickMenu}
                style={{cursor:'pointer'}}>재고</h3>
            </div>
            <div class={styles.navbar__under__vl}></div>
            <div>
                <h3 class={curUploadMenu===4? styles.activeMenu: null} onClick= {clickMenu}
                style={{cursor:'pointer'}}>예약 내역</h3>
            </div>
            <div class={styles.navbar__under__vl}></div>
            <div>
                <h3 class={curUploadMenu===5? styles.activeMenu: null} onClick= {clickMenu}
                style={{cursor:'pointer'}}>구매 내역</h3>
            </div>
            <div class={styles.navbar__under__vl}></div>
            <div>
                <h3 class={curUploadMenu===6? styles.activeMenu: null} onClick= {clickMenu}
                style={{cursor:'pointer'}}>시험 내역</h3>
            </div>
        </div>
    );
}

export default UploadDataNavBar;