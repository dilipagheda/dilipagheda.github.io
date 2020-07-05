

import React from "react";
import StaticWebSite from '../../images/t-fullstack/unit06.png';

// Projects - Frontend
export const NODEJS = [
    {
        title: "Static Node & Express Website",
        coverImage: StaticWebSite,
        displayType: "web-project",
        gitHubLink: "https://github.com/dilipagheda/static_node_and_express_site-v1",
        liveView: "https://fsjs-portfolio.herokuapp.com/",
        moreInfo: {
            description:
                <div>
                    <h5>Description</h5>

                    <p>This is the 6th Project as part of Full stack JavaScript Techdegree for Treehouse.
                        It is about using node.js, express, pug and Json data to create a beautiful portfolio website.
                    </p>
                    <p>
                    The site contains a modern landing page, an about page where you'll have a chance to share contact info,
                        practice your elevator pitch and talk a little about myself, and a series of project pages to show off and
                        detail a projects from this and other Techdegrees.
                    </p>
                    <p>
                    A JSON file is created that stores all the data about the projects.
                    </p>
                    <p>
                    Pug is used for templating that utilize the JSON to generate the markup that is ultimately displayed in the
                        browser.
                    </p>
                    <p>
                    Node.js and Express is used to:
                    </p>
                    <ul>
                        <li>
                            Import the required dependencies
                        </li>
                        <li>
                            Link the JSON with the Pug templates
                        </li>
                        <li>
                            Set up routes to handle requests
                        </li>
                        <li>
                            Set up the middleware to utilize static files like CSS
                        </li>
                        <li>
                            Handle errors
                        </li>
                        <li>
                            Set up a server to serve the project
                        </li>
                    </ul>
                    <h5>Technologies Used</h5>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Pug</li>
                    </ul>
                    <h5>How to run this project locally</h5>
                    <ul>
                        <li>Download the repo to your local machine
                        </li>
                        <li>Go to root directory
                        </li>
                        <li>Run npm install to install all dependancies
                        </li>
                        <li>Run nodemon
                        </li>
                        <li>Type localhost:3000 in your browser
                        </li>
                    </ul>
                    <h5>Deployment
                    </h5>
                    <p>
                        This project is live and hosted on Heroku. Yay!! You can visit it <a href="https://fsjs-portfolio.herokuapp.com/" > Here!</a>

                    </p>
                </div>
        }
    },

];