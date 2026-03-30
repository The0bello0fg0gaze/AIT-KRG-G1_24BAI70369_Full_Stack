document.getElementById('jobForm').addEventListener('submit', function(event) {
    // 1. Prevent the page from refreshing
    event.preventDefault();

    // 2. Extract values from the inputs
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const title = document.getElementById('jobTitle').value;
    const skills = document.getElementById('skills').value;

    // 3. Update the User Profile section
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-email').textContent = email;
    document.getElementById('display-title').textContent = title;
    document.getElementById('display-skills').textContent = skills;

    // Optional: Log it to the console to verify
    console.log("Profile Updated successfully!");
});
