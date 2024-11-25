// Get started button click event
document.getElementById('get-started').addEventListener('click', () => {
    alert('Let\'s get started!');
});
// User data storage 
const users = {
    student: [],
    supervisor: [],
    employer: []
};

// Function to handle login
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (username && password && role) {
        alert(`Logged in as ${role}: ${username}`);
        // Redirect or load user-specific dashboard...
        if (role== 'student'){
            window.location.href='student.html';
        } else if (role== 'supervisor'){
            window.location.href='supervisor.html';
        } else if (role== 'employer'){
            window.location.href='employer.html';
                }
            
    } else {
        alert("Please fill in all fields.");
    }
   

// Function to handle logout
function logout() {
    alert("Logged out successfully!");
    // Implement logout logic, e.g., redirect to home
}}