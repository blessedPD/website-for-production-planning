import {useEffect, useState, useMemo} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faHouseChimney,faKey,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./SelectedList2.module.css";
import Table1 from "./Table1.js";


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
        division:"계획", material_name:"7544", material_description:"자재 샘플 13", component:"4390",material_description_1:"자재 내역 샘플 1",
        quantity_comp:"7014300",unit_comp:"EA",
        day1: "시험완료", day2: "시험필요", day3:"시험필요", day4: "시험필요", day5: "시험필요",day6: "시험필요", day7: "시험필요", day8: "시험필요", day9: "시험필요", day10: "시험필요", day11: "시험필요", day12: "시험필요", day13: "시험필요", day14: "시험필요",
        },
        {division:"미계획", material_name:"1255", material_description:"자재 샘플 1324", component:"1511",material_description_1:"자재 내역 샘플 2",
        quantity_comp:"57432777",unit_comp:"EA",
        day1: "시험완료", day2: "시험완료", day3:"시험완료", day4: "시험완료", day5: "시험필요", day6: "시험필요", day7: "시험필요", day8: "시험필요", day9: "시험필요", day10: "시험필요", day11: "시험필요", day12: "시험필요", day13: "시험필요", day14: "시험필요",
        },
        {division:"계획", material_name:"4654", material_description:"자재 샘플 135364", component:"4431",material_description_1:"자재 내역 샘플 5",
        quantity_comp:"1249847",unit_comp:"EA",
        day1: "시험필요", day2: "시험필요", day3:"시험필요", day4: "시험필요", day5: "시험필요", day6: "시험필요", day7: "시험필요", day8: "시험필요", day9: "시험필요", day10: "시험필요", day11: "시험필요", day12: "시험필요", day13: "시험필요", day14: "시험필요",
        },
        {division:"미계획", material_name:"8331", material_description:"자재 샘플 4392", component:"1513",material_description_1:"자재 내역 샘플 94",
        quantity_comp:"6000712",unit_comp:"EA",
        day1: "시험완료", day2: "시험필요", day3:"시험필요", day4: "시험필요", day5: "시험필요", day6: "시험필요", day7: "시험필요", day8: "시험필요", day9: "시험필요", day10: "시험필요", day11: "시험필요", day12: "시험필요", day13: "시험필요", day14: "시험필요",
        },
        {division:"계획", material_name:"0119", material_description:"자재 샘플 52313", component:"4096",material_description_1:"자재 내역 샘플 108",
        quantity_comp:"4311298",unit_comp:"EA",
        day1: "시험완료", day2: "시험완료", day3:"시험완료", day4: "시험완료", day5: "시험완료", day6: "시험완료", day7: "시험필요", day8: "시험필요", day9: "시험필요", day10: "시험필요", day11: "시험필요", day12: "시험필요", day13: "시험필요", day14: "시험필요",
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