var defaultThreads = [
    {
        id: 1,
        title: "C4C Board",
        author: "Nat",
        date: new Date("2023-12-07T21:05:21"),
        content: "Board content",
        comments: [
            {
                author: "Nat",
                date: new Date("2023-12-07T21:05:21"),
                content: "Hi, my name is Nathaniel Wetzel. Welcome to my messaging board application for C4C.",
            },
        ]
    },
];

var threads;

// Check if there are threads in localStorage
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    // If not, use defaultThreads and store it in localStorage
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}

// Add a new comment to the first thread in defaultThreads
var newComment = {
    author: "John",
    date: new Date(),
    content: "This is a new comment.",
};

defaultThreads[0].comments.push(newComment);

// Save the updated defaultThreads to localStorage
localStorage.setItem('threads', JSON.stringify(defaultThreads));

// Now, both threads and defaultThreads have the same data, and changes are reflected in localStorage.
