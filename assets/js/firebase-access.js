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
var refEmpleo=database.ref("Empleo");
var refTrabajosP=database.ref("trabajosP");
var refNoticias=database.ref("noticias");
var refSkillsD=database.ref("Habilidad-Desarrollo");
var refSkillsI=database.ref("Habilidad-Ilustracion");


window.onload = inicializar;

var fichero;
var storageRef;
var imagenFBRef;

function inicializar(){
    fichero = document.getElementById("file-input");
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
            '<div class="btn-crud btn-crud--copy" data-clipboard-text="'+datos[key].url+'" data-clipboard-snippet arial-label="copiado!" ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></div>'+
            '<p class="txt-primary testtt">'+datos[key].nombre+'</p>'+
            '</div></div>';
            console.log(key);
        }
        document.getElementById("imagenesFirebase").innerHTML = result;
    });    
}

function subirImagenFirebase(){
    var imagenSubir = fichero.files[0];
    var uploadTask = storageRef.child('imagenes/' + imagenSubir.name).put(imagenSubir);
    uploadTask.on('state_changed', function(snapshot){
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        $("#progress_url").css("display","flex");
        $("#progress_url").text(progress+"%");                
        $('#progress_url').css("width",progress+"%");
        
    }, function(error){
        alert("problema");
        console.log(error);
    }, function(){
        var downloadURL = uploadTask.snapshot.downloadURL;
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        crearNodoEnBDFirebase(imagenSubir.name, downloadURL);
            ('#url-preview').css({'background':'url('+downloadURL+')','background-size':'cover','background-repeat':'no-repeat','background-position':'center'});
        });
        $('.alert-succes').slideDown( 1000 ).fadeOut( 1500 );
        $('#progress_url').show(1000).fadeOut( 2000 );
    });
}

function crearNodoEnBDFirebase(nombreImagen, downloadURL){
    imagenFBRef.push({
        nombre:nombreImagen,
        url: downloadURL,
    });
}
