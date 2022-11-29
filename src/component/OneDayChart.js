import {useEffect, useState} from "react";
import styles from "./OneDayChart.module.css";

function OneDayChart({day,title1,data1,title2,data2}){

    return(
        <div class={styles.MainDiv}>
            <h2 style={{margin:12}}>{day}일차</h2>
            <div class={styles.upperDiv} >
                <h3 class={styles.divText} >{title1}</h3>
                <h3 class={styles.divText}>{data1}건</h3>
            </div>
            <div class={styles.emptyDiv}>

            </div>
            <div class={styles.lowerDiv}> 
                <h3 class={styles.divText}>{title2}</h3>
                <h3 class={styles.divText}>{data2}건</h3>
            </div>
        </div>
    );
}

export default OneDayChart;