//USED TO GAINS ACCESS TO API INFORMATION

export const geoApiOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "b381577027mshfd009cddea2082ep10516ejsnf877b05f7d90",
		"X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
	},
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const pollenApiOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "b381577027mshfd009cddea2082ep10516ejsnf877b05f7d90",
		"X-RapidAPI-Host": "air-quality.p.rapidapi.com",
	},
};

export const POLLEN_API_URL = "https://air-quality.p.rapidapi.com/forecast";
export const POLLEN_API_KEY =
	"5d4d3ab144b0c5be76717e0eabf481d7e5606bd9b938b08186f950ec6d1b689e";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "8657f0c78e32c74e81b08838a06cb864";
