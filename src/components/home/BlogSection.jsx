import React, { useEffect } from "react";
import styled from "styled-components";
import BlogCard from "../../elements/BlogCard";
import SectionTitle from "../../elements/SectionTitle";
import SeeMore from "../../elements/SeeMore";
import { gsap, TweenLite, Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Container = styled.div`
  .blogcards-container {
    padding: 60px 10vw 25px 10vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    @media screen and (max-width: 1015px) {
      padding: 60px 5vw 25px 5vw;
    }
    @media screen and (max-width: 815px) {
      padding: 60px 5vw 25px 5vw;
      grid-template-columns: 1fr;
    }
  }
  .b-seemore {
    margin: 0 10vw;
  }
`;

export default function BlogSection(props) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    TweenLite.from(".blog-section-title", {
      scrollTrigger: {
        scrub: 1,
        trigger: ".blog-section-title",
        start: "top 100%",
        end: "top 20%",
      },
      opacity: 0,
      x: "50vw",
    });
    TweenLite.from(".blogcards-container", {
      scrollTrigger: {
        trigger: ".blog-section-title",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
      },
      // duration: 1,
      opacity: 0,
      y: 100,
    });
    TweenLite.from(".b-seemore", {
      scrollTrigger: {
        scrub: 1,
        trigger: ".b-seemore",
        start: "top 80%",
        end: "top 70%",
      },
      x: "-100vw",
    });
  }, []);

  return (
    <Container>
      <SectionTitle className="blog-section-title">blog</SectionTitle>
      <div className="blogcards-container">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <SeeMore className="b-seemore" />
    </Container>
  );
}
