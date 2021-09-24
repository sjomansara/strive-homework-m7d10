import { Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerThreeQuarters, faTint, faWind } from '@fortawesome/free-solid-svg-icons'

const Hourly = () => {
    return (
        <div className="mx-5 my-3 shadow-sm" id="hourlyContainer">
            <Row className="p-4">
                <Col md={1}>
                    <h6 className="text-black ml-2">12 PM</h6>
                    <h6 className="text-muted ml-2">24/9</h6>
                </Col>
                <Col className="ml-4" md={1}>
                    <img src="https://image.flaticon.com/icons/png/512/164/164806.png" width="50px" height="50px"/>
                </Col>
                <Row className="ml-4 mr-4" cols={12}>
                <Col md={1}>
                    <FontAwesomeIcon className="text-muted" icon={faThermometerThreeQuarters} style={{fontSize: "30px", position: "relative", top: "15px"}} />
                </Col>
                <Col md={1}>
                    <h4 className="text-muted" style={{position: "relative", top: "15px"}}>10°</h4>
                </Col>
                </Row>
                <Col md={1}>
                    <h5 style={{position: "relative", top: "5px"}} className="text-muted ml-3">Partly cloudy</h5>
                </Col>
                <Row className="ml-5" cols={12}>
                <Col md={1}>
                    <FontAwesomeIcon className="text-muted" icon={faTint} style={{fontSize: "30px", position: "relative", top: "15px"}} />
                </Col>
                <Col md={1}>
                    <h4 className="text-muted" style={{position: "relative", top: "15px"}}>12%</h4>
                </Col>
                </Row>
                <Col md={1}>
                    <h5 style={{position: "relative", top: "5px"}} className="text-muted ml-5">Feels like:</h5>
                </Col>
                <Row cols={12} className="text-muted ml-1">
                <Col md={1}>
                    <FontAwesomeIcon className="" icon={faThermometerThreeQuarters} style={{fontSize: "30px", position: "relative", top: "15px"}} />
                </Col>
                <Col md={1}>
                    <h4 className="" style={{position: "relative", top: "15px"}}>8°</h4>
                </Col>
                </Row>
                <Row className="ml-4" cols={12}>
                <Col md={1}>
                    <FontAwesomeIcon className="text-muted ml-4" icon={faWind} style={{fontSize: "30px", position: "relative", top: "15px"}} />
                </Col>
                <Col md={1}>
                    <h4 className="ml-5 text-muted" style={{position: "relative", top: "15px"}}>6m/s</h4>
                </Col>
                </Row>
            </Row>
        </div>
    )
}

export default Hourly