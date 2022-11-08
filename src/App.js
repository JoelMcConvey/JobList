// React
import React from 'react';
import './App.scss';
// Componenets
import Job from "./components/job";
// Data
import { jobsAvailable } from "./data/data";

function App() {
  return (
    <div className="main">
      <div className="container">
        <div className="job-container">
          {
            jobsAvailable.map((job, index) => {
              return <Job
                key={index}
                Company={job.company}
                Title={job.title}
                Location={job.location}
                DatePosted={job.datePosted}
                Link={job.link}
              />
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
