# Docker compose

Allows you to run multi-container applications.

## Docker Compose Basics:

- Create a Docker Compose File (docker-compose.yml).
- Define services, networks, and volumes for your application.

```yaml
version: "3"
services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
  db:
    image: postgres:alpine
```

> To start services defined in the docker-compose.yml file

```bash
docker-compose up
```

> To run in the background (detached mode)

```bash
docker-compose up -d
```

> To see the status of running containers
```bash
docker-compose ps
```

> To stop and remove containers

```bash
docker-compose down
```

> To stop without removing containers
```bash
docker-compose stop
```

> To rebuild services (e.g., after changing the Dockerfile or dependencies)
```bash
docker-compose up --build
```

> To scale a service (e.g., run multiple instances of a service)

```bash
docker-compose up --scale web=3
```

## Networking and Volumes:

### Expose Ports:

Expose ports from services in the docker-compose.yml file.

```yaml
services:
  web:
    ports:
      - "8080:80"
```

### Volume Mounting:

Mount volumes for persistent data storage.

```yaml
services:
  web:
    volumes:
      - ./app:/usr/share/nginx/html
```

### Named Volumes:

Use named volumes for data persistence.

```yaml
services:
  db:
    volumes:
      - data:/var/lib/postgresql/data

volumes:
  data:
```

### Environment Variables and Secrets:

#### Environment Variables:

Pass environment variables to services.

```yaml
services:
  web:
    environment:
      - NODE_ENV=production
```

#### Using .env File:

Store environment variables in a .env file.

#### Secrets:

Use Docker secrets for sensitive information.

```yaml
services:
  web:
    secrets:
      - db_password

secrets:
  db_password:
    file: ./secrets/db_password.txt
```

## Advanced Compose Options

### Override Compose File

Use an override file to define additional or modified services.

```bash
docker-compose -f docker-compose.yml -f docker-compose.override.yml up
```

### Specify Project Name

Use -p to specify a project name (namespace for services, networks, and volumes).

```bash
docker-compose -p myproject up
```

### Environment Variable Substitution

Use environment variables in the docker-compose.yml file.

```yaml
services:
  web:
    image: "nginx:${NGINX_VERSION}"
```

```bash
NGINX_VERSION=alpine docker-compose up
```

### Cleanup

> To remove all containers, networks, and volumes:

```bash
docker-compose down --volumes
```

### Prune Unused Resources

> To remove unused containers, networks, and volumes

```bash
docker system prune -a
```

## Networking in Docker Compose
- Docker comes with an embedded DNS server.
- It contains the name and IP of the containers.
- Inside each container, we have a component called DNS resolver. This DNS resolver talks to the DNS server to find the IP address of the target container.
- So when we ping the API container from within another container, the DNS resolver asks the server, "What is the IP address of the API machine / container ?". The DNS server returns the IP address and then the container is able to ping the API container using its IP address.
- So each container has an IP address and is part of a network.