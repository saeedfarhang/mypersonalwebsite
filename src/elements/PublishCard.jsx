import React from "react";
import styled from "styled-components";
import Typography from "./Typography";
const Container = styled.div`
  min-width: 260px;
  max-width: 260px;
  width: 100%;
  min-height: 230px;
  box-shadow: 0 0 10px #00000016;
  background-color: #242424;
  margin: ${(props) => props.margin};
  @media screen and (max-width: 380px) {
    min-width: 260px;
    max-width: 350px;
  }
  @media screen and (max-width: 540px) {
    min-width: 200px;
    max-width: 230px;
  }
  @media screen and (max-width: 640px) {
    min-width: 200px;
    max-width: 230px;
  }
  .p-thumbnail {
    width: 100%;
    /* height: 145px; */
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .p-title-container {
    margin: 14px 15px 20px 15px;
    direction: rtl;
    .p-title-seperator {
      width: 37px;
      height: 2px;
      background-color: #fff;
      margin-top: 5px;
    }
  }
  .p-tech-detail {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    .p-detail {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 5px;

      svg {
        margin-right: 5px;
      }
    }
  }
`;

export default function PublishCard(props) {
  return (
    <Container {...props}>
      <div className="p-thumbnail">
        <img
          src={`${process.env.PUBLIC_URL}/assets/ipythonandjupyter.png`}
          alt=""
        />
      </div>
      <div className="p-title-container">
        <Typography
          fontSize="12px"
          fontWeight="normal"
          lineHeight="20px"
          textAlign="right"
          direction="rtl"
        >
          چگونه از فیلان در ریاکت استفاده کنیم؟
        </Typography>
        <div className="p-title-seperator" />
      </div>
      <div className="p-tech-detail">
        <div className="p-likes p-detail">
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
              fill="none"
              stroke="red"
            />
          </svg>
          <Typography fontSize="11px" fontWeight="100">
            223
          </Typography>
        </div>
        <div className="p-playlist-count p-detail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="13"
            viewBox="0 0 16 13"
          >
            <path
              id="Icon_awesome-list-ul"
              data-name="Icon awesome-list-ul"
              d="M1.5,3.375A1.5,1.5,0,1,0,3,4.875,1.5,1.5,0,0,0,1.5,3.375Zm0,5A1.5,1.5,0,1,0,3,9.875,1.5,1.5,0,0,0,1.5,8.375Zm0,5a1.5,1.5,0,1,0,1.5,1.5,1.5,1.5,0,0,0-1.5-1.5Zm14,.5H5.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h10a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,15.5,13.875Zm0-10H5.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h10a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,15.5,3.875Zm0,5H5.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h10a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,15.5,8.875Z"
              transform="translate(0 -3.375)"
              fill="#fff"
            />
          </svg>
          <Typography fontSize="11px" fontWeight="100">
            10
          </Typography>
        </div>
        <div className="p-duration p-detail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
          >
            <path
              id="Icon_awesome-clock"
              data-name="Icon awesome-clock"
              d="M7.062.563a6.5,6.5,0,1,0,6.5,6.5A6.5,6.5,0,0,0,7.062.563Zm1.5,9.176L6.247,8.058A.317.317,0,0,1,6.119,7.8V3.393a.315.315,0,0,1,.315-.315H7.692a.315.315,0,0,1,.315.315V7L9.67,8.213a.314.314,0,0,1,.068.44L9,9.67A.317.317,0,0,1,8.559,9.739Z"
              transform="translate(-0.563 -0.563)"
              fill="#fff"
            />
          </svg>
          <Typography fontSize="11px" fontWeight="100">
            4:21:20
          </Typography>
        </div>
      </div>
    </Container>
  );
}
