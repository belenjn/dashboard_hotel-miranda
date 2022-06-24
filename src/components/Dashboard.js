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

  svg {
    display: grid;
    grid-column: 2;
    margin: auto;
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
  const [data] = useState([
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
  ]);
  const svgRef = useRef();

  useEffect(() => {
    const subgroups = ["sales", "occupancy"];

    // setting up the svg container

    const w = 600;
    const h = 470;

    const margin = { top: 10, bottom: 10, left: 20, right: 20 };

    const svg = d3
      .select(svgRef.current)
      .attr("width", w - margin.left - margin.right)
      .attr("height", h - margin.top - margin.bottom)
      .attr("viewBox", [0, -40, 550, 550]);

    // setting up the scaling

    const xScale = d3
      .scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, w - margin.right])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, 100])
      .range([h - margin.bottom, margin.top]);

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
      .attr("y", (d) => yScale(d.value))
      .attr("width", xSubgroup.bandwidth())
      .attr("height", (d) => h - yScale(d.value))
      .attr("fill", (d) => color(d.key));

    // setting the axes

    const xAxis = d3.axisBottom(xScale).tickFormat((i) => data[i].day);

    const yAxis = d3.axisLeft(yScale).ticks(5);
    svg.node();

    svg.append("g").call(xAxis).attr("transform", `translate(0, ${h})`);

    svg.append("g").call(yAxis);
  }, [data]);

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
