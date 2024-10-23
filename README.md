# mNodeJS

A simple Node.js and Express.js application that connects to MongoDB and provides basic CRUD operations for articles. This project uses EJS for templating and Mongoose for MongoDB object modeling.

## Features

- Express.js for server-side logic
- Mongoose for MongoDB integration
- EJS templating engine for rendering views
- Environment variables for secure configuration management
- Nodemon for automatic server restarting during development

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or later)
- **npm** (Node Package Manager)
- **MongoDB** (Atlas or a local MongoDB instance)

## Getting Started

Follow these steps to get a local copy up and running.

### 1. Clone the Repository

Clone the project from GitHub to your local machine:

```bash
git clone https://github.com/Steve-sy/mNodeJS.git
cd mNodeJS
```

### 2. Install Dependencies

Install the required Node.js packages:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root of the project and add the following variables:

```env
APP_NAME = 'your-app-name'
DB_NAME = 'your-database-name'
DB_USER = 'your-database-username'
DB_PASSWORD = 'your-database-password'
DB_CLUSTER = 'your-database-cluster-url'
```

Replace the placeholder values (`your-app-name`, `your-database-name`, etc.) with your actual MongoDB configuration.

### 4. Run the Application

Start the server using `nodemon` for development:

```bash
npm start
```

The server will run on `http://localhost:3000`.

### 5. Verify the Setup

Open a web browser or API client (like Postman) and visit `http://localhost:3000/` to see the "Hello World" message.

## Available Endpoints

Here are the endpoints you can use in the application:

- **`GET /`**: Home page
- **`GET /findsum/:num1/:num2`**: Adds two numbers passed as URL parameters
- **`GET /sum`**: Adds two numbers passed as query parameters
- **`GET /sayHi`**: Greets with the name from the request body
- **`GET /q`**: Returns a JSON object with name, age, and language
- **`GET /numbers`**: Adds two numbers and renders the result using EJS
- **`GET /home`**: Displays a welcome message
- **`POST /articles`**: Creates a new article
- **`GET /articles`**: Lists all articles
- **`GET /articles/:articleId`**: Retrieves a specific article by its ID
- **`GET /articles/d/:articleId`**: Deletes a specific article by its ID

## Project Structure

The project structure is as follows:

```
mNodeJS/
├── models/
│   └── Article.js       # Mongoose schema for articles
├── .env                 # Environment variables configuration
├── index.js             # Main entry point for the server
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Technologies Used

- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **EJS**: Templating engine
- **Nodemon**: Development tool for auto-restarting the server
- **dotenv**: Environment variables management

## License

This project is licensed under the ISC License.

---

Feel free to customize the `README.md` with more details specific to your project, such as links to the GitHub repository or any additional setup steps.
