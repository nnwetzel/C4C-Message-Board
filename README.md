# C4C-Message-Board

## Overview

### HTML Structure
1. The top bar (`<div class="top-bar">`) contains the title "C4C Message Board."
2. The thread list is represented by an ordered list (`<ol>`).
3. Two <script> tags include the JavaScript code (data.js and inline script).
4. The <style> tag includes CSS styles for formatting the appearance of the page.

### JavaScript (inline)
1. The inline JavaScript code fetches the container and populates the thread list using data from the threads array.
2. When a thread is clicked, the user is redirected to a detailed view of the thread with comments.
3. The script handles adding comments to a specific thread by dynamically updateing the HTML with comments.
4. If a username is stored in the local storage, it is used; otherwise, a random username is generated.
5. The "Send" button triggers an event listener to add a new comment. The comment is displayed on the page, and the thread's comment array is updated.

### CSS (inline)
1. The styles define the appearance of various elements, such as fonts, colors, margins, and padding.
2. The styles include responsive design elements, adjusting the layout for different screen sizes.

### Data
1. The threads array holds objects, each representing a message board thread. Each thread has an ID, title, author, date, content, and an array of comments.
2. Thread data is stored in the local storage. If no data is found, default threads are used. (NOTE: I was not able to implement a server-sided database.)

### Why do I fulfill the requirements?
1. Users are able to type a message and to post it to a board. The message has to be non-empty and 128 characters or less.
2. Users are able to view messages on the board from most to least recent.
3. Even though I was not able to implement a server-sided database, I used `localStorage` instead which means that comment data is local to an individual's computer. Being a first-year student with limited experience using HTML, CSS, and JavaScript, I believe that I did my best learning web development and implementing a message board application. However, with the resources and mentorship that C4C offers, I know that I would be able to easily implement this final requirement to this application to ensure that comments can be viewed from various devices.

### How do I start the application?
https://nnwetzel.github.io/C4C-Message-Board/
