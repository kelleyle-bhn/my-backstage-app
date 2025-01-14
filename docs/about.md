# About the Service Chain

This project demonstrates how one service can call another in a chain of requests. Each service has its own role and responds with a message that includes the response from the next service in the chain.

- **Service 1**: Initiates the chain and calls Service 2.
- **Service 2**: Acts as a middleman, calling Service 3 and returning its response to Service 1.
- **Service 3**: Returns a simple response message.

### Technologies Used

- **Spring Boot**: The Java-based framework used to create the microservices.
- **RestTemplate**: Used by Service 1 and Service 2 to make HTTP requests to the next service.