const coords = [-32.89084, -68.82717];
// Instanciar leaflet
const map = L.map('map-template').setView(coords, 10);
const tileURL = 'https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png';


L.tileLayer(tileURL).addTo(map);

// map.locate({ enableHighAccuracy: true })

const marker = L.marker(coords);
marker.bindPopup('Hello there!');
map.addLayer(marker);

const showPosition = (position) => {
    console.log(position.coords.latitude);
}

navigator.geolocation.getCurrentPosition(
    showPosition,
    null, {
        enableHighAccuracy: true,
        timeout: 5000,
        maxiumAge: 0
    })