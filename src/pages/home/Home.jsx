import React from 'react'
import "./home.scss";
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Navbar from '../../components/navbar/Navbar.jsx';
import Widget from  '../../components/widget/Widget.jsx';
import Featured from '../../components/featured/Featured.jsx';
import Chart from '../../components/chart/Chart.jsx';
import Table from '../../components/Table/Table.jsx';

const Home=()=>{
  return(
    <div className='home'>
     <Sidebar/>
     <div className="homecontanier">
     <Navbar/>
     <div className='widgets'>
     {/* here we are taking the type as prop to widget.jsx  */}
      <Widget type="user"/> 
      <Widget  type="order"/>
      <Widget type="earnings"/>
      <Widget type="balance"/>
     </div>
     <div className='charts'>
      <Featured/>
      <Chart/>
     </div>
     <div className="listcontainer">
      <div className="listTitle">
        latest transactions
      <Table/>
      </div>
     </div>
     </div>
    </div>
  )
}

export default Home;