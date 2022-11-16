import {useEffect, useState} from "react";
import DailyChart from "./DailyChart.js";

function Dashboard(){

    return(
        <div class="dashboard__main">
            <DailyChart />
        </div>
    );
}


export default Dashboard;