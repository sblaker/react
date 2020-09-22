'use strict';
var sql = require('./db');
const { v4: uuidv4 } = require('uuid');

var Dbms = function(dbms){
    this.status = task.status;
    this.created_at = new Date();
};

Dbms.logout = function (token, apires) {
    sql.query("DELETE FROM session WHERE token = ? ", token, (err, res) => {
        apires.send("ok");
    });
};

Dbms.get_id = function (json,result){
    var statement = "SELECT id_usr FROM usr WHERE email = ?";
    sql.query(statement, json, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res[0]);
        }
    });
};

Dbms.login = function (loginjson, apires) {
    var statement = "SELECT * FROM usr WHERE email = ? AND pswd = ?";
    var values = [loginjson.email, loginjson.password];

    sql.query(statement, values, function(err, res) {
        if(err) {
            apires.send(JSON.stringify({"status":false,"token":""}));
        }
        else if (res.length) {
            if (res[0].id_usr) {
                var ishost = res[0].is_host;
                console.log("res[0].id_usr: "+res[0].id_usr);
                let token = uuidv4();
                let id_usr = res[0].id_usr;
                return sql.query("insert into session(ref_id_usr, token) values(?, ?);", [res[0].id_usr, token], (err, res) => {
                    if (err) {
                        console.log("unable to generate token for uid: ", id);
                        console.log(err);
                        apires.send(JSON.stringify({"status":false,"token":""}));
                    }
                    else {
                        apires.send(JSON.stringify({"status": true, "token": token, "ishost": ishost,"id_usr":id_usr}));
                    }
                });
            }
        }
        else {
            apires.send(JSON.stringify({"status":false,"token":""}));
        }
    });
};

