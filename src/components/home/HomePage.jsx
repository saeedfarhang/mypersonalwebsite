import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import AboutCodinguySection from "./AboutCodinguySection";
import BlogSection from "./BlogSection";
import ContactMeSection from "./ContactMeSection";
import PortfolioSection from "./PortfolioSection";
import ProfileSection from "./ProfileSection";
import PublishesSection from "./PublishesSection";
import TopSection from "./TopSection";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #242424;
  /* padding-top: 150px; */
  .section-seperator {
    height: 150px;
  }
`;

export default function HomePage() {
  return (
    <Container>
      <TopSection />
      <div className="section-seperator" id="profile-section"></div>
      <ProfileSection />
      <div className="section-seperator" id="portfolio-section"></div>
      <PortfolioSection />
      <div className="section-seperator" id="blog-section"></div>
      <BlogSection />
      <div className="section-seperator" id="publishes-section"></div>
      <PublishesSection />
      <div className="section-seperator" id="aboutcodinguy-section"></div>
      <AboutCodinguySection />
      <div className="section-seperator" id="contactme-section"></div>
      <ContactMeSection />
      <div className="section-seperator" id="footer-section"></div>
      <Footer />
    </Container>
  );
}
