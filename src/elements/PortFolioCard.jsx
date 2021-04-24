import React from "react";
import Scrollbars from "react-custom-scrollbars";
import styled from "styled-components";
import Typography from "./Typography";
const Container = styled.div`
  position: relative;
  width: 368px;
  height: 180px;
  background-color: #242424;
  box-shadow: 0 0 10px #00000016;
  margin-right: 10px;
  padding: 34px 10px 10px 28px;
  @media screen and (max-width: 472px) {
    width: 330px;
    padding: 34px 10px 10px 20px;
  }
  @media screen and (max-width: 340px) {
    width: 300px;
    padding: 34px 10px 10px 10px;
  }
  .pfc-title {
  }
  .pfc-desc {
    margin-top: 16px;
    max-height: 76px;
    width: 290px;
    /* overflow-y: auto; */
    @media screen and (max-width: 472px) {
      width: 260px;
    }
    @media screen and (max-width: 340px) {
      width: 240px;
    }
  }
  .open-link {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

export default function PortFolioCard(props) {
  return (
    <Container>
      <Typography
        as="h2"
        className="pfc-title"
        fontSize="20px"
        fontWeight="bolder"
        width="fit-content"
      >
        {props.title}
      </Typography>
      <Scrollbars className="pfc-desc" autoHide>
        <Typography
          as="p"
          className="pfc-desc"
          fontSize="16px"
          fontWeight="normal"
          textAlign="left"
          lineHeight="22px"
        >
          {props.children}
        </Typography>
      </Scrollbars>
      <div className="open-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="17.778"
          viewBox="0 0 20 17.778"
        >
          <path
            id="Icon_awesome-external-link-alt"
            data-name="Icon awesome-external-link-alt"
            d="M20,.833V5.277a.834.834,0,0,1-1.423.589l-1.24-1.24L8.882,13.082a.833.833,0,0,1-1.179,0L6.918,12.3a.833.833,0,0,1,0-1.179l8.456-8.456-1.24-1.24A.834.834,0,0,1,14.723,0h4.444A.833.833,0,0,1,20,.833ZM14.133,9.4l-.556.556a.833.833,0,0,0-.244.589v5.008H2.222V4.444h9.167a.833.833,0,0,0,.589-.244l.556-.556a.833.833,0,0,0-.589-1.423H1.667A1.667,1.667,0,0,0,0,3.889V16.111a1.667,1.667,0,0,0,1.667,1.667H13.889a1.667,1.667,0,0,0,1.667-1.667V9.992A.833.833,0,0,0,14.133,9.4Z"
            fill="#fff"
          />
        </svg>
      </div>
    </Container>
  );
}
