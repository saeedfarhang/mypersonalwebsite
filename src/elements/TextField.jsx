import React from "react";
import styled from "styled-components";
import Typography from "./Typography";
const Container = styled.div`
  max-width: 368px;
  width: 100%;
  margin-bottom: 20px;
  .tf-name {
    display: flex;
    align-items: center;
    margin-left: 16px;
    margin-bottom: 6px;
    .tf-name-seperator {
      width: 20px;
      height: 3px;
      background-color: #fff;
      margin-left: 6px;
    }
  }

  .tf-input {
    position: relative;

    .textfield-input {
      border: none;
      width: 100%;
      height: 40px;
      color: #fff;
      outline: none;
      background-color: #2c2c2c;
      box-shadow: 0 0 10px #00000016;
      border-radius: 25px;
      padding: 0 16px;
      font-size: 14px;
      font-family: "Ubuntu", "IRANSans";
    }
    .textfield-textarea {
      padding: 16px;
      height: 180px;
      resize: none;
      line-height: 22px;
    }

    .tf-placeholder {
      position: absolute;
      top: 50%;
      left: 16px;
      transform: translateY(-50%);
      color: #949494;
    }
    .tf-helper {
      margin-left: 16px;
      margin-top: 5px;
    }
  }
`;

export default function TextField(props) {
  return (
    <Container>
      <div className="tf-name">
        <Typography
          as="h6"
          fontSize="14px"
          fontWeight="bolder"
          width="fit-content"
        >
          {props.name}
        </Typography>
        <div className="tf-name-seperator" />
      </div>
      <div className="tf-input">
        {props.intype === "textarea" ? (
          <textarea
            className="textfield-input textfield-textarea"
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            cols="30"
            rows="10"
          ></textarea>
        ) : (
          <input
            className="textfield-input"
            type="text"
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
          />
        )}
        <Typography
          as="p"
          fontSize="12px"
          fontWeight="100"
          className="tf-helper"
          width="fit-content"
          textAlign="left"
        >
          {props.helper}
        </Typography>
      </div>
    </Container>
  );
}
