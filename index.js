import { Eta } from "eta";
import express from "express";
import path from "path";

const app = express();

const eta = new Eta({
  views: path.join(process.cwd(), "views"), // on Deno : `${Deno.cwd()}/views/`
  cache: true,
  tags: ["{{", "}}"],
});

app.get("/", async (req, res) => {
  const renderedTemplate = await eta.renderAsync(
    "contact-support.template.eta",
    {
      title: "Hello some big title",
      supportEmail: "support@example.com",
      email: "test@example.com",
      category: "Support",
      isDriver: true,
      platformUsed: ["Uber", "Bolt"],
      message: "Hello, this is a test message",
    }
  );

  res.status(200).send(renderedTemplate);
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
