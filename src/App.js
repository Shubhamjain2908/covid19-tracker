import React from 'react';
import { fetchData } from './api';
import styles from './App.module.css';
import { Cards, Chart, CountryPicker } from './components';

class App extends React.Component {
    async componentDidMount() {
        const data = await fetchData();
        console.log(data);
    }

    render() {
        return (
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;