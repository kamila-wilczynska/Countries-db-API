
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
https://countries-db-api.onrender.com/api/countries



### Create a New Country
URL: /
Method: POST  
Data Params: Required: { "country": "string" }  
Functionality: This endpoint allows users to add a new country to the database. It includes validation to ensure that the country name meets specific criteria, such as a minimum length requirement, to maintain data quality and consistency.  
Success Response: Code: 201, Content: JSON object of created country 
https://countries-db-api.onrender.com/ 







