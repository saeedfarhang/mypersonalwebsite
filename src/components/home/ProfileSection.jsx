import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Button from "../../elements/Button";
import SectionTitle from "../../elements/SectionTitle";
import Tag from "../../elements/Tag";
import Typography from "../../elements/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { gsap, TweenLite, Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Container = styled.div`
  position: relative;
  z-index: 1;
  .profile-text {
    margin: 30px 18vw 14px 18vw;
    max-width: 600px;
  }
  .download-btn {
    margin: 14px 18vw 14px 18vw;
  }
  .tags-container {
    margin-top: 80px;
  }

  .slick-slide {
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function ProfileSection(props) {
  const [tags, setTags] = useState([]);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    axios.get("data/ressumeTags.json").then((res) => {
      setTags(res.data);
    });

    TweenLite.from(".profile-section-title", {
      scrollTrigger: {
        trigger: ".profile-section-title",
        scrub: 1,
        start: "top 80%",
        end: "bottom 250px",
      },
      duration: 1.3,
      opacity: 0,
      x: -10,
    });
    TweenLite.from(".profile-text", {
      duration: 0.7,
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger: ".profile-text",
        scrub: 1,
        start: "top 80%",
        end: "top 250px",
      },
    });

    TweenLite.from(".ps-download-btn", {
      duration: 0.7,
      x: -1000,
      scrollTrigger: {
        trigger: ".profile-text",
        scrub: 1,
        start: "top 70%",
        end: "bottom 30%",
      },
    });
  }, []);

  const responsive = [
    { breakpoint: 450, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 3 } },
    { breakpoint: 800, settings: { slidesToShow: 4 } },
    { breakpoint: 1200, settings: { slidesToShow: 5 } },
    { breakpoint: 1800, settings: { slidesToShow: 7 } },
  ];
  return (
    <Container id="profile">
      <SectionTitle className="profile-section-title">profile</SectionTitle>
      <Typography
        as="p"
        fontSize="18px"
        fontWeight="300"
        className="profile-text"
        textAlign="left"
        lineHeight="32px"
      >
        frontend and backend developer - python (django) and javascript (react
        js) programmer - Absorbed by web programming world - also try to be a
        creative thinker - expert in teamwork - interested in solving problems
        that he has no idea how to solve - interested in training and
        transmitting information - Always learning - interested in open-source
        world - expert in graphic design and create simple animations
      </Typography>
      <div className="ps-download-btn">
        <Button className="download-btn" icon="download">
          download my ressume
        </Button>
      </div>
      <div className="tags-container">
        <Slider
          responsive={responsive}
          adaptiveHeight
          arrows={false}
          infinite
          autoplay={true}
          autoplaySpeed={1000}
          pauseOnHover={true}
        >
          {tags.map((tag) => {
            return (
              <div key={tag.id}>
                <Tag>{tag.title}</Tag>
              </div>
            );
          })}
        </Slider>
        <Slider
          responsive={responsive}
          adaptiveHeight
          rtl={true}
          arrows={false}
          infinite
          autoplay={true}
          autoplaySpeed={1000}
          pauseOnHover={true}
        >
          {tags.map((tag) => {
            return (
              <div key={tag.id}>
                <Tag>{tag.title}</Tag>
              </div>
            );
          })}
        </Slider>
      </div>
    </Container>
  );
}
