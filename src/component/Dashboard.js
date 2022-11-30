import {useEffect, useState} from "react";
import DailyChart from "./DailyChart.js";
import SelectedList1 from './SelectedList1.js';
import UploadData from './UploadData.js';
import MDailyChart from './MDailyChart.js';
import SelectedList2 from './SelectedList2';
import Approvelist from './Approvelist.js'

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
                <MDailyChart />
                <hr />
                <SelectedList2 />
            </div>) :null}
            {activeMenu===2? (<div> 
                <Approvelist />
            </div>) :null}
            {activeMenu===3? (<div> 
                <UploadData />
            </div>) :null}
        </div>
    );
}


export default Dashboard;