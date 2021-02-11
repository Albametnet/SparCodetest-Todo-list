import React from 'react';
import { DataProvider } from '../../components/DataProvider';
import FormInput from '../../components/FormInput'
import List from '../../components/List';
import Footer from '../../components/Footer';
import Header from '../../components/Header'
import './index.scss'

function Home({ onSetToken }) {

  return (
    <DataProvider>
      <div className="todo__list">
        <Header onSetToken={onSetToken} />
        <h1>Sparta Todo-list</h1>
        <div className= "todo__list-edition">
          <FormInput />
          <List />
          <Footer />
        </div>
      </div>
    </DataProvider>
  );
}

export default Home;