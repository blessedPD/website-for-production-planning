import {useEffect, useState, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloudArrowUp,faUpload } from "@fortawesome/free-solid-svg-icons";
import styles from "./UploadData.module.css";
import {read} from 'xlsx';
import ExcelUpload from './ExcelUpload.js';
import UploadDataNaBar from './UploadDataNavBar';

function UploadData(){

    const [curUploadMenu, changeUploadMenu] = useState(0);

    return(
        <section class={styles.section}>
            <UploadDataNaBar curUploadMenu={curUploadMenu} 
            changeUploadMenu={changeUploadMenu} />
            <ExcelUpload curUploadMenu={curUploadMenu}/>
        </section>
    );
}

export default UploadData;