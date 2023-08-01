import React from 'react';

import './App.css';
import Table from './Components/Table';
import header from './images/Header.png';
import { Select, Space } from 'antd';

function App() {
  return (
    <div className="App">
      <img src={header} alt='logo' width={'100%'} />

      <div className='sub-heading'>
        <div className="dropdown1" >

          {/* <select className='drp1' name="">
            <option value="">Past 6 months</option>

          </select> */}

          <Space wrap>
            <svg className='special-svg1'  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.3333 1.99996H13.9999C14.1767 1.99996 14.3463 2.0702 14.4713 2.19522C14.5963 2.32025 14.6666 2.48981 14.6666 2.66663V13.3333C14.6666 13.5101 14.5963 13.6797 14.4713 13.8047C14.3463 13.9297 14.1767 14 13.9999 14H1.99992C1.82311 14 1.65354 13.9297 1.52851 13.8047C1.40349 13.6797 1.33325 13.5101 1.33325 13.3333V2.66663C1.33325 2.48981 1.40349 2.32025 1.52851 2.19522C1.65354 2.0702 1.82311 1.99996 1.99992 1.99996H4.66659V0.666626H5.99992V1.99996H9.99992V0.666626H11.3333V1.99996ZM9.99992 3.33329H5.99992V4.66663H4.66659V3.33329H2.66659V5.99996H13.3333V3.33329H11.3333V4.66663H9.99992V3.33329ZM13.3333 7.33329H2.66659V12.6666H13.3333V7.33329Z" fill="#4B5563" />
            </svg>
            <div className="select1">
            <Select
              bordered={false}
              defaultValue="Past 6 months"
              style={{ width: 150 }}
              // onChange={handleChange}
              options={[
                { value: 'Past 6 months', label: 'Past 6 months' },
                
              ]}
            />
            </div>
          


          </Space>

        </div>
        <div className="dropdown2">
          <Space wrap>
            <svg className='special-svg2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Frame" clip-path="url(#clip0_1_1461)">
                <path id="Vector" d="M14 2.66666V3.99999H13.3333L10 8.99999V14.6667H6V8.99999L2.66667 3.99999H2V2.66666H14ZM4.26933 3.99999L7.33333 8.59599V13.3333H8.66667V8.59599L11.7307 3.99999H4.26933Z" fill="#4B5563" />
              </g>
              <defs>
                <clipPath id="clip0_1_1461">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="select2">
            <Select
              bordered={false}
              defaultValue="All Launches"
              style={{ width: 170 }}
              // onChange={handleChange}
              options={[
                { value: 'All Launches', label: 'All Launches' },
                { value: 'Selected Launches', label: 'Selected Launches' },
                { value: 'Upcoming Launches', label: 'Upcoming Launches' },
                { value: 'Failed Launches', label: 'Failed Launches'},
              ]}
            />
            </div>
           


          </Space>
        </div>
      </div><br />
      <Table />
    </div>
  );
}

export default App;
