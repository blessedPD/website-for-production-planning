import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faHouseChimney,faKey,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Search1.module.css";

function Search1({ onSubmit }) {
    const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div class={styles.search__box}>
                <label class={styles.search__box__name} 
                htmlFor='search-input'>리스트 검색</label>    
                <input name="filter" class={styles.search__box__input} id="search-input" 
                placeholder='원하는 검색 항목을 입력하세요'/>
                <button class={styles.search__box__inputIcon}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            
        </form>
    );
}

export default Search1;