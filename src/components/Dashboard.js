import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Box, Title } from "../styles/styles";

import { BiBed } from "react-icons/bi";
import * as d3 from "d3";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export const KpisContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  height: 130px;
  padding: 20px;

  div {
    border-radius: 12px;
    background-color: #ffffff;
    width: 300px;
    height: 125px;

    &:hover {
      cursor: pointer;
      transition: 0.2s ease;
      box-shadow: 0px 16px 30px #00000014;
    }

    .bed__icon {
      color: #e23428;
      width: 28px;
      height: 20px;
      margin: auto;
    }
  }
`;

export const ChartsContainer = styled.div`
  border-radius: 12px;
  padding: 20px;
  background-color: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: auto;
  margin-top: 50px;
  height: 460px;
  width: 100%;
  // overflow-x: scroll;
  //   overflow-y: hidden;

  svg {
    display: grid;
    grid-column: 2;
    margin: auto;
    height: 400px;
    width: 520px;
  }
`;

export const CalendarContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;

  .fc-toolbar-title {
    color: #393939;
    text-align: left;
    font-size: 20px;
    font-weight: 400;
  }
  .fc-button-group {
    width: 200px;
  }
  .fc-button-primary {
    display: flex;
    background-color: transparent;
    border: none;
    color: #393939;
    width: 30px;

    .fc-icon-chevron-right {
      margin-left: 55px;
    }
  }

  .fc-button-primary:hover {
    background-color: #135846;
    color: white;
    cursor: pointer;
  }

  .fc-today-button {
    display: none;
  }

  .fc-col-header-cell-cushion {
    color: #799283;
    font-size: 16px;
    font-weight: 300;
  }

  .fc .fc-toolbar-chunk:first-child:before {
    content: "Recent Booking Schedule";
    color: #393939;
  }

  .fc-toolbar-title {
    display: none;
  }
  .fc-daygrid-day-frame:before,
  .fc-daygrid-day-events:before,
  .fc-daygrid-event-harness:before,
  .fc-daygrid-day-frame:after,
  .fc-daygrid-day-events:after,
  .fc-daygrid-event-harness:after {
    display: none;
  }
  .fc-theme-standard .fc-scrollgrid,
  .fc-theme-standard th,
  .fc-scrollgrid td {
    border: 0;
  }
  h2.fc-toolbar-title,
  .fc .fc-toolbar-chunk:first-child:before {
    font-weight: 500;
    font-size: 1.125rem;
    color: #393939;
  }

  .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
    display: none;
  }
  .fc .fc-scroller-liquid-absolute {
    overflow: hidden !important;
  }
  .fc .fc-daygrid-day.fc-day-today {
    background-color: inherit;
    font-weight: bold;
  }

  .fc-theme-standard .fc-scrollgrid,
  .fc-theme-standard th,
  .fc-scrollgrid td {
    border: 0;
  }
`;

export const LegendContainer = styled.div`
  display: flex;
  jusitfy-content: left;
  padding: 25px;
  width: 80%;
`;

export const GreenSquadContainer = styled.div`
  display: flex;
  jusitfy-content: left;
  height: 20px;
  width: 50%;

  h4 {
    font-size: 14px;
    color: #393939;
    margin: auto;
    margin-left: -50px;
  }
`;

export const RedSquadContainer = styled(GreenSquadContainer)`
  h4 {
    margin-left: -30px;
  }
`;

export const GreenSquad = styled.div`
  background-color: #135846;
  width: 15px;
  height: 15px;
  margin: auto;
`;

export const RedSquad = styled(GreenSquad)`
  background-color: #e23428;
`;

