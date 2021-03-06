import React, {useState, useEffect} from 'react';
import SearchItemBox from '../Components/SearchItemBox';
import SearchItemBoxGuest from '../Components/SearchItemBoxGuest';
import { Link } from 'react-router-dom';
import axios from 'axios';  

function ShowBooks() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {

        const id = localStorage.getItem("user")
        const query = 'http://localhost:3500/api/getprenotazioniguest/'
        await axios.get(query + id, {"Access-Control-Allow-Origin":"http://localhost:3500"})
        .then(function (response) {
            console.log(response.data)
            setItems(response.data)
          }
        ).catch(function (error) {
          alert(error);
      });
    };

    return(
        <div>
            <h1 style={{color: "white", margin: 1 + 'em'}}>Le tue prenotazioni</h1>
            {items.map(item => (
                <SearchItemBoxGuest item={item} />))}
        </div>
    );
}

export default ShowBooks;

/*
*/