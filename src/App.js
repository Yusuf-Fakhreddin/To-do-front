import React, { useState } from 'react';
import './main.css';
import Header from './components/header/Header';
import Card from './components/Card/Card';
import Theme from './components/Theme/Theme';
import Toggler from './components/Theme/Toggler';
import LoginForm from './components/Forms/LoginForm';
import RegistrationForm from './components/Forms/RegistrationForm';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const dump_items = ['sleep', 'eat', 'sleep', 'repeat'];

function App() {
  const [theme, setTheme] = useState('light-mode');

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === 'dark-mode' ? 'light-mode' : 'dark-mode'
    );
  };
  return (
    <Theme theme={theme}>
      <Toggler clicked={toggleTheme} />
      <Router>
        <Switch>
          <Route path='/' exact>
            <div className='App'>
              <div className='container'>
                <Header />
                <div className='grid'>
                  <Card name='Add' />
                  {dump_items.map((item, index) => {
                    return <Card name={item} key={index} />;
                  })}
                </div>
              </div>
            </div>
          </Route>
          <Route path='/signup'>
            <RegistrationForm />
          </Route>
          <Route path='/login'>
            <LoginForm />
          </Route>
        </Switch>
      </Router>
    </Theme>
  );
}

export default App;