export const Dashboard = () => {
  const data = [
    {
      day: "sunday",
      sales: 68,
      occupancy: 19,
    },
    {
      day: "monday",
      sales: 19,
      occupancy: 40,
    },
    {
      day: "tuesday",
      sales: 35,
      occupancy: 11,
    },
    {
      day: "wednesday",
      sales: 78,
      occupancy: 52,
    },
    {
      day: "thursday",
      sales: 13,
      occupancy: 61,
    },
    {
      day: "friday",
      sales: 46,
      occupancy: 32,
    },
    {
      day: "saturday",
      sales: 71,
      occupancy: 68,
    },
  ];

  const svgRef = useRef();

  useEffect(() => {
    const margin = { top: 10, right: 30, bottom: 20, left: 50 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;
    const subgroups = ["sales", "occupancy"];
    const divData = d3.select(".data");

    // New SVG
    const svg = d3
      .select(svgRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Axis X
    const xScale = d3
      .scaleBand()
      .domain(data.map((el) => el.day))
      .range([0, width])
      .padding([0.2]);
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale).tickSize(0))
      .attr("font-size", 10);
    // Axis Y
    const yScaleLeft = d3.scaleLinear().domain([0, 500]).range([height, 0]);
    svg.append("g").call(d3.axisLeft(yScaleLeft));

    const yScaleRight = d3.scaleLinear().domain([0, 100]).range([height, 0]);
    svg
      .append("g")
      .call(d3.axisRight(yScaleRight))
      .attr("transform", `translate(${width}, 0)`);

    // Bar charts
    const xSubgroup = d3
      .scaleBand()
      .domain(subgroups)
      .range([0, xScale.bandwidth()])
      .padding([0.05]);

    let color = d3
      .scaleOrdinal()
      .domain(subgroups)
      .range(["#135846", "#E23428"]);

    svg
      .append("g")
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", (d) => `translate(${xScale(d.day)}, 0)`)
      .selectAll("rect")
      .data((d) => subgroups.map((key) => ({ key, value: d[key] })))
      .enter()
      .append("rect")
      .attr("x", (d) => xSubgroup(d.key))
      .attr("y", (d) =>
        d.key === "sales" ? yScaleLeft(d.value) : yScaleRight(d.value)
      )
      .attr("width", xSubgroup.bandwidth())
      .attr("height", (d) =>
        d.key === "sales"
          ? height - yScaleLeft(d.value)
          : height - yScaleRight(d.value)
      )
      .attr("fill", (d) => color(d.key))

      // Mouse events
      .on("mouseenter", mouseEnter)
      .on("mouseleave", mouseLeave);
    //   .on("mousemove", mouseMove);

    // function mouseMove() {
    //   divData
    //     .style("top", parseInt(window.event.pageY - 110) + "px")
    //     .style("left", parseInt(window.event.pageX) + "px");
    // }
    // Funcion para los divs con los datos de las barras

    function mouseEnter(event, data) {
      data.key === "sales"
        ? divData
            .text("Sales: $" + data.value)
            .style("color", "#135846")
            .style("visibility", "visible")
        : divData
            .text("Ocuppancy: " + data.value + "%")
            .style("color", "#E23428")
            .style("visibility", "visible");
    }

    function mouseLeave(event, data) {
      divData.style("visibility", "hidden");
    }
  }, []);

  return (
    <>
      <Box>
        <Title>Dashboard</Title>
        <KpisContainer>
          <div>
            {/* <div
              style={{
                backgroundColor: "#FFEDEC",
                display: "flex",
                justifyContent: "center",
                height: "65px",
                width: "65px",
              }}
            >
               <BiBed className="bed__icon" /> 
            </div> */}
          </div>
          <div></div>
          <div></div>
        </KpisContainer>
        <ChartsContainer>
          <CalendarContainer>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
            />
          </CalendarContainer>

          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
            }}
          >
            <LegendContainer>
              <GreenSquadContainer>
                <GreenSquad />
                <h4>Sales</h4>
              </GreenSquadContainer>

              <RedSquadContainer>
                <RedSquad />
                <h4>Occupancy</h4>
              </RedSquadContainer>
            </LegendContainer>
            {/* <div className="data"
            style={{
              border: "1px solid red",
              height: "100px"
            }}>

            </div> 
            Div para mostrar los datos de las barras
            */}
            <svg ref={svgRef} />
          </div>
        </ChartsContainer>
      </Box>
      <div
        style={{
          width: "100%",
          height: "954px",
          backgroundColor: "#EBEBEB",
        }}
      ></div>
    </>
  );
};
