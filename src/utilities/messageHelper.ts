import { DirectMessage, DirectMessageThreads, MessageThread } from '../types';
import axios from 'axios';

// Get all unique message connections
const getUniqueThreads = (
  messages: DirectMessage[],
  user: string
): Set<string> => {
  const uniqueThreads = new Set<string>();

  messages.forEach((message) => {
    const sender = message.sender.displayName;
    const recipient = message.recipient.displayName;

    if (sender !== user) uniqueThreads.add(sender);
    if (recipient !== user) uniqueThreads.add(recipient);
  });

  return uniqueThreads;
};

// Sort individual thread
const sortSingleThread = (thread: DirectMessage[]) => {
  const sortedThread = thread.sort((a, b) => (a.id < b.id ? 1 : -1));
  return sortedThread;
};

// Assign messages to each unique connection
const populateThreads = (threads: Set<string>, messages: DirectMessage[]) => {
  const messageThreads: DirectMessageThreads = [];

  threads.forEach((name) => {
    const msgThread: MessageThread = {};
    const items: DirectMessage[] = [];
    for (let i = 0; i < messages.length; ++i) {
      const sender = messages[i].sender.displayName;
      const recipient = messages[i].recipient.displayName;
      if (sender === name || recipient === name) {
        items.push(messages[i]);
      }
    }
    const sortedItems: DirectMessage[] = sortSingleThread(items);

    msgThread[`${name}`] = sortedItems;
    messageThreads.push(msgThread);
  });

  return messageThreads;
};

// Sort All Threads by Most Recently Updated (ID)
const sortInbox = (inbox: DirectMessageThreads) => {
  const sortedInbox = inbox.sort((a, b) => {
    const keyA = Object.keys(a)[0];
    const keyB = Object.keys(b)[0];
    const idA = a[keyA][0].id;
    const idB = b[keyB][0].id;

    return idA > idB ? 1 : -1;
  });
  return sortedInbox;
};

export const createMessageThreads = (
  messages: DirectMessage[],
  user: string
) => {
  const uniqueThreads: Set<string> = getUniqueThreads(messages, user);
  const messageThreads: DirectMessageThreads = populateThreads(
    uniqueThreads,
    messages
  );
  const inbox: DirectMessageThreads = sortInbox(messageThreads);

  return inbox;
};

export const getMessages = async (
  username: string,
  messages: DirectMessage[]
) => {
  try {
    const { data } = await axios.post('/api/messages/all', {
      name: username,
    });
    console.log('fetching messages');
    if (data.length === messages.length) return;

    return data;
  } catch (error) {
    console.log(error);
  }
};
