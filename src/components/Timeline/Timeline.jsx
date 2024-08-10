import React, { useState } from 'react';
import './Timeline.css';
import { FaSchool, FaBriefcase } from 'react-icons/fa'; 
import timelineElements from "../../assets/timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import theme_pattern from '../../assets/theme_pattern.svg';

const Timeline = () => {
  const [category, setCategory] = useState("all");
  
  
  const iconStyles = {
    background: "#D8D8D8",
    color: "#333",
  };

  return (
    <div id='timeline' className='timeline'>
      <div className="timeline-title">
        <h1>Education/Experience</h1>
        <img src={theme_pattern} alt="" />
      </div>
      
      <VerticalTimeline>
        {timelineElements.map((element) => {
          const isWorkIcon = element.icon === "work";
          const showButton = element.buttonText !== undefined &&
                             element.buttonText !== null &&
                             element.buttonText !== "";
          const uniqueKey = element.id || element.title || element.date || Math.random();
          
          return (
            <VerticalTimelineElement
              key={uniqueKey}
              date={element.date}
              dateClassName="date"
              iconStyle={iconStyles}
              icon={isWorkIcon ? <FaBriefcase /> : <FaSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
