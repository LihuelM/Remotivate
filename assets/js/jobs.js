document.addEventListener("DOMContentLoaded", function () {
    const jobContainer = document.getElementById("main-jobs");

    if (jobListings.length > 0) {
        jobListings.forEach(job => {
            const jobCard = document.createElement("div");
            jobCard.classList.add("job-card");

            jobCard.innerHTML = `
                <img src="${job.image}" alt="${job.title}">
                <div class="card-content">
                    <h1>${job.title}</h1>
                    <p>${job.description}</p>
                    <a href="${job.link}" class="btn-card">Apply Now</a>
                </div>
            `;

            jobContainer.appendChild(jobCard);
        });
    } else {
        jobContainer.innerHTML = "<p>No job listings available.</p>";
    }
});
