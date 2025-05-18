import React from 'react';
import ReactDOM from 'react-dom';
import axe from '@axe-core/react';

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000, {
    rules: [
      {
        id: 'landmark-one-main',
        enabled: true,
      },
      {
        id: 'page-has-heading-one',
        enabled: true,
      },
      {
        id: 'region',
        enabled: true,
      },
    ],
  });
} 