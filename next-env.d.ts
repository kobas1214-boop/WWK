import { AppShell } from "@/components/AppShell";

export default function SettingsPage() {
  return (
    <AppShell>
      <header className="topbar">
        <div>
          <h1>設定</h1>
          <p className="muted">ログイン、ストレージ、AI、会社情報を設定します。</p>
        </div>
      </header>
      <section className="panel">
        <div className="form-grid">
          <div className="field">
            <label>会社名</label>
            <input defaultValue="WOOD WORK KOBAYASHI" />
          </div>
          <div className="field">
            <label>案件番号 prefix</label>
            <input defaultValue="WWK" />
          </div>
          <div className="field">
            <label>Googleログイン</label>
            <select defaultValue="enabled">
              <option value="enabled">有効</option>
              <option value="disabled">無効</option>
            </select>
          </div>
          <div className="field">
            <label>メールログイン</label>
            <select defaultValue="enabled">
              <option value="enabled">有効</option>
              <option value="disabled">無効</option>
            </select>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
