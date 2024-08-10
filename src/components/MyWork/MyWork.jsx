import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arraow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id ='projects'className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="work-item">
            <a href={work.w_link} target="_blank" rel="noopener noreferrer">
              <img src={work.w_img} alt={work.w_name} />
            </a>
            <div className="work-info">
              <h2>{work.w_name}</h2>
              <p>{work.description}</p>
              <div className="tech-stack">
                {work.tech_stack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-item">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arraow_icon} alt="" />
      </div> */}
    </div>
  )
}

export default MyWork;