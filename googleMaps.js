const mapping = (latitude, longitude) => {
  document.querySelector("#map").innerHTML = "";

  mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuYXN0b25zaGluZyIsImEiOiJja28wcGdrcDUwMzJ1Mm9zNWxqMTBkMjVhIn0.p-bu4zt5kUJAZ9rVi6-noQ';
  let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-v9',
  center: [longitude, latitude],
  zoom: 10
  });
  
  let layerList = document.getElementById('menu');
  let inputs = layerList.getElementsByTagName('input');
   
  function switchLayer(layer) {
  let layerId = layer.target.id;
  map.setStyle('mapbox://styles/mapbox/' + layerId);
  }
   
  for (let i = 0; i < inputs.length; i++) {
  inputs[i].onclick = switchLayer;
  }
  
  map.addControl(new mapboxgl.NavigationControl());

  map.addControl(new mapboxgl.FullscreenControl(
    {container: document.querySelector('body')}
  )
  );
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  const crd = pos.coords;

  mapping(crd.latitude, crd.longitude);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);