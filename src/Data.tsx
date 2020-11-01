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
            title: "Project Kikai",
            link: "",
            tags: ["Private Source", "JS/TS", "DevOps", "Google Cloud", "Docker", "Firebase", "Project Management"],
            text: `
This is a showcase project made in Unreal Engine 4 by a C++ developer, 3D artist, and myself. I fulfil the primary roles of project manager and DevOps developer. 
I create and manage the backend APIs required for player authentication and persistent data.

I also create the user interface frameworks for the project, as well as general game design.`,
            images: ["kk_1.png", "kk_2.gif", "kk_3.png"]
        },
        {
            title: "Project Kikai Launcher",
            link: "",
            tags: ["Private Source", "TypeScript", "Electron", "React", "Google Cloud", "CI/CD"],
            text: `
This launcher is used as the the method to download Project Kikai. This is primarily used for playtests or debug deployments within the team.

Metadata required for downloads and server availability is fetched from a worker managed database whenever new artifacts successfully built are pushed to a public channel.

The launcher is entirely managed and developed by myself using Electron & React, and is currently feature complete.`,
            images: ["kl_1.png", "kl_3.png" ,"kl_2.png"]
        }
    ]
};

export default data;