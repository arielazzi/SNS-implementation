import { SNSClient } from "@aws-sdk/client-sns";
// Set the AWS Region.
const REGION = process.env.REGION; //e.g. "us-east-1"
// Create SNS service object.

const snsClient = new SNSClient({ region: REGION, credentials: { accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY } });
export { snsClient };
