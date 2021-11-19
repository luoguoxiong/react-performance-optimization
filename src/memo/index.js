import React, { useState, useEffect } from 'react';

const UserCom = (props) => {
  console.log(`${props.type} call Render`);
  return <div> {props.name}</div>;
};

const MemoUserCom = React.memo(UserCom, (prevProps, nextProps) => prevProps.name === nextProps.name);

export const MemoDemo = () => {

  const [_, setName] = useState('init');

  useEffect(() => {
    setInterval(() => {
      setName(Math.random());
    }, 1000);
  }, []);

  return (
    <>
      <UserCom
        name="NoMemo"
        type="NoMemo" />
      <MemoUserCom
        name="isMemo"
        type="isMemo" />
    </>
  );
};
