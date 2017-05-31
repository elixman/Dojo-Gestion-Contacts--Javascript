//on commence par créer le tableau vide de notre carnet d'adress
var address_book = [];
// equivalent du document.ready = on attends que tout soit chargé...
document.addEventListener('DOMContentLoaded',function() {
    //tout les evenements ont pour origine une modification du select
    document.getElementById('select').onchange=execute();//quant  c'est modifié on execute la fonction "execute
},false);

function execute(event) {
    //si le select option a pour value list, on lance la fonction createlist
    if(event.target.value === "list"){
      createlist();
    }
    //si le select option a pour value form, on lance la fonction createlform
    if(event.target.value === "add"){
       createform();
    }
    //si le select option a pour value count, on lance la fonction createcounter
    if(event.target.value === "count"){
     createcounter();
    }
}
//fonction lancée quant add est selectionné
function createform(){
    //on commence par remplir la div content avec un formulaire généré par js
    document.getElementById('content').innerHTML =
    '<form class="" action="index.html" method="post">'+
        '<label for="name">nom</label><br>'+
        '<input type="text" id="name" value=""><br>'+
        '<label for="firstname">prénom</label><br>'+
        '<input type="text" id="firstname" value=""><br>'+
        '<label for="tel">tel</label><br>'+
        '<input type="text" id="tel" value=""><br>'+
        '<button type="button" id="btn">Valider</button>'+
    '</form>';
    //on attent que l'utilisateur clique sur valider
    document.getElementById('btn').addEventListener("click",function(){
          //on met dans des variables les values des inputs du formulaire
          var name=document.getElementById("name").value;
          var firstname=document.getElementById("firstname").value;
          var tel=document.getElementById("tel").value;
          //on crée un tableau associatif representant un contact
          var newcontact = {'name':name,
                            'firstname' :firstname,
                            'tel':tel
                          };
          //on ajoute ce contact a la suite du tableau de notre carnet d'adresse
          address_book.push(newcontact);
    });
}
//fonction lancée quant le select est sur list
function createlist(){
    //on crée une variable avec le texte a inserer
    var text_to_add="";
    //on boucle sur toutes les lignes du tableau pour aficher le texte de mise en forme de chaque contact
    for (var i = 0; i < address_book.length; i++) {
      text_to_add += '<p>nom : '+ address_book[i].name+'</p>'+
      '<p>prenom : '+ address_book[i].firstname+'</p>'+
      '<p>telephone : '+ address_book[i].tel+'</p><br>'
    }
    //enfin, on insere ce texte dans la div content (innerHTML écrase ce qu'il y avait auparavant
    document.getElementById('content').innerHTML = text_to_add;
}
//fonction qui est lancée quant le select est sur count
function createcounter(){
    //on crée la variable counter avec a l'interieur un texte mettant en forme le comptage
    // du nombre de ligne de notre tableau de carnet d'adresse
    var counter = "<p> you have "+ address_book.length+ " contacts</p>";
    //on insere dans la div content cette chaine de caractère
    document.getElementById('content').innerHTML = counter;
}
