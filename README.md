Book Management API
This repository contains a Node.js-based RESTful API for managing books using MongoDB for data storage.

API Endpoints and Usage
Add a new book:

Endpoint: POST /books
Usage: Add a new book by providing the following JSON payload:
json
Copy code
{
  "title": "Book Title",
  "author": "BOOK",
  "summary": "String"
}
View all books:

Endpoint: GET /books
Usage: Retrieve a list of all books.
View a specific book by ID:

Endpoint: GET /books/:id
Usage: Retrieve details of a specific book by its ID.
Update a book's details:

Endpoint: PUT /books/:id
Usage: Update a book's details by providing the book ID and a JSON payload with updated information.
json
Copy code
{
  "title": "New Title",
  "author": "New Author",
  "summary": "Updated Summary"
}
Delete a book:

Endpoint: DELETE /books/:id
Usage: Delete a book by providing its ID.
Setup and Run the Application Locally

Decisions and Assumptions
During the development process, the following decisions and assumptions were made:

Utilization of Express.js for handling HTTP requests and routes.
Use of Mongoose as an ODM for MongoDB to define and interact with the book model.
Basic error handling for various scenarios like invalid requests, not found resources, or server errors.
No authentication or authorization mechanisms are implemented for simplicity.
Adjustments or enhancements can be made based on specific project requirements or security considerations.
