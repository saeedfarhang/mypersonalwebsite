import React from "react";
import styled from "styled-components";
import Typography from "./Typography";
const Container = styled.div`
  width: 100%;
  max-width: 526px;
  min-height: 160px;
  height: fit-content;
  background-color: #242424;
  box-shadow: 0 0 10px #00000016;
  padding: 15px 20px;
  margin: 25px 8px;
  .bc-title-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .bc-title-seperator {
      margin-top: 2px;
      width: 50px;
      height: 2px;
      background-color: #fff;
    }
  }
  .bc-desc {
    margin-top: 16px;
    height: 42px;
    overflow: hidden;
  }
  .tech-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 21px;
    .like-section {
      display: flex;
      svg {
        margin-right: 6px;
      }
    }
  }
`;

export default function BlogCard(props) {
  return (
    <Container>
      <div className="bc-title-container">
        <Typography
          direction="rtl"
          textAlign="right"
          as="h3"
          fontSize="16px"
          fontWeight="normal"
        >
          چگونه از فیلان در ریاکت استفاده کنیم؟
        </Typography>
        <div className="bc-title-seperator"></div>
      </div>
      <Typography
        as="p"
        className="bc-desc"
        fontSize="12px"
        fontWeight="normal"
        direction="rtl"
        textAlign="right"
      >
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود
      </Typography>
      <div className="tech-detail">
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
        <Typography
          direction="rtl"
          textAlign="right"
          as="p"
          fontSize="12px"
          fontWeight="100"
        >
          شامل 213،123 کلمه، 9 دقیقه و 24 ثانیه
        </Typography>
      </div>
    </Container>
  );
}
