import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/global';
import App from './App';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { StoreProvider } from './contexts/StoreContext';

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <GlobalStyle />
      <StoreProvider>
        <App />
      </StoreProvider>
    </DndProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
