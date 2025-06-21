# Single Sign-On (SSO) Prototype 🚀

![GitHub repo size](https://img.shields.io/github/repo-size/your-username/sso-prototype)
![GitHub last commit](https://img.shields.io/github/last-commit/your-username/sso-prototype)
![License](https://img.shields.io/github/license/your-username/sso-prototype)

A **lightweight, secure, and interactive Single Sign-On (SSO)** prototype built with **Node.js**, **Express**, **React**, and **JSON Web Tokens (JWT)**. This project demonstrates modern authentication and authorization workflows using an OAuth 2.0-inspired flow with a mock identity provider. Perfect for showcasing expertise in identity management, REST APIs, and full-stack development! 🔒

## 🌟 Features

- **User Authentication**: Secure login via a mock identity provider with JWT-based token generation.
- **Protected Routes**: Access control for authenticated users only, ensuring robust authorization.
- **Responsive Frontend**: Clean, user-friendly React interface for login, dashboard, and logout.
- **RESTful APIs**: Well-structured endpoints for authentication and protected resources.
- **Error Handling**: Clear feedback for invalid credentials or unauthorized access.
- **Scalable Design**: Modular code structure ready for integration with real identity providers like Okta or Auth0.

## 🛠️ Tech Stack

| **Component**   | **Technologies**                          |
|------------------|-------------------------------------------|
| **Backend**     | Node.js, Express, JWT, CORS, dotenv       |
| **Frontend**    | React, React Router, Axios, CSS           |
| **Authentication** | OAuth 2.0-inspired flow, JWT            |
| **Tools**       | npm, Git, VS Code, Postman                |

## 📸 Imaginary Result (Interface Output)

Below are textual mockups of the application's interface, illustrating the look and feel when running the project locally at `http://localhost:3000`.

### Login Page (`/`)
A clean, centered form for user authentication.


| | | SSO Prototype | | Login | | | | [ Username ] | | | | [ Password ] | | | | [ Login ] | | | | (Invalid credentials) | | |

- **Description**: Displays a bold "SSO Prototype" title, a "Login" subheader, and a form with username/password inputs. The blue "Login" button darkens on hover. An error message ("Invalid credentials") appears in red if login fails.
- **Colors**: Blue button (`#007bff`), red error text, black text on white background.
- **Interactivity**: Users enter credentials (e.g., `user1`/`password123`) and click "Login" to access the dashboard.

### Dashboard Page (`/dashboard`)
A protected page welcoming the authenticated user.


| | | SSO Prototype | | Dashboard | | | | Welcome user1 to the dashboard! | | | | Logout | | |


- **Description**: Shows the same "SSO Prototype" title, a "Dashboard" subheader, and a personalized welcome message (e.g., "Welcome user1 to the dashboard!"). A blue "Logout" link underlines on hover.
- **Colors**: Blue link (`#007bff`), black text on white background.
- **Interactivity**: Displays only for authenticated users. Clicking "Logout" clears the session and redirects to the login page.

### Logout (`/logout`)
- **Description**: No visible UI; instantly redirects to the login page after clearing the JWT token.
- **User Experience**: Seamless transition back to the login form.

## 🏁 Getting Started

Follow these steps to run the SSO prototype locally.

### Prerequisites
- **Node.js** (v16 or higher):
- **npm**: Included with Node.js
- **Git** (optional): For cloning the repository
- **VS Code**: Recommended for development

### 🚀 Usage
Access the App:
Open http://localhost:3000 in your browser.
See the Login Page with a form.
Log In:
Use mock credentials from backend/users.json:
Username: user1, Password: password123
Username: user2, Password: password456
Click the blue "Login" button.
Success: Redirects to the Dashboard Page with a welcome message.
Failure: Shows "Invalid credentials" in red.
Explore the Dashboard:
View the personalized welcome message.
Click the "Logout" link to return to the login page.
Test Protected Routes:
Try accessing http://localhost:3000/dashboard without logging in (e.g., in an incognito tab). You’ll be redirected to the login page.

### 📂 Project Structure
sso-prototype/
├── backend/              
│   ├── config/           
│   ├── routes/           
│   ├── middleware/       
│   ├── users.json        
│   ├── package.json      
│   └── server.js         
├── frontend/             
│   ├── public/           
│   ├── src/              
│   │   ├── components/   
│   │   ├── App.js       
│   │   ├── index.js     
│   │   └── styles.css   
│   ├── package.json      
│   └── .env              
├── README.md           
└── .gitignore            

🐛 Troubleshooting
Port in Use: Change PORT in backend/.env or kill processes:
lsof -i :5000
kill -9 <pid>
CORS Errors: Ensure backend is running before frontend.
Module Not Found: Delete node_modules and package-lock.json, then rerun npm install.
Login Fails: Verify credentials in backend/users.json.

🙌 Acknowledgments
Inspired by real-world SSO systems like Okta and Auth0.
Built with ❤️ using Node.js and React.



