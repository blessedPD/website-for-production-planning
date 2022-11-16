import {useEffect, useState} from "react";
import OneDayChart from './OneDayChart';
import styles from './DailyChart.module.css';

function DailyChart(){

    return(
        <div>
            <div class={styles.one_section}>
                <OneDayChart day={1} title1={"생산가능"}
                data1={47} title2={"생산불가"} data2={1}/>
                <OneDayChart day={2} title1={"생산가능"}
                data1={35} title2={"생산불가"} data2={3}/>
                <OneDayChart day={3} title1={"생산가능"}
                data1={42} title2={"생산불가"} data2={8}/>
                <OneDayChart day={4} title1={"생산가능"}
                data1={37} title2={"생산불가"} data2={13}/>
                <OneDayChart day={5} title1={"생산가능"}
                data1={41} title2={"생산불가"} data2={1}/>
                <OneDayChart day={6} title1={"생산가능"}
                data1={51} title2={"생산불가"} data2={14}/>
                <OneDayChart day={7} title1={"생산가능"}
                data1={39} title2={"생산불가"} data2={10}/>
            
            </div>

            <div class="one-section">

            </div>
        </div>
        
    );
}

export default DailyChart;