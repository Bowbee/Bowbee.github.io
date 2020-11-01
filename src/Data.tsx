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
        },
        {
            title: "Test 2",
            link: "",
            tags: ["a"],
            text: `This is some text`,
        },
        {
            title: "Test 3",
            link: "https://test.com",
            tags: ["a", "b"],
            text: `# Header 1
## Header 2
          
_italic_
          
**bold**

this is some standard text`,
        },
        {
            title: "Test 4",
            link: "https://test.com",
            tags: ["a", "b"],
            text: `This is some text`,
        }
    ]
};

export default data;