window.onload = function() {
	var results = [
					{ name: "Starbucks", url: "http://www.starbucks.com", imageLink: "starbucks.png", address: "4400 University Drive", city: "Fairfax",state: "VA", zip: "22030", distance: "0.1" }, 
					{ name: "Dunkin' Donuts", url: "http://www.dunkindonuts.com", imageLink: "dunkindonuts.png", address: "4400 University Drive", city: "Fairfax",state: "VA", zip: "22030", distance: "0.2" },
					{ name: "Duck Donuts", url: "http://www.duckdonuts.com", imageLink: "duckdonuts.png", address: "4400 University Drive", city: "Fairfax",state: "VA", zip: "22030", distance: "0.5" },
					{ name: "Einstein Bros", url: "http://www.einsteinbros.com", imageLink: "einsteinbros.png", address: "4400 University Drive", city: "Fairfax",state: "VA", zip: "22030", distance: "1.1" }
				];
		
	resultList(results);
			
	function resultList(arr) {
		var out = "";
		var i;
		for(i = 0; i<arr.length; i++) {
			if(i == 0){
			  out += '<tr class="row">';
			}
			else{
				out += '<tr>';
			}
			out += '<td><a href="' + arr[i].url + '"><img src="' + arr[i].imageLink + '" alt="' + arr[i].name +'"/></a></td>\n';
			out += '<td>\n';
			out += '<h2>' + arr[i].name + '</h2>\n';
			out += '<h3>' + arr[i].address + '</h3>\n';
			out += '<h3>' + arr[i].city + ', ' + arr[i].state + ', ' + arr[i].zip + '</h3>\n';
			out += '<a href="http://www.maps.google.com"><h4>' + arr[i].distance + 'miles away<h4></a>';
			out += '</td>\n';
		}
		document.getElementById("results").innerHTML = out;
	}
    


}	




				