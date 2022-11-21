import {useEffect, useState, useMemo} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faHouseChimney,faKey,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./SelectedList1.module.css";
import Table1 from "./Table1.js";
import Search1 from "./Search1.js";

function SelectedList1({onSubmit}){

    const columns = useMemo(()=>[
        {
            accessor: "division",
            Header: "구분",
        },
        {
            accessor:"material_category",
            Header:"자재 유형",
        },
        {
            accessor:"material_name",
            Header:"자재",
        },
        {
            accessor:"material_description",
            Header:"자재 내역",
        },
        {
            accessor:"supervisor",
            Header:"생산 감독자",
        },
        {
            accessor:"day1",
            Header:"1일차",
        },
        {
            accessor:"day2",
            Header:"2일차",
        },
        {
            accessor:"day3",
            Header:"3일차",
        },
    ],[]);

    const data = [{
        division:"계획", material_category:"HALB", material_name:"8000004",material_description:"에어탈정(아세클로페낙)반제품", supervisor:"C01",
        day1: "생산불가", day2: "생산가능", day3:"생산불가"},
        {
            division:"계획", material_category:"HALB", material_name:"8000017",material_description:"가스모틴정5밀리그램(모사프리드시트르산염수화)", supervisor:"C01",
            day1: "생산가능", day2: "생산불가", day3:"생산불가"
        }
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(event.target.elements.filter.value);
    };

    return(
        <div class="selected-list">
            <h2>선택항목 리스트</h2>

            <div class="table">
                <Table1 columns={columns} data={data} />
            </div>
        </div>
    );
}

export default SelectedList1;