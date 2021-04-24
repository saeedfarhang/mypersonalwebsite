import React from "react";
import styled from "styled-components";
import Typography from "./Typography";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  .arrow-down {
    margin-right: 8px;
  }
`;

export default function SeeMore(props) {
  return (
    <Container {...props}>
      <div className="arrow-down">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10.494"
          height="6"
          viewBox="0 0 10.494 6"
        >
          <path
            id="Icon_ionic-ios-arrow-down"
            data-name="Icon ionic-ios-arrow-down"
            d="M11.436,15.438,15.4,11.467a.747.747,0,0,1,1.059,0,.756.756,0,0,1,0,1.062l-4.5,4.5a.749.749,0,0,1-1.034.022L6.406,12.532A.75.75,0,1,1,7.465,11.47Z"
            transform="translate(-6.188 -11.246)"
            fill="#fff"
          />
        </svg>
      </div>
      <Typography
        width="fit-content"
        as="p"
        fontSize="14px"
        fontWeight="bolder"
      >
        see more
      </Typography>
    </Container>
  );
}
