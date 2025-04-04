const datas = [
    {
        "Title": "Software Engineer",
        "Id": "sageMoney",
        "Company": "Sage Money",
        "StartDate": "Feb 2024",
        "endDate": "current",
        "active": "1",
        "contents": ["Developing core features for a seed-funded fintech platform focusing on transaction analysis and cost control methods.",
            "Built secure transaction integration system using Plaid API with Google OAuth authentication and implemented connection pooling for optimized PostgreSQL performance.",
            "Engineered real-time transaction monitoring system for recurring transactions and subscription with Redis caching, reducing latency and optimized financial tracking across biweekly and monthly expenses.",
            "Designed and implemented a secure multi-user account linking and validation process using Node.js, Express.js, and PostgreSQL, enabling users to consolidate and view multiple account transactions seamlessly.",
            "Orchestrated CI/CD pipeline using GitHub Actions, implemented testing and lint checks to streamline deployment.",
            " Led mobile app development using React Native and Expo, reducing cross-platform development time by 30%."
        ]
    },
    {
        "Title": "Software Engineer",
        "Id": "accenture",
        "Company": "Accenture",
        "StartDate": "Jun-2019",
        "endDate": "July-2022",
        "active": "1",
        "contents": [ "Optimized automated approval workflow system reducing processing time from 24 hours to 10 minutes, resulting in 85% improvement in employee satisfaction and 40% reduction in administrative overhead.",
            "Automated real-time contact tracing microservice that processed 5K+ daily proximity events, successfully identifying and notifying 1,000+ potential exposure cases within 15 minutes of confirmed cases.",
            "Enhanced suite of 20+ RESTful APIs, handling 100K+ daily requests with optimized performance."
        ]
    }
]

function viewBloack(value){
    const work_details = document.querySelectorAll(".workData");
    const show_work = document.getElementById("work"+value);
    work_details.forEach(work => {
        work.style.display = "none";
    })
    show_work.style.display = "block";

}

function workExp() {

    const work_title = document.querySelector(".work_title");
    const p_tag = document.createElement("p");
    const work_details = document.querySelector(".work_details");

    for (const data of datas) {
        if (data.active == "1") {
            const button = document.createElement("button");
            button.textContent = data.Company;
            const workId = data.Id;
            button.id = workId;
            button.classList.add("title");
            button.addEventListener("click", () => {viewBloack(workId)});
            p_tag.appendChild(button);

            const workContent = document.createElement("div");
            workContent.id = "work"+workId;
            workContent.classList.add("workData");

            const company = document.createElement("h4");
            company.textContent = data.Title;
            workContent.appendChild(company);

            const duration = document.createElement("p");
            duration.classList.add("duration");
            duration.textContent = data.StartDate + " - " + data.endDate;
            workContent.appendChild(duration);

            if (data.contents && Array.isArray(data.contents)) {
                const unOrderList = document.createElement("ul");
                data.contents.forEach(point => {
                    const listItem = document.createElement("li");
                    listItem.textContent = point;
                    unOrderList.appendChild(listItem);
                })
                workContent.appendChild(unOrderList);
            } else {
                const noContentMessage = document.createElement("p");
                noContentMessage.textContent = "No details available.";
                workContent.appendChild(noContentMessage);
            }
            work_details.appendChild(workContent)

            if (data.endDate === "current"){
                viewBloack(workId);
            }
        }
        work_title.appendChild(p_tag);
    }
}
workExp();