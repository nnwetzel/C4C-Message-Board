const express = require('express');
const app = express();
const port = 3000;

// Replace this array with your actual data or load it from a database
const threads = [
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

app.get('/threads', (req, res) => {
    res.json(threads);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
