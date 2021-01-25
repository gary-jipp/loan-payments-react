import { useState } from 'react';
import './App.css';

const testData = [
  { id: 1, date: "2020-12-21", loan: "10,000", balance: "10000" },
  { id: 2, date: "2021-01-09", interest: "900", paid: "6,500", balance: "4,400" },
  { id: 3, date: "2021-01-22", interest: "286", loan: "5,000", balance: "9,686" },
  { id: 4, date: "Today", interest: "97", balance: "9,783" },
  { id: 5, date: "2021-02-22", interest: "1,404", balance: "11,090" },
];

const App = function () {

  const [data, setData] = useState(testData);

  const itemList = data.map(item =>
    <tr key={item.id}>
      <td>{item.date}</td>
      <td>{item.interest}</td>
      <td>{item.loan}</td>
      <td>{item.paid}</td>
      <th>{item.balance}</th>
    </tr>
  );

  return (
    <div className="App">

      <div className="container">
        <form>
          <div className="input-field">
            <input type="text" id="account-id" required />
            <label className="account-id">Account ID</label>
          </div>
          <button className="btn blue darken-2 z-depth-0">Enter</button>
        </form>
      </div>

      <div className="container">
        <table className="highlight">
          <thead>
            <tr>
              <th>Date</th>
              <th>Interest</th>
              <th>Loan</th>
              <th>Paid</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {itemList}
          </tbody>
        </table>
      </div>


    </div >
  );
};
export default App;
