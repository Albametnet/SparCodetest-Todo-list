import React from 'react';
import FormInput from './FormInput'
import  List  from './List';
import Footer from './Footer';
import {DataProvider} from './DataProvider';

function Home() {

  return (
    <DataProvider>
      <div className="App">
        <h1>To Do list</h1>
        <FormInput />
        <List />
        <Footer/>
      </div>
    </DataProvider>
  );
}

export default Home;