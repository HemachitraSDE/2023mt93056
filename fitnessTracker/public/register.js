// Dummy user data for demonstration
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

function register() {
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;

  // Check if username already exists
  const existingUser = users.find(user => user.username === username);
  
  if (existingUser) {
    showMessage('Username already exists. Please choose another one.');
  } else {
    // Register the new user
    users.push({ username, password });
    showMessage('Registration successful. You can now log in.');
  }
}

function showMessage(message) {
  document.getElementById('message').textContent = message;
}