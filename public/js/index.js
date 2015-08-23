var address = document.baseURI;

//address = "http://localhost:3000/"; /* Para usar em um servidor diferente do servidor onde esta rodando o node essa linha deve ser descomnetada */

var ligarLedVermelho = function(){
$.ajax({
  url: address + "ligarLedVermelho",
  context: document.body
}).done(function() {
  $( this ).addClass( "done" );
});

}

var ligarLedAmarelo = function(){
$.ajax({
  url: address + "ligarledAmarelo",
  context: document.body
}).done(function(data) {
  $( this ).addClass( "done" );
});
	
}
var ligarLedVerde = function(){
alert(address);
$.ajax({
  url: address + "ligarledverde",
  context: document.body
}).done(function() {
  $( this ).addClass( "done" );
});
		
}
var piscarLedVermelho = function(){

$.ajax({
  url: address + "piscarLedVermelho",
  context: document.body
}).done(function() {
  $( this ).addClass( "done" );
});
}

var piscarLedAmarelo = function(){
$.ajax({
  url: address + "piscarledAmarelo",
  context: document.body
}).done(function(data) {
  $( this ).addClass( "done" );
});
	
}
var piscarLedVerde = function(){

$.ajax({
  url: address + "piscarledverde",
  context: document.body
}).done(function() {
  $( this ).addClass( "done" );
});
		
}