import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const name = "Sai Rakesh Polu";
const description = "I am Sai Rakesh Polu, a Graduate student at University at Albany. personal information will vary, depending on whether a person can be identified or is reasonably identifiable in the circumstances. For example, personal information may include: an individual's name, signature, address, phone number or date of birth. ";

function App() {
  return (
  <div>
    
    
    <Navbar />
    <Row><br></br></Row>
      <Row>
        
          <Col xs={3}>
            <div className="Container">
          <img src={require("./pic.jpg")} width="300" height="300" className="d-inline-block align-top" alt="" />
          </div>
          </Col>
          <Col>
          <div className="Container">
          <p className='namep'>{name}</p>
          <br></br>
          <p>{description}</p>
          </div>
          </Col>
      </Row>
          
  </div>
  );
}

export default App;
