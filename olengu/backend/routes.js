module.exports = function(app) {

  var methods = require('./methods');

  app.route('/welcome/:id').get(methods.welcome); //test

  app.route('/api/getannunci/:token').get(methods.getAnnunciByToken); // 

  app.route('/api/getannuncio/:id_ann').get(methods.getAnnuncio); //

  app.route('/api/insertannuncio').post(methods.insertAnnuncio) 

  app.route('/api/updateannuncio').post(methods.updateAnnuncio) 

  app.route('/api/getannuncibyLuogo/:nomeluogo').get(methods.getAnnunciByLuogo) 

  app.route('/api/insertprenotazione').post(methods.insertPrenotazione) 

  app.route('/api/updateprenotazioneconclusa/:id_prenotazione/:token').get(methods.updatePrenotazioneConclusa);

  app.route('/api/updateprenotazioneincorso/:id_prenotazione/:token').get(methods.updatePrenotazioneInCorso);

  app.route('/api/updateprenotazioneattiva/:id_prenotazione/:token').get(methods.updatePrenotazioneAttiva);

  app.route('/api/updateprenotazionesospesa/:id_prenotazione/:token').get(methods.updatePrenotazioneSospesa);

  app.route('/api/deletePrenotazione/:id_prenotazione/:token').get(methods.deletePrenotazione) 

  app.route('/api/getprenotazionihost/:token').get(methods.getPrenotazioniByHost); //si

  app.route('/api/getprenotazionehost/:id_prenotazione/:token').get(methods.getPrenotazioneByHost);

  app.route('/api/getprenotazioniguest/:id_usr').get(methods.getPrenotazioniByGuest); //si

  app.route('/api/getprenotazioneguest/:id_prenotazione/:token').get(methods.getPrenotazioneByGuest);

  app.route('/api/getprenotazioniattive/:token').get(methods.getPrenotazioniAttive); 

  app.route('/api/getprenotazioneincorso/:token').get(methods.getPrenotazioniInCorso); 

  app.route('/api/getprenotazioneconcluse/:token').get(methods.getPrenotazioniConcluse); 

  app.route('api/guadagnohost/:token').get(methods.guadagnoHost);  

  app.route('/api/getprenotazionehost/:token/:id_prenotazione').get(methods.getPrenotazioneByHost);
   
  app.route('/api/getprenotazioneguest/:token/:id_prenotazione').get(methods.getPrenotazioneByGuest);

  app.route('/api/auth/login').post(methods.login) //yes

  app.route('/api/auth/register').post(methods.register) //yes

  app.route('/api/auth/logout/:token').get(methods.logout);

  app.route('/api/getidusr/:email').get(methods.getId);

  app.route('/api/getdatibyuserid/:id_usr').get(methods.getDatiByUserId);

  app.route('/api/gethostbyannuncioid/:idannuncio').get(methods.getHostByAnnuncioId);

  app.route('/api/bilancioutente/:token').get(methods.guadagnoHost);

  app.route('/api/getallfromprenotazione/:token').get(methods.getAllFromPrenotazione);

  app.route('/api/getprenotazionesospesa/:token').get(methods.getPrenotazioniSospeso); 

  app.route('/api/eliminaprenotazione/:id_pren').get(methods.eliminaPrenotazione);

  app.route('/api/getospitibyprenotazioneid/:id_pren').get(methods.getOspitiByPrenotazioneId);

  app.route('/api/eliminaannuncio/:id_ann').get(methods.eliminaAnnuncio);

  app.route('/insertpicturepathindb/:picturejson').get(methods.insert_picture_path_in_db);

  app.route('/getallpictures').get(methods.get_all_pictures);

  app.route('/deletebypictureid/:pictureid').get(methods.delete_by_picture_id);

  app.route('/getpicturebystrutturaid/:strutturaid').get(methods.get_pictures_records_by_struttura_id);

  app.route('/getpicturesbystrutturaid/:strutturaid').get(methods.get_pictures_records_by_struttura_id);

};
