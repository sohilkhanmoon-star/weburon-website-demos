const key = 'willowbrook-demo-requests';
const rows = document.getElementById('request-rows');
const count = document.getElementById('request-count');
function readRequests() { try { const data = JSON.parse(localStorage.getItem(key) || '[]'); return Array.isArray(data) ? data : []; } catch { return []; } }
function cell(row, value) { const td = document.createElement('td'); td.textContent = value; row.appendChild(td); return td; }
function render() {
  const requests = readRequests(); rows.replaceChildren();
  count.textContent = `${requests.length} request${requests.length === 1 ? '' : 's'}`;
  if (!requests.length) { const row = document.createElement('tr'); const td = cell(row, 'No demo requests yet. Submit one from the website form.'); td.colSpan = 6; td.className = 'empty'; rows.appendChild(row); return; }
  requests.forEach(item => { const row = document.createElement('tr'); cell(row, new Date(item.created).toLocaleString()); cell(row, item.name); cell(row, `${item.phone}\n${item.email}`); cell(row, item.service); cell(row, `${item.date} · ${item.time}`); const td = document.createElement('td'); const select = document.createElement('select'); select.setAttribute('aria-label', `Status for ${item.name}`); ['New', 'Contacted', 'Confirmed', 'Closed'].forEach(status => { const option = new Option(status, status); select.add(option); }); select.value = item.status || 'New'; select.addEventListener('change', () => { const next = readRequests(); const found = next.find(request => request.id === item.id); if (found) { found.status = select.value; localStorage.setItem(key, JSON.stringify(next)); document.getElementById('dashboard-message').textContent = `Status updated for ${item.name}.`; } }); td.appendChild(select); row.appendChild(td); rows.appendChild(row); });
}
document.getElementById('clear-requests').addEventListener('click', () => { if (!readRequests().length) return; if (confirm('Delete all demo requests saved in this browser?')) { localStorage.removeItem(key); render(); document.getElementById('dashboard-message').textContent = 'Demo requests cleared.'; } });
render();
