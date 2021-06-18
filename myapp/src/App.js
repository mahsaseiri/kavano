import React from 'react';
import Profile from './Components/Profile';
import Header from './Components/Header';
import Navigate from './Components/Navigate';
import Table from './Components/Table';
import AddingTask from './Components/AddingTask';
import Completed from './Components/Completed';


function App() {
 
  return (
      <main>
        <section className="sec_left">
          <Profile/>
          <AddingTask/>
          <Completed/>
        </section>
        <section className="sec_right">
          <Header/>
          <Navigate/>
          <Table/>
        </section>
      </main>
  );
}

export default App;
