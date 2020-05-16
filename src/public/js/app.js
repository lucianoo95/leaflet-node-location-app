// Instanciar leaflet y sockets.io
const map = L.map('map-template');

const tileURL = 'https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png';
const tile = L.tileLayer(tileURL);

// socket io
const socket = io.connect();

// Geolocation
map.locate({ enableHighAccuracy: true });
map.on('locationfound', e => {
  const coords = [e.latlng.lat, e.latlng.lng];
  const marker = L.marker(coords);
  marker.bindPopup('You are here!');
  map.locate({ setView: true, maxZoom: 15 });
  map.addLayer(marker);

  socket.emit('userCoords', e.latlng);
});

// socket new user connected
socket.on('newUserCoordinates', (coords) => {
  console.log('new user is connected!');

  const newMarker = L.marker([coords.lat, coords.lng]);
  newMarker.bindPopup('New user!');
  map.addLayer(newMarker);
});

map.addLayer(tile);

// const marker = L.marker(coords);
// marker.bindPopup('Hello there!');
// map.addLayer(marker);
