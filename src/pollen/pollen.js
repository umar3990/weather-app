//WORK IN PROGRESS
import { Stack, Typography } from "@mui/material";
import React from "react";

const CurrentPollen = ({ data }) => {
	return (
		<Stack direction="column" gap={1} mt={3}>
			<Stack direction="row" justifyContent="space-between">
				<Typography fontSize="16px">AQI</Typography>
				<Typography fontSize="16px">{data.aqi}</Typography>
			</Stack>
			<Stack direction="row" justifyContent="space-between">
				<Typography fontSize="16px">Pollen Count</Typography>
				<Typography fontSize="16px">{Math.round(data.co)}</Typography>
			</Stack>
			<Stack direction="row" justifyContent="space-between">
				<Typography fontSize="16px">NO2</Typography>
				<Typography fontSize="16px">{Math.round(data.no2)}</Typography>
			</Stack>
			<Stack direction="row" justifyContent="space-between">
				<Typography fontSize="16px">SO2</Typography>
				<Typography fontSize="16px">{data.so2}</Typography>
			</Stack>
		</Stack>
	);
};

export default CurrentPollen;
