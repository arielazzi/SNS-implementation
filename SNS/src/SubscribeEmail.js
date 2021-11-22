import { SubscribeCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./libs/snsClient.js";

// Set the parameters
const params = {
  Protocol: "email",
  TopicArn: process.env.TOPIC_ARN,
  Endpoint: "rrrighi@unisinos.br",
};

const run = async () => {
  try {
    const data = await snsClient.send(new SubscribeCommand(params));
    console.log("Success.", data);
  } catch (err) {
    console.log("Error", err.stack);
  }
};
run();