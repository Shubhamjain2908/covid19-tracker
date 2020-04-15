import { FormControl, NativeSelect } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = () => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountriesAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        !fetchedCountries.length ? fetchCountriesAPI() : console.log(fetchedCountries);
    }, [fetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;