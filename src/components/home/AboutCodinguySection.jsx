import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SectionTitle from "../../elements/SectionTitle";
import Typography from "../../elements/Typography";
import { gsap, TweenLite, Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Container = styled.div`
  position: relative;
  .acs-text {
    width: 555px;
    margin: 30px 15vw;
    @media screen and (max-width: 725px) {
      width: 400px;
    }
    @media screen and (max-width: 525px) {
      width: 70%;
      margin: 30px 15%;
    }
  }
  .acs-bg {
    position: absolute;
    right: 10vw;
    bottom: 0;
    transform: translateY(100px);
    @media screen and (max-width: 525px) {
      right: 5vw;
    }
  }
`;

export default function AboutCodinguySection(props) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    TweenLite.from(".acs-title-section", {
      scrollTrigger: {
        scrub: 1,
        trigger: ".acs-title-section",
        start: "top 90%",
        end: "top 85%",
      },
      opacity: 0,
      x: -10,
    });
    TweenLite.from(".acs-text", {
      scrollTrigger: {
        scrub: 1,
        trigger: ".acs-text",
        start: "top 70%",
        end: "top 70%",
      },
      opacity: 0,
      y: 10,
    });
    TweenLite.from(".acs-bg", {
      scrollTrigger: {
        // pin: true,
        trigger: ".acs-bg",
        scrub: 1,
        start: "top bottom",
        end: "bottom top",
      },
      y: -200,
    });
  }, []);
  return (
    <Container>
      <SectionTitle className="acs-title-section">
        what is codinguy?
      </SectionTitle>
      <Typography
        as="p"
        textAlign="left"
        lineHeight="40px"
        className="acs-text"
        fontSize="18px"
        fontWeight="100"
      >
        frontend and backend developer - python (django) and javascript (react
        js) programmer - Absorbed by web programming world - also try to be a
        creative thinker - expert in teamwork - interested in solving problems
        that he has no idea how to solve - interested in training and
        transmitting information - Always learning - interested in open-source
        world - expert in graphic design and create simple animations -
      </Typography>
      <div className="acs-bg">
        <img
          src={`${process.env.PUBLIC_URL}/assets/logoV1White.png`}
          alt="codinguy logo"
        />
      </div>
    </Container>
  );
}
