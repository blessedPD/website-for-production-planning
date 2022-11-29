import React from "react";
import {useTable, useGlobalFilter} from "react-table";
import Search1 from "./Search1.js";
import styles from "./Table1.module.css";

function Table1({ columns, data }) {
    const {getTableProps,getTableBodyProps,headerGroups, rows,prepareRow,setGlobalFilter,} = useTable({columns,data}, useGlobalFilter);


    //thead : column 이름
    //tr : row 하나
    //td : row 1개에 들어가는 데이터 (column 1개 단위)

    return (
        <>
            <Search1 onSubmit={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                            <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                        ))}
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Table1;