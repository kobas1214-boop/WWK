# セットアップ手順

1. 依存関係をインストール

```bash
npm install
```

2. 環境変数を作成

```bash
cp .env.example .env.local
```

3. SupabaseでSQLを実行

Supabase SQL Editorで次を順番に実行します。

- `supabase/schema.sql`
- `supabase/storage-policies.sql`

4. Supabase Authを設定

- Email providerを有効化
- Google providerを有効化
- Site URLに本番URLを設定
- Redirect URLsに `http://localhost:3000/**` と本番URLを追加

5. 開発サーバーを起動

```bash
npm run dev
```

6. ブラウザで確認

```text
http://localhost:3000
```
