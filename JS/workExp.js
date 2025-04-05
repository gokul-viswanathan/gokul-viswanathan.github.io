const datas = [
    {
        "Title": "Software Engineer",
        "Id": "pattonLabs ",
        "Company": "Patton Labs ",
        "StartDate": "Nov 2024",
        "endDate": "current",
        "active": "1",
        "contents": ["Contributed to the migration of a monolithic application to a microservices-based architecture, enhancing scalability, maintainability, and deployment flexibility.",
            "Resolved API performance bottlenecks through extensive stress and load testing, increasing throughput by 40%.",
            "Optimized complex SQL queries and applied effective indexing and caching strategies, resulting in a 65% reduction in average query execution time.",
            "Collaborated with a cross-functional team including frontend developers, QA, and DevOps to ensure smooth migration",
            "Orchestrated CI/CD pipeline using GitHub Actions, implemented testing and lint checks to streamline deployment.",
        ]
    },

    {
        "Title": "Software Engineer",
        "Id": "sageMoney",
        "Company": "Sage Money",
        "StartDate": "Mar 2024",
        "endDate": "Oct 2024",
        "active": "1",
        "contents": ["Pre-funded fintech platform focusing on transaction analysis and cost control methods.",
            "Built secure transaction integration system using Plaid API with Google OAuth authentication and implemented connection pooling for optimized database performance.",
            "Engineered real-time transaction monitoring system for recurring transactions and subscription with Redis caching, reducing latency and optimized financial tracking across biweekly and monthly expenses.",
            "Designed and implemented a secure multi-user account linking and validation process, enabling users to consolidate and view multiple account transactions seamlessly.",
        ]
    },

    {
        "Title": "Software Engineer",
        "Id": "accenture",
        "Company": "Accenture",
        "StartDate": "Jun 2019",
        "endDate": "Jul 2022",
        "active": "1",
        "contents": ["An enterprise-scale COVID site and employee management platform using Java, TypeScript, and AWS, handling 50K+ daily Active Users across 300+ office locations with 99.9% uptime.",
            "Optimized automated approval workflow system reducing processing time from 24 hours to 10 minutes, resulting in 85% improvement in employee satisfaction and 40% reduction in administrative overhead.",
            "Automated real-time contact tracing microservice that processed 5K+ daily proximity events, successfully identifying and notifying 1,000+ potential exposure cases within 15 minutes of confirmed cases.",
            "Upgraded vaccination tracking service with secure document management using AWS S3 and role-based access control.",
            "Enhanced suite of 20+ RESTful APIs, handling 100K+ daily requests with optimized performance.",
            "Modernized analytics dashboard using TypeScript and D3.js, providing real-time visualization of office capacity."
        ]
    }
]

function viewBloack(value){
    const work_details = document.querySelectorAll(".workData");
    const show_work = document.getElementById("work"+value);
    const work_titles = document.querySelectorAll(".title")
    const current_title = document.getElementById(value);
    work_details.forEach(work => {
        work.style.display = "none";
    })

    work_titles.forEach(title => {
        title.classList.remove("selected_work_title")
        title.classList.add("unselected_work_title")
    } )

    show_work.style.display = "block";
    current_title.classList.add("selected_work_title");
    current_title.classList.remove("unselected_work_title")
}

function workExp() {

    const work_title = document.querySelector(".work_title");
    const p_tag = document.createElement("p");
    const work_details = document.querySelector(".work_details");
    let currentFile = null;

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
                currentFile = workId;
            }
        }
        work_title.appendChild(p_tag);
        viewBloack(currentFile);
    }
}
workExp();