import React from "react";
import styled from "styled-components";

const CustomTypography = styled.span`
  margin: 0;
  padding: ${(props) => (props.padding ? props.padding : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-weight: ${(props) => props.fontWeight};
  font-size: calc(${(props) => props.fontSize});

  color: ${(props) => props.color && props.color};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  width: ${(props) => (props.width ? props.width : "")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "")};
  direction: ${(props) => (props.direction ? props.direction : "unset")};
`;

export default function Typography(props) {
  return (
    <CustomTypography
      as={props.variant}
      fontWeight={props.fontWeight}
      fontSize={props.fontSize}
      {...props}
    >
      {props.children}
    </CustomTypography>
  );
}
