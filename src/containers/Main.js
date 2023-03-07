import React, { useState } from "react";
import { addItem, deleteItem } from "../redux/actions";
import DiaryItem from "../components/diary/DiaryItem";
import { connect } from "react-redux";
import DiaryForm from "../components/diary/DiaryForm";
import {
	Box,
	Button,
	InputBase,
	MenuItem,
	Select,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import DisplayModal from "./DisplayModal";
import SortModal from "./SortModal";
import ImportExportIcon from "@mui/icons-material/ImportExport";

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

const Main = ({
	diaryItems,
	deleteItem,
	addItem,
	currentWeather,
	airPollution,
	pollenLevels,
}) => {
	const [activeItem, setActiveItem] = useState();
	const [showModal, setShowModal] = useState(false);
	const [showSort, setShowSort] = useState(false);
	const [sort, setSort] = useState(0);
	const [title, setTitle] = useState("");
	const [symptom, setSymptom] = useState("");

	const theme = useTheme();

	return (
		<>
			{/* sorting modal */}
			<SortModal
				showSort={showSort}
				setShowSort={setShowSort}
				setSort={setSort}
			/>
			{/* display diary items */}
			<DisplayModal
				activeItem={activeItem}
				showModal={showModal}
				setShowModal={setShowModal}
			/>
			{/* adding diary item */}
			<DiaryForm
				addItem={(item) => addItem(item)}
				currentWeather={currentWeather}
				airPollution={airPollution}
				pollenLevels={pollenLevels}
			/>
			{/* Diary Items */}
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
						fontWeight: 700,
					}}
				>
					Diary Tracking
				</Typography>
				<Typography
					sx={{
						fontSize: "18px",
						fontWeight: 400,
					}}
				>
					Search by:
				</Typography>
				{/* searching field */}
				<Stack direction="row" width="100%" gap={2}>
					<InputBase
						onChange={(event) => setTitle(event.target.value)}
						placeholder="Search by Title"
						sx={{
							width: "100%",
							border: `1px solid ${theme.palette.background.borderLight}`,
							borderRadius: "8px",
							p: 1,
						}}
					/>
					<Select
						fullWidth
						value={symptom}
						onChange={(event) => setSymptom(event.target.value)}
						displayEmpty
						inputProps={{ "aria-label": "Without label" }}
					>
						<MenuItem value={""}>Select Symptom</MenuItem>
						{names.map((name, i) => (
							<MenuItem key={i} value={name}>
								{name}
							</MenuItem>
						))}
					</Select>
				</Stack>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
					width="100%"
					gap={2}
				>
					<Typography
						sx={{
							fontSize: "20px",
						}}
					>
						You have{" "}
						{diaryItems.length === 0
							? "No Entries"
							: diaryItems.length === 1
							? "1 Entry"
							: `${diaryItems.length} Entries`}{" "}
						in your diary
					</Typography>
					<Button onClick={() => setShowSort(true)}>
						Sort by <ImportExportIcon />
					</Button>
				</Stack>

				{diaryItems.length > 0 ? (
					diaryItems
						// filtering by title
						.filter(function (el) {
							return el.title.includes(title);
						})
						// filtering by symptom
						.filter(function (el) {
							return el.symptom.includes(symptom);
						})
						// sorting by the selected option
						.sort(function (a, b) {
							if (sort === 1)
								return parseFloat(a.totalsymptom) - parseFloat(b.totalsymptom);
							else if (sort === 2)
								return parseFloat(b.totalsymptom) - parseFloat(a.totalsymptom);
							else if (sort === 3) {
								let aDate = new Date(a.date).getDate();
								let bDate = new Date(b.date).getDate();
								return parseFloat(aDate) - parseFloat(bDate);
							} else if (sort === 4) {
								let aDate = new Date(a.date).getDate();
								let bDate = new Date(b.date).getDate();
								return parseFloat(bDate) - parseFloat(aDate);
							} else if (sort === 5)
								return (
									parseFloat(a.pollenLevels.co) - parseFloat(b.pollenLevels.co)
								);
							else if (sort === 6)
								return (
									parseFloat(b.pollenLevels.co) - parseFloat(a.pollenLevels.co)
								);
							else if (sort === 7)
								return (
									parseFloat(a.pollenLevels.aqi) -
									parseFloat(b.pollenLevels.aqi)
								);
							else if (sort === 8)
								return (
									parseFloat(b.pollenLevels.aqi) -
									parseFloat(a.pollenLevels.aqi)
								);
							else if (sort === 9)
								return (
									parseFloat(a.currentWeather.main.humidity) -
									parseFloat(b.currentWeather.main.humidity)
								);
							else if (sort === 10)
								return (
									parseFloat(b.currentWeather.main.humidity) -
									parseFloat(a.currentWeather.main.humidity)
								);
						})
						// mapping the stored diary items
						.map((item) => {
							return (
								<DiaryItem
									deleteItem={(id) => deleteItem(id)}
									showModal={(item) => {
										setActiveItem(item);
										setShowModal(true);
									}}
									key={item.id}
									item={item}
								/>
							);
						})
				) : (
					// display if there is no diary item
					<Typography
						sx={{
							fontSize: "24px",
						}}
					>
						No Entries
					</Typography>
				)}
			</Box>
		</>
	);
};

const mapStateToProps = (state) => ({
	diaryItems: state.diaryItems,
});

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
	deleteItem: (id) => dispatch(deleteItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
