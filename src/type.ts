import { Session } from 'next-auth';

export interface ISession extends Session {
  avatar: string;
  discordId: string;
  username: string;
}

export interface IHistory {
  id: number;
  citizenid: string;
  money: string;
  createdAt: string;
}
