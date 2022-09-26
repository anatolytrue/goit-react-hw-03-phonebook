import React from "react";
import PropTypes from 'prop-types'
import css from './Filter.module.css'


const Filter = ({ value, onChange }) => (
    <label className={css.phonebookFilterLabel}>
        Filter by name
        <input
            className={css.filterInput}
            type="text"
            value={value}
            onChange={onChange}
        />
        
    </label>
)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Filter;