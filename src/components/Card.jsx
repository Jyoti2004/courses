import React from "react";
import {toast} from "react-hot-toast"
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

function Card({ course, likedCourses, setLikedCourses }) {
  
  function likeHandler(){
    if(likedCourses.includes(course.id)){
      setLikedCourses((prev) => prev.filter((id) => (id !== course.id)))
      toast.error('Removed from liked courses')
    }
    else{
      if(likedCourses.length === 0){
        setLikedCourses([course.id])
      }
      else{
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success('Added to liked courses')
    }
  }
  

  return (
    <div className="card">
      {/* img components  */}
      <div className="imgComp">
        {/* img  */}
        <img style={{ height: "180px" }} src={course.image.url} alt="" />
        {/* like button  */}
       
          <button className="likedBtn" onClick={likeHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
       
      </div>

      {/* paragraph  */}
      <div className="coursePara">
        <p className="courseTitle">{course.title}</p>
        <p className="courseDes">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
