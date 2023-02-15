const mongoose = require('mongoose');

const UtenteSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    descrizione: String,
    icona_profilo: String, //placeholder for media
    iconaNSFW: Boolean,
    banner: String, //placeholder for media
    bannerNSFW: Boolean,
    userscore: Number,
    lingua: { type: String, enum: ["italiano", "inglese"] },
    isAmministratore: Boolean,
    nsfw: { type: String, enum: ["no", "blur", "yes"] },
    nome_tema_selezionato: String,
    utenti_seguiti: [String], //forse dovremmo mettere una lista di User
    post_favoriti: [String],
    timer: Number,
    token: String
});

const Utente = mongoose.model('Utente', UtenteSchema);
module.exports = Utente;