import { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import React from "react";
import Cards from "./components/Cards";


function App() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] =useState(filterData[0].title)

  async function fetchData(){

    setLoading(true);
    try{
      let response = await fetch(apiUrl).then(res => res.json())
      setCourses(response.data)
      setLoading(false);
    }catch(e){
      console.log(e)
    }  
  }

  useEffect(() => {
    fetchData();
    console.log(category)
  }, []) 



  return (
    <div className="app">
      {/*navbar*/}
      <div>
        <Navbar/>
      </div>


     {/*bottom section*/}
     <div className="bottomSection">
     </div>

     
     {/*filter*/ }
     <div>
     <Filter filterData={filterData} category={category} setCategory={setCategory}/>

    
     </div>



     {/*Courses*/ }
     <div className="coursesCard">
      {
      loading ? "Loading..." : <Cards courses = {courses} category ={category}/>
      }
     </div>

    </div>
  );
}

export default App;
