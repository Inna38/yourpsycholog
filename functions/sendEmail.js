const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { full_name, phone, service } = JSON.parse(event.body);

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: process.env.SERVICE_ID,
        template_id: process.env.TEMPLATE_ID,
        user_id: process.env.PUBLIC_KEY,
        template_params: { full_name, phone, service }
      }),
    });

    if (response.ok) {
      return { statusCode: 200, body: JSON.stringify({ message: 'Форма успішно відправлена!' }) };
    } else {
      const errorText = await response.text();
      return { statusCode: 500, body: errorText };
    }
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify(err) };
  }
};
