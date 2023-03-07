import { Box, Stack, Typography } from "@mui/material";
import React from "react";

//RETRIEVES DATA FROM API AMD DISPLAYS SELETECED DATA WITH A BREIF DESCRIPTION

const CurrentWeather = ({ data }) => {
	return (
		<>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="center"
				gap={2}
			>
				<img //DISPLAY ICON FOR WEATHER
					alt=""
					src={`icons/${data.weather[0].icon}.png`}
				/>
				<Box>
					<Typography fontSize="22px">{data.city}</Typography>
					<Typography fontSize="18px">{data.weather[0].description}</Typography>
					<Typography fontSize="18px">{Math.round(data.main.temp)}c</Typography>
				</Box>
			</Stack>

			<Stack direction="column" gap={1} mt={2}>
				<Stack direction="row" justifyContent="space-between">
					<Typography fontSize="16px">Feels like</Typography>
					<Typography fontSize="16px">
						{Math.round(data.main.feels_like)}c
					</Typography>
				</Stack>
				<Stack direction="row" justifyContent="space-between">
					<Typography fontSize="16px">Wind</Typography>
					<Typography fontSize="16px">{data.wind.speed} m/s</Typography>
				</Stack>
				<Stack direction="row" justifyContent="space-between">
					<Typography fontSize="16px">Humidity</Typography>
					<Typography fontSize="16px">{data.main.humidity}%</Typography>
				</Stack>
				<Stack direction="row" justifyContent="space-between">
					<Typography fontSize="16px">Pressure</Typography>
					<Typography fontSize="16px">{data.main.pressure} hPa</Typography>
				</Stack>
			</Stack>
		</>
	);
};

export default CurrentWeather;
