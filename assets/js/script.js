var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.615, lng: 237.659},
    zoom: 11
  });
}
