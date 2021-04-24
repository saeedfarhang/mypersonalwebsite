import React, { useState } from "react";
import styled from "styled-components";
import Typography from "./Typography";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "30px")};
  .seperator {
    margin-left: 10px;
    width: 30px;
    height: 3px;
    background-color: #fff;
    transition: all 0.2s ease;
    transform: ${(props) =>
      props.hover ? "translateX(3px)" : "translateX(0)"};
  }
`;

export default function MenuItem(props) {
  const [hover, setHover] = useState(false);
  return (
    <Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      hover={hover}
      {...props}
    >
      <Typography
        width="max-content"
        as="h6"
        fontSize="18px"
        fontWeight="bolder"
      >
        {props.children}
      </Typography>
      <div className="seperator"></div>
    </Container>
  );
}
