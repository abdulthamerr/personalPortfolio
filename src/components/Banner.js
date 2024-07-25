import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import nameLogo from "../assets/img/nameLogo.png";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();

        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className = "banner" id="home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi I'm Abdul Thamer, a "}<span className="wrap">{text}</span> </h1>
                        <p>I'm currently a third year student pursuing Computer Science at MacEwan University. With hands-on experience in Full Stack Development, including web development, mobile apps, and various projects, I’ve gained valuable skills. I’m detail-oriented, quick to learn, self-motivated, and analytical. I’m enthusiastic about utilizing these skills to tackle meaningful projects and contribute positively to dynamic work environments.
                        </p>
                        <button onClick= {() => console.log('connect')}> Let's Connect <ArrowRightCircle size={25} /> </button>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={nameLogo} alt= "Header Image" />
                    </Col>
                </Row> 
            </Container>
        </section>
    )
}