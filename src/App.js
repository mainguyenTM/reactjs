import React from 'react';
import './App.css';
import './themes/css/main.css';
import './themes/css/bootstrap.min.css';
import SummaryInfo from './SummaryInfo';
import Skill from './Skill';
import Experience from './Experience';
import Reference from './Reference';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <div className="page-content">
        <div>
              {/*about*/}
              <SummaryInfo></SummaryInfo>
              {/*Experience*/}
              <Experience></Experience>
              {/*Reference*/}
              <Reference></Reference>
              {/*Skill*/}
              <Skill></Skill>
              {/*Contact*/}
              <Contact></Contact>

        </div>
      </div>
    </div>
  );
}


export default App;
