import React from 'react';
import { useMachine } from '@xstate/react';
import { runnerMachine } from '../../machines/runnerMachine';

import {
  Users,
  UserImg,
} from './styles';

const Member = () => {

  const [state, send] = useMachine(runnerMachine);

  const { context: { user } } = state;
  

  return (
    <Users>
      <UserImg />
      <div>Who am i</div>
      <div>{user}</div>
    </Users>
  );
}



export default Member;