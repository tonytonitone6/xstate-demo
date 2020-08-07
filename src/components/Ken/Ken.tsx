import React, { useEffect, FC } from 'react';
import { useMachine } from '@xstate/react';
import { kenMachine } from '../../machines/kenMachine';

type IProps = {
  name: string | undefined;
}

const Ken: FC<IProps> = ({ name }) => {
  return <div>{name}</div>;
}

export default Ken;