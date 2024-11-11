## Types of NoSQL Databases
### Document Databases: : Store data in documents similar to JSON objects - MongoDB, CouchDB
### Key-Value Stores: Store data as a collection of key-value pairs - Redis, DynamoDB
### Wide-Column Stores: Store data in tables, rows, and dynamic columns - Apache Cassandra, Google Bigtable
### Graph Databases: Neo4j

## MongoDB
### MongoDB, an open-source document-oriented database, is purpose-built for efficiently handling extensive datasets & interact with the database using documents that look very much like JSON
### MongoDB stores data in a format called BSON, which stands for Binary JSON. BSON is a binary representation of JSON-like documents.
### This means the data is stored in a format that a computer can read very quickly. It's not in plain text like a normal document or a JSON file, but in a special, compact format that computers can process more efficiently
### NoSQL databases are not primarily structured as a set of tables. They can store and manage data in formats such as key-value pairs, documents, graphs, or wide-column stores.
### Unlike SQL databases, which require a predefined schema and structured data, NoSQL databases allow the storage of data without a predefined schema. This makes them ideal for handling semi-structured or unstructured data.
###  Data in MongoDB is organized into collections and documents. Collections are like containers or folders in which MongoDB stores related documents. similar tp tables in SQL sense.
### Documents are the basic unit of data in MongoDB. They're similar to rows or records in a table, but unlike SQL databases where each row follows a fixed schema, MongoDB documents can have varying structures within the same collection.

## Setup MongoDB Atlas
### Signup to mongodb.com & create organisation and project
### Create Cluster with free tier & bookmark password
###  Usually server connecting with DB server has satatic IP and for security reasons this network access should only be given to creat in Ip address but for develop enviornment we can allow it to acces from anywhere. In network access, add IP address select allow access from anywhere
### In cluster tab, In browse Collections, create database by giving db name and collection name 
### In cluster tab, Connect to cluster0 with MongoDB for VS Code & link is generated, replace passoword and use that link to connect
### Browse Collections to see collection

## Moongose
### Mongoose is a tool for Node.js that helps you work with MongoDB. It makes some of the more complicated parts of using MongoDB easier. Mongoose is like an assistant that helps you manage and use your data in MongoDB, making sure everything is organized and correct.
### Mongoose acts as an intermediary between your Express server and MongoDB. It helps define data models, schemas, and provides methods for interacting with MongoDB. It simplifies the process of querying and manipulating data in MongoDB from your Express application.

## MongoDB Entity, Schema and Models
### MongoDB Entity: An entity is like an object or a thing in the real world that has information we want to store. For example, if we are making a database for a school, student data can be an entity.
### MongoDB Schema: schema in MongoDB defines the structure of the data for an entity.  It has certain rules and requirements that has to be followed like certain fields are required, data type constraints , etc. Similar to class
### MongoDB Models: A model in MongoDB is a high-level programming interface that lets you interact with the data corresponding to a schema. It's like a tool to create, read, update, and delete entities in the database. It is an instance of a schema and represents a collection of documents in the database that adhere to the schema's structure. The model serves as the interface for interacting with the database, allowing you to perform CRUD (Create, Read, Update, Delete) operations and query the database.

## MVC
### Model: Represents the data and business logic of the application. In a Node.js app, the Model could be a Mongoose schema or any other data access layer that interacts with a database. The model is unaware of the user interface. model manages the data and logic
### View: The part of the application that users see and interact with. In Node.js, this could be HTML templates rendered using a template engine like EJS, Pug, or even a front-end framework like React. Passes user input to the controller. view handles the presentation and user interaction
### Controller: Manages the flow of the application, handles user input, and updates the Model and View. In Node.js, controllers are usually functions or classes that handle HTTP requests and responses. controller orchestrates the communication between the view and the model

## Benifits of MVC Architecture
a. Separation of Concerns: Divides the application into Model, View, and Controller for clear separation of responsibilities.
b. Modular Development: Supports development and maintenance of separate, reusable modules for each component.
c. Improved Code Reusability: Allows reuse of Models, Views, and Controllers in different parts of the application or other projects.
d. Enhanced Maintainability: Changes in one component have minimal impact on the others, simplifying maintenance and debugging.
e. Scalability: Facilitates parallel development and the addition of new features without major rework.
f. User Interface Flexibility: Adapts to various user interfaces while keeping the core logic intact.
g. Efficient Testing and Debugging: Enables isolated unit testing for each component, easing issue identification and resolution.
h. Parallel Development: Supports multiple developers or teams working on different components simultaneously.
i. Support for Multiple Views: Utilizes the same Model and Controller with multiple Views for diverse user interfaces.
j. Long-Term Maintainability: Promotes organized and understandable code, reducing technical debt over time.

## Project Structure:
1. index.js (main file)
2. config/ (for database connection)
    db.js
3. models/ (for Mongoose schemas)
    product.js
4. controllers/ (for request handlers)
    productController.js
5. routes/ (for route definitions)
    productRoutes.js
6. middlewares/ (for any middlewares, if needed)

