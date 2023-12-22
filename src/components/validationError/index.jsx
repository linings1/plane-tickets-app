import React from 'react';
import styles from "./index.module.css"

const ValidationError = ({ error }) => {

    return (
        <div className={styles.errorMessage}> {error} </div>
    );
};

export default ValidationError;
