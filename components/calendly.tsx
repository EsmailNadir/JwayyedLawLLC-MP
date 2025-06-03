'use client';
import { useEffect } from 'react';

const Calendly = () => {
  useEffect(() => {
    // Ensures Calendly initializes after render
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/jjlawohio"
        style={{ minWidth: '120px', height: '700px' }}
      ></div>
    </div>
  );
};

export default Calendly;
