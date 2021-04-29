import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import styled from "styled-components";
import PortFolioCard from "../../elements/PortFolioCard";
import SectionTitle from "../../elements/SectionTitle";
import { gsap, TweenLite, Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Typography from "../../elements/Typography";
import axios from "axios";

const Container = styled.div`
  .portfolio-cards-container {
    width: 100%;
    height: 200px;
    overflow-x: hidden;
  }
  .hold-shift-hint {
    display: flex;
    width: fit-content;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    @media screen and (max-width: 700px) {
      display: none;
    }
    img {
      margin: 0 5px;
    }
  }
  .portfolio-cards {
    padding: 30px 10vw;
    display: flex;
    width: max-content;
    @media screen and (max-width: 472px) {
      padding: 30px 5vw;
    }
  }
`;

export default function PortfolioSection(props) {
  const [portfolio, setPortfolio] = useState([]);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/data/portfolio.json`)
      .then((res) => setPortfolio(res.data));
    TweenLite.from(".portfolio-section-title", {
      scrollTrigger: {
        trigger: ".portfolio-section-title",
        scrub: 1,
        start: "center 80%",
        end: "center 250px",
      },
      duration: 1.3,
      opacity: 0,
      x: -10,
    });
    TweenLite.from(".hold-shift-hint", {
      scrollTrigger: {
        trigger: ".hold-shift-hint",
        scrub: 1,
        start: "center 80%",
        end: "center 250px",
      },
      opacity: 0,
      duration: 1.3,
      x: "-20vw",
    });
  }, []);
  return (
    <Container>
      <SectionTitle className="portfolio-section-title">portfolio</SectionTitle>
      <div className="hold-shift-hint">
        <Typography as="p" fontSize="14px" fontWeight="100">
          hold
        </Typography>
        <img
          src={`${process.env.PUBLIC_URL}/assets/shift-btn.png`}
          alt="shift button on keyboard"
        />
        <Typography as="p" fontSize="14px" fontWeight="100">
          to scroll horizontally!
        </Typography>
      </div>
      <Scrollbars
        autoHeight
        autoHeightMin={250}
        autoHeightMax={250}
        className="portfolio-cards-container"
      >
        <div className="portfolio-cards">
          {portfolio.map((item) => (
            <PortFolioCard title={item.title} href={item.url}>
              {item.snippet_text}
            </PortFolioCard>
          ))}
        </div>
      </Scrollbars>
    </Container>
  );
}
