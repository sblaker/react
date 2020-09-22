import React, {useState} from 'react';

function CheckIn(props) {   
    return(
        <div>
            <div className="row">
                <h2 style={{margin: 1 + 'em', textAlign: "center", color: "white"}}>Inserisci foto documenti degli ospiti</h2><br />
            </div>
            <div className="col text-center">
                <input type="file" placeholder="file" name="file" style={{height: 30 + 'px', margin: 1 + 'em', textAlign: "center"}} /><br />
                <button type="submit" className="btn btn-gradient btn-dashboard">Conferma</button>
            </div>
        </div>
    );
}

export default CheckIn;