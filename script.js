const jobsData={
    jobs : [{
      "id": 1,
      "company": "Photosnap",
      "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/d1b1de43ca6a441e99543d80eb517d34.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/be5619415553470faca94f94f72b6e68.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/c245c838322e4ebdae5692c9d9a8bdbe.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/cd85fb2d60f04ea7aea3ed183a37a607.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/a4cd5572845541adb89e962794ca86fe.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Ruby"],
      "tools": ["Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/e8c50754b72f43f6a3eefd188acdac7c.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/96e8d27ab40b4015a59e589687dd177d.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/2dd17882e68d4045a18eab7dfb9c37de.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/68e12689f98740ddaa1f4a78bc2d4f7c.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/db318fbeb51d41b6bc9388259899e297.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }],
    bg_header_desktop:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/7caa466cbd3c4975b9e39ec6700b1656.svg",
    bg_header_mobile:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/ba3bba082bbf4cfb9232732eeca4206d.svg",
    icon_remove:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/05c800be8f0b4d569e908f1aa949feed.svg",
  }

  

document.addEventListener("DOMContentLoaded", function () {
    const jobsContainer = document.querySelector('.container');
    const searchInput = document.querySelector('#search-bar');
    const clearButton = document.querySelector('#clear-button');
    function renderJobs(jobs) {
        jobsContainer.innerHTML = '';

        jobs.forEach((job) => {
            const jobElement = document.createElement('div');
            jobElement.classList.add('container');
            
            jobElement.innerHTML = `
                <div class="image">
                    <img src="${job.logo}" alt="Company Logo">
                </div>
                <div class="levels">
                    <div class="company">
                        <p id="companyname">${job.company}</p>
                        ${job.new ? '<p id="new">NEW!</p>' : ''}
                        ${job.featured ? '<p id="featured">FEATURED</p>' : ''}
                    </div>
                    <h1>${job.position}</h1>
                    <div class="time">
                        <ul class="RealTime">
                            <li>${job.postedAt}</li>
                            <li>${job.contract}</li>
                            <li>${job.location}</li>
                        </ul>
                        <hr>
                    </div>
                </div>
                <div class="tags">
                    ${job.role ? `<button class="tag" onclick="filterJobs('${job.role}')">${job.role}</button>` : ''}
                    ${job.level ? `<button class="tag" onclick="filterJobs('${job.level}')">${job.level}</button>` : ''}
                    ${job.languages ? job.languages.map(lang => `<button class="tag" onclick="filterJobs('${lang}')">${lang}</button>`).join('') : ''}
                    ${job.tools ? job.tools.map(tool => `<button class="tag" onclick="filterJobs('${tool}')">${tool}</button>`).join('') : ''}
                </div>
            `;

            jobsContainer.appendChild(jobElement);
        });
    }

    renderJobs(jobsData.jobs);

    window.filterJobs = function (keyword) {
        const filteredJobs = jobsData.jobs.filter(job => 
            job.role === keyword || job.level === keyword || (job.languages && job.languages.includes(keyword)) || (job.tools && job.tools.includes(keyword))
        );
        renderJobs(filteredJobs);
        updateSearchBar(keyword);
    };
    function updateSearchBar(keyword) {
        searchInput.value = keyword;
    }

    clearButton.addEventListener('click', function () {
        searchInput.value = '';
        renderJobs(jobsData.jobs);
    });
});
