import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchItemBoxGuest({ item }) {

    const [nome_annuncio, setNomeAnnuncio] = useState("")
    const [luogo, setLuogo] = useState("")
    const [descrizione, setDescrizione] = useState("")

    useEffect(() => {
        fetchAnnuncio();
    }, []);

    const fetchAnnuncio = async () => {
        console.log(item)
        const query = 'http://localhost:3500/api/getannuncio/';
        var id_annuncio = item.ref_id_ann;
        await axios.get(query + id_annuncio, {"Access-Control-Allow-Origin":"http://localhost:3500"})
        .then(function (response) {
            console.log(response.data)
            setNomeAnnuncio(response.data.nome_annuncio)
            setLuogo(response.data.luogo)
            setDescrizione(response.data.descrizione)
          }
        ).catch(function (error) {
          alert(error);
      });
    }

    return(
        <div className="containerFluid">
            <div className="row" id="present-item-box"> 
                <div className="col-md-9 col-sm-12">
                    <h2>{item.nome_annuncio}</h2>
                    <h4>{item.luogo}</h4>
                    <p>{item.descrizione}</p>
                </div>
                <div className="col-md-3 col-sm-12 mt-5 pt-4 text-right text-white">
                    <h5>Stato: {item.stato.toUpperCase()}</h5>
                </div>
            </div>
        </div>
    );
}

export default SearchItemBoxGuest;