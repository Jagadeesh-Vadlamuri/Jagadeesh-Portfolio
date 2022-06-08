/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jagadeesh's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Jagadeesh Vadlamuri Portfolio",
    type: "website",
    url: "http://Jagadeesh Vadlamuri.com/",
  },
};

//Home Page
const greeting = {
  title: "Jagadeesh  Vadlamuri",
  logo_name: "Jagadeesh Vadlamuri",
  nickname: "Full Stack Web Developer",
  subTitle:
    "A Passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bEnqc2FIT1OZnpgoOI4cR_EsfypfxWE9/view?usp=sharing",
  portfolio_repository: "https://github.com/Jagadeesh-Vadlamuri",
  githubProfile: "https://github.com/Jagadeesh-Vadlamuri",
  githubRepos: "https://github.com/Jagadeesh-Vadlamuri?tab=repositories"
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Jagadeesh1919",
  // linkedin: "https://www.linkedin.com/in/Jagadeesh- Vadlamuri-88710b138/",
  // gmail: "Jagadeesh Vadlamuri98@gmail.com",
  // gitlab: "https://gitlab.com/Jagadeesh Vadlamuri98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/Jagadeesh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Jagadeesh-Vadlamuri",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jagadeesh-vadlamuri-40675620a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  // {
  //   name: "Gmail",
  //   link: "mailto:jagadeesh.jacky1001@gmail.com",
  //   fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
  //   backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  // },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/randy_jagadeesh", 
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/jagadeesh.randy.3/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/jagadeesh_vadlamuri/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
  // {
  //   name: "Youtube",
  //   link: "https://www.youtube.com/channel/UC4OZsXpxuHqsndPXX1PLH-Q",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "red", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    // {
    //   title: "Full Stack Web Development",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready full stack applications",
    //     "⚡ Handling databases big and small through dividing-and-conquering entry requests on different CPUs via MongoDB",
    //     "⚡ Interacting with APIs and their own web servers that allows web applications to live and breathe, serving HTML or other browser-based resources based on client requests using Express JS",
    //     "⚡ Communicating with a site to retrieve, insert, update, delete, and create records in a database using SQL",
    //     "⚡ Creating features like responsive graphics, slideshows, text autocorrecting, and interactive forms using JavaScript",
    //     "⚡ Blending of HTML, CSS, and JavaScript to create web applications using Bootstrap",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Full Stack Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing highly scalable production ready full stack applications",
        "⚡ Building responsive website front end using React",
        "⚡ Blending of HTML, CSS, and JavaScript to create web applications using Bootstrap",
        "⚡ Creating application backend in Node & Express with NPM and YARN libraries/packages",
        "⚡ Testing the Backend API's with Postman post development",
        "⚡ Developing the automation scripts for testing using Selenium",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express JS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "black",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Selenium",
          fontAwesomeClassname: "simple-icons:selenium",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "purple",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "orange",
          },
        },
        
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        // "⚡ Worked on multiple cloud platforms",
        // "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying the applications into the deployable environments like Heroku",
        "⚡ Setting up the streaming jobs from DB to Server or vice-versa on AWS",
        "⚡ Integrating with Databases like MySQL, Firebase and Mongo to store the data"
      ],
      softwareSkills: [
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            backgroundColor: "purple",
            color: "white"
          },
        },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/Jagadeesh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@Jagadeesh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Adikavi Nannaya University - Rajahmundry",
      subtitle: "B.Sc in Computer Science",
      logo_path: "aknu_logo.png",
      alt_name: "ANUR_Rajahmundry",
      duration: "2015 - 2018",
      descriptions: [
        "⚡ I have learnt programming language basics for C, Java & Problem Solving skills during my college",
        "⚡ I was selected for Merit Scholarship which is given to top 30% of students in college",
        "⚡ I have learnt Typing in my college and my typing speed is 22 WPM",
      ],
      website_link: "https://aknu.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
