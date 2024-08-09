
import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const TestMap = () => (
  <ComposableMap>
    <Geographies geography="https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json">
      {({ geographies }) =>
        geographies.map((geo) => (
          <Geography key={geo.rsmKey} geography={geo} />
        ))
      }
    </Geographies>
  </ComposableMap>
);

export default TestMap;
