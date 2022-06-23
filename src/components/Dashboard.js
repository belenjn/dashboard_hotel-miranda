import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Box, Title } from "../styles/styles";

import datachart from "../database/barchart.json";

import { BiBed } from "react-icons/bi";
import * as d3 from "d3";

export const KpisContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  height: 130px;

  div {
    border-radius: 12px;
    background-color: #ffffff;
    width: 340px;
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
  border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 50px;
  height: 460px;
  width: 100%;

  svg {
    display: grid;
    grid-column: 2;

  }
`;

// export const Chart = styled.div`
//   border: 1px solid green;
//   display: grid;
//   grid-column: 2;
//   height: 100%;
//   width: 100%;
// `;

export const Dashboard = () => {
  const [data] = useState([
    {
      day: "sunday",
      check_in: 68,
      check_out: 19,
    },
    {
      day: "monday",
      check_in: 19,
      check_out: 40,
    },
    {
      day: "tuesday",
      check_in: 35,
      check_out: 11,
    },
    {
      day: "wednesday",
      check_in: 78,
      check_out: 52,
    },
    {
      day: "thursday",
      check_in: 13,
      check_out: 61,
    },
    {
      day: "friday",
      check_in: 46,
      check_out: 32,
    },
    {
      day: "saturday",
      check_in: 71,
      check_out: 68,
    },
  ]);
  const svgRef = useRef();

  useEffect(() => {
    // setting up the svg container

    const w = 600;
    const h = 500;

    const margin = {top: 30, bottom: 10, left: 20, right: 20}

    const svg = d3
      .select(svgRef.current)
      .attr("width", w - margin.left - margin.right)
      .attr("height", h - margin.top - margin.bottom)
      .attr("viewBox", [0, -20, 550, 575])

    // setting up the scaling
    const xScale = d3
      .scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, w - margin.right])
      .padding(0.6);

    const yScale = d3.scaleLinear().domain([0, 100]).range([h - margin.bottom, margin.top]);

    svg
      .append("g")
      .attr("fill", "#135846")
      .selectAll("rect")
      .data(data.sort((a, b) => d3.descending(a.check_in, b.check_in)))
      .join("rect")
      .attr("x", (d, i) => xScale(i))
      .attr("y", (d) => yScale(d.check_in))
      .attr("height", (d) => yScale(0) - yScale(d.check_in))
      .attr("width", xScale.bandwidth());


    // setting the axes

    const xAxis = d3.axisBottom(xScale).tickFormat(i => data[i].day);

    const yAxis = d3.axisLeft(yScale).ticks(5);
    svg.node();


    svg.append("g").call(xAxis).attr("transform", `translate(0, ${h})`);

    svg.append("g").call(yAxis);

    // setting the svg data
  }, [data]);

  return (
    <>
      <Box>
        <Title>Dashboard</Title>
        <ChartsContainer>
          <svg ref={svgRef} />
        </ChartsContainer>
        {/*         
        <KpisContainer>
          <div>
            <div
              style={{
                backgroundColor: "#FFEDEC",
                display: "flex",
                justifyContent: "center",
                height: "65px",
                width: "65px",
              }}
            >
              <BiBed className="bed__icon" />
            </div>
          </div>
          <div>probando</div>
          <div>probando</div>
          <div>probando</div>
        </KpisContainer> */}
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