//     {
//       title: "Machine Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "stanford_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "Stanford University",
//       color_code: "#8C151599",
//     },
//     {
//       title: "Deep Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
//       alt_name: "deeplearning.ai",
//       color_code: "#00000099",
//     },
//     {
//       title: "ML on GCP",
//       subtitle: "- GCP Training",
//       logo_path: "google_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "Data Science",
//       subtitle: "- Alex Aklson",
//       logo_path: "ibm_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
//       alt_name: "IBM",
//       color_code: "#1F70C199",
//     },
//     {
//       title: "Big Data",
//       subtitle: "- Kim Akers",
//       logo_path: "microsoft_logo.png",
//       certificate_link:
//         "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
//       alt_name: "Microsoft",
//       color_code: "#D83B0199",
//     },
//     {
//       title: "Advanced Data Science",
//       subtitle: "- Romeo Kienzler",
//       logo_path: "ibm_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
//       alt_name: "IBM",
//       color_code: "#1F70C199",
//     },
//     {
//       title: "Advanced ML on GCP",
//       subtitle: "- GCP Training",
//       logo_path: "google_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "DL on Tensorflow",
//       subtitle: "- Laurence Moroney",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
//       alt_name: "deeplearning.ai",
//       color_code: "#00000099",
//     },
    {
      title: "Fullstack Web Development",
      subtitle: "- GUVI",
      logo_path: "coursera_logo.png",
      certificate_link:
        "",
      alt_name: "GUVI Certification ",
      color_code: "#2A73CC",
    },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Training, Work",
  description:
    "I have been working as a Senior Test Engineer in one of the MNC's currently. I have worked on the Test and API automation tools like Selenium, Postman with Selenium frameworks such as 'TestNG', 'Cucumber' leveraging all my skills. Now, I have learnt Full Stack Web Development in GUVI with JavaScript as my primary language and developed many frontend projects and 4 full stack projects with a good web responsiveness",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Training",
      experiences: [
        {
          title: "Trainee",
          company: "Infosys Ltd",
          company_url: "https://www.infosys.com/",
          logo_path: "infosys_logo.png",
          duration: "Sep 2018 - Jan 2019",
          location: "Mysore, Karnataka",
          description:
            "I went through my training in mysore for 3+ months and learnt various technologies like Selenium, UFT, DBMS, Python and mainframe technologies like COBOL DB2 etc....and i've been into Manual and Automation testing for the past 3 years",
          color: "#0879bf",
        },
        {
          title: "Full Stack Web Developer trainee",
          company: "GUVI - tech deserves you",
          company_url: "https://www.guvi.com/",
          logo_path: "guvi_logo.png",
          duration: "Nov 2021 - Present",
          location: "Hyderabad, Telangana",
          description:
            "I am very passionate about the web developement right from the initial stages of my tech career. I have learnt the Full Stack Web Development in GUVI and have developed many frontend projects that includes 4 full stack projects as well that leverages all my skills that i have learnt with frontend as REACT, backend as NODE, middleware as EXPRESS and database as MONGO. Apart from this, I have learnt the technologies like HTML 5, CSS 3, JS, Bootstrap and many more frameworks and libraries that helps my code work efficiently in all environments. I have completed 35+ projects that includes React, Node and full stack i.e, (React+Node+Mongo) as a part of my learning and all those commits have been attached in the Open Source tab above",
          color: "#fc1f20",
        }
        
      ],
    },
    {
      title: "Work",
      experiences: [
        {
          title: "Testing Executive",
          company: "Infosys Ltd",
          company_url: "https://www.infosys.com/",
          logo_path: "infosys_logo.png",
          duration: "Jan 2019 - Jan 2020",
          location: "Bhubaneswar, Orissa",
          description:
            "I have tested an agricultural based application known as CEP for the Organisation called AGCO which is German based during the initial period of my IT career as a manual tester and i have developed 1200+ test cases/scripts in my testing with most of the critical issues identified. During this period, I have learnt the basics of HTML and CSS and i use to develop a few mini web pages with all HTML tags being used and the CSS being applied for the web pages",
          color: "#9b1578",
        },
        {
          title: "Senior Testing Executive",
          company: "Infosys Ltd",
          company_url: "https://www.infosys.com/",
          logo_path: "infosys_logo.png",
          duration: "Jan 2020 - Sep 2020",
          location: "Hyderabad, Telangana",
          description:
            "I have Switched to automation and developed 300+ test automation scripts using Selenium Java with TestNG & Cucumber frameworks and tested the API's using the Postman tool. At this point of time, I have learnt the basics of javascript where i use to apply the DOM methods to the developed web pages to make the buttons and other items actionable on the pages",
          color: "#fc1f20",
        },
        {
          title: "Test Engineer",
          company: "Infosys Ltd",
          company_url: "https://www.infosys.com/",
          logo_path: "infosys_logo.png",
          duration: "Sep 2020 - Present",
          location: "Hyderabad, Telangana",
          description:
            "I have worked for a third party organisation called XEROX and performed both manual and automation testing to the application. I have developed the automation scripts using Selenium Java with TestNG framework and tested the application with utmost defects being found. Apart from this, I have learnt the deeper concepts of HTML, CSS and Javascript only after which i have learnt the complete full stack web development using MERN Stack in parallel in a separate organization with my automation testing being continued in my current organization",
          color: "#fc1f20",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have developed many frontend projects using REACT including 5 Full-Stack projects using MERN Stack with different concepts and ideologies",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "address_image.svg",
    description:
      "Please reach out to me via my linkedin below",
  },
  blogSection: {
    title: "Channels",
    subtitle:
      "For Creating awareness to the people about different Unknown things in life, I have created a Youtube Channel and i keep posting the new stuff every back and forth and keep the people updated",
    link: "https://www.youtube.com/channel/UC4OZsXpxuHqsndPXX1PLH-Q",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Near V.S.L. College, Bondagunta, Kakinada, East Godavari, Andhra Pradesh - 533005",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/@16.9890673,82.257624,16z",
  },
  phoneSection: {
    title: "Mobile Number",
    subtitle: "+91 7780482271",
  },
  emailSection: {
    title: "Email",
    subtitle: "jagadeesh.jacky1001@gmail.com"
  }
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
