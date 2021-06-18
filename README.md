# Simon's Piano

![Am I responsive image to go here](assets/images/readme-imgs/am-i-responsive.png)

Simon's Piano is a web page that provides the user with a fun game to play. The game takes it's inspiration from the original Simon game but with it's own twist on it, the twist being that it's played through a piano keyboard. When the keys are pressed, they make a sound which represents a note on the piano.

The game is primarily about providing the user with a fun time, but it has other goals. It aims to inspire people to begin playing music, whether that is piano, guitar or any other instrument. Through playing the game, people will hopefully realise that they can easily learn to play a couple of songs which might start them on their inspired journey to learning to play an instrument. 

Simon's Piano aims to be a really simple game and web-page overall that doesn't take any time or skill to start playing. I hope you enjoy!

## Table of Contents
* User Experience (UX)
    * Site Owner Goals
    * User Goals
    * User Stories
    * User Requirements
    * User Expectations
    * Design Choices
        * Fonts
        * Colours
        * Icons
* Wireframes
* Features
    * Implemented Features
    * Features Not Yet Implemented
* Technologies Used
* Testing
* Bugs
* Deployment
* Credits
* Final Comments

## User Experience (UX)

### Site Owner Goals
* I want to inspire people to play music
* I want to give the users of my site a positive experience with a game that evokes positive emotions
* I want to have a visually appealing website
* I want the users to feel like they are testing their short-term memory and attention span
* I want the users to be able to toggle between light and dark mode on the page
* I want the user to be given feedback for their interactions with the page

### User Goals
* To have fun while playing the game
* For the game to be responsive so that I can play on various devices
* To feel like my short-term memory is being challenged 
* To be able to see my score throughout the duration of the game 
* To be told how far I've got when I lose the game
* To be given feedback based on my choices - interactivity
* To be able to change the colour theme of page when playing the game
* To be able to give the site owner some feedback so that they could improve the game and fix any bugs that may arise.

### User Stories
* As a user, I would like to be able to choose when I start the game so that I am in control
* As a user, I would like to track my score throughout the game
* As a user, I would like to be able to access a variety of difficulties based on my skill level
* As a user I would like the game to have some element of variety in the game play so that I don't get bored. 
* As a user, I would like to be given some positive/negative feedback when I pass/fail a level of the game
* As a user, I would like to be able to see the game developer’s Github page to see if they have any other cool games to play
* As a user, I would like to be able to pick a colour theme for the website
* As a user, I would like to be able to give the game designer some feedback on how to improve the game features

### User Requirements
* The site needs to be easy to navigate between the different features via good UX
* To be able to press play to start the game when the user is ready
* To have a landing page that tells the user what the page is at a glance
* To have a well laid out page that is easy to use and understandable
* To be able to read clearly any messaging that is displayed on screen - constrasting backgrounds
* To be given clear and easy to understand instructions
* To get feedback from the game when I win or lose in a level
* To be able to see the score throughout the game 

### Design Choices
To keep the game nice and simple for the user, I decided to keep the colour scheme basic. The user’s attention should be drawn to the game area as soon as possible with no confusion about what the aim of the game is. To achieve this, the game area is going to be placed in the middle of the screen with a contrasting background colour. 

