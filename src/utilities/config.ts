import dotenv from 'dotenv';
dotenv.config();

export const CLIENT_ID = process.env.CLIENT_ID as string;
export const API_URL = process.env.API_URL as string;
