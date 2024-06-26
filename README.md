
# Countries API connected with database


The Countries API provides access to information about various countries, including details such as country names, capitals, and interesting facts. This RESTful API is designed to be simple and straightforward for users needing to interact with country-specific data.

## Base URL
The base URL for accessing the API is:
https://countries-db-api.onrender.com/


## Endpoints:
### Get All Countries
URL: /api/countries  
Method: GET  
Success Response: Code: 200, Content: JSON array of countries  


### Get Country by ID
URL: /api/countries/:id  
Method: GET  
URL Params: Required: id=[integer]  
Success Response: Code: 200, Content: JSON object of a single country  
Error Response: Code: 404 NOT FOUND, Content: { error : "Country not found" }  


### Create a New Country
URL: /api/countries  
Method: POST  
Data Params: Required: { "country": "string" }  
Functionality: This endpoint allows users to add a new country to the database. It includes validation to ensure that the country name meets specific criteria, such as a minimum length requirement, to maintain data quality and consistency.  
Success Response: Code: 201, Content: JSON object of created country  
Example: curl -X POST https://countries-api-1-onug.onrender.com/api/countries -H "Content-Type: application/json" -d '{"country": "NewCountry"}'
Using POSTMAN 







