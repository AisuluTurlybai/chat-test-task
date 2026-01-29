import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';


dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = await openai.responses.create({
      model: 'gpt-4.1-mini',
      input: message,
    });

    return res.json({
      reply: response.output_text,
      source: 'openai',
    });
  } catch (err) {
    const status = err?.status;
    const message = err?.message || '';

    if (status === 429 || message.includes('exceeded your current quota')) {
      return res.json({
        reply: `OpenAI quota exceeded. Mock reply: ${req.body.message}`,
        source: 'mock',
      });
    }

    console.error('OPENAI ERROR >>>', err);
    return res.status(500).json({
      error: err?.message || 'OpenAI request failed',
    });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
