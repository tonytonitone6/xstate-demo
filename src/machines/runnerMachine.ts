import { Machine, assign, send } from 'xstate';

type todoContext = {
  user: string;
  capacity: number,
}

export const runnerMachine = Machine<todoContext>({
  initial: 'stop',
  context: {
    user: 'ken',
    capacity: 0,
  },
  states: {
    stop: {
      on: {
        START: {
          target: 'start',
          actions: ['startAction']
        }
      }
    },
    start: {
      on: {
        RUN: 'idle'
      }
    },
    idle: {

    }
  },
}, {
  actions: {
    startAction: (ctx, evt) => {
      console.log('ctx', ctx);
    }
  }
});