import React, { useEffect, useRef, useState } from "react";
import { timelineData } from "../../assets/data.js";
import "./Timeline.css";

const Timeline = () => {
  //const [hasItems, setHasItems] = useState()
  const [activeIndex, setActiveIndex] = useState(null)
  const descRef = useRef(null)

  useEffect(()=> {
    if(activeIndex !== null){
      descRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      },[activeIndex])
    }
  })

 


  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">

        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div onClick={() => setActiveIndex(index)} className={`timeline-card timeline-card-${index}`}>
              <div className="text">
                <h3>{item.year}</h3>
                <h4>{item.title}</h4>
              </div>


              {/* {activeIndex === index && (
                <div className={`desc-square desc-${index}`}>
                  <p>{item.description}</p>
                  <div onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(null)
                  }}>x</div>
                </div>
              )} */}







              {/* <ul className="description">
              {item.description.map((desc,i) => (
                <li key={i}
                className={desc.length > 0 ? "hasItems":""}
                onClick={()=> setHasItems(desc)}
                >{desc}</li>
              ))}
            </ul> */}

            </div>
          </div>
        ))}
        {timelineData.map((item, index) => (
          activeIndex === index && (
            <div ref={descRef} className={`desc-square desc-${index}`} key={index}>
              <h2>{item.title}</h2>
              <ul>
                {item.description.map((i, index)=>(
                  <li key={index}>{i}</li>
              ))}
              </ul>
              
              <div onClick={(e)=>{
                e.stopPropagation()
                setActiveIndex(null)
         }} className="closing"><p>x</p></div>
            </div>
          )

        ))}
      </div>

    </div>

  );
};

export default Timeline;
