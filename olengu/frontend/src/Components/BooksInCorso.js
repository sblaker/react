import React, {useState, useEffect, useReducer} from 'react';
import SearchItemBox from '../Components/SearchItemBox';
import { Link } from 'react-router-dom';

function BooksInCorso() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch(
            `http://localhost:3500/api/getprenotazioniincorso${localStorage.getItem("token")}`
        );
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    };

    return(
        <div>
            <h1 style={{color: "white", margin: 1 + 'em'}}>Prenotazioni in corso</h1>
            {items.map(item => (
                <Link to={`/BooksInCorso/${item.id_prenotazione}`}>
                    <SearchItemBox item={item} /> 
                </Link>      
            ))}
        </div>
    );
}

export default BooksInCorso;