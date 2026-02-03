import React from "react";
import styled from "styled-components";

const SubBtn = ({ text, px = "1.2em", py = "0.6em" }) => {
  return (
    <StyledWrapper px={px} py={py}>
      <button>
        {text}
        <div className="arrow-wrapper">
          <div className="arrow" />
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    --primary-color: #1a1a1a;
    --secondary-color: #fff;
    --hover-color: #111;
    --arrow-width: 10px;
    --arrow-stroke: 2px;

    box-sizing: border-box;
    border: 2px solid #2c2c2c;
    border-radius: 15px;
    color: var(--secondary-color);

    /* dynamic paddings from props */
    padding: ${(props) => props.py} ${(props) => props.px};

    background: var(--primary-color);
    display: flex;
    align-items: center;
    gap: 0.6em;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  button .arrow-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button .arrow {
    margin-top: 1px;
    width: var(--arrow-width);
    height: var(--arrow-stroke);
    background: var(--primary-color);
    position: relative;
    transition: background 0.2s, right 0.2s;
  }

  button .arrow::before {
    content: "";
    position: absolute;
    border: solid var(--secondary-color);
    border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
    display: inline-block;
    top: -3px;
    right: 3px;
    padding: 3px;
    transform: rotate(-45deg);
    transition: right 0.2s;
  }

  button:hover {
    background-color: var(--hover-color);
  }

  button:hover .arrow {
    background: var(--secondary-color);
  }

  button:hover .arrow:before {
    right: 0;
  }
`;

export default SubBtn;
