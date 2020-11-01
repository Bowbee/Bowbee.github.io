// Data driven - can expand to use a backend if required.
const data = {
    userInfo: {
        name: "Thomas Debenham",
        bio: "Software Engineer",
        links:{
            email: "debenh.thoma@gmail.com",
            github: "https://github.com/Bowbee",
        }
    },

    content:[
        {
            title: "Test 1",
            link: "https://test.com",
            tags: ["a"],
            text: `This is some text`,
            images: [""]
        },
        {
            title: "Test 2",
            link: "",
            tags: ["a"],
            text: `This is some text`,
            images: []
        },
        {
            title: "Test 3",
            link: "https://test.com",
            tags: ["C++", "Java", "Python", "DevOps", "Google Cloud", "R"],
            text: `# Header 1
## Header 2
          
_italic_
          
**bold**

this is some standard text`,
            images: ["test3_1.jpg","test3_1.jpg","test3_1.jpg"]
        },
        {
            title: "Test 4",
            link: "https://test.com",
            tags: ["a", "b"],
            text: `This is some text`,
            images: []
        }
    ]
};

export default data;