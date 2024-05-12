// Dummy user data for demonstration
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  // Check if username and password match any user in the database
  const user = users.find(user => user.username === username && user.password === password);
  
  if (user) {
    showMessage(`Welcome, ${username}!`);
    // Redirect to dashboard or perform other actions upon successful login
  } else {
    showMessage('Invalid username or password.');
  }
}

function showMessage(message) {
  document.getElementById('message').textContent = message;
}