import { Machine, assign } from 'xstate';

type IProps = {
  name: string;
  test?: string;
}


export const kenMachine = Machine<IProps>({
  initial: 'lazy',
  context: {
    name: '',
    test: '',
  },
  states: {
    lazy: {
      on: {
        GOGO: {
          target: 'idle',
          actions: assign({
            name: (ctx, evt) => {
              return evt.name
            },
          })
        }
      }
    },
    idle: {
      entry: (ctx, evt) => console.log('idle', ctx),
    }
  }
});