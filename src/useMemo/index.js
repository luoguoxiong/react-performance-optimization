import React from 'react';

export const UseMemoDemo = () => {
  const [userId] = React.useState(0);

  const [otherStatus, setOther] = React.useState(0);

  const val = React.useMemo(() =>
    // todo 复杂数据计算
    userId
  , [userId]);

  React.useEffect(() => {
    setInterval(() => {
      setOther(Math.random());
    }, 1000);
  }, []);

  const comP = React.useMemo(() => {
    console.log('memo call Render');
    return <div>{userId}</div>;
  }, [userId]);

  return (
    <div>
      {val}
      {comP}
      {otherStatus}
    </div>
  );
};
