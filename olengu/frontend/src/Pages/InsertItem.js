import React,{useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';  
import axios from 'axios';
import PictureUploadedAlert from './PictureUploadedAlert';
import {Alert, Button, Accordion, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function InsertItem() {

    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [filePath, setFilePath] = useState("");
    const[alertState, setAlertVisibility] = useState(false)

    const send = async (e) => {

        e.preventDefault();

        var bnb = document.getElementById('isbnb')  
        console.log(bnb)
    
        var isbnb;
    
        if(document.getElementById('is_bnb') == 'b&b') {
            //0 è bnb, 1 è appartamento
            isbnb = 0;
        } else {
            isbnb = 1;
        }
    
        var colazione;
    
        var colazioneBool = document.getElementById('breakfast').checked
        if(colazioneBool) {
            colazione = 1  
        } else {
            colazione = 0
        }

        var aria;

        var ariaBool = document.getElementById('ac').checked
        if(ariaBool) {
            aria = 1
        } else {
            aria = 0
        }

        var park;

        var parkBool = document.getElementById('parking').checked
        if(parkBool) {
            park = 1
        } else {
            park = 0
        }
        
        var wifi;

        var wifiBool = document.getElementById('wifi').checked
        if(wifiBool) {
            wifi = 1
        } else {
            wifi = 0
        }

        var animal;

        var animalBool = document.getElementById('animal').checked
        if(animalBool) {
            animal = 1
        } else {
            animal = 0
        }

        var bf;

        var bfBool = document.getElementById('bf').checked
        if(bfBool) {
            bf = 1
        } else {
            bf = 0
        }

        const data = {
            "host": parseInt(localStorage.getItem("user")),
            "nome_annuncio": document.getElementById('n_ann').value,
            "luogo": document.getElementById('luogo').value,
            "descrizione": document.getElementById('description').value,
            "attrazioni":document.getElementById('attr').value,
            "indirizzo": document.getElementById('indirizzo').value,
            "is_bnb": isbnb,
            "n_ospiti": document.getElementById('nospiti').value,
            "prezzo_notte": document.getElementById('prezzo').value,
            "n_letti_singoli": document.getElementById('nlettisingoli').value,
            "n_letti_matr": document.getElementById('nlettimatr').value,
            "n_divano_letto": document.getElementById('ndivaniletto').value,
            "n_camere": document.getElementById('ncamere').value,
            "n_bagni": document.getElementById('nbagni').value,
            "colazione": colazione,
            "AC": aria,
            "parcheggio": park,
            "wifi": wifi,
            "animali_domestici_ammessi": animal,
            "baby_friendly": bf,
            "tassa_soggiorno": document.getElementById("sgtax").value
        } 

        var answer = "http://localhost:3500/api/insertannuncio"

        axios.post(answer, data, {"Access-Control-Allow-Origin":"http://localhost:3500"})
        .then(function (response) {
            console.log(response)
            if(response.status == 200){
                localStorage.setItem('id_annuncio',response.data.insertId)
                //window.location.href = "/"
            }})
            .catch(function (error) {
                console.log(error);
            });
    }

    var allerta;
    if(alertState){
      allerta = <PictureUploadedAlert path={filename}/>
    }

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
      };

    const sendFoto = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        try {
          const res = await axios.post('http://localhost:3500/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
               }
            });
          if(res.status===200){
            setFilePath(res.data.filePath)
            setAlertVisibility(true)
            console.log(res)
          }
          const { fileName, filePath } = res.data;
        } catch (err) {
            console.log(err)
          }
    };
   
    return(
        <div className="InsertItem">
            <form>
                <div className="row" id="insertitem-box">
                    <div className="col-lg-3 col-md-6 col-sm-12 checklist-box-col">
                        <h1 style={{marginTop: 0.01 + 'em', textAlign:'center'}}>Info generali</h1>

                        <label style={{fontWeight: 'bold'}}>Titolo</label><br/>
                        <input type="text" placeholder="Titolo" id="n_ann" name="nome_annuncio"/><br/>

                        <label style={{fontWeight:'bold'}}>Descrizione</label>
                        <textarea placeholder="Descrizione" id="description" name="descrizione"/><br/>

                        <label style={{fontWeight: 'bold'}}>Città</label><br />
                        <input type="text" placeholder="citta" id="luogo" name="luogo"/><br/>

                        <label style={{fontWeight: 'bold'}}>Indirizzo</label><br />
                        <input type="text" placeholder="Indirizzo" id="indirizzo" name="indirizzo"/><br/>

                         
                        <label class = "mt-3" style={{fontWeight: 'bold'}}>Carica foto</label><br />
                        <input type="file" id="myFile" name="filename"  onChange={onChange}></input>  
                    </div>
                          
                    <div className="col-lg-3 col-md-6 col-sm-12 checklist-box-col">  
                        <h2 style={{marginTop: 0.01 + 'em', textAlign: "center"}}>Servizi e struttura</h2>

                        <input type="checkbox" placeholder="Wifi" id="wifi" name="wifi"/>
                        <label style={{fontWeight: 'bold'}}> Wi-fi</label><br/>

                        <input type="checkbox" placeholder="Aria condizionata" id="ac" name="AC"/>
                        <label style={{fontWeight: 'bold'}}> Aria condizionata</label><br/>

                        <input type="checkbox" placeholder="Baby friendly" id="bf" name="baby_friendly"/>
                        <label style={{fontWeight: 'bold'}}> Baby friendly</label><br/>

                        <input type="checkbox" placeholder="Animali domestici ammessi" id="animal" name="animali_domestici_ammessi"/>
                        <label style={{fontWeight: 'bold'}}> Animali ammessi</label><br/> 

                        <input type="checkbox" placeholder="Colazione" id="breakfast" name="colazione"/>
                        <label style={{fontWeight: 'bold'}} for="breakfast"> Colazione</label><br/> 

                        <input type="checkbox" placeholder="Parcheggio" id="parking" name="parcheggio"/>
                        <label style={{fontWeight: 'bold'}} for="breakfast"> Parcheggio</label><br/> 
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 checklist-box-col">
                        <h2 style={{marginTop: 0.01 + 'em', textAlign: "center"}}>Dettagli</h2>
                        <input type="number" placeholder="Prezzo" id="prezzo" name="prezzo_notte"/>
                        <label style={{fontWeight: 'bold'}}>€ A notte</label><br/>

                        <input type="number" placeholder="Tasse di soggiorno" id="sgtax" name="tassa_soggiorno"/>
                        <label style={{fontWeight: 'bold'}}>€ A notte</label><br/>

                        <label style={{fontWeight: 'bold'}}>Tipologia struttura</label>
                        <select name="is_bnb" id="isbnb">
                            <option>b&b</option>
                            <option>Intero appartamento</option>
                        </select>

                        <label class="mt-4" style={{fontWeight: 'bold'}}>Attrazioni</label><br/>
                        <textarea placeholder="Attrazioni" id="attr" name="attrazioni"/>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 checklist-box-col">   
                        <div style={{padding: 2 + 'em'}}>
                            <input style={{marginTop: 1 + 'em'}} type="number" placeholder="N. Ospiti" id="nospiti" name="n_ospiti"/>
                            <input style={{marginTop: 1 + 'em'}} type="number" placeholder="N. Letti singoli" id="nlettisingoli" name="n_letti_singoli"/>
                            <input style={{marginTop: 1 + 'em'}} type="number" placeholder="N. Letti matrimoniali" id="nlettimatr" name="n_letti_matr"/>
                            <input style={{marginTop: 1 + 'em'}} type="number" placeholder="N. Divano letto" name="n_divano_letto" id="ndivaniletto" />
                            <input style={{marginTop: 1 + 'em'}} type="number" placeholder="N. Camere" name="n_camere" id="ncamere" />
                            <input style={{marginTop: 1 + 'em'}} type="number" placeholder="N. Bagni" name="n_bagni" id="nbagni" />
                        </div>
                        <Accordion>
                        <Card className="myCard btn-gradient badge-dark sm w-100 h-75 mt-2 rounded-pill justify-content-center">
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <button type="submit" className="btn btn-bg-transparent ml-4 text-white w-100" id="register-host-btn" onClick={send}>Carica foto</button>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <button type="submit" className="btn btn-bg-transparent ml-4 text-white w-100" id="register-host-btn" onClick={sendFoto}>Pubblica</button>
                                    </Accordion.Toggle>
                                </Card.Header>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                        <div class="row">
                    <div class="col">
                        {allerta}
                    </div>
                </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default InsertItem;