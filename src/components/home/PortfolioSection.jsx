import React, { useEffect } from "react";
import Scrollbars from "react-custom-scrollbars";
import styled from "styled-components";
import PortFolioCard from "../../elements/PortFolioCard";
import SectionTitle from "../../elements/SectionTitle";
import { gsap, TweenLite, Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Typography from "../../elements/Typography";

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
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
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
          <PortFolioCard title="Lorem ipsum" href="">
            Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit
            amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula
            sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet
            et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor
            sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem
            ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia
            in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor
            sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in
            ipsum id orci porta dapibus.
          </PortFolioCard>
          <PortFolioCard title="Lorem ipsum" href="">
            Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit
            amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula
            sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet
            et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor
            sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem
            ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia
            in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor
            sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in
            ipsum id orci porta dapibus.
          </PortFolioCard>
          <PortFolioCard title="Lorem ipsum" href="">
            Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit
            amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula
            sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet
            et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor
            sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem
            ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia
            in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor
            sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in
            ipsum id orci porta dapibus.
          </PortFolioCard>
        </div>
      </Scrollbars>
    </Container>
  );
}
