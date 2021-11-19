/* eslint-disable react/display-name */
import React, { useState, useRef } from 'react';

const A = React.memo(() => {
  console.log('A called render');
  return <div>A</div>;
});

const B = React.memo(() => {
  console.log('B called render');
  return <div>B</div>;
});

export const Diff = () => {
  const [isShow, setShow] = useState(false);

  const ref = useRef(false);

  React.useEffect(() => {
    setInterval(() => {
      ref.current = !ref.current;
      setShow(ref.current);
    }, 1000);
  }, []);


  //   return (
  //     <>
  //       {isShow && <A />}
  //       <B />
  //     </>
  //   );
  if(isShow){
    return (
      <>
        <A />
        <B />
      </>
    );
  }else{
    return <B />;
  }
};
