'use client';

import { useState } from 'react';

// Step 1: Server-Rendered HTML
export const Step1 = () => {
  return (
    <div className="relative bg-gray-900 text-gray-100 p-7 rounded-lg font-mono text-sm leading-relaxed mb-6 text-center">
      <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tl-lg font-semibold text-sm">
        STATIC
      </div>
      <div>
        &lt;div&gt;Count: 0&lt;/div&gt;<br />
        &lt;button&gt;Increment&lt;/button&gt;<br />
        <span className="text-gray-400 text-sm">// No JavaScript attached</span>
      </div>
    </div>
  );
};

// Step 2: Before Hydration
export const Step2 = () => {
  return (
    <div className="relative bg-gray-900 text-gray-100 p-7 rounded-lg font-mono text-sm leading-relaxed mb-6 text-center">
      <div className="absolute top-0 left-0 bg-amber-500 text-white px-2 py-1  rounded-tl-lg font-semibold text-sm">
        LOADING
      </div>
      <div>
        &lt;div&gt;Count: 0&lt;/div&gt;<br />
        &lt;button&gt;Increment&lt;/button&gt;<br />
        <span className="text-gray-400 text-sm">// React bundle loading...</span>
      </div>
    </div>
  );
};


// Step 3: After Hydration
export const Step3 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="relative bg-gray-900 text-gray-100 p-7 rounded-lg font-mono text-sm leading-relaxed mb-6 text-center">
      <div className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 rounded-tl-lg font-semibold text-sm">
        INTERACTIVE
      </div>
      <div>
        &lt;div&gt;Count: {counter}&lt;/div&gt;<br />
        <span className="ml-3 text-lg animate-pulse">✨ </span>
        <button
          onClick={() => setCounter(prev => prev + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 "
        >
          Increment
        </button>
        <span className="ml-3 text-lg animate-pulse">✨</span><br />
        <span className="text-gray-400 text-sm">// onClick, useState active</span>
      </div>
    </div>
  );
};
