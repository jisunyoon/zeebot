const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const API_KEY = import.meta.env.VITE_ZEEBOT_API_KEY;

export interface Message{
    role: 'user' | 'system';
    content: string;
}

export interface ChatResponse{
    choices: {
        message:{
            role: 'system' | 'user';
            content: string;
        }
    }[];
}