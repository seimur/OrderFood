var cb_vg = document.getElementById('cb_veg');
var sriuba = document.getElementById('sriubos');
var div_sriubos = document.getElementById('div_sriubos');
var salotos = document.getElementById('salotos');
var div_salotos = document.getElementById('div_salotos');
var halal = document.getElementById('halal');


sriuba.addEventListener("change", function(){
	if(sriuba.checked) {
		div_sriubos.style.display = "block";
	} else {
		div_sriubos.style.display = "none";
	}
});
salotos.addEventListener("change", function(){
	if(salotos.checked) {
		div_salotos.style.display = "block";
	} else {
		div_salotos.style.display = "none";
	}
});
cb_vg.addEventListener("change", function(){
	var sriubu_sarasas = document.getElementById('sriubu_sarasas').options;

	if(cb_veg.checked) {
		for(var i=0; i < sriubu_sarasas.length; i++){
			if(sriubu_sarasas[i].getAttribute("veg") == "false") {
				sriubu_sarasas[i].style.display = "none";
			} else {
				var selected = false;
				if(!selected) {
					sriubu_sarasas[i].setAttribute("selected", "true");
					selected = true;
				}
			}
		}
	} else {
		for(var i=0; i < sriubu_sarasas.length; i++){
			sriubu_sarasas[i].style.display = "block";
		}
	}
});
cb_vg.addEventListener("change", function(){
	var salotu_sarasas = document.getElementById('salotu_sarasas').options;
	
	if(cb_veg.checked) {
		for(var i=0; i < salotu_sarasas.length; i++){
			if(salotu_sarasas[i].getAttribute("veg") == "false") {
				salotu_sarasas[i].style.display = "none";
			} else {
				var selected = false;
				if(!selected) {
					salotu_sarasas[i].setAttribute("selected", "true");
					selected = true;
				}
			}
		}
	} else {
		for(var i=0; i < salotu_sarasas.length; i++){
			salotu_sarasas[i].style.display = "block";
		}
	}
});
halal.addEventListener("change", function(){
	var antru_sarasas = document.getElementById('antru_sarasas').options;
	
	if(halal.checked) {
		for(var i=0; i < antru_sarasas.length; i++){
			if(antru_sarasas[i].getAttribute("type") == "halal") {
				antru_sarasas[i].style.display = "block";
			}  
		}
	} else {
		for(var i=0; i < antru_sarasas.length; i++){
			if(antru_sarasas[i].getAttribute("type") == "halal") {
				antru_sarasas[i].style.display = "none";
			}
		}
	}
});
wheat.addEventListener("change", function(){
	var antru_sarasas = document.getElementById('antru_sarasas').options;
	
	if(wheat.checked) {
		for(var i=0; i < antru_sarasas.length; i++){
			if(antru_sarasas[i].getAttribute("type") == "wheat") {
				antru_sarasas[i].style.display = "block";
			}
		}
	} else {
		for(var i=0; i < antru_sarasas.length; i++){
			if(antru_sarasas[i].getAttribute("type") == "wheat") {
				antru_sarasas[i].style.display = "none";
			}
		}
	}
});
gluten.addEventListener("change", function(){
	var antru_sarasas = document.getElementById('antru_sarasas').options;
	
	if(gluten.checked) {
		for(var i=0; i < antru_sarasas.length; i++){
			if(antru_sarasas[i].getAttribute("type") == "gluten") {
				antru_sarasas[i].style.display = "block";
			}
		}
	} else {
		for(var i=0; i < antru_sarasas.length; i++){
			if(antru_sarasas[i].getAttribute("type") == "gluten") {
				antru_sarasas[i].style.display = "none";
			}
		}
	}
});
kosher.addEventListener("change", function(){
	var antru_sarasas = document.getElementById('antru_sarasas').options;
	
	if(kosher.checked) {
		for(var i=0; i < antru_sarasas.length; i++){
			if(antru_sarasas[i].getAttribute("type") == "kosher") {
				antru_sarasas[i].style.display = "block";
			}
		}
	} else {
		for(var i=0; i < antru_sarasas.length; i++){
			if(antru_sarasas[i].getAttribute("type") == "kosher") {
				antru_sarasas[i].style.display = "none";
			}
		}
	}
});
