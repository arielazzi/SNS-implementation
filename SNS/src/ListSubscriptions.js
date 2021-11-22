import { ListSubscriptionsByTopicCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./libs/snsClient.js";

// Set the parameters
const params = { TopicArn: process.env.TOPIC_ARN, };

const run = async () => {
  try {
    const data = await snsClient.send(new ListSubscriptionsByTopicCommand(params));
    console.log("Success.", data);
  } catch (err) {
    console.log("Error", err.stack);
  }
};
run();