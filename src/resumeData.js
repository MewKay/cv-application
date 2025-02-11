const resumeData = {
  generalInfo: {
    fullName: "John Jones",
    phoneNumber: "111-222-3333",
    email: "john@worker.net",
  },
  education: [
    {
      schoolName: "Medium College",
      studyTitle: "Bachelors of Science in Computer Science",
      endDate: "August 2020",
    },
    {
      schoolName: "High University",
      studyTitle: "Master of Science in Cybersecurity",
      endDate: "August 2022",
    },
  ],
  experience: [
    {
      companyName: "Mandor Tech",
      positionTitle: "Full Stack Developer",
      workStart: "December 2022",
      workEnd: "July 2024",
      mainResp: [
        {
          bulletPointKey: crypto.randomUUID(),
          bulletPointData:
            "Developed and maintained scalable web applications using JavaScript, React, and Node.js, improving platform efficiency by 15%.",
        },
        {
          bulletPointKey: crypto.randomUUID(),
          bulletPointData:
            "Collaborated with cross-functional teams including product managers and designers to deliver high-quality features on tight deadlines.",
        },
        {
          bulletPointKey: crypto.randomUUID(),
          bulletPointData:
            "Implemented API integrations and optimized database queries, reducing response times by 20%.",
        },
        {
          bulletPointKey: crypto.randomUUID(),
          bulletPointData:
            "Conducted code reviews, provided mentorship to junior developers, and introduced best practices for version control and testing.",
        },
        {
          bulletPointKey: crypto.randomUUID(),
          bulletPointData:
            "Troubleshot and resolved software bugs, ensuring a seamless user experience and reducing critical issues by 30%.",
        },
        {
          bulletPointKey: crypto.randomUUID(),
          bulletPointData:
            "Led the migration of legacy code to a modern microservices architecture, resulting in improved system scalability.",
        },
      ],
    },
  ],
};

export default resumeData;
