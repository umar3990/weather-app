import {
	Dialog,
	DialogContent,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import React from "react";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

const SortModal = ({ setShowSort, showSort, setSort }) => {
	const theme = useTheme();

	// sort modal by clicking
	return (
		<>
			<Dialog
				fullWidth={true}
				maxWidth="sm"
				open={showSort}
				scroll="paper"
				aria-labelledby="scroll-dialog-title"
				aria-describedby="scroll-dialog-description"
				onClose={() => setShowSort(false)}
				sx={{
					margin: 0,
					padding: 0,
					".MuiDialog-paperScrollPaper": {
						borderRadius: "20px",
						backgroundColor: theme.palette.background.medium,
					},
				}}
			>
				{/* options that can be selected for sorting */}
				<DialogContent
					sx={{
						width: "100%",
						margin: 0,
						p: 3,
						display: "flex",
						backgroundColor: theme.palette.background.medium,
					}}
				>
					<Stack
						direction="column"
						gap={1}
						sx={{
							width: "100%",
						}}
					>
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							gap={2}
							sx={{
								backgroundColor: theme.palette.background.light,
								p: 1.5,
								borderRadius: "10px",
								cursor: "pointer",
							}}
							onClick={() => {
								setSort(1);
								setShowSort(false);
							}}
						>
							<Typography>Sort by Symptoms Count Ascending</Typography>
							<ArrowUpward />
						</Stack>
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							align
							gap={2}
							sx={{
								backgroundColor: theme.palette.background.light,
								p: 1.5,
								borderRadius: "10px",
								cursor: "pointer",
							}}
							onClick={() => {
								setSort(2);
								setShowSort(false);
							}}
						>
							<Typography>Sort by Symptoms Count Descending</Typography>
							<ArrowDownward />
						</Stack>
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							align
							gap={2}
							sx={{
								backgroundColor: theme.palette.background.light,
								p: 1.5,
								borderRadius: "10px",
								cursor: "pointer",
							}}
							onClick={() => {
								setSort(3);
								setShowSort(false);
							}}
						>
							<Typography>Sort by Date Ascending</Typography>
							<ArrowUpward />
						</Stack>
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							align
							gap={2}
							sx={{
								backgroundColor: theme.palette.background.light,
								p: 1.5,
								borderRadius: "10px",
								cursor: "pointer",
							}}
							onClick={() => {
								setSort(4);
								setShowSort(false);
							}}
						>
							<Typography>Sort by Date Descending</Typography>
							<ArrowDownward />
						</Stack>
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							align
							gap={2}
							sx={{
								backgroundColor: theme.palette.background.light,
								p: 1.5,
								borderRadius: "10px",
								cursor: "pointer",
							}}
							onClick={() => {
								setSort(5);
								setShowSort(false);
							}}
						>
							<Typography>Sort by Pollen Count Ascending</Typography>
							<ArrowUpward />
						</Stack>
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							align
							gap={2}
							sx={{
								backgroundColor: theme.palette.background.light,
								p: 1.5,
								borderRadius: "10px",
								cursor: "pointer",
							}}
							onClick={() => {
								setSort(6);
								setShowSort(false);
							}}
						>
							<Typography>Sort by Pollen Count Descending</Typography>
							<ArrowDownward />
						</Stack>
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							align
							gap={2}
							sx={{
								backgroundColor: theme.palette.background.light,
								p: 1.5,
								borderRadius: "10px",
								cursor: "pointer",
							}}
							onClick={() => {
								setSort(7);
								setShowSort(false);
							}}
						>
							<Typography>Sort by AQI Level Ascending</Typography>
							<ArrowUpward />
						</Stack>
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							align
							gap={2}
							sx={{
								backgroundColor: theme.palette.background.light,
								p: 1.5,
								borderRadius: "10px",
								cursor: "pointer",
							}}
							onClick={() => {
								setSort(8);
								setShowSort(false);
							}}
						>
							<Typography>Sort by AQI Level Descending</Typography>
							<ArrowDownward />
						</Stack>
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							align
							gap={2}
							sx={{
								backgroundColor: theme.palette.background.light,
								p: 1.5,
								borderRadius: "10px",
								cursor: "pointer",
							}}
							onClick={() => {
								setSort(9);
								setShowSort(false);
							}}
						>
							<Typography>Sort by Humidity Level Ascending</Typography>
							<ArrowUpward />
						</Stack>
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							align
							gap={2}
							sx={{
								backgroundColor: theme.palette.background.light,
								p: 1.5,
								borderRadius: "10px",
								cursor: "pointer",
							}}
							onClick={() => {
								setSort(10);
								setShowSort(false);
							}}
						>
							<Typography>Sort by Humidity Level Descending</Typography>
							<ArrowDownward />
						</Stack>
					</Stack>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default SortModal;
