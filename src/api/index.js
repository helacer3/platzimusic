import config from './config'

const api_key = config.apiKey
const URL     = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${api_key}&format=json`;

export default function getArtists(country) {
	const url = URL.replace(':country',country);
	return fetch(url)
		.then(res => res.json())
		.then(json => json.topartists.artist)
}