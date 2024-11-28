# Northcoders News API

## Summary

This project focuses on building a REST API for the purpose of accessing application data programmatically.

It is designed to mimic the real world backend service, and therefore, has the capability to provide information to front end architecture.

Please click the link below for the hosted version of Kate's NC_News Project:

[Render: Kates's NC_News Project](https://kates-nc-news.onrender.com/api "Render: Kate's NC_News Project")

This link will take you to a directory which lists the endpoints accepted by the API. For each endpoint, there is a brief description, examples of accepted queries, and a typical response you might get from that endpoint.

NOTE: When clicking the link above, if you haven't got a JSON formatter extension installed, the data may be hard to view. Therefore, installing a JSON formatter extension to your browser can make data like this easier to view. This [JSON formatter on the Chrome Store](https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en "JSON formatter on the Chrome Store") is a good one!

## Setup Instructions

The instructions detailed below will allow you to clone this repo to your local machine for testing and development purposes.

### 1. Software Checks

This API uses PostgreSQL and Node.js to run this project, therefore, before getting started, please make sure that your local machine installations meet the minimum versions required:

PostgreSQL 14.12 (Homebrew)
Node v22.7.0

### 2. Cloning this Repository

To clone this repo to your local machine:

[GitHub: Kates-NC-News Link](https://github.com/katehjd21/Kates-NC-News.git "GitHub Kates-NC-News Link")

Use the the git clone command in your terminal with the above link. Make sure you are in the correct file you want to be in before cloning the repository down!

Once you have cloned this repository to your local machine, you will need to complete a couple more setup tasks.

### 3. Creating .env Files

Create two .env files: **.env.test** and **.env.development**.

Within these .env files, you will need to add PGDATABASE= with the correct database name for that environment.

- .env.test => PGDATABASE=nc_news_test
- .env.development => PGDATABASE=nc_news

### 4. Install Dependencies

- Once you have created these files and inserted the PGDATABASEs, run 'npm install' in your terminal. This will add all the packages you need for the project.

### Create the Databases

To create the developer and test databases, in your terminal run the command **npm run setup-dbs**

### 5. Seed the Database

- To seed the developer database, run the **npm run seed** command in your terminal.

### 6. Testing

- To run the test file, use the **npm test app** command. This will automatically seed the test database every time you run the test file.

### You should now all be set up to begin! Thank you for taking the time to look at my project!

---

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)
