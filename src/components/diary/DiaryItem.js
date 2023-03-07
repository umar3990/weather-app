import React from "react";
import { Delete, Visibility } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

export default function DiaryItem({ item, showModal, deleteItem }) {
	// reuseable diary item component
	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					width: "60%",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Typography>{item.title}</Typography>
				<Typography
					sx={{
						width: "150px",
						whiteSpace: "nowrap",
						overflow: "hidden",
						textOverflow: "ellipsis",
					}}
				>
					{item.symptom}
				</Typography>
			</Box>

			<Box
				sx={{
					width: "40%",
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-end",
					gap: 2,
				}}
			>
				{item.date}
				<IconButton onClick={() => showModal(item)}>
					<Visibility />
				</IconButton>
				<IconButton onClick={() => deleteItem(item.id)}>
					<Delete />
				</IconButton>
			</Box>
		</Box>
	);
}
