const fastify = require("fastify")();
const cors = require("@fastify/cors");

// Enable CORS for frontend communication
fastify.register(cors);

// Import routes
fastify.register(require("./routes/items"));

// Start server
const start = async () => {
  try {
    await fastify.listen({ port: 5000 });
    console.log("Server running on http://localhost:5000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
