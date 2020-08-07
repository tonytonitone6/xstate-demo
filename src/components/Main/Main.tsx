import React, { useEffect } from 'react';
import { assign } from 'xstate';
import { useMachine } from '@xstate/react';

import Ken from '../Ken/Ken';

import {
  Wrapper,
  Line,
  Run,
  Btn
} from './styles';

import Member from '../Member/Member';
import { runnerMachine } from '../../machines/runnerMachine';

const Main = () => {
  const [state, send] = useMachine(runnerMachine, {
    actions: {
      startAction: assign({
        capacity: (ctx, evt) => {
          return ctx.capacity + 5;
        }
      }),
      backAction: assign({
        capacity: (ctx, evt) => {
          return ctx.capacity - 5;
        }
      })
    }
  });



  return (
    <Wrapper>
      <Member {...state.context} />
      <Ken name={state.context.content.state.context.name} />
      <Run>
        <Btn onClick={() => send('ROLLBACK')}>倒退</Btn>
        <Btn onClick={() => send('START')}>前進</Btn>
        <Btn onClick={() => send('Go')}>測試</Btn>
      </Run>
      <Line />
    </Wrapper>
  );
}


export default Main;