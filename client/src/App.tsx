import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button variant={"primary"} as="a" >
          Button as link
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        Test
      </header>
      <Container>
        <Row>
          <Col className={"border"}>1 of 3</Col>
          <Col className={"border"} xs={6}>2 of 3 (wider)</Col>
          <Col className={"border"}>3 of 3</Col>
        </Row>
        <Row>
          <Col className={"border"}>1 of 3</Col>
          <Col className={"border"} xs={5}>2 of 3 (wider)</Col>
          <Col className={"border"}>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
