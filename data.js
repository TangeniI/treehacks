var threads = [
    {
        id : 1,
        title: "Thread 1",
        author: "Aman",
        date: Date.now(),
        content: "Hello",
        comments: [
            {
                author: "Tan",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Johnny",
                date: Date.now(),
                content: "Sup"
            }
        ]
        
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Tan",
        date: Date.now(),
        content: "Alright cya",
        comments: [
            {
                author: "Aman",
                date: Date.now(),
                content: "cu"
            },
            {
                author: "Johnny",
                date: Date.now(),
                content: "cya"
            }
        ]  
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}