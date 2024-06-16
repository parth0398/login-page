Login Page Project
Description
This project is a simple login page created with React and styled-components. It features a form that allows users to log in by providing a username, password, and selecting their role (employee, manager, senior manager). The form submission is handled with an asynchronous request to an API endpoint.

Features
Responsive Design: The page is designed to be responsive and adapts to various screen sizes.
Styled-components: The project uses styled-components for styling, allowing for scoped and modular CSS.
Form Validation: Basic client-side validation is implemented to ensure that the username and password fields are not empty.
Error Handling: The application provides feedback to the user if the login attempt fails.
Async/Await for API Requests: The form submission is handled using async/await for clean and readable asynchronous code.
Technologies Used
React
styled-components
Fetch API for asynchronous requests
Project Structure
php
Copy code
LoginPageProject
│
├── public
│   └── background.jpg      # Background image used in the ImageContainer component
│
├── src
│   ├── components
│   │   └── Login.js        # Main Login component
│   │
│   ├── App.js              # Main application entry point
│   └── index.js            # React DOM rendering
│
├── .gitignore
├── package.json
└── README.md
Getting Started
Prerequisites
Make sure you have the following installed on your local development environment:

Node.js (v14 or higher)
npm (v6 or higher)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/LoginPageProject.git
cd LoginPageProject
Install dependencies:

bash
Copy code
npm install
Running the Project
To start the development server, run:

bash
Copy code
npm start
This will launch the application and open it in your default web browser. The development server will automatically reload the page if you make changes to the code.

Building the Project
To build the project for production, run:

bash
Copy code
npm run build
This will create an optimized build of the project in the build directory.

Usage
Open the login page in your browser.
Enter your username and password.
Select your role from the dropdown menu.
Click the "Login" button to submit the form.
If the login is successful, you will see a success message. If the login fails, an error message will be displayed.
API Endpoint
The login form submits a POST request to the /api/login endpoint. The request body includes the following fields:

username: The username entered by the user.
passwordLogin: The password entered by the user.
roleLogin: The role selected by the user.
The server is expected to respond with a JSON object containing a message field indicating the result of the login attempt.

Contributing
Contributions are welcome! If you have any suggestions or improvements, feel free to create an issue or submit a pull request.
