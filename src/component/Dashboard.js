import {useEffect, useState} from "react";
import DailyChart from "./DailyChart.js";
import SelectedList1 from './SelectedList1.js';

//props로 대쉬보드에 어떤거 띄울지 전달해서 띄워야함

function Dashboard(){

    return(
        <div class="dashboard__main">
            <DailyChart />
            <hr />
            <SelectedList1 />
        </div>
    );
}


export default Dashboard;