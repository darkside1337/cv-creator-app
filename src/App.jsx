import React, { useState } from "react";
import Forms from "./components/Forms";
import Resume from "./components/Resume";
import { templateResume, templateResume2, fakeResumeData2 } from "./assets/data";
import { useImmer } from "use-immer";
const App = () => {
  const [userData, setUserData] = useImmer(fakeResumeData2);

  return (
    <div className="container">
      <Forms userData={userData} handleUserData={setUserData} />
      <Resume {...userData} />
    </div>
  );
};

export default App;
