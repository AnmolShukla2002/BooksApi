# BooksApi

# My RESTful API with Node.js and Express.js

![Node.js Logo](https://your-website.com/nodejs-logo.png)

Welcome to My RESTful API project built with Node.js and Express.js for managing books. This API allows you to perform CRUD (Create, Read, Update, Delete) operations on books. Whether you're a developer looking to understand the API or a user seeking information, this README provides a comprehensive guide.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Setup and Run Locally](#setup-and-run-locally)
- [Assumptions and Decisions](#assumptions-and-decisions)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

---

## Features

This API offers a range of features for managing books, including:

- *Fetch All Books*: Retrieve a list of all books stored in the database.
- *Create a New Book*: Add a new book to the database.
- *Fetch a Book by Id*: Get detailed information about a book by its unique identifier.
- *Update Book Details*: Modify book information by providing updated details.
- *Delete a Book*: Remove a book from the database.

---

## Technologies Used

This project leverages the following technologies and tools:

| Technology         | Description                                      |
|--------------------|--------------------------------------------------|
| Node.js            | JavaScript runtime for server-side development. |
| Express.js         | A web application framework for Node.js.         |
| MongoDB            | A NoSQL database for storing book data.         |
| HTML & CSS         | For creating a visually appealing README.      |

---

## API Endpoints

The API offers the following endpoints:

### Fetch All Books

- *Endpoint*: `GET /api/books/get-all-books`
- *Description*: Fetch all books stored in the database.
- *Usage*: Send a GET request to `http://localhost:8000/api/books/get-all-books`
- *Response*: Includes a list of all books or a message if no books are available.

### Create a New Book

- *Endpoint*: `POST /api/books/`
- *Description*: Create a new book and add it to the database.
- *Usage*: Send a POST request to `http://localhost:8000/api/books` with a JSON request body containing book details. Example request body:

json:
{
  "title": "Book Title",
  "author": "Author Name",
  "summary": "Book Summary"
}


- *Response*: Includes the newly created book or an error message.

### Fetch a Book by Id

- *Endpoint*: `GET /api/books/get-single-book/:id`
- *Description*: Fetch a book by its Id.
- *Usage*: Send a GET request to `http://localhost:8000/api/books/:id`, where `:id` is the id of the book you want to fetch.
- *Response*: Includes the book if found, or a message if the book is not found.

### Update Book Details

- *Endpoint*: `PUT /api/books/update-book/:id`
- *Description*: Update the details of a book by its unique identifier.
- *Usage*: Send a PUT request to `http://localhost:8000/api/books/:id`, where `:id` is the unique identifier of the book you want to update.
- Include the updated book details in the request body as a JSON object. Example request body:

json: 
{
  "title": "Updated Book Title",
  "author": "Updated Author Name",
  "summary": "Updated Book Summary"
}


- *Response*: Includes the updated book if found, or a message if the book is not found.

### Delete a Book

- *Endpoint*: `DELETE /api/books/delete-book/:id`
- *Description*: Delete a book by its unique identifier.
- *Usage*: Send a DELETE request to `http://localhost:8000/api/books/:id`, where `:id` is the unique identifier of the book you want to delete.
- *Response*: Includes the deleted book if found, or a message if the book is not found.

---

## Setup and Run Locally

To run this application locally, follow these steps:

1. Clone the repository to your local machine:

   
   git clone https://github.com/your-username/your-repository.git
   

2. Navigate to the project folder:

   
   cd your-repository
   

3. Install the required dependencies:

   
   npm install
   

4. Set up your MongoDB database. Update the MongoDB connection string in `express.js` to point to your database.

5. Start the server:

   
   nodemon index.js
   

Your API will be accessible at `http://localhost:8000`.

---

## Assumptions and Decisions

During the development of this project, the following assumptions and decisions were made:

- The MongoDB database is used to store book data.
- Books are uniquely identified by their `_id` in the database.
- The user is logged in and there is no need for any authorization and authentication.
- Error handling is implemented to provide meaningful responses in case of errors.
- This README provides information on API endpoints, usage, and local setup instructions.

Feel free to customize this README to include additional details specific to your project, such as environment variables, deployment instructions, or any other relevant information.

---

## Video For Proper Working

![Working](https://vimeo.com/879336590?share=copy)


---

## Getting Started

If you're new to this project, please check out the [Getting Started Guide](getting-started.md) for detailed instructions on how to use and test the API.

---

## Contributing

We welcome contributions from the community. If you'd like to contribute to this project, please read our [Contribution Guidelines](CONTRIBUTING.md) for more details.

---

## License

This project is licensed under the [MIT License](LICENSE.md). Feel free to use, modify, and distribute it as needed.

---

Thank you for using our RESTful API with Node.js and Express.js. If you have any questions or need assistance, please reach out to our support team.
