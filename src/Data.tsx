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

I also create the user interface frameworks for the project, as well as general game design.

We use project management systems ([codecks](https://codecks.io/)) and source control (google source control + [plasticscm](https://www.plasticscm.com/))`,
            images: ["kk_1.png", "kk_2.gif", "kk_3.png"]
        },
        {
            title: "Project Kikai Launcher",
            link: "",
            tags: ["Private Source", "TypeScript", "Electron", "React", "Google Cloud", "CI/CD"],
            text: `
This launcher is used as the primary method to download Project Kikai. This is used for playtests or to debug deployments within the team.

Metadata required for downloads and server availability is fetched from a worker managed database whenever new artifacts successfully built are pushed to a public channel.

The launcher is entirely managed and developed by myself using Electron & React, and is currently feature complete.`,
            images: ["kl_1.png", "kl_3.png" ,"kl_2.png"]
        },
        {
            title: "Zephyr.gg",
            link: "",
            tags: ["Private Source", "TypeScript", "React", "Firebase"],
            text: `
Zephyr.gg is a landing page for the project kikai download page. The intention here is to reserve our proposed business name, offer a way to download the Kikai Launcher, and to assist with API development via a single domain.
This page is unique in that it uses some complex css for the color changing text border, and uses a web particle simulation for the starfield.
View the page [here](https://zephyr.gg).`,
            images: ["zp_1.png"]
        },
        {
            title: "Droptimizer",
            link: "https://github.com/tim-ings/droptimizer",
            tags: ["Public Source", "TypeScript", "React", "Github Pages"],
            text: `
This site aggregates the results of popular warcraft simulation tool raidbots.com's SimulationCraft reports for an entire raid team enabling leadership to make better decisions about how to distribute loot. I designed the client for this, with my friend Tim designing the backend functionality.
Demo here: [https://loot.arwic.io/](https://loot.arwic.io/)`,
            images: ["dm_1.png"]
        },
        {
            title: "Williams Property",
            link: "",
            tags: ["Private Source", "TypeScript", "React", "Firebase"],
            text: `
The williams property website was a unique project to work on as there were many design restraints. The budget was very limited so I had to resort to using firebase hosting with firebase functions for email requests. 
No stock images or additional designs were able to be purchased or recieved, so all styling was done in-house.
View the page [here](https://williamsproperty.co.nz).`,
            images: ["wp_1.png"]
        },
        {
            title: "Showcase Site",
            link: "https://github.com/bowbee/showcase",
            tags: ["Public Source", "TypeScript", "React", "Github Pages"],
            text: `
This website is unique in that it simulates a backend via json data. Content data is parsed using markdown for easy modification to the site. Entirely styled by me and thrown together in a weekend.`,
            images: []
        }
    ]
};

export default data;