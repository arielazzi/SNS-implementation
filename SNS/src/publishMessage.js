import { PublishCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./libs/snsClient.js";

// Set the parameters
var params = {
  Message: "Esta sem o filtro",
  TopicArn: process.env.TOPIC_ARN,
  MessageAttributes: {
    "alerta": {
      DataType: "String",
      StringValue: "tsunami"
    },
  }
};

const run = async () => {
  try {
    const data = await snsClient.send(new PublishCommand(params));
    console.log("Success.", data);
  } catch (err) {
    console.log(params)
    console.log("Error", err.stack);
  }
};
run();