import React from 'react';
import './Footer.css';

class Footer extends React.Component {


  render() {
    return (
      <div className="footerInfo">
        <table className="openHours">
            <tr>
              <th className="openHoursTitle">OPEN</th>
            </tr>
            <tr>
              <td className="openHoursData">Mon 07:00 - 16:00</td>
              <td className="openHoursData">Thu 07:00 - 16:00</td>
            </tr>
            <tr>
              <td className="openHoursData">Tue 07:00 - 16:00</td>
              <td className="openHoursData">Fri 07:00 - 16:00</td>
            </tr>
            <tr>
              <td className="openHoursData">Wed 07:00 - 16:00</td>
              <td className="openHoursData">Sat 09:00 - 13:00</td>
            </tr>
          </table>
          <table className="contactSection">
            <tr>
              <th className="contactSectionTitle">CONTACT</th>
            </tr>
            <tr>
              <td className="contactSectionData">For any queries, questions and enquiries, contact us at - </td>
            </tr>
            <tr>
              <td className="contactSectionData"><a href="mailto:Hi@warmdownstudios.co.uk">Hi@warmdownstudios.co.uk</a></td>
            </tr>
            <tr>
              <td className="contactSectionData">or phone us on - <a href="tel:07123456789">07123456789</a></td>
            </tr>
          </table>
          <table className="addressSection">
            <tr>
              <th className="addressSectionTitle">FIND US</th>
            </tr>
            <tr>
              <td className="addressSectionData">Aston Fields Industrial Estate</td>
            </tr>
            <tr>
              <td className="addressSectionData">Unit 8a</td>
            </tr>
            <tr>
              <td className="addressSectionData">Sherwood Road</td>
            </tr>
            <tr>
              <td className="addressSectionData">Bromsgrove</td>
            </tr>
            <tr>
              <td className="addressSectionData">B60 3DR</td>
            </tr>
          </table>
      </div>
    );
  }
}

export default Footer;
