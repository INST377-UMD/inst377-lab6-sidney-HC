function createMap() {
    var map = L.map('map').setView([38.98, -76], 5);
    const lat1 = getRandomInRange(30, 35, 3);
    const lat2 = getRandomInRange(30, 35, 3);
    const lat3 = getRandomInRange(30, 35, 3);

    const long1 =  getRandomInRange(-90, -100, 3);
    const long2 =  getRandomInRange(-90, -100, 3);
    const long3 =  getRandomInRange(-90, -100, 3);

    console.log(lat1, long1, lat2, long2, lat3, long3)

    const mark1 = document.getElementById("marker1");
    const mark2 = document.getElementById("marker2");
    const mark3 = document.getElementById("marker3");

    mark1.innerHTML += `Latitude: ${lat1}, Longitude: ${long1}`; 
    mark2.innerHTML += `Latitude: ${lat2}, Longitude: ${long2}`; 
    mark3.innerHTML += `Latitude: ${lat3}, Longitude: ${long3}`; 

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker1 = L.marker([lat1, long1]).addTo(map);
    var marker1 = L.marker([lat2, long2]).addTo(map);
    var marker1 = L.marker([lat3, long3]).addTo(map);

    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat1}&longitude=${long1}&localityLanguage=en`)
    .then(response => response.json()) .then(data => {
        const h3Element1 = document.getElementById("locality1");
        console.log(data.locality)
        
        h3Element1.innerHTML += data.locality; 
      });
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat2}&longitude=${long3}&localityLanguage=en`)
    .then(response => response.json()) .then(data => {
        const h3Element2 = document.getElementById("locality2");
        console.log(data.locality)
        
        h3Element2.innerHTML += data.locality; 
      });

    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat3}&longitude=${long3}&localityLanguage=en`)
    .then(response => response.json()) .then(data => {
        const h3Element3 = document.getElementById("locality3");
        console.log(data.locality)
        
        h3Element3.innerHTML += data.locality; 
      });
}

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
    }

window.onload = createMap;