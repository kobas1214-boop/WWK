import { AppShell } from "@/components/AppShell";
import { EstimateForm } from "@/components/EstimateForm";

export default function EstimatesPage() {
  return (
    <AppShell>
      <header className="topbar">
        <div>
          <h1>見積管理</h1>
          <p className="muted">見積書作成、PDF出力、履歴保存に対応します。</p>
        </div>
      </header>
      <EstimateForm />
    </AppShell>
  );
}
