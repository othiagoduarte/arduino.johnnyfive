var five = require("johnny-five");
var board = new five.Board();

/*Configurar de acordo com as portas do arduino*/

var portaLedVermelho = 11;
var portaLedVerde = 13;
var portaLedAmarelo = 12;

var arduino = {

	 ligarLedVermelho : function(){
	 	
	  	var ledRed = new five.Led(portaLedVermelho);
	  	ledRed.on();

	},

	 ligarLedVerde : function(){
		
	  	var ledGreen = new five.Led(portaLedVerde);
	  	ledGreen.on();

	},

	 ligarLedAmarelo : function(){
		
		var ledYellow = new five.Led(portaLedVerde);
		ledYellow.off();
		ledYellow.on();

	},
	piscarLedVermelho : function(){
	 	
	  	var ledRed = new five.Led(portaLedVermelho);
	  	ledRed.strobe(500)	;

	},

	 piscarLedVerde : function(){
		
	  	var ledGreen = new five.Led(portaLedVerde);
	  	ledGreen.strobe(500);

	},

	 piscarLedAmarelo : function(){
		
		var ledYellow = new five.Led(portaLedAmarelo);
		ledYellow.strobe(500);

	},
	desligarTodosLeds : function(){

		var ledRed = new five.Led(portaLedVermelho); 
		var ledGreen = new five.Led(portaLedVerde);
		var ledYellow = new five.Led(portaLedAmarelo);
	
		ledRed.off();
		ledGreen.off();
		ledYellow.off();
	},
	pararTodosLeds : function(){

		var ledRed = new five.Led(portaLedVermelho); 
		var ledGreen = new five.Led(portaLedVerde);
		var ledYellow = new five.Led(portaLedAmarelo);
		
		ledRed.stop();
		ledGreen.stop();
		ledYellow.stop();
	}
};

module.exports = arduino;
