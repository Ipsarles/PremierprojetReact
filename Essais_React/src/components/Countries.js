import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Countries = () => {
    const [Data, setData] = useState([]);
    // Le useEffect se joue lorsque le composé est monté ( appelé)
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data))
    }, [])
    return (
        < div className="countries" >
            <ul>
                {Data.map((country, index) =>
                    (<li key={index}>{country.translations.fra.common}</li>))}
            </ul>
        </div >
    );
};

export default Countries; 