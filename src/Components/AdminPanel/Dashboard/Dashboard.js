import React from 'react';
import SideBar from '../SideBar/SideBar';
import Navigation from '../../Shared/Navigation/Navigation'
import Footer from '../../Shared/Footer/Footer'

const Dashboard = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="row">
        <div className="col-md-3">
          <SideBar />
        </div>
        <div className="col-md-9">
          All orders
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;