import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchItemBooksHostSospeso({ item }) {

    const [statusChanged, setStatusChanged] = useState(0)

    const handleChangeStatus = async () => {
        const route = "http://localhost:3500/api/updateprenotazionesospesa/"
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

    if(statusChanged == 1) {
        window.location.reload(false)
    }

    const handleDeletePren = async () => {
        const route = 'http://localhost:3500/api/eliminaprenotazione/';
        const id_pren = item.id_prenotazione;

        await axios.get(route + id_pren, {"Access-Control-Allow-Origin":"http://localhost:3500"})
        .then(function (response) {
            console.log(response)
            setStatusChanged(1)
        }).catch(function (error) {
          alert(error);
      });
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
                    <button className="btn btn-success rounded-pill" onClick={handleChangeStatus}>Conferma</button>
                    <button className="btn btn-danger rounded-pill ml-3" onClick={handleDeletePren}>Rifiuta</button>
                </div>
            </div>
        </div>
    );
}

export default SearchItemBooksHostSospeso; 