# ValCinema: Gateway Service

The main API Gateway for the ValCinema ecosystem. It serves as the single entry point for client applications, exposing HTTP REST endpoints, providing centralized routing, and communicating with internal microservices.

## Features

- **HTTP REST API:** Exposes endpoints to external clients (e.g., frontend, mobile apps).
- **Internal Routing:** Proxies requests to internal microservices via gRPC.
- **API Documentation:** Auto-generated Swagger/OpenAPI documentation.
- **CORS & Validation:** Handles cross-origin requests and validates incoming DTOs globally.

## Tech Stack

- **Framework:** NestJS
- **Communication:** gRPC (Client), HTTP/REST (Server)
- **Documentation:** Swagger (@nestjs/swagger)

## Environment Variables

See the `.env.example` file for the required environment variables.

## Running the Service

```bash
# Install dependencies
npm install

# Start the service in development mode
npm run start:dev
```

Once running, the Swagger API documentation is available at `/docs`.
