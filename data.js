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

document.addEventListener('DOMContentLoaded', async function () {
    var threads;

    try {
        const response = await fetch('http://localhost:3000/threads');
        const data = await response.json();

        // Assuming the data received is an array of threads
        threads = data;

        // Call a function to initialize or update the UI with the fetched threads
        updateUI();
    } catch (error) {
        console.error('Error fetching threads:', error);

        // If there's an error fetching threads, use defaultThreads or handle it accordingly
        threads = defaultThreads;

        // Call a function to initialize or update the UI with the default threads
        updateUI();
    }

    function updateUI() {
        // Add code here to update the UI with the threads data
        // For example, you can render the threads in the HTML or perform other UI-related tasks
    }
});

//localStorage.clear();