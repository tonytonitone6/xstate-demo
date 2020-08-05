import React from 'react';

import {
  Wrapper,
  Line,
  Run,
  Btn
} from './styles';

import Member from '../Member/Member';

const Main = () => {
  return (
    <Wrapper>
      <Member />
      <Run>
        <Btn>倒退</Btn>
        <Btn>前進</Btn>
      </Run>
      <Line />
    </Wrapper>
  );
}


export default Main;