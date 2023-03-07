import {
	Box,
	Button,
	InputBase,
	MenuItem,
	OutlinedInput,
	Select,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import React, { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const names = [
	"Wheezing",
	"Coughing",
	"Chest tightness",
	"Shortness of breath",
	"Asthma Attack",
	"Frequent cough, especially at night",
	"Losing breath easily",
	"Feeling very tired and weak when exercising",
	"Wheezing or coughing after exercise",
	"Feeling tired, easily upset, grouchy, or moody",
	"Decreases in peak flow",
	"Signs of a cold or allergies",
	"Trouble sleeping",
];

function getStyles(name, personName, theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

export default function DiaryForm({
	addItem,
	currentWeather,
	airPollution,
	pollenLevels,
}) {
	const current = new Date();
	const [text, setText] = useState("");
	const [title, setTitle] = useState("");
	const [date, setDate] = useState(
		current.toLocaleDateString("en-GB").split("/").reverse().join("-")
	);
	const [status, setStatus] = useState("");
	const [symptom, setSymptom] = useState([]);

	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		setSymptom(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};

	//input values for diary

	const onSubmit = (event) => {
		event.preventDefault();
		if (
			title &&
			date &&
			text &&
			currentWeather &&
			airPollution &&
			pollenLevels &&
			symptom
		) {
			let s = symptom.length;
			let itemObject = {
				title: title,
				date: date,
				text: text,
				currentWeather: currentWeather,
				airPollution: airPollution,
				pollenLevels: pollenLevels,
				totalsymptom: s,
				symptom: symptom.toString(),
			};

			addItem(itemObject);
			setStatus("Data saved");
		} else {
			setStatus("Please fill in all fields");
		}
	};

	const theme = useTheme();

	return (
		<>
			<form onSubmit={onSubmit}>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
						gap: 2,
					}}
				>
					<Typography
						sx={{
							fontSize: "24px",
							textAlign: "center",
						}}
					>
						Please add a entry
					</Typography>
					<Stack direction="row" width="100%" gap={2}>
						<InputBase
							onChange={(event) => setTitle(event.target.value)}
							placeholder="Entry Title"
							sx={{
								width: "100%",
								border: `1px solid ${theme.palette.background.borderLight}`,
								borderRadius: "8px",
								p: 1,
							}}
						/>
						<InputBase
							onChange={(event) => setDate(event.target.value)}
							type="date"
							value={date}
							sx={{
								width: "100%",
								border: `1px solid ${theme.palette.background.borderLight}`,
								borderRadius: "8px",
								p: 1,
							}}
						/>
					</Stack>
					<Typography
						sx={{
							fontSize: "18px",
						}}
					>
						Select symptoms:
					</Typography>
					<Select
						fullWidth
						multiple
						value={symptom}
						onChange={handleChange}
						input={<OutlinedInput label="Symptom" />}
						MenuProps={MenuProps}
					>
						{names.map((name) => (
							<MenuItem
								key={name}
								value={name}
								style={getStyles(name, symptom, theme)}
							>
								{name}
							</MenuItem>
						))}
					</Select>
					<InputBase
						onChange={(event) => setText(event.target.value)}
						placeholder="Entry Notes"
						sx={{
							width: "100%",
							border: `1px solid ${theme.palette.background.borderLight}`,
							borderRadius: "8px",
							p: 1,
						}}
					/>
					<Button
						type="submit"
						variant="gradient"
						sx={{ width: "200px", mx: "auto" }}
					>
						Add Entry
					</Button>
					<Typography>{status}</Typography>
				</Box>
			</form>
		</>
	);
}
