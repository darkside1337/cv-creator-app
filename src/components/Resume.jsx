import React from "react";
import Icon from "./Icon";
import { isNotEmptyArray } from "./utils";
const Resume = ({ personalData, education, professionalExperience }) => {
  return (
    <div className="resume">
      <div className="resume__top white">
        <h2 className="resume__name">
          {personalData.name ? personalData.name : null}
        </h2>
        <div className="personalInfo resumeFont">
          {personalData.email && (
            <div>
              <Icon iconName="email" />
              <p>{personalData.email}</p>
            </div>
          )}
          {personalData.phone && (
            <div>
              <Icon iconName="call" />
              <p>{personalData.phone}</p>
            </div>
          )}
          {personalData.location && (
            <div>
              <Icon iconName="location_on" />
              <p>{personalData.location}</p>
            </div>
          )}
        </div>
      </div>
      <div className="resume__lower">
        <div className="resume__education">
          <div className="education__title">
            <h3>Education</h3>
          </div>
          {isNotEmptyArray(education) &&
            education.map((ed) => {
              return (
                <div key={ed.id} className="education__info">
                  <div className="resume__education__left">
                    <div className="education__dates">
                      <p>
                        {ed.startDate} - {ed.endDate}
                      </p>
                    </div>
                    <p>{ed.location}</p>
                  </div>
                  <div className="resume__education__right">
                    <p className="bold">{ed.institution}</p>
                    <p>{ed.degree}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="resume__experiences">
          <div className="experiences__title">
            <h3>Professional Experiences</h3>
          </div>
          {isNotEmptyArray(professionalExperience) &&
            professionalExperience.map((ex) => {
              return (
                <div key={ex.id} className="experience__info">
                  <div className="resume__experience__left">
                    <div className="experience__dates">
                      <p>
                        {ex.startDate} - {ex.endDate}
                      </p>
                    </div>
                    <p>{ex.location}</p>
                  </div>
                  <div className="resume__experience__right">
                    <p className="bold">{ex.company}</p>
                    <p>{ex.position}</p>
                    <p>{ex.description}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Resume;
