import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlogCardMinimal from "../../elements/BlogCardMinimal";
import Button from "../../elements/Button";
import MenuItem from "../../elements/MenuItem";
import PublishCardMinimal from "../../elements/PublishCardMinimal";
import SocialLink from "../../elements/SocialLink";
import Typography from "../../elements/Typography";

const Container = styled.div`
  background-color: ${(props) => (props.menuOpen ? "#2C2C2C" : "#242424")};
  position: fixed;
  width: ${(props) => (props.menuOpen ? "95%" : "100%")};
  top: 0;
  left: 50%;
  display: ${(props) => (props.menuOpen ? "block" : "flex")};
  align-items: center;
  transform: translateX(-50%);
  /* right: auto; */
  height: ${(props) =>
    props.offsetYc <= 150
      ? props.menuOpen
        ? "500px"
        : "150px"
      : props.menuOpen
      ? "500px"
      : "100px"};
  @media screen and (max-width: 1210px) {
    height: ${(props) =>
      props.offsetYc <= 150
        ? props.menuOpen
          ? "650px"
          : "150px"
        : props.menuOpen
        ? "650px"
        : "100px"};
  }
  @media screen and (max-width: 722px) {
    /* height: ${(props) => (props.menuOpen ? "520px" : "150px")}; */
    height: ${(props) =>
      props.offsetYc <= 150
        ? props.menuOpen
          ? "520px"
          : "120px"
        : props.menuOpen
        ? "520px"
        : "100px"};
  }
  z-index: 100;
  border-radius: ${(props) => (props.menuOpen ? "0 0 25px 25px" : "0")};
  transition: height 0.2s ease;
  .close-menu-container {
    width: ${(props) => (props.menuOpen ? "unset" : "100%")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 64px 80px 70px 80px;
    @media screen and (max-width: 517px) {
      margin: 64px 50px 70px 50px;
    }
    @media screen and (max-width: 440px) {
      margin: 64px 30px 70px 30px;
    }
    .name-holder {
      display: flex;
      justify-content: center;
      transform: ${(props) => (props.menuOpen ? "translateX(-2.5vw)" : "")};
      margin-right: 10px;
      .name-holder-text {
        font-size: 24px;
      }
      .name-holder-slash {
        margin: 0 10px;
      }
      @media screen and (max-width: 440px) {
        .name-holder-text {
          font-size: 18px;
        }
      }
    }
    .hamb-menu {
      transform: ${(props) => (props.menuOpen ? "translateX(2.5vw)" : "")};

      .hamb-menu-line {
        width: 45px;
        height: 2px;
        background-color: #ffffff;
        margin: 6px 0;
      }
      .hamb-menu-line-1 {
        transition: all 0.2s ease-in-out;
        width: ${(props) => (props.menuOpen ? "24px" : "45px")};
        transform: ${(props) => (props.menuOpen ? "translateX(21px)" : "")};
      }
    }
  }
  .open-menu-container {
    display: ${(props) => (props.menuOpen ? "flex" : "none")};
    justify-content: space-evenly;
    align-items: baseline;
    margin: 0 80px;
    @media screen and (max-width: 1210px) {
      margin: 0 50px;
    }
    .nav-menu-items {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .nav-extra-content-container {
      @media screen and (max-width: 578px) {
        display: none;
      }
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-left: 35px;
      .nav-buttons {
        display: flex;
        width: 100%;
        align-items: center;
        .nav-btns {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }
        .nav-social-btns {
          display: flex;
          margin-left: 30px;
          @media screen and (max-width: 1210px) {
            margin-left: 10px;
          }
        }
      }
      .nav-contents {
        width: 100%;
        margin-top: 40px;
        display: flex;
        @media screen and (max-width: 1210px) {
          flex-direction: column;
          align-items: stretch;
        }
        @media screen and (max-width: 940px) {
          align-items: center;
        }
        .nav-publishes {
          width: 100%;
          display: flex;
          @media screen and (max-width: 940px) {
            justify-content: center;
            .pcm-last-child {
              display: none;
            }
          }
          @media screen and (max-width: 722px) {
            display: none;
          }
        }
        .nav-blogs {
          width: fit-content;
          display: flex;
          flex-direction: column;
          margin-left: 30px;
          margin-top: 30px;
        }
        @media screen and (max-width: 578px) {
          display: none;
        }
      }
    }
  }
  .nav-overly {
    display: ${(props) => (props.menuOpen ? "block" : "none")};
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [offsetYc, setOffsetYc] = useState(0);
  const handleScroll = () => {
    setOffsetYc(window.scrollY);
    setMenuOpen(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Container menuOpen={menuOpen} offsetYc={offsetYc}>
      <div className="close-menu-container">
        <div className="name-holder">
          <Typography
            className="name-holder-sf name-holder-text"
            as="h2"
            // fontSize="24px"
            fontWeight="bold"
          >
            saeedfarhang
          </Typography>
          <Typography
            className="name-holder-slash name-holder-text"
            as="h2"
            // fontSize="24px"
            fontWeight="bold"
          >
            /
          </Typography>
          <Typography
            className="name-holder-cg name-holder-text"
            as="h2"
            // fontSize="24px"
            fontWeight="bold"
          >
            codinguy
          </Typography>
        </div>
        <div
          className="hamb-menu"
          onClick={() => setMenuOpen((state) => !state)}
        >
          <div className="hamb-menu-line hamb-menu-line-1"></div>
          <div className="hamb-menu-line hamb-menu-line-2"></div>
        </div>
      </div>
      <div className="open-menu-container">
        <div className="nav-menu-items">
          <MenuItem marginTop="0">profile</MenuItem>
          <MenuItem marginTop="40px">my portfolio</MenuItem>
          <MenuItem marginTop="40px">blog</MenuItem>
          <MenuItem marginTop="40px">publishes</MenuItem>
          <MenuItem marginTop="40px">about codinguy</MenuItem>
        </div>
        <div className="nav-extra-content-container">
          <div className="nav-buttons">
            <div className="nav-btns">
              <Button margin="5px 12px 5px 0" icon="download">
                download my ressume
              </Button>
              <Button margin="5px 12px 5px 0" icon="download">
                donate me
              </Button>
              <Button margin="5px 12px 5px 0" icon="download">
                hire me
              </Button>
              <div className="nav-social-btns">
                <SocialLink marginRight="12px" social="twitter" />
                <SocialLink marginRight="12px" social="twitter" />
                <SocialLink marginRight="12px" social="twitter" />
                <SocialLink marginRight="12px" social="twitter" />
                <SocialLink marginRight="12px" social="twitter" />
              </div>
            </div>
          </div>
          <div className="nav-contents">
            <div className="nav-publishes">
              <PublishCardMinimal />
              <PublishCardMinimal className="pcm-last-child" />
            </div>
            <div className="nav-blogs">
              <BlogCardMinimal />
              <BlogCardMinimal />
            </div>
          </div>
        </div>
      </div>
      <div className="nav-overly" onClick={() => setMenuOpen(false)}></div>
    </Container>
  );
}
