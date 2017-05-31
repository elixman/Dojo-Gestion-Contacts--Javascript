var address_book = [];

document.addEventListener('DOMContentLoaded',function() {
    document.getElementById('select').onchange=win;
},false);

function win(event) {

    if(event.target.value === "list"){
      createlist();
    }
    if(event.target.value === "add"){
       createform();
    }
    if(event.target.value === "count"){
     createcounter();
    }
}
  function createform(){
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

document.getElementById('btn').addEventListener("click",function(){
  var name=document.getElementById("name").value;
  var firstname=document.getElementById("firstname").value;
  var tel=document.getElementById("tel").value;

  var newcontact = {'name':name,
                    'firstname' :firstname,
                    'tel':tel
                  };

  address_book.push(newcontact);
  console.log(address_book);
});
};
  function createlist(){
    var text_to_add="";

    for (var i = 0; i < address_book.length; i++) {
      text_to_add += '<p>nom : '+ address_book[i].name+'</p>'+
      '<p>prenom : '+ address_book[i].firstname+'</p>'+
      '<p>telephone : '+ address_book[i].tel+'</p><br>'
    };

    document.getElementById('content').innerHTML = text_to_add;

  }

function createcounter(){
var counter = "<p> you have "+ address_book.length+ " contacts</p>";
document.getElementById('content').innerHTML = counter;
}
