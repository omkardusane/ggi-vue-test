let items = [
  { id: 1, name: "GGI", descr: "Global Governance Initiative", lead:"Shatakshi" },
  { id: 2, name: "MF", descr: "Misfits UPSC", lead:"Naman" },
  { id: 3, name: "IFS", descr: "IFS Fellowship", lead:"Naman" },
];

module.exports = async function (fastify, opts) {
  // Get all items
  fastify.get("/items", async (request, reply) => {
    return items;
  });

  // Add a new item
  fastify.post("/items", async (request, reply) => {
    const { name, descr, lead } = request.body;
    if (!name) {
      return reply.code(400).send({ error: "Name is required" });
    }
    const newItem = { id: items.length + 1, name , descr, lead};
    items.push(newItem);
    return reply.code(201).send(newItem);
  });
};
