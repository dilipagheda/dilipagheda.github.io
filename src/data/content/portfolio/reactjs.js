import React from "react";
import FullStackAppReactAPI from '../../images/t-fullstack/unit10.png';
import ReactGallary from '../../images/t-fullstack/unit07.png';

// Projects - Frontend
export const REACTJS = [
    {
        title: "Full Stack App - React + REST API",
        coverImage: FullStackAppReactAPI,
        gitHubLink: "https://github.com/dilipagheda/full_stack_app_with_react_and_a_rest_api-v1",
        moreInfo: {
            description: <div>
                <h5>Description</h5>
                <p>This is the 10th and final project as part of Treehouse's Fullstack JavaScript Techdegree! It is the
                    full stack application that will provide a way for users to administer a school database containing
                    information about courses: users can interact with the database by retrieving a list of courses,
                    viewing detail for a specific course, as well as creating, updating and deleting courses in the
                    database.</p>
                <p>In addition, the project will require users to create an account and sign in to make changes to the
                    database.
                </p>
                <h5>Technologies Used</h5>
                <ul>
                    <li>React (Create-react-app)</li>
                    <li>Functional and Class based components</li>
                    <li>React Router to setup routes</li>
                    <li>Redux for global state management</li>
                    <li>Axios for API calls</li>
                    <li>Node.js , Express and MongoDB for API layer</li>
                </ul>
                <h5>How to run the project locally</h5>
                <h6>Setup API project</h6>
                <ul>
                    <li>Go to the /api directory</li>
                    <li>Run npm install</li>
                    <li>Run npm start</li>
                    <li>Voila! API server is running on port 5000 and Your MongoDB is also setup and running in the background! 👏</li>
                </ul>
                <h6>Setup React App</h6>
                <ul>
                    <li>Go to /client folder
                    </li>
                    <li>Run npm install
                    </li>
                    <li>Run npm start
                    </li>
                    <li>React app should start in your browser at http://localhost:3000. Have fun! 👍
                    </li>
                </ul>

            </div>
        }
    },
    {
        title: "React Gallary App",
        coverImage: ReactGallary,
        gitHubLink: "https://github.com/dilipagheda/react-gallary-app",
        liveView:"http://dilipagheda.com/react-gallary-app",
        moreInfo: {
            description: <div>
                <h5>Description</h5>
                <p>This project is 7th project for Treehouse full stack Javascript techdegree. It is about creating an
                    image gallary app using React components, React routes and Fetch API. It fetches images from Flicker API
                    service. Users can also search the phrase (e.g., cat) and it will show images that matches the search phrase.
                    Yay!!
                </p>
                <h5>Project tasks:
                </h5>
                <ul>
                    <li>Use JavaScript and JSX to build out the gallery components in a modular fashion.
                    </li>
                    <li>Use React Router to set up routes for three default topic pages and a search page.
                    </li>
                    <li>Use the Fetch API or a tool like Axios to fetch data from the Flickr API and use it to display images in your app.
                    </li>
                    <li>Add logic to handle the search and various requirements of the project.
                    </li>
                    <li>Add to the supplied CSS to personalize the project.
                    </li>
                    <li>Use HashRouter instead of BrowserRouter so that it can be deployed on Github pages without Errors and URLs always stay in sync with React Routes.
                    </li>
                </ul>
                <h5>Live Deployment
                </h5>
                <p>
                    This project is deployed live on Github Pages. It can be accessed <a href="http://dilipagheda.com/react-gallary-app">Here!</a>
                </p>

                <h5>Technologies Used</h5>
                <ul>
                    <li>React (Create-react-app)</li>
                    <li>Functional and Class based components</li>
                    <li>React Router to setup routes</li>
                    <li>FetchAPI</li>
                </ul>
                <h5>How to run the project locally</h5>
                <ul>
                    <li>Download the project folder on your local machine. You can also clone it using this link: https://github.com/dilipagheda/react-gallary-app.git</li>
                    <li>Run npm install</li>
                    <li>Add config.js file in src folder and add a key for Flicker api as below:
                        const apiKey = 'YOUR API KEY';
                        export default apiKey;
                    </li>
                    <li>Run npm start to start the local server and launch the project in the browser.
                    </li>
                </ul>
            </div>
        }
    },

];