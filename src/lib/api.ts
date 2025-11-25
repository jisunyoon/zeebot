const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const API_KEY = import.meta.env.VITE_ZEEBOT_API_KEY;

export interface Message{
    role: 'user' | 'system' | 'assistant';
    content: string;
}

export interface ChatResponse{
    choices: {
        message:{
            role: 'assistant';
            content: string;
        }
    }[];
}

export async function sendMessage(message: Message[]): Promise<string>{
    const response = await fetch(OPENROUTER_API_URL, {
        method: 'POST',
        headers:{
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: message,
        }),
    })

    const data = await response.json();
    return data.choices[0].message.content;
}
