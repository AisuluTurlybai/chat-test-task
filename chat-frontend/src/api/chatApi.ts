import type { TChatRequest, TChatResponse } from '../types/chat';
const API_URL = import.meta.env.VITE_API_URL;

export const sendChatMessage = async (
  payload: TChatRequest
): Promise<TChatResponse> => {
  const res = await fetch(`${API_URL}/api/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('Server error');
  }

  return res.json();
};