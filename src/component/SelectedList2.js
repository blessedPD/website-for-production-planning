import {useEffect, useState, useMemo} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faHouseChimney,faKey,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./SelectedList2.module.css";
import Table1 from "./Table1.js";
import SearchCode from "./SearchCode.js";
import SearchName from "./SearchName.js";

function SelectedList1({onSubmit}){

    const columns = useMemo(()=>[
        {
            accessor: "division",
            Header: "구분",
        },
        {
            accessor: "material_name",
            Header: "자재",
        },
        {
            accessor: "material_description",
            Header: "자재 내역",
        },
        {
            accessor: "component",
            Header :"구성요소",

        },
        {
            accessor: "material_description_1",
            Header: "자재내역.1",
        },
        {
            accessor: "quantity_comp",
            Header: "구성부품수량",
        },
        {
            accessor: "unit_comp",
            Header: "구성품목단위",
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

    const data = [{
        division:"계획", material_name:"8000001", material_description:"에어탈정(아세클로페낙)반제품", component:"1000092",material_description_1:"대한민국 화이팅!",
        quantity_comp:"7000000",unit_comp:"EA",
        day1: "시험필요", day2: "시험필요", day3:"시험필요", day4: "시험필요", day5: "시험필요",day6: "시험필요", day7: "시험필요", day8: "시험필요", day9: "시험필요", day10: "시험필요", day11: "시험필요", day12: "시험필요", day13: "시험필요", day14: "시험필요",
        },
        {
        division:"미계획", material_name:"8000009", material_description:"엘도스캡슐(에르도스테인)반제품", component:"1000096",material_description_1:"엘도스 3 capsule(서흥)",
        quantity_comp:"7777777",unit_comp:"EA",
        day1: "시험필요", day2: "시험필요", day3:"시험필요", day4: "시험필요", day5: "시험필요", day6: "시험필요", day7: "시험필요", day8: "시험필요", day9: "시험필요", day10: "시험필요", day11: "시험필요", day12: "시험필요", day13: "시험필요", day14: "시험필요",
        },
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