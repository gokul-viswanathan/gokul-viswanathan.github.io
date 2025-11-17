const datas = [
    {
        "Title": "Software Engineer",
        "Id": "pattonLabs",
        "Company": "Patton Labs",
        "StartDate": "Nov 2024",
        "endDate": "current",
        "active": "1",
        "contents": [
            "Led migration of monolithic application to microservices architecture, enhancing scalability, maintainability, and deployment flexibility across distributed systems.",
            "Resolved critical API performance bottlenecks through comprehensive stress testing and load analysis, achieving 40% throughput improvement and reducing response times by 60%.",
            "Optimized complex SQL queries and implemented advanced indexing with Redis caching strategies, resulting in 65% reduction in average query execution time and improved database performance.",
            "Collaborated with cross-functional teams including frontend developers, QA engineers, and DevOps to ensure seamless migration and maintain system reliability.",
            "Orchestrated end-to-end CI/CD pipeline using GitHub Actions, implementing automated testing, code quality checks, and streamlined deployment processes."
        ]
    },

    {
        "Title": "Software Engineer",
        "Id": "sageMoney",
        "Company": "Sage Money",
        "StartDate": "Mar 2024",
        "endDate": "Oct 2024",
        "active": "1",
        "contents": [
            "Developed pre-funded fintech platform focusing on intelligent transaction analysis and proactive cost control methods for personal finance management.",
            "Built secure transaction integration system using Plaid API with Google OAuth authentication, implementing connection pooling for optimized database performance and handling 10K+ daily transactions.",
            "Engineered real-time transaction monitoring system for recurring transactions and subscription management with Redis caching, reducing latency by 70% and optimizing financial tracking across biweekly and monthly expense cycles.",
            "Designed and implemented secure multi-user account linking and validation process, enabling users to consolidate and view multiple account transactions seamlessly with bank-level security protocols."
        ]
    },

    {
        "Title": "Software Engineer",
        "Id": "accenture",
        "Company": "Accenture",
        "StartDate": "Jun 2019",
        "endDate": "Jul 2022",
        "active": "1",
        "contents": [
            "Architected and deployed enterprise-scale COVID site and employee management platform using Java, TypeScript, and AWS, handling 50K+ daily active users across 300+ office locations with 99.9% uptime.",
            "Optimized automated approval workflow system reducing processing time from 24 hours to 10 minutes, resulting in 85% improvement in employee satisfaction and 40% reduction in administrative overhead.",
            "Automated real-time contact tracing microservice processing 5K+ daily proximity events, successfully identifying and notifying 1,000+ potential exposure cases within 15 minutes of confirmed cases.",
            "Upgraded vaccination tracking service with secure document management using AWS S3 and role-based access control for HIPAA compliance.",
            "Enhanced suite of 20+ RESTful APIs handling 100K+ daily requests with optimized performance and comprehensive error handling.",
            "Modernized analytics dashboard using TypeScript and D3.js, providing real-time visualization of office capacity and utilization metrics."
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
    show_work.classList.add("active");
    current_title.classList.add("selected_work_title");
    current_title.classList.remove("unselected_work_title")
}

function workExp() {
    console.log("workExp() function called");
    const work_title = document.querySelector(".work_title");
    const work_details = document.querySelector(".work_details");
    
    console.log("work_title:", work_title);
    console.log("work_details:", work_details);
    
    if (!work_title || !work_details) {
        console.error("Work elements not found!");
        return;
    }
    
    // Clear existing content to prevent duplicates
    work_title.innerHTML = '';
    work_details.innerHTML = '';
    
    let currentFile = null;

    for (const data of datas) {
        if (data.active == "1") {
            // Create company button
            const button = document.createElement("button");
            button.textContent = data.Company;
            const workId = data.Id;
            button.id = workId;
            button.classList.add("title", "unselected_work_title");
            button.addEventListener("click", () => {
                viewBloack(workId);
            });
            work_title.appendChild(button);

            // Create work content with new structure
            const workContent = document.createElement("div");
            workContent.id = "work" + workId;
            workContent.classList.add("workData");

            // Create content wrapper
            const contentWrapper = document.createElement("div");
            contentWrapper.classList.add("workData-content");

            // Create header section
            const headerSection = document.createElement("div");
            headerSection.classList.add("workData-header");

            const company = document.createElement("h4");
            company.textContent = data.Title;
            headerSection.appendChild(company);

            const duration = document.createElement("p");
            duration.classList.add("duration");
            duration.textContent = data.StartDate + " - " + data.endDate;
            headerSection.appendChild(duration);

            contentWrapper.appendChild(headerSection);

            // Add achievements list
            if (data.contents && Array.isArray(data.contents)) {
                const unOrderList = document.createElement("ul");
                data.contents.forEach((point) => {
                    const listItem = document.createElement("li");
                    listItem.textContent = point;
                    unOrderList.appendChild(listItem);
                });
                contentWrapper.appendChild(unOrderList);
            } else {
                const noContentMessage = document.createElement("p");
                noContentMessage.textContent = "No details available.";
                noContentMessage.style.color = "var(--text-muted)";
                contentWrapper.appendChild(noContentMessage);
            }

            workContent.appendChild(contentWrapper);
            work_details.appendChild(workContent);

            if (data.endDate === "current") {
                currentFile = workId;
            }
        }
    }

    // Show current/most recent job by default
    if (currentFile) {
        viewBloack(currentFile);
    }
}

// Initialize work experience when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, calling workExp()");
    workExp();
});