

import React from "react";
import bmiApp from '../../images/flutter/bmiapp.png';
import todoApp from '../../images/flutter/todoey.png';

// Projects - Frontend
export const FLUTTER = [
    {
        title: "BMI Calculator",
        coverImage: bmiApp,
        displayType: "mobile-project",
        gitHubLink: "https://github.com/dilipagheda/bmi-calculator-flutter",
        moreInfo: {
            description:
                <div>
                    <h5>Description</h5>
                    <p>The objective of this project is to learn how to customise Flutter Widgets to achieve a beautiful user interface designs and also use of Flutter to build for both iOS and Android.
                    </p>
                    <p>
                        This app is a Body Mass Index Calculator inspired by the beautiful designs made by Ruben Vaalt. It will be a multi screen app with simple functionality but full-on custom styling. Starter files were provided by London Appbrewery and app is built on top of that.
                    </p>
                    <h5>Technology
                    </h5>
                    <ul>
                        <li>Flutter</li>
                        <li>Dart
                        </li>
                        <li>Third party library - Font Awesome
                        </li>
                    </ul>
                    <h5>Skills gained
                    </h5>
                    <ul>
                        <li>How to use Flutter themes to create coherent branding.
                        </li>
                        <li>How to create multi-page apps using Flutter Routes and Navigator.
                        </li>
                        <li>How to extract and refactor Flutter Widgets with a click of the button.
                        </li>
                        <li>How to pass functions as parameters and fields.
                        </li>
                        <li>How to use the GestureDetector Widget to detect more than just a tap.
                        </li>
                        <li>How to use custom colour palettes by using hex codes.
                        </li>
                        <li>How to customise Flutter Widgets to achieve a specific design style.
                        </li>
                        <li>Understand Dart Enums and the Ternary Operator.
                        </li>
                        <li>Learn about composition vs. inheritance and the Flutter way of creating custom UI.
                        </li>
                        <li>Understand the difference between const and final in Dart and when to use each.
                        </li>

                    </ul>
                </div>
        }
    },
    {
        title: "Todoey",
        coverImage: todoApp,
        displayType: "mobile-project",
        gitHubLink: "https://github.com/dilipagheda/todoey_flutter",
        moreInfo: {
            description:
                <div>
                    <h5>Description</h5>
                    <p>A todo list app using Flutter and Providers package for state management. This app uses beautiful UI, bottomsheet form, FAB and global statemanagement using Google recommended Providers package.
                    </p>
                    <h5>Technology
                    </h5>
                    <ul>
                        <li>Flutter</li>
                        <li>Dart
                        </li>
                        <li>Providers package for state management
                        </li>
                    </ul>
                    <h5>Skills gained
                    </h5>
                    <ul>
                        <li>Understand what is state and why we need to manage it.</li>
                        <li>Understand the difference between ephemeral (local) state and app state.</li>
                        <li>See the problems with simply relying on setState().</li>
                        <li>Learn about the concept of Prop Drilling.</li>
                        <li>Examine various popular ways of managing app state for Flutter projects.</li>
                        <li> Learn about the List Builder.</li>
                        <li>Use the Flutter BottomSheet Widget.</li>
                        <li>Learn to lift state up to be able to access it from children widgets.</li>
                        <li>Learn about design patterns and why they are useful.</li>
                        <li>Understand how the Provider package works and use it to manage app state.</li>
                    </ul>
                </div>
        }
    },
];