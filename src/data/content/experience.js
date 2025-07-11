export const EXPERIENCE = {
    items: [
        {
            companyName: "Atlassian",
            jobTitle: "Software Engineer",
            period: "Apr 2024 - Apr 2025",
            achievements: [
                "Developed features across Jira using React, Relay, GraphQL, TypeScript & Atlaskit",
                "Contributed to development of Jira's new navigation aka nav4. The new navigation comprised of sidebar, top nav bar and horizontal tab navigation",
                "Led and developed a new navigation for Overviews within Jira's nav4 sidebar",
                "Led and developed growth recommendations within Jira's nav4 sidebar. The growth recommendation pulls new products from GraphQL backend and renders on UI via mapped components so that user's get opportunity to see and try new products",
                "Developed starred and recent fly-out menus within Jira's nav4 sidebar",
                "Implemented a functionality to keep all recent projects in a right order set by GraphQL backend via passing currentUrl so that recently visited project is always shown at the top.",
                "Implemented analytics events for Dashboard, Projects, Growth recommendations and Overviews components of Jira's nav4 sidebar.",
                "Implemented syncing of starring projects operation between sidebar and horizontal tab nav by manipulating Relay store using its APIs",
                "Implemented dashboards using Splunk, SignalFx and databricks to compare performance of nav3 and nav4 across different experiences",
                "Contributed to Testing and Bug fixes",
                "Implemented accessibility requirements for Jira's nav4 components",
                "Implemented issue logs notifications menu within nav3 which allows user to navigate to issue logs notifications table",
                "Implemented refetch (using Relay) of starred projects on close event of fly-out menu so that the starred projects list can be updated on nav4 sidebar",
                "Implemented consecutive trial detectors, reliability and performance charts for both backend and frontend using terraform / signalfx",
                "Driven risk assessment scoring of Jira cosmos team's capabilities across alerts, war games, tech ops, experiments, chopper process, SLOs and runbooks",
                "Implemented SSR (Server side rendering) for Growth recommendation components "
            ],
            skills: ["React", "Relay", "GraphQL", "SignalFx", "terraform", "TypeScript", "Atlaskit", "Splunk", "databricks"]
        },
        {
            companyName: "Origin Energy",
            jobTitle: "Senior Software Engineer",
            period: "Jan 2021 - Mar 2024",
            achievements: [
                "Worked with Origin Energy through Focus Professional Services as a Senior Software Engineer.",
                "Day to day tech stack was primarily React, TypeScript, JavaScript and AWS Serverless.",
                "Delivered a digital platform 'Myday' which allowed Field Engineers to collect data from oil wells.",
                "Built a large scale offline first Hybrid Web App that ran inside an iOS App - WebKit. iOS App was built using native Swift.",
                "Successfully delivered more than 20 high quality production releases over the period of 18 months.",
                "Worked closely with Platform team to re-architect and implement data syncing functionality.",
                "Built Offline first React - Frontend App for Myday platform that allowed rapid provisioning of digital forms through a form engine & had offline and data syncing capabilities.",
                "Refactored legacy code by employing JavaScript design patterns (strategy, builder, factory, service-repository etc) to make it maintainable and scalable while reducing bundle size and improving performance.",
                "Built Backend functionality using AWS Serverless.",
                "Helped and mentored team members from all disciplines showing team spirit while also allowing myself to be mentored by tech leads."
            ],
            skills: ["React", "TypeScript", "JavaScript", "AWS Serverless", "Swift", "WebKit", ".Net Core", "Hangfire"]
        },
        {
            companyName: "Commonwealth Bank",
            jobTitle: "Software Engineer",
            period: "Aug 2019 - Jan 2021",
            achievements: [
                "Contributed to the development of an application using HTML, C# & APIs that digitised paper based letters and sent them to clients via a portal, saving $1M in mailing costs.",
                "Developed a Database Syncing Application using .Net Core, Hangfire, C# and SQL that synced business data between legacy database and modern counterpart. Worked very closely with Development Lead to get this delivered.",
                "Developed React components along with unit tests (Jest), story book and automated tests (Cypress)",
                "Contributed to a Project called Digital Communications Channel (DCC) within Colonial First Estate (CFS) division of Commonwealth Bank.",
                "Contributed to CFS MonoRepo utilising Full stack web development approach across Frontend, React and .NET Core APIs",
                "Built Web pages using HTML and SAAS/CSS based on a Mock up provided by UX team.",
                "Developed automated test framework in Cypress, JavaScript and jQuery and implemented test scripts for testing UI in isolation while mocking APIs.",
                "Developed automated test framework in C#, Selenium for end to end test scripts that runs in a real test environment.",
                "Developed PACT contract testing for APIs by writing Consumer and Provider contracts using .NET Core, Entity Framework InMemory DB, Mocking with Moq and C#."
            ],
            skills: ["PACT", ".NET Core", "React", "Cypress", "Selenium", "Entity Framework Core", "Moq", "Unit Testing", "Frontend", "HTML", "CSS", "JavaScript", "Jest", "Storybook", "jQuery", "C#", "SQL", "Hangfire"]
        },
        {
            companyName: "Reserve Bank of Australia",
            location:"Sydney",
            jobTitle: "Automation Test Lead",
            period: "Mar 2013 - Mar 2014",
            achievements: [
                "Developed Behaviour driven development (BDD) based Selenium Web Automation framework from scratch and achieved 100% pass rate across entire automation suite.",
                "Worked with the whole project team to draft testing strategy for RBA’s digital initiative and got it approved by key stakeholders.",
            ],
            skillsGained: [
                "BDD", "Java", "Selenium Webdriver", "Scrum"

            ]
        },
        {
            companyName: "Macquarie Bank",
            location:"Sydney",
            jobTitle: "Technical Test Analyst",
            period: "Mar 2012 - Feb 2013",
            achievements: [
                "Developed Pivot Tables to Talley total numbers of migrated accounts and their data attributes such as balances.",
                "Developed complex SQL queries to run against each data migration run to help detect issues."
            ],
            skillsGained: [
                "SQL", "Datawarehouse"
            ]
        },
        {
            companyName: "Qantas",
            location:"Sydney",
            jobTitle: "Technical Test Analyst",
            period: "Mar 2010 - Feb 2011",
            achievements: [
                "Contributed in System Integration Testing (SIT) by testing XML interface between new web application named Maintainix and legacy mainframe systems",
                "Conducted information sessions with Business Analyst in order to understand business requirements in order to write Test Plans, Test Objective Matrices and Test Scripts",
                "Co-ordinated with offshore testing teams to track down test execution progress for each of the project areas and providing statistics to Test Manager."
            ],
            skillsGained: [
                "XML", "Integration Testing"
            ]
        },
        {
            companyName: "Macquarie Bank",
            location:"Sydney",
            jobTitle: "Software Test Engineer",
            period: "Dec 2008 - Feb 2010",
            achievements: [
                "Developed test harness tool in C# to parse and verify AS2805 messages." +
                "Conducted Functional and Certification Testing of VeriFone EFTPOS terminals and Distra Payment gateway (a.k.a. Switch)",
                "Setting up of end to end testing components such as Visa/MasterCard Simulator, checking connections with Distra switch and other testing subsystems of participating banks."
            ],
            skillsGained: [
                "C#", "AS2805", "Linux"
            ]
        },
        {
            companyName: "Commonwealth Bank",
            location:"Sydney",
            jobTitle: "Software Test Engineer",
            period: "Aug 2008 - Dec 2008",
            achievements: [
                "Executed Visa ADVTK and MasterCard TIP Certification scripts",
                "Performed System Integration Testing of EFT Terminals with Acquiring Switch"
            ],
            skillsGained: [
                "EFTPOS Testing", "AS2805", "Scheme Certification"
            ]
        },
        {
            companyName: "Nasdaq",
            location:"Sydney",
            jobTitle: "Test Engineer",
            period: "Feb 2008 - July 2008",
            achievements: [
                "Contributed in system testing of “Equities Trading Platform”",
                "Automated tests related to opening price algorithm, daily trade events, price calculations using shell scripts."
            ],
            skillsGained: [
                "Shell scripts", "Linux"
            ]
        },
        {
            companyName: "ACI Worldwide",
            location:"Sydney",
            jobTitle: "Test Engineer",
            period: "Mar 2006 - Feb 2008",
            achievements: [
                "Implemented automated test scripts in Java/XML over Linux platform.",
                "Developed Unit Tests in Junit.",
                "Automated testing of payment gateway for multiple protocols such as AS2805, IS08583, Visa, Mastercard and AMEX.",
                "Worked closely with System architects and developers to fully understand the underlying system and ensuring complete test coverage."
            ],
            skillsGained: [
                "EFTPOS switch", "AS2805", "XML", "Java", "jUnit"
            ]
        },
        {
            companyName: "Axalto",
            location:"India",
            jobTitle: "Software Engineer",
            period: "Feb 2004 - Mar 2006",
            achievements: [
                "Developed Terminal Parameter Management System using Microsoft technologies at the time for Gemalto Customers. This system enabled them to download parameters from remote system.",
                "Developed test tools and harnesses to test front-end clients.",
                "Developed SQL Server stored procedures and triggers to support front-end functionality."
            ],
            skillsGained: [
                "C#", "MS-SQL"
            ]
        },
        {
            companyName: "Baeurer Infotech Ltd",
            location:"India",
            jobTitle: "Software Engineer",
            period: "Feb 2001 - Apr 2002",
            achievements: [
                "Developed software modules for CRM applications and wrote back-end stored procedures, functions and triggers to support front end functionality.",
                "Developed UI screens for desktop applications that work with the data provided by backend database.\n" +
                "Worked closely with software architects and DBAs to ensure new code fits and play well in existing codebase."
            ],
            skillsGained: [
                "C#", "Oracle SQL"
            ]
        },
    ]
}