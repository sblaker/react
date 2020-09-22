import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';

function SearchItemBox({ item }) {

    const [nome_annuncio, setNomeAnnuncio] = useState("")
    const [luogo, setLuogo] = useState("")
    const [descrizione, setDescrizione] = useState("")
    const [status, setChangeStatus] = useState(0)
    const [picture, setPicture] = useState([])

    var path = "http://localhost:3500/pictures/"

    useEffect(() => {
        fetchAnnuncio();
        fetchPictures();
    }, []);

    const fetchPictures = () => {
        var requestRicerca = "http://localhost:3500/getpicturesbystrutturaid/";
        var struttura_id = item.id_ann
        axios.get(requestRicerca + struttura_id, {"Access-Control-Allow-Origin":"http://localhost:3500"})
            .then(function (response) { 
                console.log(response.data.percorso)
                setPicture(response.data)
            }).catch(function (error) {
                console.log(error);
        });
      }

    const fetchAnnuncio = async () => {
        const query = 'http://localhost:3500/api/getannuncio/';
        const id_annuncio = item.ref_id_ann;
        await axios.get(query + id_annuncio, {"Access-Control-Allow-Origin":"http://localhost:3500"})
        .then(function (response) {
            setNomeAnnuncio(response.data.nome_annuncio)
            setLuogo(response.data.luogo)
            setDescrizione(response.data.descrizione)
          }
        ).catch(function (error) {
          alert(error);
      });
    }

    if(status == 1) {
        window.location.reload(false)
    }

    const handleDeleteAnn = async () => {
        const query = 'http://localhost:3500/api/eliminaannuncio/';
        const data = item.id_ann;
        await axios.get(query+data,{"Access-Control-Allow-Origin":"http://localhost:3500"})
        .then(function(response) {
            console.log(response);
            setChangeStatus(1)
        }).catch(function(error){
            console.log(error);
        })
    }

    return(
        <div className="containerFluid">
            <div className="row" id="present-item-box">
                <div className="col-md-3 col-sm-12 present-item-col">
                    <img className="present-item-img" src={path + picture.percorso} />
                </div>
                <div className="col-md-9 col-sm-12">
                    <h2>{item.nome_annuncio}</h2>
                    <h4>{item.luogo}</h4>
                    <p>{item.descrizione}</p>
                </div>
                <div className="col-md-12 col-sm-12 text-right">
                    <button className="btn btn-danger rounded-pill" onClick={handleDeleteAnn}>Elimina annuncio</button>
                </div>
            </div>
        </div>
    );
}

export default SearchItemBox; 