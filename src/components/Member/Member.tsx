import React, { FC, memo } from 'react';
import { useMachine } from '@xstate/react';
import { runnerMachine } from '../../machines/runnerMachine';

import {
  Users,
  UserImg,
} from './styles';


type IProps = {
  capacity: number;
  user: string;
}

const Member: FC<IProps> = ({ capacity: mile, user }) => {


  return (
    <Users mile={mile}>
      <UserImg />
      <div>Who am i</div>
      <div>{user}</div>
      <div>我走了{mile}步</div>
    </Users>
  );
}



export default memo(Member);