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
            <div class={styles.one_section}>
            <OneDayChart day={8} title1={"생산가능"}
                data1={29} title2={"생산불가"} data2={3}/>
                <OneDayChart day={9} title1={"생산가능"}
                data1={44} title2={"생산불가"} data2={5}/>
                <OneDayChart day={10} title1={"생산가능"}
                data1={27} title2={"생산불가"} data2={1}/>
                <OneDayChart day={11} title1={"생산가능"}
                data1={31} title2={"생산불가"} data2={11}/>
                <OneDayChart day={12} title1={"생산가능"}
                data1={43} title2={"생산불가"} data2={7}/>
                <OneDayChart day={13} title1={"생산가능"}
                data1={55} title2={"생산불가"} data2={6}/>
                <OneDayChart day={14} title1={"생산가능"}
                data1={61} title2={"생산불가"} data2={10}/>
            </div>
        </div>
        
    );
}

export default DailyChart;