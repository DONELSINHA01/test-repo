import React, { useState } from 'react';
import { Modal } from 'antd';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import '../styles/Modal.css';
import success from '../images/success.png';
import upcoming from '../images/upcoming.png';
import failed from '../images/failed.png';
import rocketImage from "../images/rocketImage.png";
import frame7 from "../images/Frame 7.png";
interface PaginateProp {
  data: any[];
  rocket: any[];
  loading: any;
}

// const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
//   console.log(current, pageSize);
// };



function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumbersArray(length: number): number[] {
  const randomNumberArray: number[] = [];
  for (let i = 0; i < length; i++) {
    const randomNum = getRandomNumber(1, 3);
    randomNumberArray.push(randomNum);
  }
  return randomNumberArray;
}

const randomNumbersArray: number[] = generateRandomNumbersArray(204);

const Paginate: React.FC<PaginateProp> = ({ data, rocket, loading }) => {
  const modalContent: any[] = rocket;
  const itemsPerPage: number = 12;
  const totalPages: number = Math.ceil(data.length / itemsPerPage); // Calculate the total number of pages
  
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [modalVisible, setModalVisible] = useState(false);
  const moment = require('moment');

  const [selectedName, setSelectedName] = useState({
    selectedRocket: '',
    selectedMission: '',
    selectedLaunchDate: '',
    selectedRocketName:''
  });

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentContent: any[] = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleDateClick = (rocketName: string, missionName: string, launchDate: string) => {
    setSelectedName({
      ...selectedName,
      selectedMission: missionName,
      selectedRocket: rocketName,
      selectedLaunchDate: launchDate,
  
    });
    setModalVisible(true);
  };

  return (
    <div>
      <table className='table'>
        <thead className='table-head'>
          <tr><td>No.</td>
          <td>Launched</td>
          <td>Location</td>
          <td>Mission</td>
          <td>Orbit</td>
          <td>Launch Status</td>
          <td>Rocket</td></tr>
        </thead>
        <tbody>
          {currentContent.map((launch: any, index: number) => (
            
            <tr
              key={index}
              onClick={() =>
                handleDateClick(launch.rocket.rocket_name, launch.mission_name, launch.launch_date_utc)
              }
            >
              <td>{indexOfFirstItem + index + 1}</td>
              <td>{moment.utc(launch.launch_date_utc).format("D MMMM YYYY HH:mm")}</td>
              <td>
              {randomNumbersArray[index] === 1
                ? <p>Kwajalein Atoll</p>
                : randomNumbersArray[index] === 2
                  ? <p>CCAFS SLC 40</p>
                  : randomNumbersArray[index] === 3
                    ? <p>KSC LC 39A</p>
                    : null}
              </td>
              <td>{launch.mission_name}</td>
              <td>{randomNumbersArray[index] === 1
                ? <p>LEO</p>
                : randomNumbersArray[index] === 2
                  ? <p>LEO</p>
                  : randomNumbersArray[index] === 3
                    ? <p>ISS</p>
                    : null}</td>
              <td>  {randomNumbersArray[index] === 1
                ? <div className='status-logo'><img src={success} alt="" /></div>
                : randomNumbersArray[index] === 2
                  ? <div className="status-logo"><img src={upcoming} alt="" /></div>
                  : randomNumbersArray[index] === 3
                    ?<div className="status-logo"> <img src={failed} alt="" /></div>
                    : null}</td>
              <td>{launch.rocket.rocket_name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        width={"37.77%"}
        style={{top:'10%'}}
        open={modalVisible}
        onCancel={() =>
          setModalVisible(false)}
        footer={null}>
        
        <div className='modal'>
          <div className='modal-head'>
            <img src={rocketImage} alt='' width={'72px'} height={'72px'}/>
            <div className='frame'>
              <p style={{fontSize:"18px",paddingBottom:'8px'}}>{selectedName.selectedMission}</p>
              <p>{selectedName.selectedRocket}</p>
              <img src={frame7} alt="" />
            </div>
          </div>

          {modalContent.map((rocket: any) => {
            if (rocket.name === selectedName.selectedRocket) {
              return (
                <>
                  <span><p className='description' style={{fontSize:'14px'}}>{rocket.description}<a href={rocket.wikipedia}>Wikipedia</a></p></span>
                  
                  <table className='modal-table'>
                  <tr>
                      <td style={{color:'#4B5563'}}>Flight Number</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td style={{color:'#4B5563'}}>Mission Name</td>
                      <td>{selectedName.selectedMission}</td>
                    </tr>
                    <tr>
                      <td style={{color:'#4B5563'}}>Rocket Type</td>
                      <td>v1.0</td>
                    </tr>
                    <tr>
                      <td style={{color:'#4B5563'}}>Rocket Name</td>
                      <td>{selectedName.selectedRocket}</td>
                    </tr>
                    <tr>
                      <td style={{color:'#4B5563'}}>Manufacturer</td>
                      <td>SpaceX</td>
                    </tr>
                    <tr>
                      <td style={{color:'#4B5563'}}>Nationality</td>
                      <td>{rocket.country}</td>
                    </tr>
                    <tr>
                      <td style={{color:'#4B5563'}}>Launch Date</td>
                      <td>{moment.utc(selectedName.selectedLaunchDate).format("D MMMM YYYY HH:mm")}</td>
                      
                    </tr>
                    <tr>
                      <td style={{color:'#4B5563'}}>Payload Type</td>
                      <td>ISS</td>
                    </tr>
                    <tr>
                      <td style={{color:'#4B5563'}}>Lauch Site</td>
                      <td>CCAFS SLC 40</td>
                    </tr>
                  </table>
                </>
              );
            }
          })}
        </div>
      </Modal>

      <div className='pagination'>
        <Pagination
          showSizeChanger={false}

          current={currentPage}
          total={data.length}
          onChange={goToPage}
        />
      </div>

    </div>
  );
};

export default Paginate;
