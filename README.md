<div align="center">
  <h1 align="center">Linx</h1>
</div>

## Development

### Requirements

- [Node](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com)

### Getting Started

```bash
git clone https://github.com/Michael-Liendo/linx.git

# step into repository directory
cd ./linx

# Install dependencies
npm install
```

#### Run Server

```bash
# Go to server
cd ./server

# Copy .env file
cp .env.example .env

# Run a PostgreSQL with Docker Compose
docker compose up

# Go to Root folder
cd ..

# Run the database migrations
npm run server:migrations:up

# Run the server
npm run server:dev
```

#### Run Client

```bash
# Go to server
cd ./client

# Copy .env file
cp .env.example .env

# Go to Root folder
cd ..

# Run the server
npm run client:dev
```

## License

Licensed under the MIT License
