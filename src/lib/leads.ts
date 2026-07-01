export type LeadType = 'form' | 'price' | 'order';

export interface LeadPayload {
  type: LeadType;
  name: string;
  phone: string;
  email?: string;
  message?: string;
  product?: string;
  items?: { name: string; qty: number }[];
}

// Заглушка отправки заявок в amoCRM.
// Позже здесь будет запрос к backend-функции, которая создаёт сделку в amoCRM.
export async function sendLead(payload: LeadPayload): Promise<{ ok: boolean }> {
  console.log('[amoCRM lead — заглушка]', payload);
  await new Promise((r) => setTimeout(r, 600));
  return { ok: true };
}
