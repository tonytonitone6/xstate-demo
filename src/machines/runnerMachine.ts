import { Machine, assign, send } from 'xstate';
import { fakeData } from '../utils/fakeData';


type todoContext = {
  user: string;
  capacity: number;
  content: string;
}

const fetchData = () => fakeData().then(data => data);
  

export const runnerMachine = Machine<todoContext>({
  initial: 'stop',
  context: {
    user: 'ken',
    capacity: 0,
    content: '',
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
          cond: (ctx, evt) => ctx.capacity >= 40,
        },
      ]
    },
    speak: {
      initial: 'dirtyWords',
      states: {
        dirtyWords: {
          after: {
            1000: {
              target: '#start'
            }
          }
        }
      }
    },
    start: {
      id: 'start',
      invoke: {
        src: fetchData,
        onDone: {
          target: 'idle',
          actions: assign({
            user: (ctx, evt) => 'mao'
          })
        }
      }
    },
    idle: {
      id: 'idle',
      type: 'parallel',
      states: {
        sleep: {
          initial: 'stillSleep',
          states: {
            stillSleep: {
              on: {
                test: {
                }
              }
            }
          }
        },
        wakeUp: {
          initial: 'stillWakeUp',
          states: {
            stillWakeUp: {
              on: {
                test: { 
                }
              }
            }
          }
        }
      }
    },
    kk: {
      
    }
  },
});