var threads = [
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
]

var threads;
if (localStorage && localStorage.getItem ('threads')) {
   threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem ('threads', JSON.stringify(defaultThreads));
}
//localStorage.clear();