import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import MainTemplate from './components/Template/MainTemplate';
import Test from './components/test';

const App = () => {
  return (
    <Switch>
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <MainTemplate>
        <Route component={PostListPage} path={['/@:username', '/']} exact />
        <Route component={WritePage} path="/write" />
        <Route component={PostPage} path="/@:username/:postId" />
        <Route component={Test} path="/test" />
      </MainTemplate>
    </Switch>
  );
};

export default App;
