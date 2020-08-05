import styled, { css } from 'styled-components';


const BtnStyle = css`
  font-size: 16px;
  font-weight: 700;
`;



export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Line = styled.div`
  position: absolute;
  bottom: 1em;
  left: 0;
  width: 100%;
  height: 1rem;
  background: linear-gradient(to right, blue, lightgreen);
`;

export const Run = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 2rem;
  top: 2rem;
  width: 20%;
  height: 20%;
  background-color: lightgreen;
`;

export const Btn = styled.button`
  ${BtnStyle};
  width: 10rem;
  height: 5rem;
  background-color: #F1EFA5;
  margin: 0 1rem;
  outline: none;
`;