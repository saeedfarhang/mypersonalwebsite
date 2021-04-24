import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  transition: all 0.2s ease;
  margin-right: ${(props) => props.marginRight};
  :hover {
    transform: translateY(-3px);
  }
`;

export default function SocialLink(props) {
  return (
    <Container {...props}>
      <a target="_blank" rel="author" href={props.href}>
        {props.social === "twitter" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <g
              id="Group_59"
              data-name="Group 59"
              transform="translate(-163 -522)"
            >
              <circle
                id="Ellipse_4"
                data-name="Ellipse 4"
                cx="15"
                cy="15"
                r="15"
                transform="translate(163 522)"
                fill="#fff"
              />
              <path
                id="Icon_awesome-twitter"
                fill="#000"
                data-name="Icon awesome-twitter"
                d="M14.355,6.619c.01.142.01.284.01.426a9.266,9.266,0,0,1-9.33,9.33A9.267,9.267,0,0,1,0,14.9a6.784,6.784,0,0,0,.792.041,6.567,6.567,0,0,0,4.071-1.4A3.285,3.285,0,0,1,1.8,11.269a4.136,4.136,0,0,0,.619.051,3.468,3.468,0,0,0,.863-.112A3.28,3.28,0,0,1,.65,7.99V7.949a3.3,3.3,0,0,0,1.482.416A3.284,3.284,0,0,1,1.117,3.98,9.321,9.321,0,0,0,7.878,7.411,3.7,3.7,0,0,1,7.8,6.66a3.282,3.282,0,0,1,5.675-2.244,6.456,6.456,0,0,0,2.081-.792,3.27,3.27,0,0,1-1.442,1.807A6.574,6.574,0,0,0,16,4.924a7.049,7.049,0,0,1-1.645,1.7Z"
                transform="translate(170 527.619)"
              />
            </g>
          </svg>
        ) : props.social === "linkedin" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <g
              id="Group_59"
              data-name="Group 59"
              transform="translate(-163 -522)"
            >
              <circle
                id="Ellipse_4"
                data-name="Ellipse 4"
                cx="15"
                cy="15"
                r="15"
                transform="translate(163 522)"
                fill="#fff"
              />
              <path
                id="Icon_awesome-linkedin-in"
                data-name="Icon awesome-linkedin-in"
                d="M3.581,16H.264V5.318H3.581ZM1.921,3.861A1.93,1.93,0,1,1,3.842,1.922,1.937,1.937,0,0,1,1.921,3.861ZM16,16h-3.31V10.8c0-1.239-.025-2.829-1.725-2.829-1.725,0-1.989,1.346-1.989,2.739V16H5.659V5.318H8.841V6.775h.046A3.486,3.486,0,0,1,12.026,5.05C15.383,5.05,16,7.261,16,10.132V16Z"
                transform="translate(170 528.999)"
              />
            </g>
          </svg>
        ) : props.social === "youtube" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <g
              id="Group_59"
              data-name="Group 59"
              transform="translate(-162 -522)"
            >
              <circle
                id="Ellipse_4"
                data-name="Ellipse 4"
                cx="15"
                cy="15"
                r="15"
                transform="translate(162 522)"
                fill="#fff"
              />
              <path
                id="Icon_awesome-youtube"
                data-name="Icon awesome-youtube"
                d="M16.716,6.26A2.01,2.01,0,0,0,15.3,4.837,47.51,47.51,0,0,0,9.05,4.5,47.511,47.511,0,0,0,2.8,4.837,2.01,2.01,0,0,0,1.384,6.26a21.09,21.09,0,0,0-.334,3.876,21.09,21.09,0,0,0,.334,3.876,1.98,1.98,0,0,0,1.415,1.4,47.511,47.511,0,0,0,6.251.337,47.511,47.511,0,0,0,6.251-.337,1.98,1.98,0,0,0,1.415-1.4,21.09,21.09,0,0,0,.334-3.876,21.09,21.09,0,0,0-.334-3.876Zm-9.3,6.255V7.757L11.6,10.136,7.414,12.515Z"
                transform="translate(167.95 526.5)"
              />
            </g>
          </svg>
        ) : (
          ""
        )}
      </a>
    </Container>
  );
}
