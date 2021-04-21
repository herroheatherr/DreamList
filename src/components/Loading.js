import React from 'react';

const Loading = () => {
  return (
    <div className="loading-screen">
      <span id="loading-text">
        Explore current job postings available on the City of New York's
        official jobs site.
      </span>
      <img src="/loading.gif" alt="loading" />
    </div>
  );
};
export default Loading;
