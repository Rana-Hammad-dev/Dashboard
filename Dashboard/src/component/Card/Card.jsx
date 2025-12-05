import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import "./Card.css";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="main">


      {expanded ? (
        <ExpandedCard {...props} setExpanded={setExpanded} />
      ) : (
        <CompactCard {...props} setExpanded={setExpanded} />
      )}

    </div>
  );
};

/* ----------------- Compact Card ----------------- */

function CompactCard({ color, barValue, value, png: Icon, title, setExpanded }) {
  return (
    <div
      className="compactCard"
      onClick={() => setExpanded(true)}
      style={{
        background: color.background,
        boxShadow: color.boxShadow,
      }}
    >
      <div className="radialBar">
        <CircularProgressbar value={barValue} text={`${barValue}%`} />
        <span className="cardTitle">{title}</span>
      </div>

      <div className="detail">
        <Icon />
        <span className="value">${value}</span>
        <span className="time">Last 24 hours</span>
      </div>
    </div>
  );
}

/* ----------------- Expanded Card ----------------- */

function ExpandedCard({ color, title, series, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <div
      className="expandedCard"
      style={{
        background: color.background,
        boxShadow: color.boxShadow,
      }}
    >
      <UilTimes className="closeBtn" onClick={() => setExpanded(false)} />

      <span className="expandedTitle">{title}</span>

      <div className="chartContainer">
        <Chart options={data.options} series={series} type="area" height={230} />
      </div>

      <span className="expandedFooter">Last 24 hours</span>
    </div>
  );
}

export default Card;
