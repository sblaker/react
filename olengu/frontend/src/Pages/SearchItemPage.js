import React, { useState, useEffect} from 'react';
import axios from 'axios';

function SearchItemPage({item}) {

    const [picture, setPicture] = useState([]);
    var path = "http://localhost:3500/pictures/"

    useEffect(() => {
        fetchPictures();
      },[]);
    
      const fetchPictures = () => {
        var requestRicerca = "http://localhost:3500/getpicturesbystrutturaid/";
        var struttura_id = item.id_ann
        axios.get(requestRicerca + struttura_id, {"Access-Control-Allow-Origin":"http://localhost:3500"})
            .then(function (response) {
                if(response.data.length==0){
                }
                setPicture(response.data)
              }
            ).catch(function (error) {
                console.log(error);
        });
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
            </div>
        </div>
    );
}

export default SearchItemPage; 