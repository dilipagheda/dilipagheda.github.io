import popularMoviesImage from '../../images/u-android/PopularMovies/mobile-portrait.png';
import sandwichClubImage from '../../images/u-android/sandwichclub/mobile-portrait.png';
import bakingRecipeImage from '../../images/u-android/BakingRecipe/mobile-portrait.png';

import React from "react";

// Projects - Frontend
export const ANDROID = [
    {
        title: "Popular Movies",
        coverImage: popularMoviesImage,
        displayType: "mobile-project",
        gitHubLink: "https://github.com/dilipagheda/PopularMovies2",
        moreInfo: {
            description:
                <div>
                <p className="card-text">This project is developed as part of Udacity's Android Developer
                    Nanodegree Program. It is about consuming popular movies API and serving the
                    content in a meaningful way to the user.
                </p>
                    <p className="card-text">Users see movies posters in a grid layout and can interact
                        with the poster to learn more about the movie. Users can see movie details,
                        reviews and trailers about the movie and can also mark the movie as favorite by
                        starring it! All favorite movies are stored locally on the device in a database.
                    </p>
                    <p className="card-text">Users can also choose to fetch movies differently based on a
                        criteria.</p>
                    <h5>My Learnings</h5>
                    <ul>
                        <li>Fetch data from the Internet with theMovieDB API.</li>
                        <li>Use adapters and custom list layouts to populate list views.</li>
                        <li>Incorporate libraries to simplify the amount of code you need to write</li>
                        <li>Use Android architecture components</li>
                    </ul>
                    <h5>Skills Gained</h5>
                    <ul>
                        <li>Retrofit2 Network Library</li>
                        <li>Picasso Image Libary</li>
                        <li>Android Architecture Components such as Room, ViewModel and LiveData</li>
                        <li>Grid Layout</li>
                    </ul>
                    <h5>Udacity Review</h5>
                    <p>Superb job implementing Stage 2 of Popular Movies! 👏 I really enjoyed using
                        your app! Great use of Paging concept during scroll. It helps to reduce network
                        data. This is the very useful concept if data is very large amount. its very user
                        friendly app. 👍🏻 👍🏻 👍🏻 👍🏻 👍🏻 👍🏻 👍🏻 👍🏻 Your code is well
                        structured form.👏 👏 👏 👏 👏 👏 Finally, Your hard work has paid off! </p>
            </div>
        }
    },
    {
        title: "Baking Receipe",
        coverImage: bakingRecipeImage,
        displayType: "mobile-project",
        gitHubLink: "https://github.com/dilipagheda/BakingRecipe",
        moreInfo: {
            description: <div>
                <p className="card-text">This project is developed as part of Udacity's Android Developer
                    Nanodegree Program. It involves building an app that is ready to productionize.
                    This will involve finding and handling error cases, adding accessibility features,
                    allowing for localization, adding a widget, and adding a library.
                </p>
                    <p className="card-text">This project required me to implement different layouts for
                        both phone and tablets in portrait and landscape modes, perform thorough testing
                        through automated tests using Espresso framework, re-use the functionality using
                        Fragments, handle various error cases to handle different values in the JSON
                        response, use libraries such as data-binding and above all integrate ExoPlayer to
                        play videos for each step of the recipe.
                    </p>
                    <p className="card-text">It took me around 3 weeks to fully implement this project. I
                        also needed to do lot of learning and building small projects bit by bit to fully
                        grasp different parts that went into it. I had to do lot of testing and I am glad
                        that Espresso tests were part of the requirements as I was able to use it again
                        and again after refactoring.</p>
                    <h5>My Learnings</h5>
                    <ul>
                        <li>Use MediaPlayer/Exoplayer to display videos.</li>
                        <li>Handle error cases in Android.</li>
                        <li>Add a widget to your app experience.</li>
                        <li>Leverage a third-party library in your app.</li>
                        <li>Use Fragments to create a responsive design that works on phones and tablets.</li>
                    </ul>
                    <h5>Skills Gained</h5>
                    <p>Retrofit2 Network Library, Picasso Image Libary, Espresso Tests, Create layouts
                        for Tablet and also for Portrait, Landscape modes, Implement app widget,
                        Implement cool features such as PreviewSeekBar and PIP (Picture in Picture)</p>
                    <h5>Udacity Review</h5>
                    <p>Good job! The project follows all the rubric requirements, well done! 👏 👏 👏</p>
            </div>
        }
    },
    {
        title: "Sandwich Club",
        coverImage: sandwichClubImage,
        displayType: "mobile-project",
        gitHubLink: "https://github.com/dilipagheda/sandwich_club",
        moreInfo: {
            description: <div>
                <p className="card-text">This project is part of the Udacity Android develoer nanodegree
                    program. It is about showing the details of each sandwich once it is selected.
                </p>
                <h5>My Learnings</h5>
                <ul>
                    <li>Practice JSON parsing to a model object</li>
                    <li>Design an activity layout</li>
                    <li>Populate all fields in the layout accordingly</li>
                </ul>
                <h5>Skills Gained</h5>
                <p>Building layouts, parsing JSON without use of any libraries</p>
                <h5>Udacity Review</h5>
                <p>Good work now it's time to take a power nap and be ready for next stage. Keep
                    learning
                    more learn more gain and more gain more shine so be ready to shine like a star and
                    keep
                    learning. Happy coding.
                </p>
            </div>
        }
    }
];