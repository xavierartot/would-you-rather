

Would You Rather...?

Hi everyone! How is it going with the project?

Profile photo
Profile photo
2 replies
Today
Profile photo
Lukindo M.
2:28 PM
Hi. Starting the project was slow, it was more planning and making diagrams then anything (the real world lessons really helped with that). I found that starting with the most difficult parts of project (e.g login feature, deciding which components are smart & dumb) really helped smooth out for the rest of the project

Profile photo
1 reply
08/06/2018
Profile photo
Li L.
7:26 PM
I have done this project.

Profile photo
1 reply
08/06/2018
Tuesday, Aug 7th
Profile photo
Prasanna P.
Mentor
7:34 AM
Hey Guys, Hows the project going on ?

Profile photo
Bruno
12:52 PM
I'm doing well. Today I will finish the UI of the question details. I've already finished Login and Homepage.

But I'm still not feeling confident with the Redux paradigms.

Profile photo
1 reply
Last Tuesday
Profile photo
Andrea G.
4:06 PM
Hello, I am having trouble updating the store. If I debug I can see that the code runs until the _saveQuestionAnswer and _saveQuestion functions but then this don't change the state of the store :(

Profile photo
Profile photo
20 replies
Last Wednesday
Thursday, Aug 9th
Profile photo
ARUN R.
Mentor
10:09 AM
Hi everyone! how is it going with the lessons/project?

Profile photo
Profile photo
23 replies
Last Thursday
Profile photo
Andrea G.
7:48 AM
Hi, am having problems with the login functionality. I am following Tylers post https://tylermcginnis.com/react-router-protected-routes-authentication/

But I have 2 problems:

No able to redirect to to login or any other route from "/"

Profile photo
2 replies
Last Friday
Nor I am not able to make private the other routes as well :(

Profile photo
Profile photo
13 replies
Today
My project: https://github.com/juanbertgomez/reactnd-project-would-you-rather-starter

Profile photo
Andreas B.
10:33 AM
Hi all, i am currently having trouble with Project 2, because my reviewer keeps telling me that authentication does not work. However, it works on my machine and i have no clue what is going on. Unfortunely my reviewer did not give me any hint where the problem might be. What about you? Is authentication not possible for you either? Any help would be highly appreciated... https://github.com/ndbeyer/Udacity-Redux-Project2

Profile photo
Profile photo
6 replies
Last Saturday
Saturday, Aug 11th
Profile photo
John K.
1:43 PM
Question: Can I create and use my own API endpoints for the Would Your Rather project if I have a public server that would accessible by my reviewer? I'd prefer to use Oracle Rest Data Services (ORDS) as this would be more applicable to the projects I'll be doing for my real job. Thanks in advance for any input...

Profile photo
Profile photo
4 replies
Last Saturday
Yesterday
Profile photo
Andreas B.
2:22 PM
Hi guys, i am wondering about a requirement in the project:

The application asks the user to sign in and shows a 404 page if that poll does not exist. (In other words, if a user creates a poll and then the same or another user tries to access that poll by its url, the user should be asked to sign in and then be shown a 404 page. Please keep in mind that new polls will not be accessible at their url because of the way the backend is set up in this application.)

if i login as user1 and create a poll under user1 and then log out and login with user2, the new poll is visible to user2
typing the url in the browser will refresh the page and the state will be lost
there is no backend set up
Well the question is actually how can i avoid that entering a url manually in the adress bar refreshes the application...

Profile photo
Lukindo M.
3:12 PM
I hust completed the project.

just*

to answer your question

Primarly the pages(routes) should not be accessible to anonymous users and should be redirected to the login page. On top of that you need to handle none existing routes as well as question ids that do not exist. By doing this the application itself will always have something to render and not force a page refresh

Profile photo
Andreas B.
3:08 AM
Thanks for your help!

Ori R has joined (12:54 PM).

Tip: Hover over messages to reveal more actions
Project:
Would You Rather...?
 1. Project Overview
 2. Project Instructions & Rubric
 3. Approaching a Project
 4. Your Project Workspace
 5. Would You Rather Workspace
 6. Project: Would You Rather...?
Knowledge
Knowledge
Get support and stay on track

Project Overview

Project Overview
In the "Would You Rather?" Project, you'll build a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

In your app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

Why this project?
This project will solidify your understanding of React and Redux while giving you a chance to express your creativity. You’ll practice improving the predictability of your application’s state; establish strict rules for getting, listening, and updating the store; and identify what state should live inside of Redux and what state should live inside of React components.

Get the Project
You have two options to start developing this project:

develop using your preconfigured Workspace
develop locally on your own computer
Your Workspace is a development environment integrated into the Udacity Classroom. You can both develop your entire app in your Workspace as well as submit your project to be reviewed. For more information about your Workspace, check out the Your Project Workspace page.

Starter Code
The starter code will consist of a _DATA.js file, which represents a fake database and contains methods that let you access the data. The README file outlines how the data is stored and details the methods you can use to access the database.

The only thing you need to edit in the _DATA.js file is the value of avatarURL. Each user should have an avatar, so you’ll need to add a path to each user’s avatar.

Using the provided starter code, you will build a React/Redux front end for the application.

App Functionality
The person using your application should have a way of impersonating/logging in as an existing user. (This could be as simple as having a login box that appears at the root of the application that lets the user select a name from the list of existing users. Alternatively, you could create your own account creation process to allow a user to sign up for an account.) Your application should work correctly regardless of which user is selected. Once the user logs in, the home page should be shown.

We always want to make sure we know who the logged in user is, so information about the logged in user should appear on the page. If someone tries to navigate anywhere by entering the address in the address bar, the user is asked to sign in and then the requested page is shown. The application allows the user to log out and log back in.

Once the user logs in, the user should be able to toggle between his/her answered and unanswered polls on the home page, which is located at the root. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom). The unanswered questions should be shown by default, and the name of the logged in user should be visible on the page.

