import React from "react";
import "./air-pollution.css";



const AirPollution = ({data}) => {

	return (

	 <div className="details1">
	 <div className="pollutionRow">
		<span className="pollutionLabel">Air Quality Level</span>
		<span className="pollutionValue">{data.list[0].main.aqi}</span>
	 </div>
	 <div className="pollutionRow">
		  <span className="pollutionLabel">Carbon Monoxide</span>
          <span className="pollutionValue">{Math.round(data.list[0].components.co)}</span>
	 </div>
	 <div className="pollutionRow">
		  <span className="pollutionLabel">Nitrogen Monoxide</span>
          <span className="pollutionValue">{Math.round(data.list[0].components.no)}</span>
	 </div>
	 </div>

	  
	 
	
	);

};

export default AirPollution;