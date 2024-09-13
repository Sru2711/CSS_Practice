import React from 'react';
import { useRoutes } from 'react-router-dom';
import FallingBrick from './FallingBrick';
import App from './App';

const Router = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <App />,  
    },
    {
      path: '/fallingBrick',
      element: <FallingBrick />,  
    },
    
  ]);
  return element;
};

export default Router;

export const routesArray = [
    { componenetName: 'FallingBrick', link: '/fallingBrick' },
    { componenetName: 'ColorGradient', link: '/colorGradient' },
    { componenetName: 'BackgroundColor', link: '/backgroundColor' },
  ];