What would be the point of seeing answered and unanswered polling questions if we couldn’t actually vote or see the results? Each polling question should link to the details of that poll. The details of each poll should be available at questions/:question_id.

When a poll is clicked on the home page, the following is shown:

Text “Would You Rather”;
Avatar of the user who posted the polling question; and
Two options.
For answered polls, each of the two options contains the following:

Text of the option;
Number of people who voted for that option; and
Percentage of people who voted for that option.
The option selected by the logged-in user should be clearly marked.

Since we want to make sure our application creates a good user experience, the application should show a 404 page if the user is trying to access a poll that does not exist. (Please keep in mind that newly created polls will not be accessible at their url because of the way the backend is set up in this application.) It should also display a navigation bar so that the user can easily navigate anywhere in the application.

So what happens when someone votes in a poll? Upon voting in a poll, all of the information of an answered poll should be displayed. The user’s response should be recorded and clearly visible on the poll details page. Users can only vote once per poll; they shouldn’t be allowed to change their answer after they’ve voted -- no cheating allowed! When the user comes back to the home page, the polling question should appear in the “Answered” column.

It would be no fun to vote in polls if we couldn’t post our own questions! The form for posting new polling questions should be available at the /add route. The application should show the text “Would You Rather” and have a form for creating two options. Upon submitting the form, a new poll should be created, the user should be taken to the home page, and the new polling question should appear in the correct category on the home page.

But how can we know how many questions each user has asked and answered? Let’s get some healthy competition going here! The application should have a leaderboard that’s available at the /leaderboard route. Each entry on the leaderboard should contain the following:

User’s name;
User’s picture;
Number of questions the user asked; and
Number of questions the user answered
Users should be ordered in descending order based on the sum of the number of questions they’ve asked and the number of questions they’ve answered. The more questions you ask and answer, the higher up you move.

The user should be able to navigate to the leaderboard, to a specific question, and to the form that allows the user to create a new poll both from within the app and by typing in the address into the address bar. To make sure we’re showing the data that is relevant to the user, the application should require the user to be signed in order to access those pages.

App Architecture
By walking through the Planning Stage and the Coding Stage of the Chirper Project, we’ve given you a useful template for building Redux applications. We recommend using this template for building your “Would You Rather?” Project. Remember that planning your project and its architecture before starting to code will save you a lot of debugging time later on!

For this application, most of the application’s state should be managed by Redux. You’ll find that there are situations where it makes sense to store state outside of the Redux store. Check out what Dan Abramov, the creator of Redux, thinks about choosing between Redux's store and React's state.

Your application’s store should be the source of truth, and components should read the necessary state from the store instead of having their own versions of the same state. There should be no direct API calls in components’ lifecycle methods, and updates should be triggered by dispatching action creators.

Your application’s code should be structured and organized in a logical way, and your components should be modular and reusable.

NEXT
1. A board showing the ranking of leaders in a competition.
2. web design An advertisement on a () spanning the width of the page and shallow in height.
 Definitions by Grammarly
