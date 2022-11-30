import {useEffect, useState, useMemo} from "react";
import ApprovelistTable1 from './ApprovelistTable1.js';

function Approvelist({onSubmit}){
    
    const columns = useMemo(()=>[
        {
            accessor: "division",
            Header: "구분",
        },
        {
            accessor: "material_type",
            Header: "자재 유형",
        },
        {
            accessor: "material_code",
            Header: "자재",
        },
        {
            accessor: "material_description",
            Header: "자재 내역",
        },
        {
            accessor: "produce_history",
            Header: "제품 지시 기록서",
        },
        {
            accessor: "produce_history_date",
            Header: "날짜",
        },
        {
            accessor: "produce_standard",
            Header: "제품표준서",
        },
        {
            accessor: "produce_standard_date",
            Header: "날짜",
        },
        {
            accessor: "planning",
            Header: "생산 계획서",
        },
        {
            accessor: "planning_date",
            Header: "날짜",
        },
    ],[]);

    const [data,updateData] = useState([{
        division:"계획", material_type:"HALB", material_code:"3584", material_description:"자재 샘플 1", 
        produce_history:"승인", produce_history_date:"2022.10.22", produce_standard:"승인", produce_standard_date:"2022.10.30", planning:"승인", planning_date:"2022.09.27", 
        },
        {division:"계획", material_type:"HALB", material_code:"7700", material_description:"자재 샘플 2", 
        produce_history:"승인", produce_history_date:"2022.11.29", produce_standard:"미승인", produce_standard_date:"2022.11.30", planning:"미승인", planning_date:"2022.11.30", 
        },
        {division:"계획", material_type:"HALB", material_code:"5553", material_description:"자재 샘플 3", 
        produce_history:"미승인", produce_history_date:"2022.11.29", produce_standard:"승인", produce_standard_date:"2022.11.30", planning:"미승인", planning_date:"2022.11.30", 
        }
        ,
        {division:"계획", material_type:"HALB", material_code:"4315", material_description:"자재 샘플 4", 
        produce_history:"승인", produce_history_date:"2022.11.29", produce_standard:"미승인", produce_standard_date:"2022.11.30", planning:"미승인", planning_date:"2022.11.30", 
        }
        ,
        {division:"계획", material_type:"HALB", material_code:"0119", material_description:"자재 샘플 5", 
        produce_history:"미승인", produce_history_date:"2022.11.29", produce_standard:"미승인", produce_standard_date:"2022.11.30", planning:"미승인", planning_date:"2022.11.30", 
        }
    ]); //데이터


    const changeData = (row, column, type) =>{
        //type이 0이면 승인 데이터를 미승인으로, 1이면 미승인 데이터를 승인으로
        if (type===0){
            if (column===4){
                let tmpData = [];

                for(let i=0; i< data.length;i++){
                    if (i===row){
                        let tmpJson = data[i];
                        tmpJson.produce_history="미승인";
                        tmpData.push(tmpJson);
                    }else{
                        tmpData.push(data[i]);
                    }
                }
                updateData(tmpData);
            }else if (column===6){
                let tmpData = [];
                
                for(let i=0; i< data.length;i++){
                    if (i===row){
                        let tmpJson = data[i];
                        tmpJson.produce_standard="미승인";
                        tmpData.push(tmpJson);
                    }else{
                        tmpData.push(data[i]);
                    }
                }
                updateData(tmpData);
            }else{
                let tmpData = [];
                
                for(let i=0; i< data.length;i++){
                    if (i===row){
                        let tmpJson = data[i];
                        tmpJson.planning="미승인";
                        tmpData.push(tmpJson);
                    }else{
                        tmpData.push(data[i]);
                    }
                }
                updateData(tmpData);
            }
        }else{
            if (column===4){
                let tmpData = [];

                for(let i=0; i< data.length;i++){
                    if (i===row){
                        let tmpJson = data[i];
                        tmpJson.produce_history="승인";
                        tmpData.push(tmpJson);
                    }else{
                        tmpData.push(data[i]);
                    }
                }
                updateData(tmpData);
            }else if (column===6){
                let tmpData = [];
                
                for(let i=0; i< data.length;i++){
                    if (i===row){
                        let tmpJson = data[i];
                        tmpJson.produce_standard="승인";
                        tmpData.push(tmpJson);
                    }else{
                        tmpData.push(data[i]);
                    }
                }
                updateData(tmpData);
            }else{
                let tmpData = [];
                
                for(let i=0; i< data.length;i++){
                    if (i===row){
                        let tmpJson = data[i];
                        tmpJson.planning="승인";
                        tmpData.push(tmpJson);
                    }else{
                        tmpData.push(data[i]);
                    }
                }
                updateData(tmpData);
            }
        }

        console.log(data);
        

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(event.target.elements.filter.value);
    };

    return(
        <div class="selected-list">

            <div class="tabel1">
                <ApprovelistTable1 columns={columns} data={data} changeData = {changeData} />
            </div>
        </div>
    );
}



export default Approvelist;