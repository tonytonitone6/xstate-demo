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
});