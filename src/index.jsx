import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './styles/GlobalStyle';
import Wrapper from './styles/CommentApp';
import CommentApp from './components/CommentApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Wrapper>
        <GlobalStyle />
        <CommentApp />
      </Wrapper>
    </Provider>
  </React.StrictMode>,
);
