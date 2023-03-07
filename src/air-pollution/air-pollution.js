import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ImageModal from "../containers/ImageModal";

const AirPollution = ({ data }) => {
	const [showModal, setShowModal] = useState(false);

	// air pollution component
	return (
		<>
			<ImageModal setShowModal={setShowModal} showModal={showModal} />
			<Stack direction="column" gap={1} mt={3}>
				<Stack direction="row" justifyContent="space-between">
					<Typography
						fontSize="16px"
						sx={{ textDecoration: "underline", cursor: "pointer" }}
						onClick={() => setShowModal(true)}
					>
						Air Quality Level
					</Typography>
					<Typography fontSize="16px">{data.list[0].main.aqi}</Typography>
				</Stack>
				<Stack direction="row" justifyContent="space-between">
					<Typography fontSize="16px">Carbon Monoxide</Typography>
					<Typography fontSize="16px">
						{Math.round(data.list[0].components.co)}
					</Typography>
				</Stack>
				<Stack direction="row" justifyContent="space-between">
					<Typography fontSize="16px">Nitrogen Monoxide</Typography>
					<Typography fontSize="16px">
						{Math.round(data.list[0].components.no)}
					</Typography>
				</Stack>
			</Stack>
		</>
	);
};

export default AirPollution;
