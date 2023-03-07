import { Box } from "@mui/material";
import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

import { geoApiOptions, GEO_API_URL } from "./api";

const Search = ({ onSearchChange, mode }) => {
	const [search, setSearch] = useState(null);

	const handleOnChange = (searchData) => {
		setSearch(searchData); //update search
		onSearchChange(searchData);
	};

	// fetches data from API for cities and population
	const loadOptions = (inputValue) => {
		return fetch(
			`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
			geoApiOptions
		)
			.then((response) => response.json())
			.then((response) => {
				return {
					options: response.data.map((city) => {
						return {
							value: `${city.latitude} ${city.longitude}`,
							label: `${city.name}, ${city.countryCode}`,
						};
					}),
				};
			});
	};

	//components for display
	return (
		<Box
			sx={{
				"& #react-select-2-listbox": {
					backgroundColor:
						mode === "dark" ? "#151515 !important" : "#fff !important",
				},
				"& #react-select-3-listbox": {
					backgroundColor:
						mode === "dark" ? "#151515 !important" : "#fff !important",
				},
				"& .css1nmdiq5-menu": {
					backgroundColor:
						mode === "dark" ? "#151515 !important" : "#fff !important",
				},
			}}
		>
			<AsyncPaginate
				placeholder="Search for city"
				debounceTimeout={600}
				value={search}
				onChange={handleOnChange}
				loadOptions={loadOptions}
			/>
		</Box>
	);
};

export default Search;
