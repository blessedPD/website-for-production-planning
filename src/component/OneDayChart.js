import {useEffect, useState} from "react";
import styles from "./OneDayChart.module.css";

function OneDayChart({day,title1,data1,title2,data2}){

    return(
        <div class={styles.MainDiv}>
            <h2>{day}일차</h2>
            <div class={styles.upperDiv} >
                <h3>{title1}</h3>
                <h3>{data1}건</h3>
            </div>
            <div class={styles.emptyDiv}>

            </div>
            <div class={styles.lowerDiv}> 
                <h3>{title2}</h3>
                <h3>{data2}건</h3>
            </div>
        </div>
    );
}

export default OneDayChart;