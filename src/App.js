
import './App.css';
import request from './services/api';
import { useState,useEffect} from 'react';


const App =() => {
  const [Data,setData] = useState(null);
  
 
  useEffect(() => {

    request().then((data) =>
    {
      console.log(data)
    setData(data) });
    
    
  },[])
  return (
    <div className="App">

    {

      (Data === null)? (<p> { console.log("Title")}</p>): ( <div><h1> {Data.title}</h1>
      
      <p> Number of pages in book : {Data.number_of_pages}</p>
      <img src={Data.cover.medium} />
      </div>)
    }




    
     
    </div>
  );
}

export default App;
