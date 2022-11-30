import {useEffect, useState, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloudArrowUp,faUpload } from "@fortawesome/free-solid-svg-icons";
import styles from "./ExcelUpload.module.css";
import {read} from 'xlsx';

function ExcelUpload({curUploadMenu}){

    const newUpload = (e) =>{
        console.log(e.target.files[0]);
        //api 전송 (엑셀 종류에 따라 api 다르게)
    };

    // useRef를 이용해 input태그에 접근한다.
    const excelInput = useRef();

    // 버튼클릭시 input태그에 클릭이벤트를 걸어준다. 
    const onCickExcelUpload = () => {
        excelInput.current.click();
    };

    return(
        <section class={styles.section}>
            <div class={styles.upload}>
                <FontAwesomeIcon icon={faCloudArrowUp} size='5x' />
                <button class={styles.upload__button}
                onClick={onCickExcelUpload} >
                {<FontAwesomeIcon icon={faUpload}/>} Excel Upload
                </button>
                <input type='file' style={{display:'none'}} 
                onChange={newUpload} ref={excelInput} />
            </div>
        </section>
    );
}

export default ExcelUpload;