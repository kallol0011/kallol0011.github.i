import React from 'react';
import AnimatedCursor from "react-animated-cursor"
const Cursor = () => {
    return (
        <>
             <AnimatedCursor
      innerSize={18}
      outerSize={18}
    //   color='193, 11, 111'
      color='21, 181, 255'
      outerAlpha={0.48}
      innerScale={0.7}
      outerScale={4}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
        </>
    );
};

export default Cursor;