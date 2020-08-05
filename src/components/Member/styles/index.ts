import styled from 'styled-components';

import kenImg from '../../../assets/ken.jpg';

type UserProps = {
  mile: number;
}

export const Users = styled.div<UserProps>`
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  bottom: 50px;
  width: 200px;
  height: 150px;
  background-color: lightblue;
  transition: all 0.5s ease;
  transform: ${props => `translateX(${props.mile}px)`};

  & > div {
    margin-top: 10%;
  }
`;

export const UserImg = styled.img`
  width: 50%;
  height: 50%;
  background-image: url(${kenImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 0;
`;