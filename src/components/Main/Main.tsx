import React, { useEffect } from 'react';
import { assign } from 'xstate';
import { useMachine } from '@xstate/react';

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


  useEffect(() => {
    const keyDown = (evt: KeyboardEvent) => {
      const { keyCode } = evt;

      switch (keyCode) {
        case 68:
          send('START');
          break;
      
        default:
          break;
      }
    }

    if (window) {
      window.addEventListener('keydown', keyDown);
    }

    return () => window.removeEventListener('keydown', keyDown);
  }, [send]);

  useEffect(() => {
    console.log('state', state);
  }, [state]);

  return (
    <Wrapper>
      <Member {...state.context} />
      <Run>
        <Btn onClick={() => send('ROLLBACK')}>倒退</Btn>
        <Btn onClick={() => send('START')}>前進</Btn>
      </Run>
      <Line />
    </Wrapper>
  );
}


export default Main;