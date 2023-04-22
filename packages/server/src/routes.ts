import { moduleA } from "@idealjs/mono-template";
import { FastifyPluginCallback } from "fastify";

const routes: FastifyPluginCallback = async (fastify) => {
  fastify.get("/health", () => {
    return { alive: 1, testModule: moduleA };
  });
};

export default routes;
