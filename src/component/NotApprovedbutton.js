import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faHouseChimney,faKey,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./SelectedList1.module.css";

function Notapprovedbtn(){
    return(
        <div class={styles.notapproved_box}>미승인</div>

    );
    
};



export default Notapprovedbtn;