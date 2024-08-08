import React, { useState } from 'react';
import './Timeline.css';
import { ReactComponent as SchoolIcon } from "../../assets/school.svg";
import { ReactComponent as WorkIcon } from "../../assets/work.svg";
import timelineElements from "../../assets/timelineElements";
import {VerticalTimeline,VerticalTimelineElement} from"react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import theme_pattern from '../../assets/theme_pattern.svg';

const Timeline = () => {
  const [category, setCategory] = useState("all");
  let workIconStyles = { background: "#D8D8D8" };
  let schoolIconStyles = { background: "#D8D8D8" };
  return (
    <div id ='timeline'className='timeline'>
    <div className="timeline-title">
      <h1>Education/Experience</h1>
      <img src={theme_pattern} alt="" />
    </div>
    
    <VerticalTimeline>
      {timelineElements.map((element) => {
        let isWorkIcon = element.icon === "work";
        let showButton =
          element.buttonText !== undefined &&
          element.buttonText !== null &&
          element.buttonText !== "";
          const uniqueKey = element.id || element.title || element.date || Math.random();
          

        return (
          <VerticalTimelineElement
            key={element.key}
            date={element.date}
            dateClassName="date"
            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
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
                className={`button ${
                  isWorkIcon ? "workButton" : "schoolButton"
                }`}
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