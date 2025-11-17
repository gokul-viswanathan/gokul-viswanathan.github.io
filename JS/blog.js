const blogPosts = [
    {
        "id": "microservices-architecture",
        "title": "Microservices Architecture: Lessons from the Trenches",
        "date": "2024-11-15",
        "excerpt": "Sharing my experience migrating a monolithic application to microservices, including the challenges, wins, and best practices I learned along the way.",
        "content": "In my recent role at Patton Labs, I had the opportunity to lead the migration of a large monolithic application to a microservices architecture. This journey taught me valuable lessons about distributed systems, team coordination, and the importance of proper planning...",
        "tags": ["Architecture", "Microservices", "Backend"],
        "readTime": "5 min read",
        "featured": true
    },
    {
        "id": "performance-optimization",
        "title": "API Performance Optimization: From 40% Improvement to Production Excellence",
        "date": "2024-10-28",
        "excerpt": "Deep dive into the techniques I used to improve API throughput by 40% through systematic performance testing and optimization strategies.",
        "content": "Performance optimization is both an art and a science. In this post, I'll walk you through the systematic approach I used to identify bottlenecks and implement solutions that resulted in significant performance gains...",
        "tags": ["Performance", "API", "Optimization"],
        "readTime": "7 min read",
        "featured": true
    },
    {
        "id": "real-time-systems",
        "title": "Building Real-Time Systems with Redis: A Practical Guide",
        "date": "2024-10-12",
        "excerpt": "How I engineered a real-time transaction monitoring system using Redis caching, reducing latency and improving financial tracking accuracy.",
        "content": "Real-time systems present unique challenges, especially when dealing with financial data. At Sage Money, I built a transaction monitoring system that processes thousands of events in real-time. Here's how I approached it...",
        "tags": ["Redis", "Real-time", "Fintech"],
        "readTime": "6 min read",
        "featured": false
    },
    {
        "id": "database-optimization",
        "title": "Database Query Optimization: 65% Faster Queries",
        "date": "2024-09-25",
        "excerpt": "Practical techniques for optimizing complex SQL queries and implementing effective indexing strategies that dramatically improved performance.",
        "content": "Database performance can make or break an application. In this post, I share the systematic approach I used to optimize complex queries, resulting in a 65% reduction in execution time...",
        "tags": ["Database", "SQL", "Performance"],
        "readTime": "8 min read",
        "featured": false
    },
    {
        "id": "ci-cd-best-practices",
        "title": "CI/CD Pipeline Excellence: GitHub Actions in Production",
        "date": "2024-09-10",
        "excerpt": "Setting up robust CI/CD pipelines with GitHub Actions, including testing strategies, linting, and deployment automation.",
        "content": "A well-designed CI/CD pipeline is the backbone of modern software development. I'll share how I orchestrated a comprehensive pipeline using GitHub Actions that streamlined our deployment process...",
        "tags": ["DevOps", "CI/CD", "GitHub Actions"],
        "readTime": "5 min read",
        "featured": false
    }
];

function createBlogCard(post) {
    const article = document.createElement('article');
    article.classList.add('blog-card', 'fade-in');
    
    if (post.featured) {
        article.classList.add('featured');
    }
    
    const content = document.createElement('div');
    content.classList.add('blog-card-content');
    
    const title = document.createElement('h3');
    title.textContent = post.title;
    content.appendChild(title);
    
    const meta = document.createElement('div');
    meta.classList.add('blog-meta');
    meta.innerHTML = `
        <span>${formatDate(post.date)}</span>
        <span>•</span>
        <span>${post.readTime}</span>
    `;
    content.appendChild(meta);
    
    const excerpt = document.createElement('p');
    excerpt.classList.add('blog-excerpt');
    excerpt.textContent = post.excerpt;
    content.appendChild(excerpt);
    
    const tags = document.createElement('div');
    tags.classList.add('blog-tags');
    post.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.classList.add('blog-tag');
        tagSpan.textContent = tag;
        tags.appendChild(tagSpan);
    });
    content.appendChild(tags);
    
    const readMore = document.createElement('a');
    readMore.classList.add('read-more');
    readMore.href = `#blog-${post.id}`;
    readMore.innerHTML = `Read more <i class="fas fa-arrow-right"></i>`;
    readMore.addEventListener('click', (e) => {
        e.preventDefault();
        expandBlogPost(post);
    });
    content.appendChild(readMore);
    
    article.appendChild(content);
    
    return article;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function expandBlogPost(post) {
    // Create modal or expand section for full blog post
    const modal = document.createElement('div');
    modal.classList.add('blog-modal');
    modal.innerHTML = `
        <div class="blog-modal-content">
            <button class="blog-modal-close">&times;</button>
            <h2>${post.title}</h2>
            <div class="blog-modal-meta">
                <span>${formatDate(post.date)}</span>
                <span>•</span>
                <span>${post.readTime}</span>
            </div>
            <div class="blog-modal-tags">
                ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
            </div>
            <div class="blog-modal-body">
                <p>${post.content}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.blog-modal-close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Add modal styles if not already present
    if (!document.querySelector('#blog-modal-styles')) {
        const style = document.createElement('style');
        style.id = 'blog-modal-styles';
        style.textContent = `
            .blog-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
                padding: 2rem;
            }
            
            .blog-modal-content {
                background: var(--background-medium);
                border: 1px solid rgba(69, 162, 158, 0.2);
                border-radius: var(--border-radius);
                padding: 2rem;
                max-width: 800px;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
                backdrop-filter: blur(10px);
            }
            
            .blog-modal-close {
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                color: var(--text-primary);
                font-size: 2rem;
                cursor: pointer;
                transition: var(--transition);
            }
            
            .blog-modal-close:hover {
                color: var(--primary-color);
            }
            
            .blog-modal-meta {
                color: var(--text-secondary);
                margin-bottom: 1rem;
            }
            
            .blog-modal-tags {
                margin: 1rem 0;
            }
            
            .blog-modal-body {
                line-height: 1.8;
                color: var(--text-primary);
            }
        `;
        document.head.appendChild(style);
    }
}

function initBlog() {
    const blogContainer = document.querySelector('.blog-posts');
    if (!blogContainer) return;
    
    // Sort posts by date (newest first)
    const sortedPosts = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Create blog cards
    sortedPosts.forEach(post => {
        const card = createBlogCard(post);
        blogContainer.appendChild(card);
    });
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Initialize blog when DOM is loaded
document.addEventListener('DOMContentLoaded', initBlog);