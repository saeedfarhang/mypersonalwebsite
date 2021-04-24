import React from "react";
import styled from "styled-components";
import Typography from "./Typography";
const Container = styled.div`
  min-width: 50px;
  width: fit-content;
  height: 30px;
  background-color: #242424;
  box-shadow: 0 3px 10px #00000016;
  padding: 8px 16px;
  margin: 10px 7.5px;
  border-radius: 25px;
`;

export default function Tag(props) {
  return (
    <Container>
      <Typography
        width="max-content"
        as="h6"
        fontSize="14px"
        fontWeight="bolder"
      >
        {props.children}
      </Typography>
    </Container>
  );
}
