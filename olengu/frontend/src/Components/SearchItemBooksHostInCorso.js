import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchItemBooksHostInCorso({ item }) {

    const [status, setStatusChanged] = useState(0)

    const handleChangeStatus = async () => {
        const route = "http://localhost:3500/api/updateprenotazioneconclusa/"
        const id_pren = item.id_prenotazione.toString()+"/"
        const token = localStorage.getItem('token')

        await axios.get(route + id_pren + token, {"Access-Control-Allow-Origin":"http://localhost:3500"})
        .then(function (response) {
            console.log(response)
            setStatusChanged(1)
        }).catch(function (error) {
          alert(error);
      });
    }

    if(status == 1) {
        window.location.reload(false)
    }
    
    return(
        <div className="containerFluid">
            <div className="row" id="present-item-box">
                <div className="col-md-6 col-sm-12">
                    <h2>{item.nome_annuncio}</h2>
                    <h4>{item.luogo}</h4>
                    <p>{item.descrizione}</p>
                </div>
                <div className="col-md-12 col-sm-12 text-right">
                    <button className="btn btn-success rounded-pill" onClick={handleChangeStatus}>Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default SearchItemBooksHostInCorso; 