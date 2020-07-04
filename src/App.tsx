import React from 'react';

import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    {/* <SignIn /> */}
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
