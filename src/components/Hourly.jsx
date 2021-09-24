import { Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerThreeQuarters, faTint, faWind } from '@fortawesome/free-solid-svg-icons'

const Hourly = (props) => {
    const date = new Date(props.dt * 1000)

    const convertKelvinToCelsius = (temp) => {
        let celsius = temp - 273.15
        return Math.round(celsius)
    }

    const fixString = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const month = parseInt(date.getUTCMonth() + 1)
    
    return (
        <div className="mx-5 my-3 shadow-sm rounded" id="hourlyContainer">
            <Row className="p-4 ml-5">
                <Col md={1}>
                    <h5 className="text-black">{date.getHours()}:00</h5>
                    <h5 className="text-muted">{date.getUTCDate() + "/" + month}</h5>
                </Col>
                <Col className="ml-4" md={1}>
                    <img src="https://image.flaticon.com/icons/png/512/164/164806.png" width="50px" height="50px"/>
                </Col>
                <Row className="ml-4 mr-4" cols={12}>
                <Col md={1}>
                    <FontAwesomeIcon icon={faThermometerThreeQuarters} style={{fontSize: "30px", position: "relative", top: "15px", color: "#F8C146"}} />
                </Col>
                <Col md={1}>
                    <h4 className="text-muted" style={{position: "relative", top: "15px"}}>{convertKelvinToCelsius(props.temp)}°</h4>
                </Col>
                </Row>
                <Col md={1}>
                    <h5 style={{position: "relative", top: "5px"}} className="text-muted ml-3">{fixString(props.description)}</h5>
                </Col>
                <Row className="ml-5" cols={12}>
                <Col md={1}>
                    <FontAwesomeIcon icon={faTint} style={{fontSize: "30px", position: "relative", top: "15px", color: "#57C2F8"}} />
                </Col>
                <Col md={1}>
                    <h4 className="text-muted" style={{position: "relative", top: "15px"}}>{props.humidity}%</h4>
                </Col>
                </Row>
                <Col md={1}>
                    <h5 style={{position: "relative", top: "5px"}} className="text-muted ml-5">Feels like</h5>
                </Col>
                <Row cols={12} className="text-muted ml-1">
                <Col md={1}>
                    <h4 className="" style={{position: "relative", top: "15px"}}>{convertKelvinToCelsius(props.feelsLike)}°</h4>
                </Col>
                </Row>
                <Row className="ml-4" cols={12}>
                <Col md={1}>
                    <FontAwesomeIcon className="ml-4" icon={faWind} style={{fontSize: "30px", position: "relative", top: "15px", color: "#57C2F8"}} />
                </Col>
                <Col md={1}>
                    <h4 className="ml-5 text-muted" style={{position: "relative", top: "5px"}}>{props.windSpeed} <span style={{fontSize: "20px"}}>m/s</span></h4>
                </Col>
                </Row>
            </Row>
        </div>
    )
}

export default Hourly