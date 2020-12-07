import React from 'react';

export default function Loading({ loaded, backgroundDark }) {
  return (
    !loaded && (
      <div
        style={{
          width: '100%',
          height: '100vh',
          zIndex: 99999999999999999999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'none',
          position: 'fixed',
          backgroundColor: backgroundDark
            ? 'rgba(0,0,0,0.2)'
            : 'rgba(255,255,255,0.2)',
        }}
      >
        <div
          className="loaderCSS"
          style={{
            border: backgroundDark
              ? '4px solid rgba(20,20,20,1)'
              : '4px solid #f3f3f3',
            borderTop: backgroundDark
              ? '4px solid lightgrey'
              : '4px solid darkgrey',
          }}
        />
      </div>
    )
  );
}
