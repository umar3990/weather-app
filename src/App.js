import React, { useMemo, useState } from "react";
//mui components
import { responsiveFontSizes } from "@mui/material/styles";
import {
	Box,
	Container,
	Grid,
	IconButton,
	ThemeProvider,
	useTheme,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

//react components
import Search from "./components/search/search";
import CurrentWeather from "./current-weather/current-weather";
import AirPollution from "./air-pollution/air-pollution";
import CurrentPollen from "./pollen/pollen";
//importing api keys
import { WEATHER_API_URL, WEATHER_API_KEY } from "./components/search/api";
import { POLLEN_API_URL, pollenApiOptions } from "./components/search/api";
//persisting redux state
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Main from "./containers/Main";
import { createCustomTheme } from "./createCustomTheme";

function App() {
	//theme setup
	//defining mode and a toggle function for it
	const [mode, setMode] = useState("light");
	const theme = useTheme();
	const toggleMode = () => {
		setMode((val) => (val === "light" ? "dark" : "light"));
	};
	//theme client for mui
	const themeClient = useMemo(() => {
		let theme = createCustomTheme(mode);
		theme = responsiveFontSizes(theme);
		return theme;
	}, [mode]);

	//null states full current status's
	const [currentWeather, setCurrentWeather] = useState(null);
	const [airPollution, setAirPollution] = useState(null);
	const [pollenLevels, setPollen] = useState(null);
	const handleOnSearchChange = (searchData) => {
		const [lat, lon] = searchData.value.split(" ");

		//fetch API data for different stats using lat and lon.

		const currentWeather = fetch(
			`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
		);

		const currentAirPollution = fetch(
			`${WEATHER_API_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
		);

		const currentPollen = fetch(
			`${POLLEN_API_URL}/airquality?lat=${lat}&lon=${lon}&fields=precipitation`,
			pollenApiOptions
		);
		//resolving promises and setting states
		Promise.all([currentWeather, currentAirPollution, currentPollen])
			.then(async (response) => {
				const weatherResponse = await response[0].json();
				const airPollutionResponse = await response[1].json();
				const pollenResponse = await response[2].json();

				setCurrentWeather({ city: searchData.label, ...weatherResponse });
				setAirPollution({ city: searchData.label, ...airPollutionResponse });
				setPollen({ city: searchData.label, ...pollenResponse.data[0] });
			})
			.catch(console.log);
	};

	return (
		<Box sx={{ my: 5 }}>
			{/* theme setup provider */}
			<ThemeProvider theme={themeClient}>
				<CssBaseline enableColorScheme />
				<Provider store={store}>
					{/* Main container */}
					<Container>
						<Box
							sx={{
								width: "100%",
								justifyContent: "center",
								display: "flex",
								alignItems: "center",
								gap: 2,
								mb: 5,
							}}
						>
							<Box
								sx={{
									width: "100%",
									maxWidth: "500px",
								}}
							>
								{/* search component */}
								<Search onSearchChange={handleOnSearchChange} mode={mode} />
							</Box>
							{/* theme toggling button */}
							<IconButton onClick={() => toggleMode()}>
								{mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
							</IconButton>
						</Box>
						<Grid container spacing={10}>
							<Grid item md={6} sm={12} xs={12}>
								{/* Weather Data Display components */}
								{currentWeather && <CurrentWeather data={currentWeather} />}
								{airPollution && <AirPollution data={airPollution} />}
								{pollenLevels && <CurrentPollen data={pollenLevels} />}
							</Grid>
							<Grid item md={6} sm={12} xs={12}>
								<Box
									sx={{
										backgroundColor: theme.palette.background.light,
										p: 1,
										borderRadius: 2,
									}}
								>
									<PersistGate loading={null} persistor={persistor}>
										{/* Form and diary */}
										<Main
											currentWeather={currentWeather}
											airPollution={airPollution}
											pollenLevels={pollenLevels}
										/>
									</PersistGate>
								</Box>
							</Grid>
						</Grid>
					</Container>
				</Provider>
			</ThemeProvider>
		</Box>
	);
}

export default App;
