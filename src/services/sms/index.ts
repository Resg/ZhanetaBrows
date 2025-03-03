'use server';

export const sendSms = async (phones: string) => {
  const data = {
    phones,
    mes: 'привет',
    apikey: process.env.SMS_API_KEY,
  };
  console.log(data);
  const res = await fetch(process.env.SMS_SERVICE_URI as string, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  console.log(await res.json());
};
