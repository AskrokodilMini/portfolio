//Script om kaart in map te steken met id mapWillebroek. Coordinaten zijn a en b
var map = L.map('map').setView([51.061704, 4.361374], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom:19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.061704, 4.361374]).addTo(map)
    .bindPopup('Hoofdkantoor Willebroek')
    .openPopup();