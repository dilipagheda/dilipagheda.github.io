import feedreaderImage from '../../images/u-frontend/feedreader.png';
import arcadeGameImage from '../../images/u-frontend/arcade-game.png';
import memoryGameImage from '../../images/u-frontend/memory-game.png';
import restaurantReviewImage from '../../images/u-frontend/restaurant-review.png';
import webAppDashboardImage from '../../images/t-frontend/unit7.png';
import employeeDirectoryImage from '../../images/t-frontend/unit8.png';
import wheelOfSuccessImage from '../../images/t-frontend/unit6.png';
import imageGallary from '../../images/t-frontend/unit5.png';
import webStyleGuideImage from '../../images/t-frontend/unit4.png';
import formDesign from '../../images/t-frontend/unit3.png';
import responsiveDesign from '../../images/t-frontend/unit2.png';
import FeedReaderVideo from '../../images/u-frontend/videos/FeedReader.mp4';
import ArcadeGameVideo from '../../images/u-frontend/videos/ArcadeGame.mp4';
import MemoryGameVideo from '../../images/u-frontend/videos/MemoryGame.mp4';


import React from "react";

// Projects - Frontend
export const FRONTEND = [
    {
        id:1,
        title: "Feedreader Testing",
        displayType: "web-project",
        coverImage: feedreaderImage,
        gitHubLink: "https://github.com/dilipagheda/feedreader-jasmine",
        liveView: "http://dilipagheda.com/feedreader-jasmine/",
        moreInfo: {
            description:
                <div>
                    <h5>Description</h5>
                    <p className="card-text">This project is a web-based application that reads RSS feeds. It uses
                    Jasmine framework for unit tests.
                    </p>
                    <h5>Test cases</h5>
                    <ol>
                        <li>Write a test that loops through each feed in the allFeeds object and ensures it has a URL
                            defined and that the URL is not empty
                        </li>
                        <li>Write a test that loops through each feed in the allFeeds object and ensures it has a name
                            defined and that the name is not empty
                        </li>
                        <li>Write a new test suite named "The menu"</li>
                            <li>Write a test that ensures the menu element is hidden by default</li>
                            <li>Write a test that ensures the menu changes visibility when the menu icon is clicked.</li>
                            <li>Write a test suite named "Initial Entries"</li>
                            <li>Write a test that ensures when the loadFeed function is called and completes its work, there
                                is at least a single .entry element within the .feed container
                            </li>
                            <li>Write a test suite named "New Feed Selection"</li>
                            <li>Write a test that ensures when a new feed is loaded by the loadFeed function that the
                                content actually changes
                            </li>
                    </ol>
                    <h5>My Learnings</h5>
                    <ul>
                        <li>Jasmine Testing Framework</li>
                    </ul>
                    <h5>Udacity Review</h5>
                    <p>Great Job! all the tests work as expected</p>
                </div>,
            video:FeedReaderVideo
        }
    },
    {
        id:2,
        title: "Classic Arcade Game",
        displayType: "web-project",
        coverImage: arcadeGameImage,
        gitHubLink: "https://github.com/dilipagheda/arcade-game",
        liveView: "http://dilipagheda.com/arcade-game/",
        moreInfo: {
            description:
                <div>
                    <p className="card-text">This is the 3rd Project for Udacity's Frontend developer nanodegree
                        program. It is about building a classical arcade game using Object oriented JavaScript. This
                        project uses ES 6 style of classes.
                    </p>
                        <h5>Rules of the game</h5>
                        <ol>
                            <li>User first chooses a player by clicking on it.
                            </li>
                            <li>Use arrow keys (up, down, left and right) to move the player.
                            </li>
                            <li>The goal of the game is to reach to the water (top side of the game board that has blue
                                blocks) as many times as possible. Every time a player reaches the water , score is
                                incremented by one and player's location is reset.
                            </li>
                            <li>If a player collides with the bugs, player loses a life and comes back to the original
                                location.
                            </li>
                            <li>Player gets maximum of 5 lives.
                            </li>
                            <li>When player loses all lives, game is over and final score is displayed.
                            </li>
                            <li>Each game has a random collectible that user can optionally collect. If user collects it
                                then user gets 5 points.
                            </li>
                            <li>As user scores higher, game gets more difficult in terms of more bugs and they come at
                                faster speed.
                            </li>
                            <li>Enjoy the game!!
                            </li>
                        </ol>

                        <h5>My Learnings</h5>
                        <ul>
                            <li>ES6 JavaScript</li>
                            <li>Building on top of existing codebase</li>
                            <li>Using a Gaming Engine</li>
                        </ul>
                        <h5>Udacity Review</h5>
                        <p>Well done! You have done a great job on this project.I really appreciate the efforts you have
                            put into this game</p>
                </div>,
            video:ArcadeGameVideo
        }
    },
    {
        id:3,
        title: "Memory Game",
        displayType: "web-project",
        coverImage: memoryGameImage,
        gitHubLink: "https://github.com/dilipagheda/memory-game",
        liveView: "http://dilipagheda.com/memory-game/",
        moreInfo: {
            description:
                <div>
                    <p className="card-text">This project is a browser based card matching game that has cool
                        animations, game logic and engaging interactions. It is done using jQuery and
                        JavaScript with bit of help from Bootstrap, Animate.css and FontAwesome library. It
                        also supports mobile first responsive design where layout adapts based on screensize.
                        It achieves this through Grid layout and media queries.
                    </p>
                    <p className="card-text">The game board consists of sixteen "cards" arranged in a grid.
                        The deck is made up of eight different pairs of cards, each with different symbols
                        on one side. The cards are arranged randomly on the grid with the symbol face down.
                        The gameplay rules are very simple: flip over two hidden cards at a time to locate
                        the ones that match!
                    </p>
                    <h5>My Learnings</h5>
                    <ul>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>Responsive web design</li>
                        <li>Use of Modal screen</li>
                        <li>Lots of HTML & CSS</li>
                    </ul>
                    <h5>Udacity Review</h5>
                    <p>Great job on your game project. One of the best put together project I have seen.
                        I can see that you have put in a lot of hard work.
                        I really like the design and layout of your code. I like the use of animation. It
                        is all very well thought out. Well done.</p>
                </div>,
            video:MemoryGameVideo
        }
    },
    {
        id:4,
        title: "Employee Directory",
        displayType: "web-project",
        coverImage: employeeDirectoryImage,
        gitHubLink: "https://github.com/dilipagheda/employee_directory_v1",
        liveView: "https://dilipagheda.github.io/employee_directory_v1/",
        moreInfo: {
            description:
                <div>
                <p className="card-text">This project is developed as part of Treehouse Frontend
                    development Techdegree. Communicating with APIs allows you to work with microservices
                    and with vast databases to build useful tools and relevant information quickly and
                    easily. You can build utilities, games, infographics, and more. You can also
                    integrate, display, and analyze social media and large data sets without having to
                    create and curate them yourself.
                </p>
                    <p className="card-text">Awesome Startup is a distributed company with employees working
                        all over the world. They need a smart way to for employees to share contact
                        information with each other. In this project, you’ll use the Random User Generator
                        API (https://randomuser.me/) to grab information for 12 random “employees,” and use
                        that data to build a prototype for an Awesome Startup employee directory. You’ll
                        request a JSON object from the API using fetch and parse the data so that 12
                        employees are listed in a grid with their thumbnail image, full name, email, and
                        location. Clicking the employee’s image or name will open a modal window with more
                        detailed information, such as the employee’s birthday and address.
                    </p>
                    <h5>My Learnings</h5>
                    <ul>
                        <li>Use Fetch API to retrieve data from internet using APIs</li>
                        <li>Grid layout</li>
                        <li>Responsive web design</li>
                        <li>Use of Modal screen</li>
                        <li>Lots of HTML, CSS and JavaScript</li>
                    </ul>
                    <h5>Treehouse Review</h5>
                    <p>Exceed Expectations! </p>
                    <p>You've successful used FetchAPI to request 12 random users from randomuser.me.
                        You've also chained the .then methods to make sure the results are usable with your
                        JS. Because of this, the 12 employees are different with every page load, great!</p>
                    <p>Dilip, what a fantastic project 8! You've come a long way, learnt a lot, and it
                        definitely shows! You've got a fantastic layout here, as well as great
                        understanding of how APIs work. Your project is well styled and is very easy on the
                        eyes.</p>
            </div>
        }
    },
    {
        id:5,
        title: "WebApp Dashboard",
        displayType: "web-project",
        coverImage: webAppDashboardImage,
        gitHubLink: "https://github.com/dilipagheda/web_app_dashboard_v3.1",
        liveView: "https://dilipagheda.github.io/web_app_dashboard_v3.1/",
        moreInfo: {
            description:
                <div>
                    <p className="card-text">This project is developed as part of Treehouse Frontend
                        development Techdegree. </p>
                    <p className="card-text">Many websites do more than just give you information. Sites like
                        GitHub, Zillow, Mint and Treehouse let users do things. They act like programs you
                        run on your computer. These web applications, often include pages for looking at your
                        profile, what you've done in the week or what you need to get done. These
                        "dashboards" act like your control panel for controlling the web app.
                    </p>
                    <p className="card-text">In this project, you'll take a mockup and a few icons and build a
                        beautiful, web dashboard complete with JavaScript-driven charts and graphs. You only
                        need to take the design and create the HTML, CSS and JavaScript functionality for
                        this one page -- you don't need to create other pages, or build any backend or
                        database functionality.
                    </p>
                    <h5>My Learnings</h5>
                    <ul>
                        <li>CSS Grid layout</li>
                        <li>Using SVG graphics</li>
                        <li>Chart.js for Interactive Charts</li>
                        <li>Local Storage</li>
                        <li>Responsive web design</li>
                    </ul>
                    <h5>Treehouse Review</h5>
                    <p>Exceed Expectations! </p>
                    <p>Nice, you have all of the required media queries in place. Also great work using CSS
                        Grid to layout the major components of the page, like the header, navigation, and the
                        different widgets. As a thought, all of your widgets could be housed in their own CSS
                        grid container element. Once again, great work on this part of the rubric!</p>
                    <p>Wow... Outstanding work on your Web App Dashboard! You put some extra time in this
                        one to make it perfect and it really shows in the final result! This will truly
                        become the standard I compare other dashboard projects to! </p>
                </div>
        }
    },
    {
        id:6,
        title: "Game Show App",
        displayType: "web-project",
        coverImage: wheelOfSuccessImage,
        gitHubLink: "https://github.com/dilipagheda/game_show_app_v1.2",
        liveView: "https://dilipagheda.github.io/game_show_app_v1.2/",
        moreInfo: {
            description:
                <div>
                    <p className="card-text">This project is developed as part of Treehouse Frontend
                        development Techdegree. </p>
                    <p className="card-text">In this project, you'll create a browser version of “Wheel of
                        Success”, a word guessing game where players will click letters from an onscreen
                        keyboard to try to guess a random phrase.
                    </p>
                    <p className="card-text">Using Javascript, you’ll create an array of phrases and write
                        functions to choose a random phrase from that array, split the phrase into letters,
                        and put those letters onto the game board.
                    </p>
                    <p className="card-text">Each time the player guesses a letter, you’ll need to compare the
                        letter the player has chosen with the random phrase. If the letter is in the phrase,
                        you’ll update the game board with the chosen letters.
                    </p>
                    <p className="card-text">A player can keep choosing letters until they make five incorrect
                        guesses. If the letter they chose isn’t in the phrase, you’ll remove one of the
                        player’s 5 guesses. </p>
                    <p className="card-text">If the player completes the phrase before they run out of guesses,
                        a winning screen will display. If the player guesses incorrectly 5 times, a losing
                        screen will display.
                    </p>
                    <p className="card-text">A player can guess a letter only once. After they’ve guessed a
                        letter, your programming will need to disable that letter.
                    </p>
                    <h5>My Learnings</h5>
                    <ul>
                        <li>Plain JavaScript Programming</li>
                        <li>DOM Interaction</li>
                    </ul>
                    <h5>Treehouse Review</h5>
                    <p>Exceed Expectations! </p>
                    <p>Hey Dilip! Great project and resubmission. There isn't much to say because there was
                        only 1 error, and you fixed it! As always, super happy with your work, and I always
                        look forward to seeing more!
                    </p>
                </div>
        }
    },
    {
        id:7,
        title: "An Interactive Photo Gallery",
        displayType: "web-project",
        coverImage: imageGallary,
        gitHubLink: "https://github.com/dilipagheda/photo_gallery_v4",
        liveView: "https://dilipagheda.github.io/photo_gallery_v4/",
        moreInfo: {
            description:
                <div>
                    <p className="card-text">This project is developed as part of Treehouse Frontend
                        development Techdegree. </p>
                    <p className="card-text">In this project, you will create an interactive photo gallery
                        using JavaScript and jQuery. Thumbnails and photos will be provided with
                        descriptions. At the top of the page, you'll have a search area where photos will
                        hide and show depending on user input. When the user clicks on a thumbnail, the photo
                        will display in a lightbox. There should be a back and previous arrows to cycle
                        through photos.
                    </p>
                    <p className="card-text"></p>
                    <h5>My Learnings</h5>
                    <ul>
                        <li>Flexbox</li>
                        <li>Lightbox plugin</li>
                        <li>jQuery</li>
                        <li>HTML,CSS and JavaScript</li>
                    </ul>
                    <h5>Treehouse Review</h5>
                    <p>Exceed Expectations! </p>
                    <p>Your design implementation includes a thumbnail gallery of the images and a search
                        box above it. This matches the general spacing and arrangement of the elements
                        displayed in the mockup. Great job!

                        Additionally, you've also made the page a responsive mobile-first design using a
                        breakpoint at 768px. The page adjusts nicely between the 2 views. Awesome!</p>
                    <p>Hi Dilip, another fantastic project from you! I am very impressed by your
                        implementation of the Lightbox Plus jQuery plugin, and your attempt at using CSS
                        Grids. You've definitely gone above and beyond with the Project, as usual! You've put
                        great effort into developing and implementing your custom jQuery search script, and
                        it works fantastically!
                    </p>
                </div>
        }
    },
    {
        id:8,
        title: "Web Style Guide",
        displayType: "web-project",
        coverImage: webStyleGuideImage,
        gitHubLink: "https://github.com/dilipagheda/style_guide_v4",
        liveView: "https://dilipagheda.github.io/style_guide_v4/",
        moreInfo: {
            description:
                <div>
                    <p className="card-text">This project is developed as part of Treehouse Frontend
                        development Techdegree. </p>
                    <p>In this project, we’ve provided an index.html file with a set of class names already
                        defined. You will be responsible for creating rules to style the web page using each
                        of those class names. This will provide you with a set of classes that you can then
                        use in other projects to apply similar styles. You'll create a sass project to do
                        this, using partials, variables, extends, and mixins to apply the styles and classes
                        to the style guide page. When done, you’ll have a Sass micro-framework to quickly
                        prototype other websites.
                    </p>
                    <h5>My Learnings</h5>
                    <ul>
                        <li>SAAS</li>
                        <li>Media Queries</li>
                        <li>Flexbox</li>
                    </ul>
                    <h5>Treehouse Review</h5>
                    <p>Exceed Expectations! </p>
                    <p>Hi Dilip. Wow, what another fantastic project from you! It's very clear that you
                        learn the concepts from the units effectively and understand them well enough to
                        create a great project out of what you learnt.

                        The most important and hardest part of this project were Mixins and the Grid layout.
                        You did an awesome job on both! You've created not just the required Mixins and used
                        them all over your project. Your Grid layout was well written with mixins, maps and
                        for loops, and clearly working for your project too. Both very impressive feats!

                        With this project, you now have a useful starting point (and especially grid) that
                        you can use for future projects without doing all the calculations from scratch.
                    </p>
                    <p>I continue to look forward to seeing work from you, Dilip, you are on your way to
                        being a fantastic Front End Developer!</p>
                </div>
        }
    },
    {
        id:9,
        title: "An Online Registration Form",
        displayType: "web-project",
        coverImage: formDesign,
        gitHubLink: "https://github.com/dilipagheda/online_registration_form",
        liveView: "https://dilipagheda.github.io/online_registration_form/",
        moreInfo: {
            description:
                <div>
                    <p className="card-text">This project is developed as part of Treehouse Frontend
                        development Techdegree. </p>
                    <p className="card-text">In this project, you'll build a responsive, mobile-friendly
                        registration form using a wide variety of HTML form input types and attributes. Using
                        the supplied mockup files, you'll build a mobile and desktop version of the form
                        using media queries, and a "mobile-first" approach.
                    </p>
                    <h5>My Learnings</h5>
                    <ul>
                        <li>HTML 5 Form</li>
                        <li>Responsive Web Design</li>
                    </ul>
                    <h5>Treehouse Review</h5>
                    <p>Exceed Expectations! </p>
                    <p>You've done a spectacular job on this project reaching not only for the "meets"
                        grade but reaching for the stars and succeeding at the Exceeds grade!! I also wanted
                        to mention that I love the style changes you added to the project giving it a
                        personal touch!
                    </p>
                </div>
        }
    },
    {
        id:10,
        title: "Mobile-first Responsive Layout",
        displayType: "web-project",
        coverImage: responsiveDesign,
        gitHubLink: "https://github.com/dilipagheda/mobile-first-responsive-layout",
        liveView: "https://dilipagheda.github.io/mobile-first-responsive-layout/",
        moreInfo: {
            description:
                <div>
                    <p className="card-text">This project is developed as part of Treehouse Frontend
                        development Techdegree. </p>
                    <p className="card-text">In this project, you'll build a responsive, mobile-first layout
                        using HTML and CSS. The layout should demonstrate an understanding of responsive
                        design by adjusting to accommodate small, medium, and large screen sizes.
                    </p>
                    <p className="card-text">You will write CSS to style the page for a small mobile device
                        first. Then, using min-width media queries, you’ll add breakpoints to adjust the
                        layout for wider tablet and desktop screens.
                    </p>
                    <h5>My Learnings</h5>
                    <ul>
                        <li>Mobile first Responsive Web Design</li>
                    </ul>
                    <h5>Treehouse Review</h5>
                    <p>Exceed Expectations! </p>
                    <p>Hi Dilip, great job on Project 2! It's evident that you've taken the concepts from
                        Unit 2, practiced them with a mini project, and then used everything you learnt in
                        this project. I continue to see great things in your development future. Keep on
                        going on, you're doing wonderfully!
                    </p>
                </div>
        }
    },
    {
        id:11,
        title: "Restaurant Review",
        displayType: "web-project",
        coverImage: restaurantReviewImage,
        gitHubLink: "https://github.com/dilipagheda/restaurant-review",
        moreInfo: {
            description:
                <div>
                    <p className="card-text">This project is about converting an existing static web app that lacks
                        accessibility into fully responsive, mobile ready, offline first and accessible app.
                        It uses MapBox API for rendering maps, service workers for offline caching and accessibility
                        tags for screen readers.
                    </p>
                        <p className="card-text">
                            Note: This project is not hosted due to privacy of API key. Please refer to github for
                            instructions on how to run this locally.
                        </p>
                        <h5>My Learnings</h5>
                        <ul>
                            <li>Web Accessibility</li>
                            <li>Service workers</li>
                            <li>Responsive web design</li>
                            <li>Mabbox API</li>
                        </ul>
                        <h5>Udacity Review</h5>
                        <p>Great Job!</p>
                </div>
        }
    },
];