# Welcome to the Service Chain Documentation

This documentation provides an overview of a simple chain of three Spring Boot services where each service responds with a message and also calls the next service in the chain.

Svc1 → Svc2 → Svc3

### Service Flow Overview

1. **Service 3**: Returns `Hello from Service 3!`
2. **Service 2**: Calls **Service 3** and returns `Hello from Service 2! → Hello from Service 3!`
3. **Service 1**: Calls **Service 2** and returns `Hello from Service 1! → Hello from Service 2! → Hello from Service 3!`

### How it Works

1. **Service 1** sends a request to **Service 2**.
2. **Service 2** sends a request to **Service 3**.
3. **Service 3** responds with a message, which **Service 2** returns to **Service 1**.
4. **Service 1** returns the final concatenated response to the client.

### Try it Yourself

To test the chain, make a request to `http://localhost:3000/service-chain`. Make sure that all three services are running on the specified ports:

- Service 1: `http://localhost:8081/svc1`
- Service 2: `http://localhost:8082/svc2`
- Service 3: `http://localhost:8083/svc3`
