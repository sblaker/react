import React, {useState, useEffect, useReducer} from 'react';
import { Link } from 'react-router-dom';
import {Alert, Button, Accordion, Card} from 'react-bootstrap';
import FetchGuadagno from '../Utils/FetchGuadagno';
import { cssNumber } from 'jquery';
import axios from 'axios';
import ShowBooksHostSospeso from './ShowBooksHostSospeso';
import ShowBooksHostAttivo from './ShowBooksHostAttivo';
import ShowBooksHostInCorso from './ShowBooksHostInCorso';
import ShowBooksHostConcluso from './ShowBooksHostConcluso';

function PortaleHost() {

    const [guadagno, setGuadagno] = useState(0);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {

        const token = localStorage.getItem('token');
        const query = 'http://localhost:3500/api/bilancioutente/';

        await axios.get(query + token, {"Access-Control-Allow-Origin":"http://localhost:3500"})
        .then(function (response) {

            if(response.data.bilancio == null) {
                setGuadagno(0)
            } else {
                setGuadagno(response.data.bilancio)
            }
          }
        ).catch(function (error) {
          alert(error);
      });
    };

    return(

        <div>
           <div className="containerFluid">
                <div className="row" id="insertitem-box">
                    <div className="col-lg-6 col-sm-12 user-card" style={{display: "inlineBlock"}}>
                        <h3>Ciao! Il tuo saldo attuale è di:</h3>
                        <h3>{guadagno}€</h3>
                    </div>
                <div className="col-lg-6 col-sm-12">
                    <Link to="/MyAnnunci">
                        <button className="btn-gradient btn-dashboard">Gestione annunci</button>
                    </Link>
                    <Accordion>
                        <Card className="myCard btn-gradient badge-dark sm w-75 mt-2 rounded-pill text-center">
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <a className="w-200 text-white font-weight-bold">Gestione prenotazioni</a>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Link to = "/ShowBooksHostSospeso">
                                    <Card.Body>Prenotazioni in sospeso</Card.Body>
                                </Link>
                            </Accordion.Collapse>
                            <Accordion.Collapse eventKey="0">
                                <Link to = "/ShowBooksHostAttivo">
                                    <Card.Body>Prenotazioni attive</Card.Body>
                                </Link>
                            </Accordion.Collapse>
                            <Accordion.Collapse eventKey="0">
                                <Link to = "/ShowBooksHostInCorso">
                                    <Card.Body>Prenotazioni in corso</Card.Body>
                                </Link>
                            </Accordion.Collapse>
                            <Accordion.Collapse eventKey="0">
                                <Link to = "/ShowBooksHostConcluso">
                                    <Card.Body>Prenotazioni concluse</Card.Body>
                                </Link>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
        </div>
    </div>
    );
}

export default PortaleHost;