"use client";

import React, { useEffect } from 'react';

type ScrollHandlerProps = {
  trigger: any; // This prop can be used to trigger the scroll when data changes
  shouldScroll?: boolean;
};

const BottomAZScrollHandler: React.FC<ScrollHandlerProps> = ({ trigger, shouldScroll }) => {
  useEffect(() => {
        const element = document.querySelector('.table-container');
        if (element) {
        window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 65, // Adjusting the scroll position by 65px
            behavior: 'smooth',
        });
    }
    
  }, [trigger]); // Trigger the scroll effect when 'trigger' changes

  return null; // This component does not render anything visible
};

export default BottomAZScrollHandler;