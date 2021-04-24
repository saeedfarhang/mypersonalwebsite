import React from "react";
import styled from "styled-components";
import Typography from "./Typography";
const Container = styled.div`
  margin-bottom: 20px;
  .bcm-title-container {
    width: 245px;
    direction: rtl;
    .bcm-seperator {
      width: 48px;
      height: 2px;
      background-color: #fff;
    }
  }
  .like-section {
    display: flex;
    svg {
      margin-right: 6px;
    }
  }
`;

export default function BlogCardMinimal(props) {
  return (
    <Container>
      <div className="bcm-title-container">
        <Typography
          width="fit-content"
          as="h6"
          fontSize="16px"
          fontWeight="normal"
          textAlign="right"
        >
          چگونه از فیلان در ریاکت استفاده کنیم؟
        </Typography>
        <div className="bcm-seperator" />
      </div>
      <div className="like-section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16.891"
          height="15.137"
          viewBox="0 0 16.891 15.137"
        >
          <path
            id="Icon_awesome-heart"
            data-name="Icon awesome-heart"
            d="M14.346,3.2a4.244,4.244,0,0,0-5.791.422l-.611.63-.611-.63A4.243,4.243,0,0,0,1.542,3.2,4.456,4.456,0,0,0,1.235,9.65l6,6.2a.973.973,0,0,0,1.406,0l6-6.2a4.453,4.453,0,0,0-.3-6.452Z"
            transform="translate(0.502 -1.513)"
            fill="none"
            stroke="red"
            stroke-width="1"
          />
        </svg>
        <Typography as="p" fontSize="12px" fontWeight="100">
          223
        </Typography>
      </div>
    </Container>
  );
}
