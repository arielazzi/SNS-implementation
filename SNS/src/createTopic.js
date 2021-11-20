import { CreateTopicCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./libs/snsClient.js";

// Set the parameters
const params = { Name: "meteorology" };

const run = async () => {
  try {
    const data = await snsClient.send(new CreateTopicCommand(params));
    console.log("Success.", data);
  } catch (err) {
    console.log("Error", err.stack);
  }
};
run();