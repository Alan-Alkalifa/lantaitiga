import crypto from 'crypto';

export const generateChatbaseHash = (userId: string) => {
  const secret = process.env.CHATBASE_SECRET || 'llmnh5jq7n8gr4akkbur3r46lw166pxa';
  return crypto.createHmac('sha256', secret).update(userId).digest('hex');
};
