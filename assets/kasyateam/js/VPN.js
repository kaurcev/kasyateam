	ymaps.ready(init);
	function init() {
		var geolocation = ymaps.geolocation, 
		coords = [geolocation.latitude, geolocation.longitude], 
		myMap = new ymaps.Map("get_info", {center: coords, zoom: 10});
		var country = geolocation.country;
		var city = geolocation.city;
		if (country == "Польша") {
                } else if (country == "Россия") {
                window.location.href = "/block";
                } else if (country == "undefined") {
                window.location.href = "/error";
                } else if (country == "Белоруссия") {
                } else if (country == "Украина") {
                } else if (country == "Казахстан") {
                } else if (city == "Челябинск") {
                alert("В вашем городе живёт пидорасина");
                } else {
                window.location.href = "/block"; 
                }
}
