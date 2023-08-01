import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import '../styles/Table.css'
import Pagination from './Paginate';
import spinner from '../images/Spinner.svg';
import '../';


const LAUNCHES_QUERY = gql`
query Launches {
  launches {
    mission_name
    launch_date_utc
    rocket {
      rocket_name

    }

  }

  rockets {

    name
    wikipedia
    type
    country
    description
  }
}
`;

const Launches: React.FC = () => {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    
    
    console.log(data);
    if (loading) return <div className='App-logo'>
      <table className="table">
      <thead className='table-head'>
          <tr><td>No.</td>
          <td>Launched</td>
          <td>Location</td>
          <td>Mission</td>
          <td>Orbit</td>
          <td>Launch Status</td>
          <td>Rocket</td></tr>
        </thead>
      </table>
      <img  src={spinner} alt="" /></div>;
    if (error) return <div>Error: {error.message}</div>;
    
    console.log(data.launches.launch_date_local + " is the date")
    return (
            
            <Pagination data={data.launches} rocket={data.rockets} loading = {loading}/>
    
    );
};

export default Launches;
