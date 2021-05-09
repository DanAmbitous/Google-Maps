const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  const crd = pos.coords;

  mapping([crd.longitude, crd.latitude], 14)
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

function mapping(location, zoomLevel) {
  mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuYXN0b25zaGluZyIsImEiOiJja28wcGdrcDUwMzJ1Mm9zNWxqMTBkMjVhIn0.p-bu4zt5kUJAZ9rVi6-noQ';
  const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: location,
  zoom: zoomLevel
  });

  map.addControl(
    new MapboxDirections({
    accessToken: mapboxgl.accessToken
    }),
    'top-left'
    );
}