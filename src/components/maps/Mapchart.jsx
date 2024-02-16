import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";
import '@styles/mapas.css'

const MapChart = () => {
  return (
    <section className="map">
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [1.0, 1.0, -5],
          center: [ -72.5078200, 7.8939100],
          scale: 1100
        }}
      >
        <Geographies
          geography="/features.json"
          fill="#D6D6DA"
          stroke="#FFFFFF"
          strokeWidth={0.5}
        >
          {({ geographies }) =>
            geographies.map((geo) =>(

              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Annotation
          subject={[-73, 8]}
          dx={-170}
          dy={-30}
          connectorProps={{
            stroke: "#FF5533",
            strokeWidth: 4,
            strokeLinecap: "round"
          }}
        >
          <text x="-10" textAnchor="end" alignmentBaseline="middle" fill="black">
            {"Cúcuta"}
          </text>
        </Annotation>
      </ComposableMap>
    </section>
  );
};

export default MapChart;
