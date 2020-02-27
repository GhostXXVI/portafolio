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

window.onload = inicializar;

var fichero;
var storageRef;
var imagenFBRef;
function inicializar(){
    fichero = document.getElementById("fichero");
    fichero.addEventListener("change",subirImagenFirebase, false);

    storageRef = firebase.storage().ref();
    imagenFBRef = firebase.database().ref().child("imagenesFB");
    mostrarImagen();
}
function mostrarImagen(){
    imagenFBRef.on("value",function(snapshot){
        var datos = snapshot.val();
        var result = "";
        for(var key in datos){
            result += '<img src="'+datos[key].url +'"/>';
        }
        document.getElementById("imagenesFirebase").innerHTML = result;
    });
}

function subirImagenFirebase(){
    var imagenSubir = fichero.files[0];
    var uploadTask = storageRef.child('imagenes/' + imagenSubir.name).put(imagenSubir);

    uploadTask.on('state_changed',
    function(snapshot){

    }, function(error){
        alert("problema");
        console.log(error);
    }, function(){

        var downloadURL = uploadTask.snapshot.downloadURL;
        console.log(uploadTask.snapshot);
        crearNodoEnBDFirebase(imagenSubir.name, downloadURL);
    });
}
function crearNodoEnBDFirebase(nombreImagen, downloadURL){
imagenFBRef.push({
    nombre:nombreImagen, url: downloadURL
});
}

