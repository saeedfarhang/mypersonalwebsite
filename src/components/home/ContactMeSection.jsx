import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../../elements/Button";
import SectionTitle from "../../elements/SectionTitle";
import SocialLink from "../../elements/SocialLink";
import TextField from "../../elements/TextField";
import Typography from "../../elements/Typography";
import { gsap, TweenLite, Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Container = styled.div`
  .cm-container {
    padding: 44px 10vw 0 10vw;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 860px) {
      flex-direction: column-reverse;
      align-items: center;
    }
  }
  .contactme-form-container {
    margin: 5%;
    min-width: 400px;
    width: 400px;
    @media screen and (max-width: 960px) {
      width: 350px;
      min-width: 350px;
    }
    @media screen and (max-width: 860px) {
      width: max-content;
      margin-top: 30px;
    }
    @media screen and (max-width: 428px) {
      width: 95%;
      min-width: 95%;
      margin-top: 30px;
    }
    .cm-send-btn {
      float: right;
    }
  }
  .cm-content {
    margin: 5%;
    max-width: 500px;
    @media screen and (max-width: 860px) {
      max-width: 100%;
    }
    .cm-content-text {
    }
    .cm-social-links {
      margin-top: 20px;
      display: flex;
    }
    .cm-donateme-btn {
      margin-top: 20px;
    }
  }
`;

export default function ContactMeSection(props) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    TweenLite.from(".cm-title-section", {
      scrollTrigger: {
        trigger: ".cm-title-section",
        scrub: 1,
        start: "top 85%",
        end: "top 20%",
      },
      opacity: 0,
      x: "50vw",
    });
    TweenLite.from(".contactme-form-container", {
      scrollTrigger: {
        trigger: ".contactme-form-container",
        scrub: 1,
        start: "top 75%",
        end: "top 30%",
      },
      opacity: 0,
      x: -100,
    });
    TweenLite.from(".cm-content", {
      scrollTrigger: {
        trigger: ".cm-content",
        scrub: 1,
        start: "top 75%",
        end: "top 30%",
      },
      opacity: 0,
      x: "100vw",
      display: "none",
    });
  }, []);
  return (
    <Container>
      <SectionTitle className="cm-title-section">contact me</SectionTitle>
      <div className="cm-container">
        <div className="contactme-form-container">
          <form action="">
            <TextField
              name="your beautiful name"
              placeholder="what should I call you?"
              helper=""
            ></TextField>
            <TextField
              name="your email"
              placeholder="i need it for response to your message."
              helper="I promise to not spam your email."
            ></TextField>
            <TextField
              name="your lovely message"
              placeholder="tell me what you think. or just say something funny."
              helper="please be clear about what you say. i gonna answer as soon as
            i can"
              intype="textarea"
            ></TextField>
            <Button
              className="cm-send-btn"
              variant="fill"
              fontWeight="bolder"
              icon="send"
            >
              Send
            </Button>
          </form>
        </div>
        <div className="cm-content">
          <Typography
            as="p"
            className="cm-content-text"
            fontSize="18px"
            fontWeight="100"
            textAlign="left"
            lineHeight="40px"
          >
            here you can send me messages. i'm really be happy to see what you
            think about me or codinguy. or just send me some thing funny. ask me
            questions or request something. I always read what you say and
            response as soon as I can.
          </Typography>
          <div className="cm-social-links">
            <SocialLink marginRight="12px" social="twitter" />
            <SocialLink marginRight="12px" social="twitter" />
            <SocialLink marginRight="12px" social="twitter" />
            <SocialLink marginRight="12px" social="twitter" />
          </div>
          <Button className="cm-donateme-btn" icon="download">
            donate me
          </Button>
        </div>
      </div>
    </Container>
  );
}
