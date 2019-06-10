import {faCode} from "@fortawesome/free-solid-svg-icons";
import {faSitemap} from "@fortawesome/free-solid-svg-icons";
import {faDatabase} from "@fortawesome/free-solid-svg-icons";
import {faServer} from "@fortawesome/free-solid-svg-icons";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {faFlask} from "@fortawesome/free-solid-svg-icons";
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faCss3} from '@fortawesome/free-brands-svg-icons';
import {faJs} from '@fortawesome/free-brands-svg-icons';
import {faNode} from '@fortawesome/free-brands-svg-icons';
import {faAndroid} from '@fortawesome/free-brands-svg-icons';
import {faApple} from '@fortawesome/free-brands-svg-icons';
import {faPython} from '@fortawesome/free-brands-svg-icons';

export const SKILLS = [{
      heading:"Fullstack Web Development",
      items:[
          {
              heading:"Frontend",
              tags: ["HTML", "CSS", "Saas", "Bootstrap", "JavaScript", "jQuery", "AJAX", "FetchAPI","Chart.js","Axios"],
              stars: 5,
              level:"Experienced",
              icon:faCode
          },
          {
              heading:"Libraries/Frameworks",
              tags:["React", "Redux"],
              stars:4,
              level:"Advanced",
              icon:faSitemap
          },
          {
              heading:"Database",
              tags:["MongoDB","SQL Server", "SQLite", "MySQL"],
              stars:3,
              level:"Intermediate",
              icon:faDatabase
          },
          {
              heading:"Backend",
              tags:["Node.js", "Pug", "Express", "Python", "Flask", "Django"],
              stars:3,
              level:"Intermediate",
              icon:faServer
          }
      ]
  },
      {
          heading:"Mobile Development",
          items:[
              {
                  heading:"Flutter",
                  tags: ["Dart", "Custom Widgets", "State Management", "Bloc"],
                  stars:4,
                  level:"Advanced",
                  icon:faMobileAlt
              },
              {
                  heading:"React Native",
                  tags:["JavaScript", "React", "Redux"],
                  stars:2,
                  level:"Beginner",
                  icon:faReact
              },
              {
                  heading:"Android",
                  tags:["Java","Architecture Components"],
                  stars:2.5,
                  level:"Beginner",
                  icon:faAndroid
              },
              {
                  heading:"iOS",
                  tags:["Swift"],
                  stars:2,
                  level:"Beginner",
                  icon:faApple
              },
          ]
      }
];