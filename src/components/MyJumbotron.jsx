import { useState } from "react"
import { Jumbotron, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid, faThermometerThreeQuarters, faUmbrella, faWind } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

const MyJumbotron = () => {
    const [isFavorite, setIsFavorite] = useState(false)

    const onFavorite = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <Jumbotron className="m-5 shadow-sm" id="jumbotron">
        <Row>
        <Col md={6}>
            <h2 className="ml-4">Stockholm <FontAwesomeIcon icon={isFavorite ? faStarSolid : faStar} onClick={onFavorite} style={{color: "#F8C146", fontSize: "27px"}}/></h2>
            <h5 className="text-muted ml-4">
                Stockholm, Stockholm Municipality, Sweden
            </h5>
        </Col>
        <Col md={6}>
            <h5>Current weather</h5>
        <Row>
            <Col md={1}>
                <img className="" src="https://www.frozenropes.com/natick/wp-content/uploads/sites/11/2021/06/sun-transparent.png" width="60px" height="60px"/>
            </Col>
            <Col md={1}>
                <FontAwesomeIcon className="ml-4 text-muted" icon={faThermometerThreeQuarters} style={{fontSize: "25px", position: "relative", top: "15px"}} />
            </Col>
            <Col md={1}>
                <h4 className="text-muted" style={{fontSize: "20px", position: "relative", top: "15px"}}>15°</h4>
            </Col>
            <Col md={1}>
                <FontAwesomeIcon className="text-muted ml-2" icon={faUmbrella} style={{fontSize: "25px", position: "relative", top: "15px"}} />
            </Col>
            <Col md={1}>
                <h4 className="text-muted" style={{fontSize: "20px", position: "relative", top: "15px"}}>0mm</h4>
            </Col>
            <Col md={1}>
                <FontAwesomeIcon className="text-muted ml-4" icon={faWind} style={{fontSize: "25px", position: "relative", top: "15px"}} />
            </Col>
            <Col md={1}>
                <h4 className="text-muted ml-2" style={{fontSize: "20px", position: "relative", top: "15px"}}>6m/s</h4>
            </Col>
        </Row>
        </Col>
        </Row>
        </Jumbotron>
    )
}

export default MyJumbotron