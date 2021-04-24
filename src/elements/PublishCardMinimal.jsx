import React, { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 300px;
  /* width: 100%; */
  height: 186px;
  background: ${(props) =>
    props.imageUrl
      ? `url(${props.imageUrl})`
      : `url(${process.env.PUBLIC_URL}/assets/eulerProject.png)`};
  border: solid 8px #2c2c2c;
  box-shadow: 0 0 0 10px #00000016;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
  .pcm-open-btn {
    svg {
      transition: all 0.2s ease;
      fill: ${(props) => (props.hover ? "red" : "#fff")};
    }
  }
`;

export default function PublishCardMinimal(props) {
  const [hover, setHover] = useState(false);
  return (
    <Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      hover={hover}
      {...props}
    >
      <div className="pcm-open-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="62.144"
          height="43.695"
          viewBox="0 0 62.144 43.695"
        >
          <path
            id="Icon_awesome-youtube"
            data-name="Icon awesome-youtube"
            d="M61.9,11.337A7.808,7.808,0,0,0,56.4,5.807C51.555,4.5,32.122,4.5,32.122,4.5S12.689,4.5,7.843,5.807a7.809,7.809,0,0,0-5.494,5.53c-1.3,4.878-1.3,15.055-1.3,15.055s0,10.177,1.3,15.055a7.692,7.692,0,0,0,5.494,5.442C12.689,48.2,32.122,48.2,32.122,48.2s19.433,0,24.279-1.307A7.692,7.692,0,0,0,61.9,41.447c1.3-4.878,1.3-15.055,1.3-15.055s0-10.177-1.3-15.055ZM25.766,35.632V17.152l16.242,9.24-16.242,9.24Z"
            transform="translate(-1.05 -4.5)"
            // fill="#fff"
          />
        </svg>
      </div>
    </Container>
  );
}