Dbms.register_user = function (registrationjson, result) {   
    let statement = "INSERT INTO usr (nome, cognome, data_nascita, email, pswd) VALUES(?,?,?,?,?)";
    let values = [registrationjson.firstname, registrationjson.surname, registrationjson.birthday, registrationjson.email, registrationjson.password];
    
    sql.query(statement, values, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Dbms.get_prenotazioni_by_user_id = function (user_id, result) {
    let statement = 'SELECT * FROM prenotazioni as p, usr as u WHERE p.guest = u.id_usr AND u.id_usr = ?';
  
    sql.query(statement, user_id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};


Dbms.get_annunci_by_token = function (token, result) {
    let statement = "SELECT * FROM annunci as a, session as s WHERE a.host = s.ref_id_usr AND s.token = ?"

    sql.query(statement, token, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};


Dbms.get_annuncio = function (annuncio, result) {

    let statement = "SELECT * FROM annunci WHERE id_ann = ?"

    sql.query(statement, annuncio, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res[0]);
        }
    });
};

Dbms.insert_annuncio = function (json, result) { 
    console.log(json)
    let statement = `INSERT INTO annunci(host,nome_annuncio,luogo,indirizzo,descrizione,attrazioni,is_bnb,n_ospiti,prezzo_notte,n_letti_singoli,n_letti_matr,n_divano_letto,n_camere,n_bagni,colazione,AC,parcheggio,wifi,animali_domestici_ammessi,baby_friendly,tassa_soggiorno)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    let values = [json.host,json.nome_annuncio,json.luogo,json.indirizzo,json.descrizione,json.attrazioni,json.is_bnb,json.n_ospiti,json.prezzo_notte,json.n_letti_singoli,json.n_letti_matr,json.n_divano_letto,json.n_camere,json.n_bagni,json.colazione,json.AC,json.parcheggio,json.wifi,json.animali_domestici_ammessi,json.baby_friendly,json.tassa_soggiorno];
    sql.query(statement, values, function (err, res) {
        if(err) {
            result(err, res);
        } else {
            result(null, res);  
        }
    });
    };
    



Dbms.update_annuncio = function (json, result) {
    sql.query("SELECT ref_id_usr AS id FROM session WHERE token = ?", json.token, (err, res) => {
        if(err) {
            result(err, res);
        } else {
            if (res.length) {
                if(res[0].id) {
                    var id_usr = res[0].id;
                    let statement = 'UPDATE annunci SET nome_annuncio = ?,luogo = ?,indirizzo = ?,descrizione = ?,attrazioni = ?,is_bnb = ?,n_ospiti = ?,prezzo_notte = ?,n_letti_singoli = ?,n_letti_matr = ?,n_divano_letto = ?,n_camere = ?,n_bagni = ?,colazione = ?,AC = ?,parcheggio = ?,wifi = ?,animali_domestici_ammessi = ?,baby_friendly = ? WHERE id_ann = ? AND host = ?'
                    let values = [json.nome_annuncio,json.luogo,json.indirizzo,json.descrizione,json.attrazioni,json.is_bnb,json.n_ospiti,json.prezzo_notte,json.n_letti_singoli,json.n_letti_matr,json.n_divano_letto,json.n_camere,json.n_bagni,json.colazione,json.AC,json.parcheggio,json.wifi,json.animali_domestici_ammessi,json.baby_friendly,json.id_ann, id_usr];

                    sql.query(statement, values, function (err, res) {
                            if(err) {
                                console.log("error: ", err);
                                result(err, null);
                            }
                            else{
                                result(null, res);
                        }
                    });
                }
            }
        }
    });
};

Dbms.get_annunci_by_luogo = function (luogo, result) {
    let statement = "SELECT * FROM annunci WHERE luogo = ? "

    sql.query(statement, luogo, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Dbms.insert_prenotazione = function (json, result) {

    var statement = `INSERT INTO prenotazioni(ref_id_ann,checkin,checkout,stato,tot_pagato,guest,host)VALUES(?,?,?,?,?,?,?)`;
    var values = [json.ref_id_ann,json.checkin,json.checkout,json.stato,json.tot_pagato,json.id_usr,json.host];
    sql.query(statement, values, function (err, res) {
        if(err) {   
            result(err, null);
        } else {
            result(null, res);
        }
    }); 
};


Dbms.get_prenotazioni_by_host = function (token,result) {
    let statement = 'SELECT * FROM prenotazioni as p, session as s, annunci as a WHERE s.token = ? and s.ref_id_usr = p.host and p.ref_id_ann = a.id_ann';
    sql.query(statement, token, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Dbms.get_dati_by_user_id= function(id_user, result) {
    let statement = 'SELECT nome,cognome FROM usr WHERE id_usr=?';
    sql.query(statement, id_user, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(id_user)
            result(null, res[0]);
        }
    });
};

Dbms.get_host_by_annuncio_id = function(id_annuncio, result) {
    let statement = 'SELECT host FROM annunci WHERE id_ann = ?';
    sql.query(statement, id_annuncio, function(err,res) {
        if(err) {
            console.log("ops", err);
            result(null, err);
        } else {
            result(null, res[0]);
        }
    });
};

Dbms.get_prenotazioni_by_user_id = function (id_usr,result) {
    let statement = 'SELECT * FROM prenotazioni as p, annunci as a, usr as u WHERE p.guest = u.id_usr AND u.id_usr = ? AND p.ref_id_ann = a.id_ann';
    sql.query(statement, id_usr, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Dbms.get_prenotazione_by_host = function (id_prenotazione, token, result) {
    let statement = 'SELECT * FROM prenotazioni as p, session as s WHERE s.token = ? AND s.ref_id_usr = p.host AND p.id_prenotazione = ?';
    sql.query(statement, [token, id_prenotazione], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Dbms.get_prenotazione_attive = function (token,result) {
    let statement = 'SELECT * FROM prenotazioni as p, session as s, annunci as a WHERE s.token = ? and s.ref_id_usr = p.host and p.ref_id_ann = a.id_ann and p.stato = ?';
    sql.query(statement, [token,"attiva"], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Dbms.get_prenotazione_in_corso = function (token,result) {
    let statement = 'SELECT * FROM prenotazioni as p, session as s, annunci as a WHERE s.token = ? and s.ref_id_usr = p.host and p.ref_id_ann = a.id_ann and p.stato = ?';
    sql.query(statement, [token,"in corso"], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Dbms.get_prenotazione_concluse = function (token,result) {
    let statement = 'SELECT * FROM prenotazioni as p, session as s, annunci as a WHERE s.token = ? and s.ref_id_usr = p.host and p.ref_id_ann = a.id_ann and p.stato = ?';
    sql.query(statement, [token,"conclusa"], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Dbms.get_prenotazioni_in_sospeso = function (token,result) {
    let statement = 'SELECT * FROM prenotazioni as p, session as s, annunci as a WHERE s.token = ? and s.ref_id_usr = p.host and p.ref_id_ann = a.id_ann and p.stato = ?';
    sql.query(statement, [token,"sospeso"], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Dbms.get_prenotazione_by_guest = function (id_prenotazione, token,result) {
    let statement = 'SELECT * FROM prenotazioni as p, session as s WHERE s.token = ? and s.ref_id_usr = p.guest AND p.id_prenotazione';
    sql.query(statement, [token, id_prenotazione], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res[0]);
        }
    });
};


Dbms.elimina_prenotazione = function (id_prenotazione, result) {
    let statement = 'DELETE FROM prenotazioni AS p WHERE p.id_prenotazione = ?'

    sql.query(statement, id_prenotazione, function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
         }
  });
};

Dbms.elimina_annuncio = function (id_annuncio, result) {
    let statement = 'DELETE FROM annunci AS a WHERE a.id_ann = ?'

    sql.query(statement, id_annuncio, function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
         }
  });
};


Dbms.update_prenotazione_attiva = function (id_prenotazione, token, result) {
    let statement = 'UPDATE prenotazioni SET stato = ? WHERE id_prenotazione = ? AND host = (SELECT ref_id_usr AS host FROM session WHERE token = ?)';
    sql.query(statement, ["in corso", id_prenotazione, token], function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
         }
  });
};

Dbms.update_prenotazione_sospesa = function (id_pren, token, result) {
    let statement = 'UPDATE prenotazioni SET stato = ? WHERE id_prenotazione = ? AND host = (SELECT ref_id_usr AS host FROM session WHERE token = ?)';
    sql.query(statement, ["attiva", id_pren, token], function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
         }
  });
};

Dbms.update_prenotazione_in_corso  = function (id_prenotazione, token, result) {
    let statement = 'UPDATE prenotazioni SET stato = ? WHERE id_prenotazione = ? AND host = (SELECT ref_id_usr AS host FROM session WHERE token = ?)';

    sql.query(statement, ["in corso", id_prenotazione, token], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Dbms.update_prenotazione_conclusa  = function (id_prenotazione, token, result) {
    let statement = 'UPDATE prenotazioni SET stato = ?  WHERE id_prenotazione = ? AND host = (SELECT ref_id_usr AS host FROM session WHERE token = ?)';

    sql.query(statement, ["conclusa", id_prenotazione, token], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Dbms.guadagno_host = function (host_token,result) {
    let statement = 'SELECT sum(tot_pagato) as bilancio FROM prenotazioni as p, session as s WHERE s.token = ? and s.ref_id_usr = p.host and (p.stato = ? or p.stato = ? or p.stato = ?)';
    sql.query(statement,[host_token,"attiva","in corso","conclusa"],function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res[0]);
        }
    });
};

Dbms.get_all_from_prenotazione = function(tokens, result) {
    let statement = 'SELECT * FROM prenotazioni as p, session as s WHERE s.token = ? and s.ref_id_usr = p.host and p.stato = ?'
    sql.query(statement,[tokens,"sospeso"],function(err,res) {
        if(err) {
            console.log("error: ",err);
            result(null, err);
        } else {
            console.log(res.ref_id_ann)
            /*
            let statement2 = 'SELECT * FROM annunci WHERE id_ann = ?';
            sql.query(statement2,res.ref_id_ann,function(err,res) {
                if(err) {
                    console.log("error: ",err);
                    result(null, err);
                } else {
                    result(null,res);
                }
            });*/
        }
    });
};

Dbms.insertPicturePathInDb = function (jsonpicture, result) {

    var obj = JSON.parse(jsonpicture);
    var path_string = "/pictures/" + obj.percorso
    console.log(path_string)

    let statement = "INSERT INTO foto(id_struttura, percorso) VALUES (?,?)"
    let values = [obj.id_struttura, obj.percorso];

    sql.query(statement, values, function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
         }
  });
};


Dbms.getAllPictures = function (result) {
  sql.query("SELECT * FROM foto", function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              //console.log('users : ', res);
              result(null, res);
            }
  });
};

Dbms.deletePictureByPictureId = function (id, result) {

    let statement = 'DELETE FROM foto WHERE id_foto = ?'
    sql.query(statement, id, function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
         }
  });
};

Dbms.getPicturesByStrutturaId = function (id, result) {
    sql.query("SELECT * FROM Foto WHERE id_struttura = ?", id,  function (err, res) {
              if(err) {
                  console.log("error: ", err);
                  result(null, err);
              }
              else{
                //console.log('users : ', res);
                result(null, res[0]);
              }
    });
};



module.exports = Dbms;