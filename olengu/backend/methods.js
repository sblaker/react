'use strict';
const bcrypt = require('bcrypt');

var Dbms = require('./dbms');
const { ContextHandlerImpl } = require('express-validator/src/chain');

exports.welcome = function(req, res) {
    var par = req.params.id
    return res.send('welcome' + par.toString());
};

exports.getId = function(req, res) {
  Dbms.get_id(req.params.email, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.insertAnnuncio = function(req, res) {
  console.log(req.body);
  Dbms.insert_annuncio(req.body,function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.updateUser = function(req, res) {
  Dbms.update_user(req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.getAnnunciByToken = function(req, res) {
  Dbms.get_annunci_by_token(req.params.token, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.getAnnuncio = function(req, res) {  
  Dbms.get_annuncio(req.params.id_ann, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.getAnnunciByLuogo = function(req, res) {
  Dbms.get_annunci_by_luogo(req.params.nomeluogo, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.getHostByAnnuncioId = function(req, res) {
  Dbms.get_host_by_annuncio_id(req.params.idannuncio, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.updateAnnuncio = function(req, res) {
  Dbms.update_annuncio(req.body,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};


exports.insertPrenotazione = function(req,res) {
  Dbms.insert_prenotazione(req.body,function(err, result){
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.getPrenotazioniByHost= function(req, res) {
  Dbms.get_prenotazioni_by_host(req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.getPrenotazioniByGuest= function(req, res) {
  Dbms.get_prenotazioni_by_user_id(req.params.id_usr,function(err, result) {
    if(err)
      res.send(err)
    console.log(result)
    res.json(result)
  });
};

exports.getPrenotazioneByHost= function(req, res) {
  Dbms.get_prenotazione_by_host(req.params.id_prenotazione, req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.getPrenotazioneByGuest= function(req, res) {
  Dbms.get_prenotazione_by_guest(req.params.id_prenotazione, req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.getPrenotazioniAttive= function(req, res) {
  Dbms.get_prenotazione_attive(req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};


exports.getPrenotazioniInCorso= function(req, res) {
  Dbms.get_prenotazione_in_corso(req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.getPrenotazioniConcluse= function(req, res) {
  Dbms.get_prenotazione_concluse(req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};




exports.updatePrenotazioneInCorso = function(req, res) {
  Dbms.update_prenotazione_in_corso (req.params.id_prenotazione, req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.updatePrenotazioneAttiva = function(req, res) {
  Dbms.update_prenotazione_attiva(req.params.id_prenotazione, req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.updatePrenotazioneConclusa = function(req, res) {
  Dbms.update_prenotazione_conclusa(req.params.id_prenotazione, req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.deletePrenotazione = function(req, res) {
  Dbms.delete_prenotazione(req.params.id_prenotazione, req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.getDatiByUserId = function(req, res) {
  Dbms.get_dati_by_user_id(req.params.id_usr, function(err, result) {
    if(err)
      res.send(err)
    console.log(result)
    res.json(result)
  });
};


exports.login = function(req, res) {
  Dbms.login(req.body, res);
};

exports.logout = function(req, res) {
  Dbms.logout(req.params.token, res);
};

exports.register = function(req, res) {
  console.log("utente registrato")
  Dbms.register_user(req.body, (err, res_db) => {
    if(err) 
      res.send(err);
    res.send(res_db);
   });
};

exports.guadagnoHost = function(req, res) {
  Dbms.guadagno_host(req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.getAllFromPrenotazione = function(req, res) {
  Dbms.get_all_from_prenotazione(req.params.token, function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.getPrenotazioniSospeso = function(req, res) {
  Dbms.get_prenotazioni_in_sospeso(req.params.token, function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.eliminaPrenotazione = function(req, res) {
  Dbms.elimina_prenotazione(req.params.id_pren, function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.getOspitiByPrenotazioneId = function(req, res) {
  Dbms.get_ospiti_by_prenotazione_id(req.params.id_pren, function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.eliminaAnnuncio = function(req, res) {
  Dbms.elimina_annuncio(req.params.id_ann, function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.updatePrenotazioneSospesa = function(req, res) {
  Dbms.update_prenotazione_sospesa(req.params.id_prenotazione, req.params.token, function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

//foto
exports.get_picturess_records_by_struttura_id = function(req, res) {
  Dbms.getPicturessByStrutturaId(req.params.strutturaid, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.insert_picture_path_in_db = function(req, res) {
  Dbms.insertPicturePathInDb(req.params.picturejson, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};


exports.get_all_pictures = function(req, res) {
  Dbms.getAllPictures(function(err, result) {
    if (err)
      res.send(err);
      console.log('res', result);
    res.send(result);
  });
};


exports.delete_by_picture_id = function(req, res) {
  Dbms.deletePictureByPictureId(req.params.pictureid, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.get_pictures_records_by_struttura_id = function(req, res) {
  Dbms.getPicturesByStrutturaId(req.params.strutturaid, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
