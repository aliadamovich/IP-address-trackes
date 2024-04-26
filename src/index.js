import { validateIp, addTileLayer,getIpAddress, addOffset } from './helpers';
// import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from '../images/icon-location.svg';

const inputValue = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');

const ipInfo = document.getElementById('ip');
const ipLocation = document.getElementById('location');
const ipTimezone = document.getElementById('timezone');
const ipIsp = document.getElementById('isp');

btn.addEventListener('click', getData);
inputValue.addEventListener('keydown', handleKey);
document.addEventListener('DOMContentLoaded', () => {
	getIpAddress('46.17.46.213').then(writeInfo)
})

function getData() {
	
	if (validateIp(inputValue.value)) {
		getIpAddress(inputValue.value)
			.then(writeInfo)
	}
}

function handleKey(e) {
	if(e.key === 'Enter') {
		getData()
	}
}

function writeInfo(mapData) {
	ipInfo.innerText = mapData.ip_address;
	ipLocation.innerText = mapData.country + " " + mapData.city;
	ipTimezone.innerText = mapData.timezone.gmt_offset;
	ipIsp.innerText = mapData.connection.isp_name;

	map.setView([mapData.latitude, mapData.longitude], 10);
	L.marker([mapData.latitude, mapData.longitude], { icon: markerIcon }).addTo(map)

	if (matchMedia("(max-width: 1023px)").matches) {
		addOffset(map);
	}
}


var map = L.map('map').setView([51.505, -0.09], 13);

addTileLayer(map);

const markerIcon = L.icon({
	iconUrl: icon,
	iconSize: [30, 40]
})

L.marker([51.5, -0.09], { icon: markerIcon }).addTo(map);


