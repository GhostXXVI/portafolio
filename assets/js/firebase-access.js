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
    fichero = document.getElementById("urlFondo");
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
            result += '<div class="card-archive"><div class="seeWorks-archive"'+
            '<div class="seeWorks-works__work-others__content">'+
            '<img class="bg-image-archive" src="'+datos[key].url+'"/>'+
            '<div class="btn-crud btn-crud--delete"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></div>'+
            '<div class="btn-crud btn-crud--edit"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></div>'+            
            '</div>'+
            '<p class="txt-primary">'+datos[key].nombre+'</p>'+
            '</div></div>';
        }
        document.getElementById("imagenesFirebase").innerHTML = result;
    });
}

function subirImagenFirebase(){
    var imagenSubir = fichero.files[0];
    var uploadTask = storageRef.child('imagenes/' + imagenSubir.name).put(imagenSubir);
    
    uploadTask.on('state_changed', function(snapshot){
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        $('#progress_url').css("width",progress+"%");
    }, function(error){
        alert("problema");
        console.log(error);
    }, function(){
        /*var downloadURL = uploadTask.snapshot.downloadURL;
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        crearNodoEnBDFirebase(imagenSubir.name, downloadURL);
        console.log("exit");
        });*/
        $('.alert-succes').slideDown( 1000 ).fadeOut( 1500 );
    });
}
function crearNodoEnBDFirebase(nombreImagen, downloadURL){
imagenFBRef.push({
    nombre:nombreImagen, url: downloadURL,
});
}

