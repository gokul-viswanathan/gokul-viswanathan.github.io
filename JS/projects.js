const projectDatas = [
    {
        "projectName": "Anonymask",
        "projectContent": "Secure anonymization/de-anonymization library for protecting Personally Identifiable Information (PII) before sending data to Large Language Models (LLMs). Built with Rust for performance and safety, with bindings for Python and Node.js. Features comprehensive entity detection, deterministic UUID-based placeholders, and zero-copy deanonymization.",
        "techStack": ["Rust", "Python", "Node.js", "PyO3", "NAPI-RS"],
        "projectLink" : "https://github.com/gokul-viswanathan/anonymask",
        "show": "1"
    },
    {
        "projectName": "Thought Ink",
        "projectContent": "A lightweight, privacy-focused note-taking app with built-in AI assistance. Designed as a learning project, Thought Ink helps you take structured notes (with headings, bullet points, etc.), store them locally in your browser, and ask AI questions based on your content – all without sending your data to any server.",
        "techStack": ["Typescript", "React.Js", "Node.Js", "Quill.Js", "Git"],
        "projectLink" : "https://github.com/gokul-viswanathan/note-taker?tab=readme-ov-file",
        "show": "1"
    },
    {
        "projectName": "LeanFrame: Efficient Video for ML",
        "projectContent": "Trimmed the fat off video data—built a smart frame filter that sniffs out and drops redundant frames, making machine learning pipelines leaner and faster.",
        "techStack": ["Python", "OpenCV", "Numpy"],
        "projectLink" : "https://github.com/gokul-viswanathan/LeanFrame",
        "show": "1"
    },
    {
        "projectName": "Wishlist Price Monitor",
        "projectContent": "Built a price-tracking browser buddy that watches your wishlist like a hawk—no more site-hopping or falling for flashy recommendations. Just click, check, and chill till the price is right.",
        "techStack": ["Javascript", "React"],
        "projectLink" : "https://github.com/gokul-viswanathan/product_cost",
        "show": "1"
    },
    {
        "projectName": "Realistic Hand Motion Simulator",
        "projectContent": "Simulated a human hand with realistic joint motion using MuJoCo—basically gave a robot a hand to wave, grasp, or even sign. It’s a digital playground for training complex hand movements (sign language was next on the list!).",
        "techStack": ["Python", "Pytorch", "Numpy", "OpenCV", "Pandas"],
        "projectLink" : "https://github.com/gokul-viswanathan",
        "show": "1"
    },
    {
        "projectName": "AWS deeprace",
        "projectContent": "Trained agents on OpenAI’s Cartpole and Mountain Car environments leveraging updated DQN and PPO algo- rithms, accomplishing rapid learning with minimal episodes.Demonstrated the A2C (Actor Critic) algorithm’s superior performance in training motion-related models in Gymna- sium’s Walker2D environment, outperforming other algorithms",
        "techStack": ["Python", "Java"],
        "projectLink" : "https://github.com/gokul-viswanathan",
        "show": "0"
    },
    {
        "projectName": "AR-Based Human Face Reconstruction",
        "projectContent": "Constructed a 3D face reconstruction model using the PifuHD, converting 2D images into accurate 3D models with an 80% skin tone match. Executed conversion of facial images into full-body renderings, harnessing DrapeNet to attire models in chosen garments, thereby elevating visual allure. ",
        "techStack": ["Python", "Java"],
        "projectLink" : "https://github.com/gokul-viswanathan",
        "show": "0"
    },
    
];

function projects() {
    const projectDiv = document.querySelector(".project");
    let projectIndex = 1;

    for (const data of projectDatas) {
        if (data.show === "1") {
            const projectArticles = document.createElement("article");
            projectArticles.classList.add("card");


            const projectLink = document.createElement("a");
            projectLink.target = "_blank";
            projectLink.href = data.projectLink;

            const projectHeader = document.createElement("header");
            projectHeader.classList.add("card-header");
            const projectHeaderTag = document.createElement("h3");
            projectHeaderTag.textContent = data.projectName;
            projectHeader.appendChild(projectHeaderTag);
            projectLink.appendChild(projectHeader);

            const projectContent = document.createElement("div");
            projectContent.classList.add("card-content");
            const projectContentTag = document.createElement("p");
            projectContentTag.textContent = data.projectContent;
            projectContent.appendChild(projectContentTag);

            const projectFooter = document.createElement("footer");
            projectFooter.classList.add("card-footer");
            for (const skill of data.techStack) {
                const skillSpan = document.createElement("span");
                skillSpan.classList.add("skills");
                skillSpan.textContent = skill;
                projectFooter.appendChild(skillSpan);
            }

            projectLink.appendChild(projectContent);
            projectLink.appendChild(projectFooter);
            projectArticles.appendChild(projectLink);
            projectDiv.appendChild(projectArticles);
            
            projectIndex++;
        }
    }
}
projects();