#### Fonts: 
There is very little text on the landing page so as not to distract the user and not to take attention away from the game area. For the fonts, I decided to go to [Google Fonts](https://fonts.google.com/?standard-styles=) which is great for getting any kind of font you want. The fonts I chose for my page are *Dancing Script* & *Lato* with *sans-serif* as a backup font in the event that Google Fonts does not work. The reason I decided to use *Dancing Script* is that it is quiet a beautiful, artistic font which would almost represent the art of a piano and music. 

#### Colours:
When deciding what colour scheme to choose for my project, I decided to keep it really simple with a black and white colour scheme to be similar to the colours of a piano. This has the effect of being simple yet sleek and visually appealing. And, of course when choosing the colours of the white piano keys, I had to choose ivory over white. 

I used [Coolors](https://coolors.co/) to generate a colour scheme for the site. This is a really cool site that randomly generates colour schemes. You can keep generating new colour schemes until you find ones that fits your requirements. The site provides you with the [Hex value](https://en.wikipedia.org/wiki/Hexadecimal) of the colours so you can just copy and paste it into your code. See below for my choice of colour scheme. 

![Colour Pallette](assets/images/readme-imgs/simons-piano-palette.png)

There were two different colour schemes the user could chose to toggle between. The colours used in each are as follows: 
#### Dark
* Body Background: black and white - [darker image](assets/images/background/piano-dark-bg.jpg)
* Font Colours(Headings and body): #FCFCFC 
* Piano Keys: ##FBFFF1 - Ivory & #212121 - Black
* Buttons: #212121 - Black
* Footer: #212121 - Black

#### Light
* Body Background: black and white - [lighter image](assets/images/background/piano-light-bg.jpg)
* Font Colours(Headings and body): #212121 
* Piano Keys: ##FBFFF1 - Ivory & #212121 - Black
* Buttons: #FCFCFC - White
* Footer: #FCFCFC - White
* Footer Elements: #212121 - Black 

#### Icons
I used some music icons to the heading to add some design to the page and keep with the music theme. 

I used two icons in the footer. One for the Github logo & one for the dark mode logo.

I got the icons from [Font Awesome](https://fontawesome.com/) which is a great website for all your icon needs. I feel that the icons just add a little bit of extra style to the page and make it overall a bit more visually appealing. 

## Wireframes

When creating my wireframes, I first drew some rough sketches on paper but then decided that [Balsamiq](https://balsamiq.com/) would be the most suitable technology to use to assist with the design of the game. 

I created mock ups for my page to fit into the main device types - Desktop, Tablet and Mobile. In my mock-ups, I had envisaged there being one single page for the project with a pop-up form for EmailJS where the user could provide feedback. 

* [Desktop](wireframes/desktop-simons-piano-pame.png)
* [Tablet](wireframes/tablet-simons-piano-game.png)
* [Mobile](wireframes/mobile-simons-piano-game.png)

## Features 
### Implemented Features
* Title/heading sections at the top of the page
* Start button to begin the game
* Score area outlining the score and the level the user has reached
* Interactive black and white piano keys
* Musical audio notes attached to the corresponding piano keys
* Footer which provides the user a link to the site owners Github profile
* A responsive design that accomodates multiple devices
* The ability to play the game with the keyboard to give the player more of an authentic piano feeling
* Instructions for what keys to use to play the piano keys
* Feedback on how the player is doing - levels are tallied and displayed 
* Button feedback for every button pressed or click they make through audio and visual
* A button to enable the user to pick a colour theme for the website e.g. dark/light 

### Features Yet To Be Implemented 
* Feedback form operating through Email.js which provides the user with a personalised & automatic response to let them know that their feedback has been received - Cold not implement this feature due to time constraints
* Have actual songs played through the piano for the user to attempt to repeat as a different game mode. This would give the user some variety and constibute to achieving one of the project's goals of teaching the user to play music - Again, time constraints didn't allow for this to be implemented


## Technologies

### Languages
* [HTML 5](https://en.wikipedia.org/wiki/HTML) - HTML5 is a markup language I used for structuring and presenting content of my site
* [CSS3](https://en.wikipedia.org/wiki/CSS) - A language used to style the presentation of the content written in HTML5
* [Javascript](https://en.wikipedia.org/wiki/JavaScript) - Javascript is the language used to provide the interactivity to the user on the site.

### Frameworks & Libraries
* [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/) 4 - A front-end framework which assist me in creating responsive website design
* [Google Fonts](https://fonts.google.com/) - An open-source online library of thousands of fonts and icons that were free and easy to use.
* [Font Awesome](https://fontawesome.com/) - An open source online library of icons which I used for extra styling.
* [Pexels](https://www.pexels.com/) - Online library of stock photos for use for free.

### Tools
* [Coolors](https://coolors.co/) - Used this to generate a colour scheme that matched what I wanted for the site.
* [Balsamic](https://balsamiq.com/) - Software used to complete the wireframes. This was much easier than trying to draw.
* [Git](https://en.wikipedia.org/wiki/Git) - System used version control.
* [GitHub](https://github.com/) - This is where my project repository was stored.
* [GitPod](https://www.gitpod.io/) - Open source, online workspace used to work on my project.
* [W3 HTML Validator](https://validator.w3.org/) - Used to validate my code to ensure that there were no errors.
* [W3 CSS Validator](https://jigsaw.w3.org/css-validator/) - Used to validate my code to ensure that there were no errors.
* [Google https://developer.chrome.com/docs/devtools/Chrome Dev Tools]() - A set of development tools to assist the user create web content. They are built directly into the browser
* [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en) - One of the Chrome Dev Tools which was used to assess the level of accessibility, performance and correctness that was provided by the site.
* [JS Fiddle](https://jsfiddle.net/) - An online playground IDE used to test and trial Javascript code with HTML and CSS
* [Youtube](https://www.youtube.com/) - Youtube videos are a great way to learn how to do different things if stuck on a particular piece of code
