import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"


export const Banner = () => {
    return (
        <section className = "banner" id="home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi I'm Abdul Thamer"}<span className="wrap"> Web Developer</span> </h1>
                        <p>I'm currently a third year student pursuing Computer Science at MacEwan University. With hands-on experience in Full Stack Development, including web development, mobile apps, and various projects, I’ve gained valuable skills. I’m detail-oriented, quick to learn, self-motivated, and analytical. I’m enthusiastic about utilizing these skills to tackle meaningful projects and contribute positively to dynamic work environments.
                        </p>
                        <button onClick= {() => console.log('connect')}> Let's Connect <ArrowRightCircle size={25} /> </button>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt= "Header Image" />
                    </Col>
                </Row> 
            </Container>
        </section>
    )
}