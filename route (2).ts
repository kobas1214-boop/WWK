:root {
  color-scheme: light;
  --bg: #f7f6f2;
  --panel: rgba(255, 255, 255, 0.88);
  --panel-solid: #ffffff;
  --text: #1f2421;
  --muted: #6d756f;
  --line: #ded9cf;
  --wood: #936b42;
  --wood-dark: #5a3c22;
  --sage: #62786c;
  --blue: #356a92;
  --gold: #b9904a;
  --shadow: 0 16px 44px rgba(41, 33, 24, 0.09);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(247, 246, 242, 0.86)),
    repeating-linear-gradient(90deg, rgba(147, 107, 66, 0.06) 0 1px, transparent 1px 84px);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", "Yu Gothic", "Segoe UI", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

.shell {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  min-height: 100vh;
}

.sidebar {
  border-right: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(20px);
  padding: 24px 18px;
  position: sticky;
  top: 0;
  height: 100vh;
}

.brand {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 28px;
}

.mark {
  width: 42px;
  height: 42px;
  border-radius: 8px;
  background: linear-gradient(145deg, var(--wood), var(--wood-dark));
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 700;
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.24);
}

.brand strong {
  display: block;
  letter-spacing: 0;
}

.brand span,
.muted {
  color: var(--muted);
  font-size: 13px;
}

.nav {
  display: grid;
  gap: 6px;
}

.nav a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 12px;
  border-radius: 8px;
  color: #354039;
}

.nav a:hover,
.nav a.active {
  background: #efebe2;
}

.main {
  padding: 30px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 24px;
}

.topbar h1 {
  margin: 0 0 6px;
  font-size: clamp(28px, 4vw, 42px);
  letter-spacing: 0;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.button,
.icon-button {
  border: 1px solid var(--line);
  background: var(--panel-solid);
  color: var(--text);
  border-radius: 8px;
  padding: 10px 13px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.button.primary {
  background: var(--text);
  color: #fff;
  border-color: var(--text);
}

.grid {
  display: grid;
  gap: 16px;
}

.grid.cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.grid.cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.panel,
.card {
  background: var(--panel);
  border: 1px solid rgba(222, 217, 207, 0.86);
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.panel {
  padding: 18px;
}

.metric strong {
  display: block;
  font-size: 30px;
  margin-top: 8px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
}

.table th,
.table td {
  padding: 14px 12px;
  border-bottom: 1px solid var(--line);
  text-align: left;
  vertical-align: middle;
}

.table th {
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
}

.badge {
  border-radius: 999px;
  padding: 5px 10px;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.badge.estimate { background: #edf1f4; color: #31556e; }
.badge.ordered { background: #f5efd8; color: #745816; }
.badge.production { background: #e8f0ea; color: #3f624d; }
.badge.delivered { background: #eee9e3; color: #5e554b; }

.filters,
.form-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.field {
  display: grid;
  gap: 6px;
}

.field label {
  color: var(--muted);
  font-size: 12px;
}

.field input,
.field select,
.field textarea {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
  padding: 11px 12px;
  min-width: 0;
}

.detail-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 16px;
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.media-tile {
  aspect-ratio: 4 / 3;
  border-radius: 8px;
  background: linear-gradient(135deg, #e7e1d8, #f8f6f1);
  border: 1px solid var(--line);
  display: grid;
  place-items: center;
  color: var(--muted);
}

@media (max-width: 920px) {
  .shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: static;
    height: auto;
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .nav {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .main {
    padding: 20px;
  }

  .grid.cols-4,
  .grid.cols-3,
  .filters,
  .form-grid,
  .detail-layout,
  .media-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    display: grid;
  }
}
