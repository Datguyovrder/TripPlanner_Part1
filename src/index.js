console.log("Hello from JS");

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1Ijoicmh1aTIxIiwiYSI6ImNqaW00MjRldTAwNTQzd3J0NDh3cXh6N3UifQ.rm8AX6Jqla4hltEut3byWQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const DOMElem = document.createElement("div");


new mapboxgl.Marker(DOMElem).setLngLat([-87.6354, 41.8885]).addTo(map);