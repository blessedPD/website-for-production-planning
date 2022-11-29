import {useEffect, useState} from "react";
import styles from './MDailyChart.module.css';
import MDayChart from "./MDayChart";

function MDailyChart(){

    return(
        <div>
            <div class={styles.one_section}>
                <MDayChart day={1} title1={"시험필요"}
                data1={3} title2={"재고부족"} data2={1}/>
                <MDayChart day={2} title1={"시험필요"}
                data1={3} title2={"재고부족"} data2={0}/>
                <MDayChart day={3} title1={"시험필요"}
                data1={5} title2={"재고부족"} data2={3}/>
                <MDayChart day={4} title1={"시험필요"}
                data1={8} title2={"재고부족"} data2={3}/>
                <MDayChart day={5} title1={"시험필요"}
                data1={8} title2={"재고부족"} data2={3}/>
                <MDayChart day={6} title1={"시험필요"}
                data1={8} title2={"재고부족"} data2={3}/>
                <MDayChart day={7} title1={"시험필요"}
                data1={8} title2={"재고부족"} data2={1}/>
            
            </div>
            <div class={styles.one_section}>
                <MDayChart day={8} title1={"시험필요"}
                data1={3} title2={"재고부족"} data2={1}/>
                <MDayChart day={9} title1={"시험필요"}
                data1={3} title2={"재고부족"} data2={0}/>
                <MDayChart day={10} title1={"시험필요"}
                data1={5} title2={"재고부족"} data2={1}/>
                <MDayChart day={11} title1={"시험필요"}
                data1={8} title2={"재고부족"} data2={1}/>
                <MDayChart day={12} title1={"시험필요"}
                data1={4} title2={"재고부족"} data2={7}/>
                <MDayChart day={13} title1={"시험필요"}
                data1={5} title2={"재고부족"} data2={6}/>
                <MDayChart day={14} title1={"시험필요"}
                data1={6} title2={"재고부족"} data2={1}/>
            </div>
        </div>
        
    );
}

export default MDailyChart;