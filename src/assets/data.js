const templateResume = {
  personalData: {
    name: "Josephine Meyers",
    email: "josephine.meyers@mail.co.uk",
    phone: "+44 3245 5521 5521",
    location: "London, UK",
  },
  education: [
    {
      id: "371a93a5-00f5-421e-bca7-a6098b6e2691",
      startDate: "08/2020",
      endDate: "present",
      location: "New York City, US",
      institution: "London City University",
      degree: "Bachelors in Economics",
    },
  ],
  professionalExperience: [
    {
      id: "38be1622-ffb1-4065-aa72-9bcbf280a22c",
      startDate: "08/2020",
      endDate: "present",
      location: "New York City, US",
      company: "Umbrella Inc.",
      position: "UX & UI Designer",
      description:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
    },
    {
      id: "32cf30fd-0f55-4c97-9e16-aa469bc72864",
      startDate: "04/2018",
      endDate: "02/2019",
      location: "Berlin, Germany",
      company: "Black Mesa Labs",
      position: "UX Research Assistant",
      description:
        "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
    },
  ],
};
const templateResume2 = {
  personalData: {
    name: "Aiden Thompson",
    email: "aiden.thompson@mail.com",
    phone: "+1 555 1234 5678",
    location: "San Francisco, US",
  },
  education: [
    {
      startDate: "09/2015",
      endDate: "05/2019",
      location: "San Francisco, US",
      institution: "Bay Area University",
      degree: "Bachelor of Science in Computer Science",
    },
  ],
  professionalExperience: [
    {
      id: "1c7d29ec-f3ba-46d7-bc47-6e799a738f11",
      startDate: "06/2019",
      endDate: "present",
      location: "San Francisco, US",
      company: "Tech Innovators Ltd.",
      position: "Software Engineer",
      description:
        "Developed and maintained scalable web applications, collaborated with cross-functional teams to implement new features, and ensured code quality through rigorous testing and code reviews.",
    },
    {
      id: "685127e1-dfc8-415d-9895-dda123853910",
      startDate: "03/2017",
      endDate: "12/2018",
      location: "Los Angeles, US",
      company: "Digital Solutions Inc.",
      position: "IT Support Specialist",
      description:
        "Provided technical support to end-users, diagnosed and resolved hardware and software issues, and implemented system upgrades to enhance overall organizational efficiency.",
    },
  ],
};
const fakeResumeData2 = {
  personalData: {
    name: "Sophie Anderson",
    email: "sophie.anderson@email.com",
    phone: "+1 987 654 3210",
    location: "San Francisco, USA",
  },
  education: [
    {
      id: "9876abcd-1234-5678-efgh-ijklmnopqrst",
      startDate: "09/2017",
      endDate: "05/2021",
      location: "San Francisco, USA",
      institution: "Bay Area University",
      degree: "Master of Science in Data Science",
    },
  ],
  professionalExperience: [
    {
      id: "zyxw9876-5432-abcd-9876-wxyz1234abcd",
      startDate: "06/2021",
      endDate: "present",
      location: "San Francisco, USA",
      company: "Data Insights Co.",
      position: "Data Scientist",
      description:
        "Conducted statistical analysis and machine learning on large datasets. Developed predictive models to enhance business decision-making. Collaborated with cross-functional teams to implement data-driven solutions.",
    },
    {
      id: "abcd1234-5678-efgh-ijkl-mnopqrstuvwx",
      startDate: "02/2016",
      endDate: "11/2018",
      location: "Chicago, USA",
      company: "Tech Innovators",
      position: "Research Analyst",
      description:
        "Assisted in market research and competitive analysis. Compiled and presented findings to support strategic decision-making. Conducted surveys and interviews to gather data for research projects.",
    },
  ],
};

const emptyTemplate = {
  personalData: {
    name: "",
    email: "",
    phone: "",
    location: "",
  },
  education: [],
  professionalExperience: [],
};

export { templateResume, emptyTemplate, templateResume2, fakeResumeData2 };
