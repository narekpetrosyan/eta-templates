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
  // const renderedTemplate = await eta.renderAsync(
  //   "contact-support.template.eta",
  //   {
  //     title: "Hello some big title",
  //     supportEmail: "support@example.com",
  //     email: "test@example.com",
  //     category: "Support",
  //     isDriver: true,
  //     platformUsed: ["Uber", "Bolt"],
  //     message: "Hello, this is a test message",
  //   }
  // );

  // const renderedTemplate = await eta.renderAsync(
  //   "profile-review-requested.template.eta",
  //   {
  //     title: "Hello some big title",
  //     userProfileUrl: `123/1213`,
  //     fullName: "Full name",
  //   }
  // );

  // const renderedTemplate = await eta.renderAsync("sign-up-email.template.eta", {
  //   title: "Hello some big title",
  //   userProfileUrl: `123/1213`,
  //   fullName: "Full name",
  // });

  const renderedTemplate = await eta.renderAsync(
    "profile-updated-admin-notification.template.eta",
    {
      updatedFields: [
        {
          key: "name",
          from: "Old name",
          to: "Uopdated",
        },
        {
          key: "lat name",
          from: "last name",
          to: "Updated last name",
        },
      ],
    }
  );

  res.status(200).send(renderedTemplate);
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
