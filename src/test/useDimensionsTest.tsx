import React, { useState } from 'react';
import useDimensions from '../hooks/useDimensions';

const MeasuredNode = ()=> {
  const [ref, dimensions] = useDimensions({ liveMeasure: true})
  const { x, y, width, height } = dimensions
  return (
    <p ref={ref as any}>
       I am a paragraph at ({x}px, {y}px) position with a width of {width}
            px and height of {height}px
    </p>
  )
}
const MyComponent = () => {
  const [ref, { width }] = useDimensions();
  return (
      <Parent childRef={ref}>
          <p>Hello is {width}px wide</p>
      </Parent>
  );
};

type Props = {
  childRef: any, 
  children: any
}
const Parent:React.FC<Props> = ({ childRef, children }) => {
  const [showChild, setShowChild] = useState(false);
  return (
      <React.Fragment>
          {showChild ? <div ref={childRef}>Hello</div> : null}
          <button onClick={() => setShowChild(!showChild)}>
              Toggle Hello
          </button>
          {children}
      </React.Fragment>
  );
};

export const DimensionDemo = ()=> (
  <div>
    <MeasuredNode />
    <MyComponent />
  </div>
)