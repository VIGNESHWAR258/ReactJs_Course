import Icons from './components/Icons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card, CardBody, Container, Button, Col, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState } from 'react';

const itemArray = new Array(9).fill("empty");

const App = () => {

  const [isCross, setIsCross] = useState(false)
  const [winMessage, setwinMessage] = useState("")

  const reloadGame = () => {
    setIsCross(false)
    setwinMessage("")
    itemArray.fill("empty",0,9)
  }

  const checkIswinner = () => {
    if(itemArray[0] === itemArray[1] && 
      itemArray[0] === itemArray[2] &&
      itemArray[0] != "empty") 
      {
        setwinMessage(`${itemArray[0]} wins`)
    } 
    else if(itemArray[3] === itemArray[4] && 
      itemArray[3] === itemArray[5] &&
      itemArray[3] != "empty") {
        setwinMessage(`${itemArray[3]} wins`)
    }
    else if(itemArray[6] === itemArray[7] && 
      itemArray[6] === itemArray[8] &&
      itemArray[6] != "empty") {
        setwinMessage(`${itemArray[6]} wins`)
    }
    else if(itemArray[0] === itemArray[3] && 
      itemArray[0] === itemArray[6] &&
      itemArray[0] != "empty") {
        setwinMessage(`${itemArray[0]} wins`)
    }
    else if(itemArray[1] === itemArray[4] && 
      itemArray[1] === itemArray[7] &&
      itemArray[1] != "empty") {
        setwinMessage(`${itemArray[1]} wins`)
    }
    else if(itemArray[2] === itemArray[5] && 
      itemArray[2] === itemArray[8] &&
      itemArray[2] != "empty") {
        setwinMessage(`${itemArray[2]} wins`)
    }
    else if(itemArray[0] === itemArray[4] && 
      itemArray[0] === itemArray[8] &&
      itemArray[0] != "empty") {
        setwinMessage(`${itemArray[0]} wins`)
    }else if(itemArray[2] === itemArray[4] && 
      itemArray[2] === itemArray[6] &&
      itemArray[2] != "empty") {
        setwinMessage(`${itemArray[2]} wins`)
    }
  }

  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, {type: "success"})
    }

    if(itemArray[itemNumber]==="empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross)
    } else {
      return toast("Already filled", {type: "error"})
    }

    checkIswinner()
  }

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-primary text-uppercase text-center">
                {winMessage}
              </h1>
              <Button 
              color="success"
              block
              onClick={reloadGame}>
                Reload the game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Cross" : "Circle"} turns
            </h1>
          ) }
          <div className="grid">
              {itemArray.map((item, index)=>(
                <Card color="warning" onClick={()=>changeItem(index)}>
                  <CardBody className="box">
                    <Icons name={item} />
                  </CardBody>
                </Card>
              ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
