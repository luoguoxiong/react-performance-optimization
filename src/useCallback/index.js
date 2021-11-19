import React from 'react';

// eslint-disable-next-line react/display-name
const Button = React.memo(({ onClick, children }) => {
  console.log('Button call Render');
  return <button onClick={onClick}>{children}</button>;
}, (prev, next) => prev.onClick === next.onClick);


export const UseCallbackDemo = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  const clickBtn = () => {
    setCount2(count2 + 1);
  };

  const clickBtn2 = React.useCallback( () => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <Button
        onClick={clickBtn}>
            noUseCallback
      </Button>

      <Button
        onClick={clickBtn2}>
              useCallback
      </Button>
    </>
  );
};

