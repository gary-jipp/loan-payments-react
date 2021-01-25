import { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = function () {

  const [data, setData] = useState([]);
  const [uid, setUid] = useState();

  const onChange = function (event) {
    setUid(event.target.value);
  };

  const onClick = function (event) {
    event.preventDefault();
    const url = `/api/payments/${uid}`;
    axios.get(url).then(res => setData(res.data))
      .catch(e => console.log(e.ernno));
  };

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
        <form onSubmit={onClick}>
          <div className="input-field">
            <input type="text" id="account-id" required value={uid} onChange={onChange} />
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
