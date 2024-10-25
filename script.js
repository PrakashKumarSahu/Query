// Options for subqueries based on the selected query type
const subqueryOptions = {
    "Algorithms": ["Neural Networks", "NLP", "AI/ML Frameworks"],
    "Web Development": ["Frontend", "Backend", "Databases", "Full-Stack Development"],
    "App Development": ["Android Development", "iOS Development", "Cross-Platform Development"],
    "Data Science": ["Data Analysis", "Data Visualization", "Python for Data Science", "Statistical Methods"],
    "Competitive Programming": ["Problem-Solving Techniques", "DSA", "Coding Platforms"],
    "Cloud Computing & DevOps": ["AWS, Azure", "Docker, Kubernetes", "CI/CD Pipelines"],
    "Cybersecurity": ["Ethical Hacking", "Network Security", "Cryptography"],
    "Electronics & Embedded Systems": ["Arduino", "IoT", "PCB Design"],
    "Robotics & Automation": ["ROS", "Sensors and Actuators", "Drones and Quadcopters"],
    "Blockchain & Cryptocurrency": ["Blockchain Basics", "Smart Contracts", "Cryptography in Blockchain"],
    "Internships & Placements": ["Resume Building", "Interview Preparation", "Coding Interviews"],
    "NIT Raipur Specific Doubts": ["Course Registration", "Club and Society", "Hostel and Campus Life"],
    "General Programming": ["C, C++, Java", "Debugging", "Version Control", "Project Development"],
    "Technical Tools": ["MATLAB", "AutoCAD", "Other Simulation Tools"],
    "Relationship & Love Issues": ["Handling Relationships", "Balancing Academics", "Dealing with Breakups"],
    "Exam & Study-Related Issues": ["Time Management", "Study Strategies", "Handling Exam Anxiety"],
    "Scholarships & Financial Aid": ["Applying for Scholarships", "Managing Finances"],
    "Mental Health & Stress Management": ["Coping with Pressure", "Managing Stress", "Seeking Support"],
    "Team Projects & Group Work": ["Collaborating Effectively", "Handling Conflicts", "Time Management"]
};

// Dynamically populate the subquery options based on the selected main query type
document.getElementById('query-type').addEventListener('change', function() {
    const selectedQuery = this.value;
    const subquerySelect = document.getElementById('subquery-type');

    subquerySelect.innerHTML = '<option disabled selected>-- Select Subquery --</option>';
    
    subqueryOptions[selectedQuery].forEach(subquery => {
        const option = document.createElement('option');
        option.value = subquery;
        option.textContent = subquery;
        subquerySelect.appendChild(option);
    });
});

// Handle form submission when the submit button is clicked
document.getElementById('submit-query').addEventListener('click', function() {
    const queryType = document.getElementById('query-type').value;
    const subqueryType = document.getElementById('subquery-type').value;
    const userQuery = document.getElementById('user-query').value;

    // Check if all required fields are filled
    if (!queryType || !subqueryType || userQuery.trim() === '') {
        alert('Please complete all fields before submitting.');
        return;  // Prevent further execution if validation fails
    }

    // Display success message
    document.getElementById('success-message').style.display = 'block';

    // Create a new element to display the query and answer
    const answerDiv = document.createElement('div');
    answerDiv.classList.add('answer');
    answerDiv.innerHTML = `
        <h3>Query: ${queryType} - ${subqueryType}</h3>
        <p>${userQuery}</p>
        <button class="answer-btn">View Answer</button>
        <div class="answer-content" style="display: none;">
            <p>Your answer will appear here soon...</p>
        </div>
    `;

    // Append the query and placeholder answer to the answer list
    document.getElementById('answer-list').appendChild(answerDiv);

    // Add click event to the "View Answer" button to toggle the answer content
    answerDiv.querySelector('.answer-btn').addEventListener('click', function() {
        const answerContent = answerDiv.querySelector('.answer-content');
        answerContent.style.display = answerContent.style.display === 'none' ? 'block' : 'none';
    });

    // Clear the form fields after submission
    document.getElementById('query-type').value = '';
    document.getElementById('subquery-type').innerHTML = '<option disabled selected>-- Select Subquery --</option>';
    document.getElementById('user-query').value = '';
});
