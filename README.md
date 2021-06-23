# Simon's Piano

View live site [*here*](https://yusuffrih.github.io/Simons-Piano-Game/)

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
    * Languages
    * Frameworks & Libraries
    * Tools
* Testing
    * User Story Testing
    * Validator Testing 
    * Feature Testing 
    * Lighthouse Testing
    * Compatability Testing
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
There is very little text on the landing page so as not to distract the user and not to take attention away from the game area. For the fonts, I decided to go to [Google Fonts](https://fonts.google.com/?standard-styles=) which is great for getting any kind of font you want. The fonts I chose for my page are *Dancing Script* & *Lato* with *sans-serif* as a backup font in the event that Google Fonts does not work. The reason I decided to use *Dancing Script* is that it is quiet a beautiful, artistic font which would almost represent a piano and music. 

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
I used some music icons in the heading to add some design to the page and keep with the music theme. 

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
* Button feedback for every button pressed or click they make through audio and visual
* A button to enable the user to pick a colour theme for the website e.g. dark/light 

### Features Not Yet Implemented
* Feedback form operating through Email.js which provides the user with a personalised & automatic response to let them know that their feedback has been received - Cold not implement this feature due to time constraints
* Have actual songs played through the piano for the user to attempt to repeat as a different game mode. This would give the user some variety and constibute to achieving one of the project's goals of teaching the user to play music - Again, time constraints didn't allow for this to be implemented


## Technologies Used

### Languages
* [HTML](https://en.wikipedia.org/wiki/HTML) - HTML5 is a markup language I used for structuring and presenting content of my site
* [CSS](https://en.wikipedia.org/wiki/CSS) - A language used to style the presentation of the content written in HTML5
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
* [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/Chrome) - A set of development tools to assist the user create web content. They are built directly into the browser
* [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en) - One of the Chrome Dev Tools which was used to assess the level of accessibility, performance and correctness that was provided by the site.
* [JS Fiddle](https://jsfiddle.net/) - An online playground IDE used to test and trial Javascript code with HTML and CSS
* [Youtube](https://www.youtube.com/) - Youtube videos are a great way to learn how to do different things if stuck on a particular piece of code


## Testing

### User Story Testing
* As a user, I would like to be able to choose when I start the game so that I am in control
    - When the user lands on the page, the game does not start automatically. The user gets a chance to consume what is displayed on screen and has to click on the start button above the piano keys to start the game. 

* As a user, I would like to track my score throughout the game
    - The user can keep track of their how they are doing throughout the game in the tally section which comes up on top of the piano keys throughout the game highlighting what level they are on. 

* As a user, I would like to be able to access a variety of difficulties based on my skill level
    - The further the user gets into the game, the harder it gets. The randomly generated note pattern builds on itself with each level making it more challenging. Each time the user starts a new game, they get a new randomly generated pattern to play with which

*  As a user I would like the game to have some element of variety in the game play so that I don't get bored. 
    - Each time the user starts a new game, they get a new randomly generated pattern to play with which should keep them entertained and which should keep challenging their memory

* As a user, I would like to be given some positive/negative feedback when I pass/fail a level of the game
    - The user is shown a message under they piano keys when they win a level saying 'Fair play Beethoven'. This lets them know that they've won the level. If they get to level 35 and win the game, an alert will display letting them know that they have won.
    - Every time the player loses, an alert is displayed on the screen to let them know that they have lost and to let them know what level in the game they got to

* As a user, I would like to be able to see the game developer’s Github page to see if they have any other cool games to play
    - The user is easily able to access the game site owner's GitHub profile in the footer of the page to see if they have any other interesting games there. This is also somewhere that the user can make contact with the developer

* As a user, I would like to be able to pick a colour theme for the website
    - The user will clearly see the labelled dark mode toggle in the footer of the page. If they click on this, they will see the colour scheme of the page change. This includes a lighter background image, different background colours and font colours. Of course, the piano elements of the page will remain the same colour however

* As a user, I would like to have some instructions on how to play the game made available to me at a click of a button
    - The game itself is extremely intuitive. However, there is a prompt that appears for the user that lets them know that it's their turn and letting them know how many taps of the piano keys they need to input. There are also instructions for the user letting them know how to use the keyboard keys to play the game if that's what they would prefer

* As a user, I would like to be able to give the game designer some feedback on how to improve the game features
    - The user will be able to provide the developer with some feedback on the game through the Github profile page

*Screenshots outlining the testing for the User Stories can be found [here](/workspace/Simons-Piano-Game/assets/images/readme-imgs/user-story-testing-images).*

### Validator Testing
#### HTML Validator
* Errors:
    - No errors found
* Fixes:
    - N/A 

#### CSS Validator
* Errors:
    - No errors found
* Fixes:
    - N/A


### Feature Testing 
1. ### **Game Title**
- **Plan**: The plan on this was simply to display the header/title of the game at the top of the page so that it's the first thing that the user sees when they land on the page

- **Implementation**: To implement this, I created a header section and place a h1 tag inside it. Once this was done, I used bootstraps built in grid structure and made the header tag a row and gave it the class of justify content center. This ensures that the content in the row in centered and remains centered no matter what the width of the screen is. 

- **Test**: The test for this feature was visual initially. Just by landing on the page as if I were the user, I ensured that the title was in the middle of the page. To ensure that this was the case for all screen sizes, I used [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en). 

- **Result**: Header of the page is displayed at the top of the page does not get distorted at any screen size. included in the header are some music icons to add some style and provide a nice UI 

2. ### **Start button**
- **Plan**: When the player has landed on the page, they should very quickly see and understand what they are looking at. There are very few elements visible and one of them is the start button. When they click the button, the game obviously is started and this triggers the first level of the game.

- **Implementation**: When implementing the start button, it was of course quite simple from a html and css perspective to create and design. From a Javascript, it needed to trigger the game's first level. I put in an event handler to listen to a click on the element and trigger the begin game funciton when it hears this. 

- **Test**: This feature was quite simple to test again. Visually, the button looks good in all screen sizes, is very easy to spot and is very easy for the player to figure out what it does. To test whether the button works or not, I landed on the page and clicked the button.

- **Result**: The start button on the page looks well, is easy to see and works as it is intended in that it triggers the begin game function once clicked. 

3. ### Score area 
- **Plan**: This is the section of the game that outlines the  score and the level the user has reached once they have played their turn. This feature also should let the user know how many taps they have to input once the pattern has played through and it's their turn to repeat the pattern.

- **Implementation**: I created a div element in the html that had a class of hidden so that it was of course hidden when the game wasn't in play. When the game started the idea is that the hidden class would be removed, the hidden class would also be added to the start button feature at this point. The inner html of that div displayed the dynamic level that the user was at using template literals.   

- **Test**: The test for this feature was that when I clicked the start game button, did the level the user was on appear in the place of the start button. It should also display the correct message including the correct level. Also, once the random pattern is finished playing and it's the user's turn to repeat the pattern, the number of taps, mirroring the level they are on should be displayed. This number should also begin to decrease as the user inputs the pattern as they remember it. 

- **Result**: 
The score area was located on top of the piano and replaces the start button when pressed. This brings the users attention to this and allows them to keep track of how many levels they have got past and how many correct taps they have to input to get to the next level. The number of taps remaining also decreases by one for every tap they input. 

4. ### Interactive black and white piano keys
- **Plan**: I want the piano keys to be the main game area. They have to give the look and feel of a real piano keyboard. The piano keys need to be interactive to the users actions i.e. when they click on the individual piano keys, there needs to be something happening as a result. There needs to be a sound and there needs to be visual feedback to let the user know that they have clicked the key. I don't want the piano keys to be usable when the game is not live.

- **Implementation**: I created the piano keys from div elements. Each key has its own div and I used display flex to make sure they line up horizontally. There was also some other CSS techniques used to make it look more like a paino. To make it interactive, I created an event handler to trigger a function that deals with the clicks/keyboard events. Once this is triggered, the audio file is accessed and the piano key is given the CSS class of active which makes it look different. In order to make the keys unusable when the game isn't live, I added a class to the divs and styled that in CSS to not allow any pointer events. 

- **Test**: The test for this is again, to start playing the game by pressing the start button. I then need to attempt to input the pattern. For every click, there needs to be a sound and a change in the way that key looks to make it interactive. The key also needs to be assessed as to whether it matches the one that is randomly generated by the game. If the input is correct then something needs to happen dependin on whether it's right or wrong.

- **Result**: The piano keys are fully interactive but only when the game is live i.e. The player presses the start button. When the player has their mouse hovered over the piano keys during the game, their cursor will display as a pointer letting them know that they can click. When the keys are clicked, they change colour for the duration of the note audio that is played, just as expected. 

5. ### Musical audio notes attached to the corresponding piano keys
- **Plan**: Once the piano keys are activated, either by clicking on them with the mouse or by using the corresponding keyboard keys, the user should here a musical note which corresponds to that key played. 

- **Implementation**: To implement this, I created the uploaded some audio files to the project and matched them up to the corresponding key by giving them an identical value for their dataset. Once they key was activated, this extracted the note which corresponded to the correct audio file. Then this audio note was played. 

- **Test**: To test, all I needed to do was click the key to input the pattern of notes that were randomly generated by the computer. This should activate the note audio to be played.

- **Result**: The notes are played when the player clicks the piano keys. This is a nice feature to give a realistic piano feel to the player. When the player clicks a key more than once in quick succession, the note restarts immediately on each click rather than having to wait for the first itteration to finish playing.

6. ### Link to Github profile
- **Plan**: The footer of the page should include a link to the developer's Github profile page. 

- **Implementation**: Add a link element to the footer section of the html and include the url to the page and ensure that it opens in a new tab by adding a target attribute with a value of "_blank". I also made the link display as a Github icon. 

- **Test**: When the user lands on the page, they should see the Github icon in the footer and when they click this, it should open the profile page in a new tab. 

- **Result**: There is a link to the site owners GitHub profile displayed as a Github icon in the footer of the page which opens a new tab for the user.

7. ### A responsive design 
- **Plan**: The website needs to be responsive to different screen sizes so that it looks good and provides a positive user experience no matter what the size of the screen or type of device. 

- **Implementation**: To provide for responsive design, Bootstrap's grid layout was used to create a proportionate layout on the screen at different breakpoints. I also used some custom breakpoints to change the font sizes at different screen widths to ensure that everything fit on the right lines and looked right. 

- **Test**: [Chrome dev tools](https://developer.chrome.com/docs/devtools/) testing would be the easiest way to test out the different screen sizes. It needed to look good at all different screen widths and sizes.  

- **Result**: The responsive design is fully functional across all device sizes. All the different screen sizes and all of the different elements look good and fit just right. 

8. ### Keyboard keyup responsive piano keys
- **Plan**: The player should be able to use the keyboard instead of the mouse to activate the piano keys. The reason for this is to give the user a more realistic feeling when they are playing as the layout of the keys on the keyboard are very similar to that of the piano keys.

- **Implementation**: Implementing this meant setting up an event handler on the document to listen to the keyup event to occur. I set up an array of keys that would be used to play the game and then matched them up to the corresponding piano keys based on their note. Once this was done, it then passed that note through the function that deals with the activated key. 

- **Test**: Once the keyboard key is pressed during the players turn, the key note should be played and the piano key should change colour to show the user that their input has been picked up by the computer. 

- **Result**: The player can play the piano keys through their keyboard which allows for a more realistic piano playing experience. The keys change colour as well which provides for player feedback and makes it easier for them to follow what they are doing on screen.

9. ### Instructions for what keys to use to play the piano keys
- **Plan**: When the player presses the start button, they should be immediately provided with instructions of how to play the game using the keyboard keys. I also want to provide them with instructions of how many clicks they need to input to finish the level. 

- **Implementation**: Created a div in the html that appears at the bottom of the piano container when the start button is pressed so that the user can understand what keys on the keyboard they need to press to play the game correctly. These key instructions come up everytime it's the user's turn to play the game and disappear only to display a positive message if they get the right pattern.

- **Test**: Play the game and the instructions for the keys should appear beneath the piano keys. When the player inputs the correct pattern, the instructions should disappear to make way for the positive feedback if they have input the correct pattern. The instructions should then re-appear once the game is back in play. 

- **Result**: When it is the player's turn to input the key notes, the instructions on what keyboard keys to use are displayed in a container just beneath the piano and are easy to read. They dissapear when the players turn is over and then re-appear when the game is being played again.

10. ### Button feedback for every button pressed or click they make through audio and visual
- **Plan**: All of the clickable elements on the page should be interactive and should give the use feedback to let them know that their input has been picked up by the computer. 

- **Implementation**: All the clickable elements on the page i.e. links, buttons, piano keys all have a hover states apllied to them via CSS which allows the user to know that they are clickable and interactive. 

- **Test**: The user clicks on the start button, the game should start via the event listener as described above. Once they click on the piano keys, they should change colour and play a sound as described above. Once they click on the dark mode button in the footer, the colour scheme of the entire page changes. This was achieved through an event handler in Javascript and by applying styling to the elements based on the click. The Github link also opens up in a new tab once clicked using a link element and a target of "_blank". 

- **Result**: 
    The user clicks on the start button, the game starts via the event listener as described above. Once they click on the piano keys, they change colour and play a sound as described above. Once they click on the dark mode button in the footer, the colour scheme of the entire page changes. This was achieved through an event handler in Javascript and by applying styling to the elements based on the click. The Github link also opens up in a new tab once clicked using a link element and a target of "_blank". 

11. ### A button to enable the user to pick a colour theme for the website e.g. dark/light 
- **Plan**: The user should have the option to be able to toggle between dark and light mode on the page depending on their preference. I want to provide them with a simple, clickable element that does just that. 

- **Implementation**: I placed an icon in the footer with the labelling text to let the player know exactly what it's function was. I set up an event handler in the Javascript code to listen to clicks on the element and then apply the colour theme change class to the elements of the document that needed to change in order to implement the colour scheme change. When the player clicks the button again, they can toggle back to dark mode if they please.

- **Test**: When the player clicks the button, they should be able to toggle back and forth between dark mode and light mode. The background photo should change, the background colour and font colour of the all the elements displaying on the page should switch to black if white and white if black. 

- **Result**: When the colour theme button is pressed, the page goes from being predominantly a dark page to being predominantly a white page. When the button is pressed again, the page turns back to being predominantly dark again. 


### Lighthouse Testing

The [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en) tool, which can be found in [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/Chrome) is a really useful tool for testing the performance, accesibility and overall correctness of a page. All you have to do to use it is right click on a page, click inspect and click into the Lighthouse extension. Once there, all you do is generate a report for each page of the website. The report gives an overall score of how your webpage has performed in the test and it will give areas for improvement. This should be repeated for Mobile and Desktop. The reports for Simon's Piano can be found below:

* [Mobile](assets/testing/lighthouse-testing-desktop.pdf)
* [Desktop](assets/testing/lighthouse-testing-mobile.pdf)

### Compatibility & Responsive Testing 
#### Device Compatibility 
I carried out testing on all the devices through Chrome Dev Tools

* Galaxy S5
* Moto G4
* Iphone 4
* Pixel 2
* Pixel 2XL
* Iphone 5/SE
* Iphone 6/7/8
* Iphone 6/7/8 Plus
* Iphone X
* Ipad
* Ipad pro
* Surface Duo
* Galaxy Fold

All of the above performed as desired.

#### Browser Compatibility
To complete the cross browser compatability, I downloaded the different browsers that were needed and ensured that the webpage worked as expected on each of the following: 

* [Google Chrome](https://www.google.com/chrome/?brand=FHFK&gclid=CjwKCAjwq7aGBhADEiwA6uGZp4fEdSx7ARa4pyHWgf3uPlKvIK_3udgjmpYMsWJqxwtNcoYX6q2e4xoCQ4cQAvD_BwE&gclsrc=aw.ds)
* [Safari](https://www.apple.com/safari/)
* [Microsoft Edge](https://www.microsoft.com/en-us/edge)
* [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)

The page worked perfectly on all but Safari. This bug and its fix can be found referenced in the bugs section below.

## Bugs 
During the development of this game, there were many bugs that were overcome. Below are some of the main bugs that were encountered and a description on how they were overcome:

#### Bug 1
* When creating the piano for the game, I needed to make the individual keys out of divs. The bug was that I couldn't figure ot how to bring the black keys ontop of the white keys and bring the white keys together. 

#### Fix 1
* The fix for this was to let the black keys z-index values equal to 2 so that they sat ontop of the white keys. To bring the white keys together beneath the black keys, I had to make the left and right margins of the black keys equal to minus half the width of the white keys. This brought the white keys together and made the divs look like a piano. 

#### Bug 2
* The piano keys were being distorted after I had made the page responsive with Bootstrap.

#### Fix 2 
* To fix this issue, I had to change the height and width measurements of the black and white keys from static, pixels, to proportionate percentages.

#### Bug 3
* The footer of the webpage was not sticking to the bottom of the page when it was displaying on larger screens and the content didn't fill the full screen.

#### Fix 3
* To keep the footer at the bottom of the page, I gave the body element a display of flex, flex direction of column and minimum view height of 100. I also gave the footer element a top margin of auto. This meant that the body element was always spanning the full height of the screen with the footer at the bottom.

#### Bug 4 
* During the players turn of the game, if they clicked on the letter of the key they were trying to play, the click would not register. The reason being that the paragraph element was being clicked instead of the div which is what needed to be clicked for the Javascript to be activated. 

#### Fix 4 
* To stop the paragraph element from being clicked instead of the div, I added an unclickable class to all the paragraph elements in the piano keys. This class simply gave the paragraph elements pointer events a value of none. Before doing this, I tried just having the key labels inside the divs without having any children to the piano key divs, however, this stopped me from accessing the text inside them in the CSS and so I couldn't position them correctly on the keys. 

#### Bug 5
* As the pattern of notes that are generated are completely random, sometimes it would happen that the same key would be played more than once. In these instances, the audio files for that key would not play on each itteration. This was a problem as it made it confusing for the player to know how many times they should click the key. The same problem would occur when they player clicked the keys in quick succession on their turn whether it was the same key they were trying to press or not. 

#### Fix 5
* The fix for this was really quite simple. It involved me setting the current time to 0 so that the audio file would begin at the start for each and every time the key was pressed. This fix was taken from Web Dev Simplified in his [tutorial](https://www.youtube.com/watch?v=vjco5yKZpU8) on how to build a piano on Javascript. 

#### Bug 6 
* When on Safari, the background image did not display which made the whole page look odd. 

#### Fix 6 
* Added code snippet from Stack Overflow to display the background image in the Safari browser. This code snippet was a media query that targeted Safari specifically to allow that code to be rendered. All other CSS other than the images rendered as expected without the use of this media query. This code also threw up an error in Gitpod, however, when I ran the code through the css validator, it didn't give the same error. Also, if I tried to get rid of the error by removing the second media quey, the code didn't work anymore.

## Deployment
### Github Pages
After the coding and testing was complete, and the website was ready for deployment, the following steps were taken: 
1. Opened Github repository
2. Opened settings 
3. Click into 'Pages' section on the side menu
4. Clicke into Branches
5. Selected 'Master Branch'
6. Clicked save
7. Refreshed page
8. Awaite confirmation of deployment to Github Pages

Github Pages URL is then provided: https://yusuffrih.github.io/Simons-Piano-Game/

### Run Locally
To run the project locally, follow these simple steps:
1. Open the Repository
2. Click on the 'Code' button beside the green Gitpod button
3. Click into the HTTPS tab
4. Copy the URL available
5. Open your local IDE
6. Type git clone into the terminal which should prompt you to enter your copied URL
7. Paste the URL here
8. Begin coding

## Credits & Resources

#### Freshman 
* [Freshman - Simon Game Tutorial](https://freshman.tech/simon-game/) - This is where I got the main idea and assistance with my code structure. I used the basic logic that was used in this tutorial and applied it to my project's wireframes and made it work for me. 

#### Youtube: 
* [Web Dev Simplified](https://www.youtube.com/c/WebDevSimplified)
    * [Build a piano with Javascript - Tutorial](https://www.youtube.com/results?search_query=build+a+piano+with+javascript) - This video was great for assisting me in creating the piano keyboard. I also used the audio files that he used as he said in his video that this was ok and he made them available on his Github repository. 
    *  [How To Build An Advanced Light/Dark Theme Toggle](youtube.com/watch?v=RiWxhm5ZdFM&t=911s) - I used this page to learn how to use CSS variable as well as what the appraoch was to creating a colour theme toggle.

* [Kevin Powell](https://www.youtube.com/channel/UCJZv4d5rbIKd4QHMPkcABCw)
    * [Easy sticky footer - stop a footer from floating up a short page!](https://www.youtube.com/watch?v=yc2olxLgKLk) - This video was great for helping me fix the bug I had where I couldn't fix the footer to the bottom of the page. 
    * [Dark Mode JavaScript toggle using localStorage](https://www.youtube.com/watch?v=wodWDIdV9BY&t=517s) - I also used this video to help inspire me to create the toggle colour theme feature on my page.  

#### W3 Schools 
* I got some good assistance throughout the development of my project from [W3 Schools](https://www.w3schools.com/). This is a brilliant website for general coding tips and tricks.

#### Bootstrap
* I used [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/) to assist in achieving responsive design. This is a very useful tool to use. 

#### Font Awesome
* [Font Awesome](https://fontawesome.com/) is where I went to get the icons that I used in my project. All you have to do is copy in the CDN to the head of the HTML document and use the code that they provide. 

#### Stack Overflow 
* I got a fix for the background images not displaying in Safari from [Stack Overflow](https://stackoverflow.com/) from this code snippet [here](https://stackoverflow.com/questions/16348489/is-there-a-css-hack-for-safari-only-not-chrome)

#### Code Institute
* [Code Institute](https://codeinstitute.net/) lecture videos really assisted in developing my programming knowledge. Any time I had a question, this was always a good port of call. 
* Tutors at Code Institute were a brilliant resource for me to go to when I had any issues that I needed help with. 
* Slack - There is fantastic coding community in slack that are there to help each other out and answer any questions I might have. 

#### Coolors
* [Coolors](https://coolors.co/) - Coolors was where I went to to generate my colour scheme for the webpage. This is a brilliant and handy tool to have available as it gives the hex value of the colour that you chose to use. 
* Mentor session - Code institute provide each student with an industry professional as a mentor. This is a great resource as I get 3 sessions with them to discuss my project and get any questions answered about the planning of the project. 

#### Images:
* [Pexels](https://www.pexels.com/) was where I went to get the two [background images](assets/images/background) for the webpage. 
They can be found [here](https://www.pexels.com/photo/close-up-shot-of-upright-piano-grayscale-photo-164715/) and [here](https://www.pexels.com/photo/selective-focus-photography-of-upright-piano-164769/).

## Final Comments

I would like to thank the following for all of the assistance throughout the development of this project:

* Everybody on the Slack community for always being on hand to answer any questions I had
* My family and partner for being so patient with me throughout the stressful process.
* Code Institute Tutors
* My Mentor Simen Daehlin for all of the great advice and wisdom he passed onto me throughout