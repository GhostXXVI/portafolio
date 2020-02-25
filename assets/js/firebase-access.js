var config = {
    apiKey: "AIzaSyCdBEyqufgIlrFUhP2lijMuxRcvGdw1ybY",
    authDomain: "portafolio-7e16e.firebaseapp.com",
    databaseURL: "https://portafolio-7e16e.firebaseio.com",
    projectId: "portafolio-7e16e",
    storageBucket: "portafolio-7e16e.appspot.com",
    messagingSenderId: "213305130100",
    appId: "1:213305130100:web:268c63d29a84497fe0a521",
    measurementId: "G-KQTWMLG2QM"
};

firebase.initializeApp(config);
var database = firebase.database();
var referencia=database.ref("portafolio");
var refNoticias=database.ref("noticias");
