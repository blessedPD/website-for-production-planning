import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faHouseChimney,faKey,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchName.module.css";

function SearchName({ onSubmit }) {
    const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div class={styles.search__box}>
                <label class={styles.search__box__name} 
                htmlFor='search-input'>자재명</label>    
                <input name="filter" class={styles.search__box__input} id="search-input" 
                placeholder='원하는 검색 항목을 입력하세요'/>
                <button class={styles.search__box__inputIcon}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            
        </form>
    );
}

export default SearchName;