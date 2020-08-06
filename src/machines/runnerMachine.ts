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
        START: [
          {
            actions: ['startAction'],
            cond: (ctx, evt) => {
              return ctx.capacity < 40;
            }
          },
          {
            target: 'wait',
            cond: (ctx, evt) => ctx.capacity >= 40,
          }
        ],
        ROLLBACK: {
          actions: send('BACK'),
        },
        BACK: [
          {
            actions: 'backAction',
            cond: (ctx, evt) => {
              return ctx.capacity > 0;
            }
          }
        ]
      }
    },
    wait: {
      always: [
        {
          target: 'speak',
          cond: (ctx, evt) => ctx.capacity < 40,
        },
      ]
    },
    speak: {
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