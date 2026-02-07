const STOCKS = [
  { symbol: 'PETR4', price: 38.90 },
  { symbol: 'VALE3', price: 62.15 },
  { symbol: 'ITUB4', price: 34.20 },
  { symbol: 'WEGE3', price: 41.55 },
  { symbol: 'MGLU3', price: 2.15 },
  { symbol: 'BBAS3', price: 27.85 },
  { symbol: 'PRIO3', price: 45.10 },
];

function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

function createTickerItem(stock) {
  const item = document.createElement('div');
  item.className = 'ticker-item';

  const sym = document.createElement('div');
  sym.className = 'ticker-symbol';
  sym.textContent = stock.symbol;

  const price = document.createElement('div');
  price.className = 'ticker-price';
  price.textContent = formatBRL(stock.price);

  const change = document.createElement('div');
  change.className = 'ticker-change';
  change.textContent = '0.00%';

  item.appendChild(sym);
  item.appendChild(price);
  item.appendChild(change);

  // attach reference for later updates
  item._priceEl = price;
  item._changeEl = change;
  item._lastPrice = stock.price;

  return item;
}

function initTicker() {
  const root = document.getElementById('top-ticker-root');
  if (!root) return;

  // avoid double-init: clear existing content
  if (root.dataset.tickerInitialized) return;
  root.dataset.tickerInitialized = '1';

  const container = document.createElement('div');
  container.className = 'top-ticker';

  const viewport = document.createElement('div');
  viewport.className = 'ticker-viewport';
  viewport.style.overflow = 'hidden';
  viewport.style.width = '100%';

  const track = document.createElement('div');
  track.className = 'ticker-track';

  // create items twice for seamless loop
  const items = STOCKS.map(s => createTickerItem(Object.assign({}, s)));
  const itemsDup = items.map(i => i.cloneNode(true));

  items.forEach(i => track.appendChild(i));
  itemsDup.forEach(i => track.appendChild(i));

  viewport.appendChild(track);
  container.appendChild(viewport);
  root.appendChild(container);

  // compute animation duration based on content width
  requestAnimationFrame(() => {
    const width = track.scrollWidth / 2; // one loop distance
    const speed = 80; // pixels per second
    const duration = Math.max(12, width / speed);
    track.style.animationDuration = `${duration}s`;
  });

  // periodic price updates
  setInterval(() => {
    STOCKS.forEach((s, idx) => {
      // random delta between -1% and +1.2%
      const pct = (Math.random() * 2.2 - 1);
      const oldPrice = s.price;
      const newPrice = +(oldPrice * (1 + pct / 100)).toFixed(2);
      const changePct = ((newPrice - oldPrice) / oldPrice) * 100;

      // update master list price
      s.price = newPrice;

      // update both original and duplicate nodes
      const nodes = track.querySelectorAll('.ticker-item');
      [nodes[idx], nodes[idx + STOCKS.length]].forEach(node => {
        if (!node) return;
        // find elements
        const priceEl = node.querySelector('.ticker-price');
        const changeEl = node.querySelector('.ticker-change');

        if (priceEl) priceEl.textContent = formatBRL(newPrice);
        if (changeEl) changeEl.textContent = `${changePct >= 0 ? '+' : ''}${changePct.toFixed(2)}%`;

        if (priceEl) {
          priceEl.classList.remove('up', 'down');
          void priceEl.offsetWidth;
          priceEl.classList.add(changePct >= 0 ? 'up' : 'down');
        }
        if (changeEl) {
          changeEl.classList.remove('up', 'down');
          void changeEl.offsetWidth;
          changeEl.classList.add(changePct >= 0 ? 'up' : 'down');
        }
      });
    });
  }, 1400);
}

// init on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTicker);
} else {
  initTicker();
}
