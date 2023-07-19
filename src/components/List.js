import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col, Button} from 'react-bootstrap/'
import { BACKEND_URL } from "../Constants";


function List() {
  const [listdata, setListData] = useState([]);

  const fetchListData = async () => {
    const response = await axios.get(`${BACKEND_URL}/sightings`);
    setListData(response.data);
  };
  return (
    <div>
      <Button onClick={fetchListData}>Show List</Button>
        
          <ol className="fs-6 text-start">
            {listdata.map((item,index) =>{
                return (
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
                      </Row>
                      <Row>
                        <Col className="fs-6">{item.YEAR}</Col>
                        <Col className="fs-6">{item.SEASON}</Col>
                        <Col className="fs-6">{item.STATE}</Col>
                        <Col className="fs-6">{item.COUNTY}</Col>
                      </Row>
                    </Container>
                  </li>
                );
            })}
           </ol>
      
        
      
    </div>
  );
}

export default List;
