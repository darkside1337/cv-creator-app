import React from "react";
import Icon from "./Icon";
import Input from "./Input";
import { useImmer } from "use-immer";
import { emptyEducationObject, emptyExperienceObject } from "./utils";
import {
  templateResume,
  emptyTemplate,
  templateResume2,
  fakeResumeData2,
} from "../assets/data";
import { useState } from "react";

/* ----------------------------- Forms Component ---------------------------- */

const Forms = ({ handleUserData, userData }) => {
  const { personalData, education, professionalExperience } = userData;
  /* ----- accordion expanders for education and professional experiences ----- */
  const [isExpanded, setExpand] = useImmer([false, false]);
  /* --------------------------- education dropdowns --------------------------- */
  const [educationDropDowns, setEducationDropDown] = useImmer(
    education.map((ed) => ({ id: ed.id, isOpen: false }))
  );
  /* -------------------------- experiences dropdowns ------------------------- */
  const [experiencesDropDowns, setExperiencesDropDown] = useImmer(
    professionalExperience.map((ex) => ({ id: ex.id, isOpen: false }))
  );
  // event handlers
  /* ------------------------- personal info handlers ------------------------- */
  function expandMenu(index) {
    setExpand((draft) => {
      draft[index] = !draft[index];
    });
  }

  function handleFullName(e) {
    handleUserData((draft) => {
      draft.personalData.name = e.target.value;
    });
  }
  function handleEmail(e) {
    handleUserData((draft) => {
      draft.personalData.email = e.target.value;
    });
  }
  function handlePhone(e) {
    handleUserData((draft) => {
      draft.personalData.phone = e.target.value;
    });
  }
  function handleAddress(e) {
    handleUserData((draft) => {
      draft.personalData.location = e.target.value;
    });
  }
  /* ------------------------- template loader buttons ------------------------ */
  function loadEmptyTemplate() {
    handleUserData((draft) => (draft = emptyTemplate));
  }
  function loadTemplate() {
    handleUserData((draft) => (draft = fakeResumeData2));
  }
  /* --------------------------- education handlers --------------------------- */
  function addNewEducation() {
    let newId = crypto.randomUUID();
    let newEducationObj = emptyEducationObject(newId);

    handleUserData((draft) => {
      draft.education = [...draft.education, newEducationObj];
    });
    setEducationDropDown((draft) => {
      draft.push({ id: newId, isOpen: false });
    });
  }
  function deleteEducation(id) {
    handleUserData((draft) => {
      draft.education = draft.education.filter((uni) => uni.id != id);
    });
  }
  /* ------------------------- education info handlers ------------------------ */
  function handleSchool(event) {
    const schoolId = event.currentTarget.id;

    handleUserData((draft) => {
      const schoolIndex = draft.education.findIndex(
        (school) => school.id == schoolId
      );
      // failsafe
      if (schoolIndex !== -1) {
        draft.education[schoolIndex].institution = event.target.value;
      }
    });
  }
  function handleDegree(event) {
    const schoolId = event.currentTarget.id;

    handleUserData((draft) => {
      const schoolIndex = draft.education.findIndex(
        (school) => school.id == schoolId
      );
      // failsafe
      if (schoolIndex !== -1) {
        draft.education[schoolIndex].degree = event.target.value;
      }
    });
  }
  function handleStartDate(event) {
    const schoolId = event.currentTarget.id;

    handleUserData((draft) => {
      const schoolIndex = draft.education.findIndex(
        (school) => school.id == schoolId
      );
      // failsafe
      if (schoolIndex !== -1) {
        draft.education[schoolIndex].startDate = event.target.value;
      }
    });
  }
  function handleEndDate(event) {
    const schoolId = event.currentTarget.id;

    handleUserData((draft) => {
      const schoolIndex = draft.education.findIndex(
        (school) => school.id == schoolId
      );
      // failsafe
      if (schoolIndex !== -1) {
        draft.education[schoolIndex].endDate = event.target.value;
      }
    });
  }
  function handleLocation(event) {
    const schoolId = event.currentTarget.id;

    handleUserData((draft) => {
      const schoolIndex = draft.education.findIndex(
        (school) => school.id == schoolId
      );
      // failsafe
      if (schoolIndex !== -1) {
        draft.education[schoolIndex].location = event.target.value;
      }
    });
  }
  /* ----------------------- toggle education dropdowns ----------------------- */
  function toggleEducationDropDown(e) {
    let dropDownId = e.currentTarget.id;
    let dropDownIndex = educationDropDowns.findIndex(
      (dropdowns) => dropdowns.id === dropDownId
    );

    if (dropDownIndex !== -1) {
      setEducationDropDown((draft) => {
        draft[dropDownIndex].isOpen = !draft[dropDownIndex].isOpen;
      });
    }
  }
  /* ---------------------------- add new education --------------------------- */
  function addNewExperience() {
    let newId = crypto.randomUUID();
    let newExperienceObj = emptyExperienceObject(newId);

    handleUserData((draft) => {
      draft.professionalExperience = [
        ...draft.professionalExperience,
        newExperienceObj,
      ];
    });
    setExperiencesDropDown((draft) => {
      draft.push({ id: newId, isOpen: false });
    });
  }
  /* ---------------------- toggle experiences dropdowns ---------------------- */
  function toggleExperiencesDropDown(e) {
    let dropDownId = e.currentTarget.id;
    let dropDownIndex = experiencesDropDowns.findIndex(
      (dropdowns) => dropdowns.id === dropDownId
    );

    if (dropDownIndex !== -1) {
      setExperiencesDropDown((draft) => {
        draft[dropDownIndex].isOpen = !draft[dropDownIndex].isOpen;
      });
    }
  }
  /* ------------------------ experiences info handlers ----------------------- */
  function handleCompany(e) {
    const experienceId = e.currentTarget.id;

    handleUserData((draft) => {
      const experienceIndex = draft.professionalExperience.findIndex(
        (ex) => ex.id === experienceId
      );

      if (experienceIndex !== -1) {
        draft.professionalExperience[experienceIndex].company = e.target.value;
      }
    });
  }
  function handlePosition(e) {
    const experienceId = e.currentTarget.id;

    handleUserData((draft) => {
      const experienceIndex = draft.professionalExperience.findIndex(
        (ex) => ex.id === experienceId
      );

      if (experienceIndex !== -1) {
        draft.professionalExperience[experienceIndex].position = e.target.value;
      }
    });
  }
  function handleExStartDate(e) {
    const experienceId = e.currentTarget.id;

    handleUserData((draft) => {
      const experienceIndex = draft.professionalExperience.findIndex(
        (ex) => ex.id === experienceId
      );

      if (experienceIndex !== -1) {
        draft.professionalExperience[experienceIndex].startDate =
          e.target.value;
      }
    });
  }
  function handleExEndDate(e) {
    const experienceId = e.currentTarget.id;

    handleUserData((draft) => {
      const experienceIndex = draft.professionalExperience.findIndex(
        (ex) => ex.id === experienceId
      );

      if (experienceIndex !== -1) {
        draft.professionalExperience[experienceIndex].endDate = e.target.value;
      }
    });
  }
  function handleExLocation(e) {
    const experienceId = e.currentTarget.id;

    handleUserData((draft) => {
      const experienceIndex = draft.professionalExperience.findIndex(
        (ex) => ex.id === experienceId
      );

      if (experienceIndex !== -1) {
        draft.professionalExperience[experienceIndex].location = e.target.value;
      }
    });
  }
  function handleDescription(e) {
    const experienceId = e.currentTarget.id;

    handleUserData((draft) => {
      const experienceIndex = draft.professionalExperience.findIndex(
        (ex) => ex.id === experienceId
      );

      if (experienceIndex !== -1) {
        draft.professionalExperience[experienceIndex].description =
          e.target.value;
      }
    });
  }
  /* ------------------------ handle experience delete ------------------------ */
  function deleteExperience(id) {
    handleUserData((draft) => {
      draft.professionalExperience = draft.professionalExperience.filter(
        (ex) => ex.id != id
      );
    });
  }
  return (
    <div className="form__container">
      <div className="template__loader">
        <button className="deleteBtn coolBtn" onClick={loadEmptyTemplate}>
          <Icon iconName="delete" /> Clear Resume
        </button>
        <button className="button__alt__clr coolBtn" onClick={loadTemplate}>
          <Icon iconName="system_update_alt" /> Load Example
        </button>
      </div>
      <div className="personal__info">
        <h2 className="bold mb-8">Personal Details</h2>
        <Input
          label="Full Name"
          placeholder="First and last name"
          id="fullNameInput"
          onChange={handleFullName}
          value={personalData.name}
        />
        <Input
          label="Email"
          placeholder="Enter email"
          id="emailInput"
          recommended={true}
          onChange={handleEmail}
          value={personalData.email}
        />
        <Input
          label="Phone number"
          type="tel"
          placeholder="Enter phone number"
          id="phoneInput"
          recommended={true}
          onChange={handlePhone}
          value={personalData.phone}
        />
        <Input
          label="Address"
          placeholder="City, Country"
          id="addressInput"
          recommended={true}
          onChange={handleAddress}
          value={personalData.location}
        />
      </div>
      <div className="accordion">
        <div className="accordion__upper">
          <div className="accordion__upper_left">
            <Icon iconName="school"></Icon>
            <h2>Education</h2>
          </div>
          <button
            className={
              isExpanded[0]
                ? "defaultBtn expandBtn active"
                : "defaultBtn expandBtn"
            }
            onClick={() => expandMenu(0)}
          >
            <Icon iconName="expand_more"></Icon>
          </button>
        </div>
        {isExpanded[0] ? (
          <div className="accordion__lower">
            {education.length > 0 &&
              education.map((ed) => (
                <>
                  <div key={ed.id} className="education">
                    <h4>{ed.institution}</h4>
                    <div>
                      <button
                        className="deleteBt btn__clear deleteBtn"
                        id={ed.id}
                        onClick={(e) => deleteEducation(e.currentTarget.id)}
                      >
                        <Icon iconName="delete" />
                      </button>
                      <button
                        id={ed.id}
                        className="editBtn btn__clear"
                        onClick={(e) => {
                          toggleEducationDropDown(e);
                        }}
                      >
                        <Icon iconName="edit" />
                      </button>
                    </div>
                  </div>
                  {/* <div className="edit__education hidden"> */}
                  <div
                    className={`edit__education ${
                      educationDropDowns.find(
                        (dropdown) => dropdown.id === ed.id
                      ).isOpen
                        ? ""
                        : "hidden"
                    }`}
                  >
                    <Input
                      label="School"
                      placeholder="Enter school / university"
                      id={ed.id}
                      className="schoolInput"
                      onChange={handleSchool}
                      value={ed.institution}
                    />
                    <Input
                      label="Degree"
                      placeholder="Enter Degree / Field of Study"
                      id={ed.id}
                      className="degreeInput"
                      onChange={handleDegree}
                      value={ed.degree}
                    />
                    <Input
                      label="Start Date"
                      placeholder="Enter Start Date"
                      id={ed.id}
                      className="startDateInput"
                      onChange={handleStartDate}
                      value={ed.startDate}
                    />
                    <Input
                      label="End Date"
                      placeholder="Enter End Date"
                      id={ed.id}
                      className="endDateInput"
                      onChange={handleEndDate}
                      value={ed.endDate}
                    />
                    <Input
                      label="Location"
                      placeholder="Enter Location"
                      id={ed.id}
                      className="locationInput"
                      onChange={handleLocation}
                      value={ed.location}
                    />
                    <div className="placeCenter">
                      <button
                        className="saveBtn"
                        id={ed.id}
                        onClick={toggleEducationDropDown}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </>
              ))}

            <div className="placeCenter">
              <button
                className="btn__clear add__btn"
                onClick={() => {
                  addNewEducation();
                }}
              >
                Add <Icon iconName="add" />
              </button>
            </div>
          </div>
        ) : null}
      </div>
      <div className="accordion">
        <div className="accordion__upper">
          <div className="accordion__upper_left">
            <Icon iconName="work" />
            <h2>Professional Experiences</h2>
          </div>
          <button
            className={
              isExpanded[1]
                ? "defaultBtn expandBtn active"
                : "defaultBtn expandBtn"
            }
            onClick={() => expandMenu(1)}
          >
            <Icon iconName="expand_more"></Icon>
          </button>
        </div>
        {isExpanded[1] ? (
          <div className="accordion__lower">
            {professionalExperience.length > 0 &&
              professionalExperience.map((ex) => (
                <>
                  <div className="experiences">
                    <h4>{ex.company}</h4>
                    <div>
                      <button
                        className="deleteBt btn__clear deleteBtn"
                        id={ex.id}
                        onClick={(e) => deleteExperience(e.currentTarget.id)}
                      >
                        <Icon iconName="delete" />
                      </button>
                      <button
                        id={ex.id}
                        className="editBtn btn__clear"
                        onClick={toggleExperiencesDropDown}
                      >
                        <Icon iconName="edit" />
                      </button>
                    </div>
                  </div>
                  <div
                    className={`edit__experiences ${
                      experiencesDropDowns.find(
                        (dropdown) => dropdown.id === ex.id
                      ).isOpen
                        ? ""
                        : "hidden"
                    }`}
                  >
                    <Input
                      label="Company Name"
                      placeholder="Enter Company Name"
                      id={ex.id}
                      className="companyInput"
                      onChange={handleCompany}
                      value={ex.company}
                    />
                    <Input
                      label="Position Title"
                      placeholder="Enter Position Title"
                      id={ex.id}
                      className="degreeInput"
                      onChange={handlePosition}
                      value={ex.position}
                    />
                    <Input
                      label="Start Date"
                      placeholder="Enter Start Date"
                      id={ex.id}
                      className="startDateInput"
                      onChange={handleExStartDate}
                      value={ex.startDate}
                    />
                    <Input
                      label="End Date"
                      placeholder="Enter End Date"
                      id={ex.id}
                      className="endDateInput"
                      onChange={handleExEndDate}
                      value={ex.endDate}
                    />
                    <Input
                      label="Location"
                      placeholder="Enter Location"
                      id={ex.id}
                      className="locationInput"
                      onChange={handleExLocation}
                      value={ex.location}
                    />
                    <Input
                      label="Description"
                      placeholder="Enter Description"
                      id={ex.id}
                      type="textarea"
                      className="descriptionInput"
                      onChange={handleDescription}
                      value={ex.description}
                    />
                    <div className="placeCenter">
                      <button
                        className="saveBtn"
                        id={ex.id}
                        onClick={toggleExperiencesDropDown}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </>
              ))}
            <div className="placeCenter">
              <button
                className="btn__clear add__btn"
                onClick={() => {
                  addNewExperience();
                }}
              >
                Add <Icon iconName="add" />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Forms;
