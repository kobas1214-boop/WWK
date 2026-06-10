import { signInWithEmail, signInWithGoogle } from "./actions";

export default function LoginPage({ searchParams }: { searchParams: { sent?: string; error?: string } }) {
  return (
    <main className="main" style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <section className="panel" style={{ width: "min(460px, 100%)" }}>
        <div className="brand">
          <div className="mark">WWK</div>
          <div>
            <strong>WWK Works Cloud</strong>
            <span>WOOD WORK KOBAYASHI</span>
          </div>
        </div>
        <h1 style={{ fontSize: 28, marginBottom: 8 }}>ログイン</h1>
        <p className="muted">工房の案件、図面、見積へ安全にアクセスします。</p>
        {searchParams.sent ? <p>メールを送信しました。リンクからログインしてください。</p> : null}
        {searchParams.error ? <p>ログインに失敗しました。設定を確認してください。</p> : null}
        <form action={signInWithEmail} className="grid" style={{ marginTop: 18 }}>
          <div className="field">
            <label>メールアドレス</label>
            <input type="email" name="email" required placeholder="name@example.com" />
          </div>
          <button className="button primary" type="submit">メールでログイン</button>
        </form>
        <form action={signInWithGoogle} style={{ marginTop: 10 }}>
          <button className="button" type="submit" style={{ width: "100%", justifyContent: "center" }}>
            Googleでログイン
          </button>
        </form>
      </section>
    </main>
  );
}
