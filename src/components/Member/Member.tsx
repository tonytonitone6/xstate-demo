import React from 'react';
import { useMachine } from '@xstate/react';
import { runnerMachine } from '../../machines/runnerMachine';

import {
  Users,
  UserImg,
} from './styles';

const Member = () => {

  const [state, send] = useMachine(runnerMachine);

  console.log(state);

  return (
    <Users>
      <UserImg />
      <div>Who am i</div>
    </Users>
  );
}



export default Member;