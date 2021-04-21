import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobsDataVis from './JobsDataVis';
import { Link } from 'react-router-dom';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          'https://data.cityofnewyork.us/resource/kpav-sd4t.json?$select=agency,posting_type,business_title,civil_service_title,job_category,full_time_part_time_indicator,career_level,salary_range_from,salary_range_to,salary_frequency,work_location,posting_updated'
        );
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data from Open Source API', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h5 className="center">
        Explore current job postings available on the City of New York's
        official jobs site.
      </h5>
      <div className="container">
        <JobsDataVis jobsData={jobs} />
      </div>
    </div>
  );
};

export default Jobs;
