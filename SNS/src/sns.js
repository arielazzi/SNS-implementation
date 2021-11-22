import { CreateTopicCommand, ListTopicsCommand, PublishCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./libs/snsClient.js";

// Set the parameters

const CreateTopic = async (topicName) => {
  const params = { Name: topicName };
  try {
    const data = await snsClient.send(new CreateTopicCommand(params));
    console.log("Success.", data);
  } catch (err) {
    console.log("Error", err.stack);
  }
};

const listTopics = async () => {
  try {
    const data = await snsClient.send(new ListTopicsCommand({}));
    console.log("Success.", data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err.stack);
  }
};

const listSubscriptions = async () => {

};

const publishMessage = async (alertType) => {
  console.log(alertType)
  var params = {
    Message: "Esta sem o filtro",
    TopicArn: process.env.TOPIC_ARN,
    MessageAttributes: {
      "alerta": {
        DataType: "String.Array",
        StringValue: ["tsunami"]
      },
    }
  };
  try {
    const data = await snsClient.send(new PublishCommand(params));
    console.log("Success.", data);
  } catch (err) {
    console.log(params)
    console.log("Error", err.stack);
  }

};
const subscribeEmail = async () => {

};

export { listTopics, publishMessage };