import React, { useState } from 'react';
import './main.css';
import Header from './components/header/Header';
import Card from './components/Card/Card';
import Theme from './components/Theme/Theme';
import Toggler from './components/Theme/Toggler';
import LoginForm from './components/Forms/LoginForm';
import RegistrationForm from './components/Forms/RegistrationForm';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddItem from './components/Forms/AddItem';
import Modal from './components/Modal/Modal';

const dump_items = ['sleep', 'eat', 'sleep', 'repeat'];
let modal;

function App() {
  const [theme, setTheme] = useState('light-mode');
  const [showModal, setShowModal] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === 'dark-mode' ? 'light-mode' : 'dark-mode'
    );
  };

  const AddItemForm = () => {
    modal = (
      <Modal clicked={closeModal}>
        <AddItem />
      </Modal>
    );
    setShowModal(true);
  };

  const closeModal = (e) => {
    if (e.target.classList.contains('backdrop')) {
      modal = null;
      setShowModal(false);
    }
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
                  <Card name='Add' clicked={AddItemForm} />
                  {dump_items.map((item, index) => {
                    return <Card name={item} key={index} />;
                  })}
                </div>
                {showModal ? modal : null}
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
