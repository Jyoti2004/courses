import React from "react";

function Filter({filterData, category, setCategory}){
   
    return(
        <div className="filter">
            {
            filterData.map((item) => (
                <button onClick={() => setCategory(item.title)} className={`${category === item.title? 'filterBtnSelected' : "filterBtn"} `} key={item.id}>{item.title}</button>
            ))
            }

        </div>
    )
}

export default Filter