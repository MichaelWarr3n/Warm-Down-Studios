import React from 'react';
import './Booking.css';

class Booking extends React.Component {


  render() {
    return (
      <div className="bookingContainer">
          <table className="bookingTable">
            <tr>
              <th className="bookingTableHeader bookService bold">Service</th>
              <th className="bookingTableHeader bookPrice bold">Price</th>
            </tr>
            <tr>
              <td className="bookingTableData">
                <span className="bold">1 Hour Recovery Massage</span> 
                <p className="serviceDescription">Treatment focusing on restoring optimal function to the soft tissues. 
                  Pain Reduction, Stress Relief, Increased muscle flexibility, 
                  Decrease chance of injury/re-injury</p>
              </td>
              <td className="bookingTableData bookPrice">£40.00</td>
              <td className="bookingTableData bookButton"><button className="bold">Book</button></td>
            </tr>
            <tr>
              <td className="bookingTableData">
                <span className="bold">1 Hour Personal Trainer Session</span>
                <p className="serviceDescription">1-to-1 Coaching in our unique facility. 
                  Movement assessment, Bespoke programming, Goal setting</p>
              </td>
              <td className="bookingTableData bookPrice">£40.00</td>
              <td className="bookingTableData bookButton"><button className="bold">Book</button></td>
            </tr>
          </table>
      </div>
    );
  }
}

export default Booking;
