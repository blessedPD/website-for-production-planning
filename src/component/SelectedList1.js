import {useEffect, useState, useMemo} from "react";
import styles from "./SelectedList1.module.css";
import Table1 from "./Table1.js";

function SelectedList1({onSubmit}){

    //테이블 Column 리스트
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
        {
            accessor:"day4",
            Header:"4일차",
        },
        {
            accessor:"day5",
            Header:"5일차",
        },
        {
            accessor:"day6",
            Header:"6일차",
        },
        {
            accessor:"day7",
            Header:"7일차",
        },
        {
            accessor:"day8",
            Header:"8일차",
        },
        {
            accessor:"day9",
            Header:"9일차",
        },
        {
            accessor:"day10",
            Header:"10일차",
        },
        {
            accessor:"day11",
            Header:"11일차",
        },
        {
            accessor:"day12",
            Header:"12일차",
        },
        {
            accessor:"day13",
            Header:"13일차",
        },
        {
            accessor:"day14",
            Header:"14일차",
        },
    ],[]);

    //데이터 . App.js에서 Dashboard.js로, Dashboard.js에서 SelectedList.js로, 
    //SelectedList.js에서 Table1.js로 prop전달
    const data = [{
        division:"계획", material_category:"HALB", material_name:"1435",material_description:"자재 샘플 1", supervisor:"C01",
        day1: "생산불가", day2: "생산가능", day3:"생산불가", day4:"생산불가", day5:"생산불가", day6:"생산가능", day7:"생산가능", day8:"생산불가", day9:"생산불가", day10:"생산불가"
        , day11:"생산불가", day12:"생산불가", day13:"생산불가", day14:"생산불가"},
        {division:"계획", material_category:"HALB", material_name:"5357",material_description:"자재 샘플 2", supervisor:"C01",
        day1: "생산가능", day2: "생산불가", day3:"생산불가", day4:"생산불가", day5:"생산불가", day6:"생산가능", day7:"생산가능", day8:"생산불가", day9:"생산불가", day10:"생산불가"
        , day11:"생산불가", day12:"생산불가", day13:"생산불가", day14:"생산불가"},
        {division:"계획", material_category:"HALB", material_name:"0742",material_description:"자재 샘플 3", supervisor:"C02",
        day1: "생산가능", day2: "생산가능", day3:"생산가능", day4:"생산불가", day5:"생산가능", day6:"생산가능", day7:"생산불가", day8:"생산불가", day9:"생산불가", day10:"생산불가"
        , day11:"생산불가", day12:"생산불가", day13:"생산불가", day14:"생산불가"},
        {division:"계획", material_category:"HALB", material_name:"3643",material_description:"자재 샘플 4", supervisor:"C02",
        day1: "생산가능", day2: "생산불가", day3:"생산불가", day4:"생산불가", day5:"생산가능", day6:"생산불가", day7:"생산가능", day8:"생산불가", day9:"생산불가", day10:"생산불가"
        , day11:"생산불가", day12:"생산불가", day13:"생산불가", day14:"생산불가"},
        {division:"계획", material_category:"HALB", material_name:"0119",material_description:"자재 샘플 5", supervisor:"C01",
        day1: "생산가능", day2: "생산가능", day3:"생산가능", day4:"생산가능", day5:"생산가능", day6:"생산가능", day7:"생산가능", day8:"생산가능", day9:"생산가능", day10:"생산가능"
        , day11:"생산불가", day12:"생산불가", day13:"생산불가", day14:"생산불가"},
    ];

    //검색 필터링 이벤트
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