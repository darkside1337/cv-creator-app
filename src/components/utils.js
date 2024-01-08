function isObjEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function openMenuById(id, values) {
  const updatedValues = [...values];
  updatedValues[id] = !updatedValues[id];
  return updatedValues;
}
function isNotEmptyArray(arr) {
  return arr.length !== 0;
}
function emptyEducationObject(id) {
  let obj = {
    id: id,
    startDate: "",
    endDate: "",
    location: "",
    institution: "New School / University",
    degree: "",
  };
  return obj;
}
function emptyExperienceObject(id) {
  let obj = {
    id: id,
    startDate: "",
    endDate: "",
    location: "",
    company: "New Experience",
    position: "",
    description: "",
  };
  return obj;
}
function objHasData(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== "") {
      return true; // Found a non-empty value, return true
    }
  }
  return false; // All values are empty strings
}
export {
  isObjEmpty,
  openMenuById,
  isNotEmptyArray,
  emptyEducationObject,
  objHasData,
  emptyExperienceObject,
};
