import React from 'react';
import './App.css';
import data from './data/data.json'



function App() {
  console.log(data);
  return (
    <div className="App">
      <table>
    <tr>
    <th>Date</th>
    <th>Total Amount</th>
    </tr>
     
     {data.map(d => {
       return(<tr key={d.id}>
         <td>{d.Date}</td>
       <td>{d.Price}</td>
       </tr>)
     })}
      </table>
    </div>
  );
}

export default App;
