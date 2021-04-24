import React from "react";
import styled from "styled-components";
import Button from "../elements/Button";
import MenuItem from "../elements/MenuItem";
import SocialLink from "../elements/SocialLink";
import Typography from "../elements/Typography";
const Container = styled.div`
  background-color: #2c2c2c;
  border-radius: 25px 25px 0 0;
  padding: 50px 10vw 20px 10vw;
  @media screen and (max-width: 585px) {
    padding: 50px 5vw 20px 5vw;
  }
  .foot-content {
    display: flex;
    justify-content: space-between;
  }
  .foot-texts {
    margin-bottom: 28px;
    svg {
      margin-left: 5px;
    }
  }
  .foot-social-btns {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
  }
  .foot-btns {
    display: flex;
    gap: 10px;
    margin-bottom: 50px;
    @media screen and (max-width: 838px) {
      flex-wrap: wrap;
    }
    @media screen and (max-width: 585px) {
      display: none;
    }
  }
  .foot-menu-items {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media screen and (max-width: 585px) {
      display: none;
    }
  }
  .foot-rights {
    width: 100%;
    margin-top: 20px;
  }
`;

export default function Footer(props) {
  return (
    <Container>
      <div className="foot-content">
        <div className="footer-content-container">
          <div className="foot-texts">
            <Typography
              textAlign="left"
              as="p"
              width="fit-content"
              fontSize="22px"
              fontWeight="bolder"
            >
              thanks for seeing my website
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.857"
                height="13"
                viewBox="0 0 14.857 13"
              >
                <path
                  id="Icon_awesome-heart"
                  data-name="Icon awesome-heart"
                  d="M13.414,3.137A3.968,3.968,0,0,0,8,3.531l-.572.589-.572-.589a3.968,3.968,0,0,0-5.415-.395,4.167,4.167,0,0,0-.287,6.033l5.615,5.8a.91.91,0,0,0,1.314,0l5.615-5.8a4.164,4.164,0,0,0-.284-6.033Z"
                  transform="translate(0.001 -2.248)"
                  fill="red"
                />
              </svg>
            </Typography>
            <Typography
              width="fit-content"
              textAlign="left"
              as="p"
              fontSize="16px"
              fontWeight="normal"
            >
              i really appreciate that. for knowing better about me, consider
              follow me on social media
            </Typography>
          </div>
          <div className="foot-social-btns">
            <SocialLink social="twitter" />
            <SocialLink social="twitter" />
            <SocialLink social="twitter" />
            <SocialLink social="twitter" />
            <SocialLink social="twitter" />
          </div>
          <div className="foot-btns">
            <Button icon="download">download my ressume</Button>
            <Button icon="download">donate me</Button>
            <Button icon="download">hire me</Button>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/scrolltotop.png`}
            alt="scroll to top"
          />
        </div>
        <div className="foot-menu-items">
          <MenuItem marginTop="0">profile</MenuItem>
          <MenuItem marginTop="40px">my portfolio</MenuItem>
          <MenuItem marginTop="40px">blog</MenuItem>
          <MenuItem marginTop="40px">publishes</MenuItem>
          <MenuItem marginTop="40px">about codinguy</MenuItem>
        </div>
      </div>
      <Typography
        as="p"
        fontSize="16px"
        fontWeight="100"
        width="fit-content"
        className="foot-rights"
      >
        © 2021 all rights reserve.
      </Typography>
    </Container>
  );
}
