import {useEffect, useState} from "react";
import DailyChart from "./DailyChart.js";
import SelectedList1 from './SelectedList1.js';

//props로 대쉬보드에 어떤거 띄울지 전달해서 띄워야함

function Dashboard({activeMenu}){

    return(
        <div class="dashboard__main">
            {activeMenu===0? (<div> 
                <DailyChart />
                <hr />
                <SelectedList1 />
            </div>) :null}
            {activeMenu===1? (<div> 
                2번째 차트
            </div>) :null}
            {activeMenu===2? (<div> 
                3번째 차트
            </div>) :null}
            {activeMenu===3? (<div> 
                마지막 부분
            </div>) :null}
        </div>
    );
}


export default Dashboard;