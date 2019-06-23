import React from "react";
import FullStackAppReactAPI from '../../images/t-fullstack/unit10.png';

// Projects - Frontend
export const REACTJS = [
    {
        title: "Full Stack App with React and a REST API",
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

];