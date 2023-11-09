import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6542c42a0e0cfb863d9e');


export const account = new Account(client);
export { ID } from 'appwrite';
export default client;