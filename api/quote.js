// Proxy server-side para a brapi.dev — mantem o token fora do bundle do navegador.
const SYMBOL_RE = /^[A-Z0-9]{4,7}$/;

export default async function handler(req, res) {
  const symbol = String(req.query.symbol || '').toUpperCase();

  if (!SYMBOL_RE.test(symbol)) {
    return res.status(400).json({ error: 'symbol inválido' });
  }

  const token = process.env.BRAPI_TOKEN;

  try {
    const brapiRes = await fetch(
      `https://brapi.dev/api/quote/${symbol}?fundamental=false&token=${token}`
    );
    const data = await brapiRes.json();
    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=60');
    return res.status(brapiRes.status).json(data);
  } catch {
    return res.status(502).json({ error: 'Falha ao consultar brapi.dev' });
  }
}
