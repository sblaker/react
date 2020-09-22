import React, {useState} from 'react';
import {Alert, Button} from 'react-bootstrap';
import axios from 'axios'
function PictureUploadedAlert(props) {

  const [show, setShow] = useState(true);

  const onAnnullaButtonClicked = () =>{
    setShow(false)
  }

  const uploadPathInDb = async () => {
      var structure_id = localStorage.getItem("id_annuncio")
      var requestAggiungiPathInDb  = "http://localhost:3500/insertpicturepathindb/";
      var path_string = props.path.toString()
      let request = {
        id_struttura: structure_id,
        percorso: path_string
      }
      var picturePathJson = JSON.stringify(request);
      console.log(typeof(picturePathJson))
      console.log(picturePathJson)
      console.log(request)
      axios.get(requestAggiungiPathInDb + picturePathJson, {"Access-Control-Allow-Origin":"http://localhost:3500"})
          .then(function (response) {
              if(response.status == 200){
                 console.log(response)
                 setShow(false)
                 window.location.href = "/MyAnnunci"
              }}
          ).catch(function (error) {
              console.log(error);
      });
  }

  if (show) {
    return (
      <div class="mt-1 px-2">
        <Alert className="register-host-btn">
          <Button className="btn btn-lg btn-gradient mt-2 ml-5 w-75" id="register-host-btn" onClick={uploadPathInDb}>Conferma</Button>
        </Alert>
      </div>
    );
  }
  return <div></div>;
}
export default PictureUploadedAlert;