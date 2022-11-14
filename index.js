// registration form login with some users already created
let users = [
    {
        username: "anthony",
        password: "1234"
        },
    {
        username: "riley",
        password: "4321"
    }    
]

// login function
function login() {
    // retrieve username and password from form
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
    // loop through users array to find a match and confirm login
    for(let i = 0; i < users.length; i++) {
      if(username == users[i].username && password == users[i].password) {
        console.log('Login successful');
        alert('Login successful');
        // stops here if statement is found to be true
      }

      else{
        // error if no user exists or password or username is incorrect
        alert("Login failed, Please try again or register");
      }
    }
}

// function to create a new user with name, email, password
function register() {
    // store new user data 
  let registerUser = document.getElementById("newUserName").value;
    // store new user password
  let registerPassword = document.getElementById("newPassword").value;

    // store new user info in an object
  let newUser = {
    username: registerUser,
    password: registerPassword
  };
    // loop through users array to check if user already exists
    for(let i = 0; i < users.length; i++) {
      if(register === users[i].username) {
        alert('User already exists');
        // stops here if statement is found to be true
      }
      else{
        // add new user to users array
        users.push(newUser);
        alert('User added');
      }
    }

users.push(newUser);
}

