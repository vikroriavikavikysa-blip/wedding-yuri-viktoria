export default async (request) => {

  const headers = {

    "Content-Type": "application/json"

  };

  if (request.method !== "POST") {

    return new Response(

      JSON.stringify({ error: "Method not allowed" }),

      { status: 405, headers }

    );

  }

  const token = process.env.TELEGRAM_BOT_TOKEN;

  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {

    return new Response(

      JSON.stringify({ error: "Telegram is not configured" }),

      { status: 500, headers }

    );

  }

  let data;

  try {

    data = await request.json();

  } catch {

    return new Response(

      JSON.stringify({ error: "Invalid data" }),

      { status: 400, headers }

    );

  }

  const guest = String(data.guest || "").trim();

  const attendance = String(data.attendance || "").trim();

  const message = String(data.message || "").trim();

  if (!guest || !attendance) {

    return new Response(

      JSON.stringify({ error: "Name and attendance required" }),

      { status: 400, headers }

    );

  }

  const text = [

    "💌 Ответ на свадебное приглашение",

    `Имя: ${guest}`,

    `Ответ: ${attendance}`,

    message ? `Комментарий: ${message}` : "",

    "Юрий & Виктория · 05.06.2027"

  ].filter(Boolean).join("\n");

  const result = await fetch(

    `https://api.telegram.org/bot${token}/sendMessage`,

    {

      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({

        chat_id: chatId,

        text

      })

    }

  );

  if (!result.ok) {

    return new Response(

      JSON.stringify({ error: "Telegram delivery failed" }),

      { status: 502, headers }

    );

  }

  return new Response(

    JSON.stringify({ ok: true }),

    { status: 200, headers }

  );

};
