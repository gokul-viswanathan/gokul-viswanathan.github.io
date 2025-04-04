const projectDatas = [
    {
        "projectName": "Optimizing Reinforcement Learning algorithms",
        "projectContent": "Trained agents on OpenAI’s Cartpole and Mountain Car environments leveraging updated DQN and PPO algo- rithms, accomplishing rapid learning with minimal episodes.Demonstrated the A2C (Actor Critic) algorithm’s superior performance in training motion-related models in Gymna- sium’s Walker2D environment, outperforming other algorithms",
        "techStack": ["Python", "Java"],
        "projectLink" : "https://vrushank0606.github.io/Portfolio/#home",
        "show": "1"
    },
    {
        "projectName": "Traffic Vehicle image classification ",
        "projectContent": "Developed and trained a Convolutional Neural Network (CNN) model employing Python and TensorFlow for image classification, achieving high accuracy on the dataset composed of vehicle images.Created a React web page for receiving vehicle images as input and classifying it employing CNN model.",
        "techStack": ["Python", "Java"],
        "projectLink" : "https://vrushank0606.github.io/Portfolio/#home",
        "show": "1"
    },
    {
        "projectName": "AWS DeepRacer using Proximal Policy Optimization",
        "projectContent": "Implemented and fine-tuned Structured DQN, DDQN, and Actor-Critic algorithms with a novel reward structure to achieve consistent top-tier performance, scoring above 90% in demanding environments for Mujoco models and Gym games (Mountain Car and Lunar Lander). Used the above created Mujoco model and trained it using Actor critic algorithm to replicate given human signing language and was successfully trained to imitate few signing language motions with 90% match to human motion.",
        "techStack": ["Python", "Java"],
        "projectLink" : "https://vrushank0606.github.io/Portfolio/#home",
        "show": "1"
    },
    {
        "projectName": "AR-Based Human Face Reconstruction and Cloth Draping ",
        "projectContent": "Constructed a 3D face reconstruction model using the PifuHD, converting 2D images into accurate 3D models with an 80% skin tone match. Executed conversion of facial images into full-body renderings, harnessing DrapeNet to attire models in chosen garments, thereby elevating visual allure. ",
        "techStack": ["Python", "Java"],
        "projectLink" : "https://vrushank0606.github.io/Portfolio/#home",
        "show": "1"
    },
    
];

function projects() {
    const projectDiv = document.querySelector(".project");

    for (const data of projectDatas) {
        if (data.show === "1") {
            const projectArticles = document.createElement("article");
            projectArticles.classList.add("card");

            const projectHeader = document.createElement("header");
            projectHeader.classList.add("card-header");
            const projectLink = document.createElement("a");
            projectLink.target = "_blank";
            projectLink.href = data.projectLink;
            const projectHeaderTag = document.createElement("h3");
            projectHeaderTag.textContent = data.projectName;
            projectLink.appendChild(projectHeaderTag);
            projectHeader.appendChild(projectLink);
            projectArticles.appendChild(projectHeader);

            const projectContent = document.createElement("div");
            projectContent.classList.add("card-content");
            const projectContentTag = document.createElement("p");
            projectContentTag.textContent = data.projectContent;
            projectContent.appendChild(projectContentTag);
            projectArticles.appendChild(projectContent);

            const projectFooter = document.createElement("footer");
            projectFooter.classList.add("card-footer");
            const projectFooterTag = document.createElement("ul");
            for (const skill of data.techStack) {
                const skillListItem = document.createElement("li");
                skillListItem.classList.add("skills");
                skillListItem.textContent = skill;
                projectFooterTag.appendChild(skillListItem);
            }
            projectFooter.appendChild(projectFooterTag)
            projectArticles.appendChild(projectFooter);
            projectDiv.appendChild(projectArticles);
        }

    }
}
projects();