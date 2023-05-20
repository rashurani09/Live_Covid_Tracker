import React, { useEffect , useState} from "react";
import './covid.css';

const Covid = () => {
  
  const[data , setData] = useState([]);

  const getCovidData = async () => {
    try {
      // fetch() api returns promises -> fullfilled or rejected , which we will get to know in future
      /* When a function is declared as async, it means that the function will always return a promise. The async keyword wraps the function's return value
       in a resolved promise if a value is returned directly or in a promise that resolves to the returned value. If an error is thrown inside the function,
       the promise will be rejected.*/


      const response = await fetch("https://data.covid19india.org/data.json");
      /*await keyword to wait for the asynchronous fetch request to complete and the response to be received. It then uses await again to wait for the response 
      data to be parsed as JSON. The try...catch block is used to handle any errors that may occur during the asynchronous operations.*/

      const actualData = await response.json();
      // the .json() method is typically used in the context of working with the Response object returned
      //from a network request, such as using the fetch() function to make an HTTP request. The .json()
      //method is available on the Response object and is used to extract the JSON data from the response body.

      console.log(actualData.statewise[0]); // actualData[0] to get data at index 0 of array actualData
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
    <section>
      <h1>🔴LIVE</h1>
      <h2>😷 🦠 🌡️ 🤒 🤧 🙌 💉 🏥</h2>
      <h2>COVID-19 CORONAVIRUS TRACKER </h2>
      <div className="card-container">
      <ul>
        <li className="card">
            <div className="card__main">
            <div className="card__inner">
                <p className="card__name"><span>OUR</span> COUNTRY</p>
                <p className="card__total card__small">INDIA</p>
                </div>  
            </div>
        </li> 
        <li className="card">
            <div className="card__main">
            <div className="card__inner">
                <p className="card__name"><span>TOTAL</span> RECOVERED</p>
                <p className="card__total card__small">{data.recovered}</p>
                </div>  
            </div>
        </li>
        <li className="card">
            <div className="card__main">
            <div className="card__inner">
                <p className="card__name"><span>TOTAL</span> CONFIRMED</p>
                <p className="card__total card__small">{data.recovered}</p>
                </div>  
            </div>
          </li>
        <li className="card">
            <div className="card__main">
            <div className="card__inner">
                <p className="card__name"><span>TOTAL</span> DEATH</p>
                <p className="card__total card__small">{data.deaths}</p>
                </div>  
            </div>
        </li>
        <li className="card">
            <div className="card__main">
            <div className="card__inner">
                <p className="card__name"><span>TOTAL</span> ACTIVE</p>
                <p className="card__total card__small">{data.active}</p>
                </div>  
            </div>
        </li>
        <li className="card">
            <div className="card__main">
            <div className="card__inner"> 
                <p className="card__name"><span>LAST</span> UPDATED</p>
                <p className="card__total card__small">{data.lastupdatedtime}</p>
                </div>  
            </div>
        </li>
        
      </ul>
      </div>
      </section>
    </>
  );
};

export default Covid;
