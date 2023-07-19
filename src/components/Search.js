import React, { useState, useEffect } from "react";
import axios from "axios";
import {  Container, Row, Col } from "react-bootstrap/";
import { BACKEND_URL } from "../Constants";

function Search() {
  const [yearData, setYearData] = useState([]);
  const [searchYear, setSearchYear] = useState("");

useEffect(() => {
    const fetchData = async () => {
      if (searchYear.trim() !== "") {
        const response = await axios.get(`${BACKEND_URL}/sightings`, {
          params: { YEAR: searchYear },
        });
        setYearData(response.data);
      } else {
        setYearData([]);
      }
    };

    fetchData();
  }, [searchYear]);

  return (
    <div className="search-panel">
      <div className="search-panel-body">
        <input
          type="text"
          placeholder="Enter year "
          value={searchYear}
          onChange={(e) => setSearchYear(e.target.value)}
        />
      </div>
      {/* Display the filtered data */}
      <ol className="fs-6 text-start">
        {yearData.map((item, index) => (
          <li key={index}>
            <Container>
              
              <Row>
                <Col>
                  <strong>Year:</strong>
                </Col>
                <Col>
                  <strong>Season:</strong>
                </Col>
                <Col>
                  <strong>State:</strong>
                </Col>
                <Col>
                  <strong>County:</strong>
                </Col>
                <Col>
                  <strong>Nearest Town:</strong>
                </Col>
                <Col>
                  <strong>Nearest Road:</strong>
                </Col>
              </Row>
              <Row>
                <Col className="fs-6">{item.YEAR}</Col>
                <Col className="fs-6">{item.SEASON}</Col>
                <Col className="fs-6">{item.STATE}</Col>
                <Col className="fs-6">{item.COUNTY}</Col>
                <Col className="fs-6">{item.NEAREST_TOWN}</Col>
                <Col className="fs-6">{item.NEAREST_ROAD}</Col>
              </Row>
              <br/>
              <Row><strong>Location Details:</strong></Row>
              <Row >{item.LOCATION_DETAILS}</Row>
              <br/>
              <Row >
              <strong>OBSERVED:</strong>
              </Row>
              <Row>{item.OBSERVED}</Row>
            </Container>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Search;
