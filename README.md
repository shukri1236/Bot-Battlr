Welcome file
Welcome file
## *Learning Goals*

-   Implement a mini web app to practice components, props, state, events, and data fetching in react

## *Instructions*

For this project, you’ll be building out a React application that displays a

list of available bots, among other features. Try your best to find the right

places to insert code into the established code base.

Part of what this code challenge is testing is your ability to follow given

instructions. While you will definitely have a significant amount of freedom in

how you implement the features, be sure to carefully read the directions for

setting up the application.

## *Requirements*

For this project, you must:

-   Have a well-written README file.
-   Fetch data from a local server running JSON DB server.

The instructions below will walk you through the process of ideation and planning your app: deciding on your user interface, planning how the information will be laid out on the page, etc. You should work through all the planning steps before you start doing any coding.

Welcome to *Bot Battlr*, the one and only spot in the known universe where you can custom build your own Bot Army! This is our app:

Here's the scenario: a galactic overlord has hired you, a galactic web developer, to develop a galactic web app that will allow them to browse through a list of robots, view a robot's details, and, enlist a bot into their army.

## *Project Setup*

Once you have the plan in place for the application you want to build take the following steps:

-   Create a new project folder.
-   Create a new GitHub repository.(*NB: ENSURE IT IS PRIVATE*).
-   Add your TM as a contributor to the project. (*This is only for grading purposes.*)
-   Please make sure you regularly commit to the repository.
-   In your project directory, create a db.json file and use this [dataLinks to an external site.](https://drive.google.com/file/d/157IfYxr4Bp63-ByF1g1wCP1uOpQ5i2R4/view?usp=sharing) for your server DB.
-   Run this command to get the backend started:

json-server --watch db.json

-   Test your server by visiting this route in the browser:

http://localhost:8001/bots

## *Project Guidelines*

Your project should conform to the following set of guidelines:

### *Core Deliverables*

As a user, I should be able to:

- See profiles of all bots rendered in **BotCollection**.

- Add an individual bot to my army by clicking on it. The selected bot should

render in the **_YourBotArmy_** component. The bot can be enlisted only ***once*.

The bot *does not* disappear from the **_BotCollection_**.

- Release a bot from my army by clicking on it. The bot disappears from the

**_YourBotArmy_** component.

- Discharge a bot from their service forever, by clicking the red button marked

"*x*", which would delete the bot both from the backend and from the

**_YourBotArmy_** on the frontend.

### *Endpoints for Core Deliverables*

#### GET /bots

Example Response:

[

{

"id": 101,

"name": "wHz-93",

"health": 94,

"damage": 20,

"armor": 63,

"bot_class": "Support",

"catchphrase": "1010010101001101100011000111101",

"avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",

"created_at": "2018-10-02T19:55:10.800Z",

"updated_at": "2018-10-02T19:55:10.800Z"

},

{

"id": 102,

"name": "RyM-66",

"health": 86,

"damage": 36,

"armor": 77,

"bot_class": "Medic",

"catchphrase": "0110011100000100011110100110011000011001",

"avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",

"created_at": "2018-10-02T19:55:10.827Z",

"updated_at": "2018-10-02T19:55:10.827Z"

}

]

```

#### DELETE /bots/:id

Example Response:

{}

## *Advanced Deliverables*

These deliverables are not required to pass the code challenge, but if you have

the extra time, or even after the code challenge, they are a great way to

stretch your skills.

> *Note: If you are going to attempt these advanced deliverables, please be sure to have a working project, and commit all the Core Deliverables first!*

As a user, I should be able to:

- Choose if I want to enlist a bot into my army or just see their data. Clicking

on the card should instead display a show view (**_BotSpecs_**) for that bot,

which should replace **_BotsCollection_**. BotSpecs should have two buttons: one

to go back to the list view and another to enlist that bot. Your app could

look like the following:

- Sort bots by their health, damage or armor. For this, create a new component,

**_SortBar_**.

- When I enlist a bot it will be *removed* from the BotCollection and added

to **_YourBotArmy_**.

- Filter bots by their class. We can select a few filters at the same time.

- Sort bots by their health, damage or armor. For this, create a new component,

**_SortBar_**.

- Only enlist *one* bot from each **bot_class**. The classes are

["Support", "Medic", "Assault", "Defender", "Captain", "Witch"].

Happy hacking!:)

## Rubric

Phase 4 Rubric

Phase 4 Rubric

Criteria

Ratings

Pts

This criterion is linked to a Learning OutcomeProps & State

5  pts

5

Advanced deliverables are met.

4  pts

4

State works and is held by the lowest common component. No unnecessary state is created. Only the necessary props are being passed down. Functions used to edit state are passed down.

3  pts

3

State is working. However, it may be in the wrong component, it might be nested oddly or might have some unnecessary state. Props are being passed unnecessarily to components. Functions that change or calculate state are not defined in the component that they are most closely tied to.

2  pts

2

State is not being set or updated. Props are not being passed down, or you are passing down the right prop but trying to access it incorrectly (wrong name, unnecessary this, state instead of props) or key props are missing. API call does not successfully populate state or does not rely on state at all (e.g. uses querySelector() to grab the value instead of passing the state).

1  pts

1

No code or very little code has been written or the code doesn't run. If it runs, no deliverables have been met. Not managed to set state or pass props successfully.

5  pts  

This criterion is linked to a Learning OutcomeCode Structure/Efficiency

5  pts

5

Advanced deliverables met. Uses some of the following: destructuring, functional components, spreading, hooks, pure functions, performance is taken into account.

4  pts

4

Components are structured in a logical way. Class components only used when needed, functional components used for everything else. Code is abstracted into clear methods. Used object destructuring and spread operator successfully.

3  pts

3

Fetch is triggered in the right place. Code is not abstracted into clear methods. Additional components have been added which serve no purpose. Props and variables could be named consistently and descriptively.

2  pts

2

Starter components have been unnecessarily modified and broken. There is no reference to componentDidMount. Incorrect or unnecessary lifecycle methods are used. Vanilla JavaScript methods (e.g. querySelector()) are being used instead of appropriate React techniques.

1  pts

1

No code or very little code has been written or the code doesn't run, i.e. syntax errors, imports missing, etc. If it runs, no deliverables have been met.

5  pts  

This criterion is linked to a Learning OutcomeRendering

5  pts

5

Everything from 4 plus extra features were added that are not listed in the deliverables.

4  pts

4

Renders everything that is asked for in the deliverables. Components are abstract/reusable. No unnecessary components were created.

3  pts

3

Renders everything that is asked for in the deliverables. Components could be more abstract/reusable. May have created own components instead of using the components provided.

2  pts

2

Did not manage to render everything that was asked for in the deliverables.

1  pts

1

No code or very little code has been written or the code doesn't run. If it runs, no deliverables have been met.

5  pts  

Total Points:  15
