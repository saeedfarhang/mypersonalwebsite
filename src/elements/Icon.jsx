import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: fit-content;
  height: fit-content;
`;

export default function Icon(props) {
  return (
    <Container>
      {props.icon && props.icon === "download" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16.71"
          height="16.71"
          viewBox="0 0 16.71 16.71"
        >
          <g
            id="Icon_feather-download"
            data-name="Icon feather-download"
            transform="translate(1 1)"
          >
            <path
              id="Path_2"
              data-name="Path 2"
              d="M19.21,22.5v3.269A1.634,1.634,0,0,1,17.575,27.4H6.134A1.634,1.634,0,0,1,4.5,25.769V22.5"
              transform="translate(-4.5 -12.693)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <path
              id="Path_3"
              data-name="Path 3"
              d="M10.5,15l4.086,4.086L18.672,15"
              transform="translate(-7.231 -9.279)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <path
              id="Path_4"
              data-name="Path 4"
              d="M18,14.307V4.5"
              transform="translate(-10.645 -4.5)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </g>
        </svg>
      ) : props.icon === "send" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16.333"
          height="14"
          viewBox="0 0 16.333 14"
        >
          <path
            id="Icon_material-send"
            data-name="Icon material-send"
            d="M3.008,18.5l16.326-7L3.008,4.5,3,9.944,14.667,11.5,3,13.056Z"
            transform="translate(-3 -4.5)"
            fill="#242424"
          />
        </svg>
      ) : (
        ""
      )}
    </Container>
  );
}
