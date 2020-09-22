import React, {useState, useEffect, useReducer} from 'react';
import { Link } from 'react-router-dom';
import SearchItemBox from '../Components/SearchItemBox';
import SearchItemBooksHost from '../Components/SearchItemBooksHost';
import axios from 'axios';
import SearchItemBooksHostAttivo from '../Components/SearchItemBooksHostAttivo';

function ShowBooksHostAttivo() {


    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

 
    const fetchItems = async () => {

        const query = "http://localhost:3500/api/getprenotazioniattive/";

        const token = localStorage.getItem('token')

        await axios.get(query + token, {"Access-Control-Allow-Origin":"http://localhost:3500"})
        .then(function (response) {
            console.log(response.data)
            setItems(response.data)
          }
        ).catch(function (error) {
          alert(error);
      });
    };

    return(
        <div className="ShowBooksHost row">
            <div className="col-lg-12 col-md-12 justify-content-center">
                <div className="row">
                    <h1 style={{color: "white", margin: 1 + 'em', fontWeight: "bold"}}>Prenotazioni attive</h1>
                </div>
                {items.map(item => (
                    <SearchItemBooksHostAttivo item={item} />
                ))}
            </div>
        </div>
    );
}

export default ShowBooksHostAttivo;