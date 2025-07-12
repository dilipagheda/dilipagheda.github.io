import {faCode} from "@fortawesome/free-solid-svg-icons";
import {faSitemap} from "@fortawesome/free-solid-svg-icons";
import {faDatabase} from "@fortawesome/free-solid-svg-icons";
import {faServer} from "@fortawesome/free-solid-svg-icons";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faAndroid} from '@fortawesome/free-brands-svg-icons';
import {faApple} from '@fortawesome/free-brands-svg-icons';
import {faChrome} from '@fortawesome/free-brands-svg-icons';
import {faJava} from '@fortawesome/free-brands-svg-icons';
import {faProjectDiagram} from "@fortawesome/free-solid-svg-icons";
import {faTable} from "@fortawesome/free-solid-svg-icons";
import {faGulp} from '@fortawesome/free-brands-svg-icons';

export const SKILLS = [{
    heading: "Fullstack Web Development",
    items: [
        {
            heading: "Frontend",
            tags: ["HTML", "CSS", "Saas", "Bootstrap", "JavaScript", "jQuery", "AJAX", "FetchAPI", "Chart.js", "Axios"],
            stars: 5,
            level: "Experienced",
            icon: faCode
        },
        {
            heading: "Libraries/Frameworks",
            tags: ["React", "Redux","WordPress"],
            stars: 4,
            level: "Advanced",
            icon: faSitemap
        },
        {
            heading: "Database",
            tags: ["MongoDB", "SQL Server", "SQLite", "MySQL"],
            stars: 3,
            level: "Intermediate",
            icon: faDatabase
        },
        {
            heading: "Backend",
            tags: ["PHP","Node.js", "Pug", "Express", "Python", "Flask", "Django"],
            stars: 3,
            level: "Intermediate",
            icon: faServer
        }
    ]
    },
    {
        heading: "Mobile Development",
        items: [
            {
                heading: "Flutter",
                tags: ["Dart", "Custom Widgets", "State Management", "Bloc"],
                stars: 4,
                level: "Advanced",
                icon: faMobileAlt
            },
            {
                heading: "React Native",
                tags: ["JavaScript", "React", "Redux"],
                stars: 2,
                level: "Beginner",
                icon: faReact
            },
            {
                heading: "Android",
                tags: ["Java", "Architecture Components"],
                stars: 2.5,
                level: "Beginner",
                icon: faAndroid
            },
            {
                heading: "iOS",
                tags: ["Swift"],
                stars: 2,
                level: "Beginner",
                icon: faApple
            },
        ]
    },
    {
        heading:"Test Automation",
        items:[
            {
                heading:"Browser Automation",
                tags:["Selenium Webdriver with Java", "C#", "Node.js" , "JavaScript"],
                level:"Experienced",
                icon:faChrome
            },
            {
                heading:"Mobile Automation",
                tags:["Appium with Java", "XCTest" , "Expresso"],
                level:"Experienced",
                icon:faJava
            },
            {
                heading:"API Automation",
                tags:["Postman", "Newman","Charles Proxy" , "Fiddler"],
                level:"Experienced",
                icon:faProjectDiagram
            },
            {
                heading:"Database Scripting",
                tags:["SQL Server", "Excel Pivot Tables", "Macros", "Datawarehouse"],
                level:"Experienced",
                icon:faTable
            },
            {
                heading:"Build Systems",
                tags:["Bamboo", "TeamCity", "Gulp"],
                level:"Experienced",
                icon:faGulp
            }
        ]
    }
];