import React, { useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_pakistanLow from "@amcharts/amcharts4-geodata/pakistanLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const provincesData = [
  {
    id: "PK-SD",
    name: "Sindh",
    capital: "Karachi",
    latitude: 24.8607,
    longitude: 67.0011,
    color: "#FF5733" // Sindh ka color
  },
  {
    id: "PK-PB",
    name: "Punjab",
    capital: "Lahore",
    latitude: 31.5497,
    longitude: 74.3436,
    color: "#33FF57" // Punjab ka color
  },
  {
    id: "PK-KP",
    name: "Khyber Pakhtunkhwa",
    capital: "Peshawar",
    latitude: 34.0151,
    longitude: 71.5249,
    color: "#3357FF" // KP ka color
  },
  {
    id: "PK-BA",
    name: "Balochistan",
    capital: "Quetta",
    latitude: 30.1798,
    longitude: 66.9750,
    color: "#FF33A6" // Balochistan ka color
  },
];

const PakistanMap = () => {
  useLayoutEffect(() => {
    let chart = am4core.create("chartdiv", am4maps.MapChart);

    // Disable the amCharts logo
    chart.logo.disabled = true;

    // Set map definition
    chart.geodata = am4geodata_pakistanLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;

    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#74B266");

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");

    // Add capitals as points with different colors
    let imageSeries = chart.series.push(new am4maps.MapImageSeries());
    let imageTemplate = imageSeries.mapImages.template;
    imageTemplate.propertyFields.longitude = "longitude";
    imageTemplate.propertyFields.latitude = "latitude";
    imageTemplate.tooltipText = "{capital}";
    imageTemplate.propertyFields.fill = "color"; // Use color from data

    let circle = imageTemplate.createChild(am4core.Circle);
    circle.radius = 6;
    circle.fill = am4core.color("#B27799");
    circle.stroke = am4core.color("#FFFFFF");
    circle.strokeWidth = 2;
    circle.propertyFields.fill = "color"; // Apply color from data

    // Add province names as labels
    let label = imageTemplate.createChild(am4core.Label);
    label.text = "{name}";
    label.horizontalCenter = "middle";
    label.verticalCenter = "top";
    label.dy = -10; // Offset for label position
    label.fontSize = 10; // Font size for the labels
    label.fill = am4core.color("#000000"); // Text color

    imageSeries.data = provincesData;

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div id="chartdiv" style={{ width: "100%" }}></div>
  );
};

export default PakistanMap;
