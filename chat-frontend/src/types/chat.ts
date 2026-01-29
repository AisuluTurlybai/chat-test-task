export type TChatRequest = {
  message: string;
};

export type TChatResponse = {
  reply: string;
  source: 'openai' | 'mock';
};

export type TApiError = {
  error: string;
}

export type TChatState = {
  message: string;
  reply: string;
  loading: boolean;
  error: string | null
}