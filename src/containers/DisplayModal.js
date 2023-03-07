import {
	Dialog,
	DialogContent,
	Grid,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import React from "react";
import AirPollution from "../air-pollution/air-pollution";
import CurrentWeather from "../current-weather/current-weather";
import CurrentPollen from "../pollen/pollen";

const DisplayModal = ({ setShowModal, showModal, activeItem }) => {
	const theme = useTheme();

	// display the Items of an entry
	return (
		<>
			<Dialog
				fullWidth={true}
				maxWidth="md"
				open={showModal}
				scroll="paper"
				aria-labelledby="scroll-dialog-title"
				aria-describedby="scroll-dialog-description"
				onClose={() => setShowModal(false)}
				sx={{
					margin: 0,
					padding: 0,
					".MuiDialog-paperScrollPaper": {
						borderRadius: "20px",
						backgroundColor: theme.palette.background.medium,
					},
				}}
			>
				<DialogContent
					sx={{
						width: "100%",
						margin: 0,
						p: 5,
						display: "flex",
						backgroundColor: theme.palette.background.medium,
					}}
				>
					{/* displaying the stored weather data for the entry */}
					<Grid container spacing={5}>
						<Grid item xs={12} sm={12} md={6}>
							<CurrentWeather data={activeItem?.currentWeather} />
							<AirPollution data={activeItem?.airPollution} />
							<CurrentPollen data={activeItem?.pollenLevels} />
						</Grid>
						{/* displaying the stored notes, title and symptoms etc for the entry */}
						<Grid item xs={12} sm={12} md={6}>
							<Stack direction="column" gap={2}>
								<Typography fontSize="22px">Heading:</Typography>
								<Stack
									direction="row"
									justifyContent="space-between"
									alignItems="center"
								>
									<Typography fontSize="18px">{activeItem?.title}</Typography>
									<Typography fontSize="18px">{activeItem?.date}</Typography>
								</Stack>
								<Typography fontSize="22px">Symptom:</Typography>
								<Typography fontSize="18px">{activeItem?.symptom}</Typography>
								<Typography fontSize="22px">Description:</Typography>
								<Typography fontSize="18px">{activeItem?.text}</Typography>
							</Stack>
						</Grid>
					</Grid>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default DisplayModal;
