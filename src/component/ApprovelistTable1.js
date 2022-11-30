import {React,useState, useEffect} from "react";
import {useTable, useGlobalFilter} from "react-table";
import Search1 from "./Search1.js";
import styles from "./ApprovelistTable1.module.css";

function ApprovelistTable1({ columns, data, changeData }) { 
    const {getTableProps,getTableBodyProps,headerGroups, rows,prepareRow,setGlobalFilter,} = useTable({columns,data}, useGlobalFilter);

    const onCellClick = (e) => {                    
            //console.log(e.target.cellIndex);
            //console.log(e.target.closest("tr").rowIndex); //인덱스가 1부터 시작
            if (e.target.innerText==="승인"){                                               
                changeData(e.target.closest("tr").rowIndex-1,e.target.cellIndex,0);
            }else{
                changeData(e.target.closest("tr").rowIndex-1,e.target.cellIndex,1);
            }        
    };



    //thead : column 이름
    //tr : row 하나
    //td : row 1개에 들어가는 데이터 (column 1개 단위)

    return (
        <>
            <Search1 onSubmit={setGlobalFilter} />
            <table class={styles.table} {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()} >
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
                        <tr {...row.getRowProps()}  >
                        {row.cells.map(
                            (cell) => (
                                cell.value === "승인" || cell.value ==="미승인" ?                             
                                <td {...cell.getCellProps()} 
                                class={ cell.value === "승인" ? styles.approveNode : styles.notApproveNode}
                                onClick={onCellClick}
                                >{cell.render("Cell")}</td> 

                                : <td >{cell.render("Cell")}</td>
                                )
                            )
                        }
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default ApprovelistTable1;