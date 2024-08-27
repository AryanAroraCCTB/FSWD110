import React, { useState, useEffect } from 'react';

export const DocumentTitle = () => {
  const [title, setTitle] = useState('Default Title');
  
  useEffect(() => {
    // Update the document title
    document.title = title;

    // Cleanup logic (optional)
    return () => {
      document.title = 'Default Title'; // Reset title on unmount
    };
  }, [title]); // Effect runs when `title` changes

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <p>Current Title: {title}</p>
        </div>
    ); 
}