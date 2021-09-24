import { Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerThreeQuarters, faTint } from '@fortawesome/free-solid-svg-icons'

const Hourly = () => {
    return (
        <div className="mx-5 my-3 shadow-sm" id="hourlyContainer">
            <Row className="p-4">
                <Col md={1}>
                    <h6 className="text-black ml-2">12 PM</h6>
                    <h6 className="text-muted ml-2">24/9</h6>
                </Col>
                <Col md={1}>
                    <img src="https://image.flaticon.com/icons/png/512/164/164806.png" width="50px" height="50px"/>
                </Col>
                <Row className="mr-4" cols={12}>
                <Col md={1}>
                    <FontAwesomeIcon className="text-muted" icon={faThermometerThreeQuarters} style={{fontSize: "30px", position: "relative", top: "15px"}} />
                </Col>
                <Col md={1}>
                    <h4 className="text-muted" style={{position: "absolute", top: "15px"}}>10°</h4>
                </Col>
                </Row>
                <Col md={1}>
                    <h5 className="text-muted ml-3">Intermittent clouds</h5>
                </Col>
                <Row className="ml-5 mr-3" cols={12}>
                <Col md={1}>
                    <FontAwesomeIcon className="text-muted" icon={faTint} style={{fontSize: "30px", position: "relative", top: "15px"}} />
                </Col>
                <Col md={1}>
                    <h4 className="text-muted" style={{position: "absolute", top: "15px"}}>12%</h4>
                </Col>
                </Row>
                <Col md={1}>
                    <h5 className="text-muted ml-5">Feels like:</h5>
                </Col>
                <Row cols={12} className="ml-4">
                <Col md={1}>
                    <FontAwesomeIcon className="text-muted" icon={faThermometerThreeQuarters} style={{fontSize: "30px", position: "relative", top: "15px"}} />
                </Col>
                <Col md={1}>
                    <h4 className="text-muted" style={{position: "absolute", top: "15px"}}>8°</h4>
                </Col>
                </Row>
            </Row>
        </div>
    )
}

export default Hourly