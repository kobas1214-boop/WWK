# デプロイ手順

## 推奨構成

- Hosting: Vercel
- Database: Supabase Postgres
- Storage: Supabase Storage
- Auth: Supabase Auth
- AI: OpenAI API

## Vercel

1. GitHubへリポジトリを作成してpush
2. VercelでNext.jsプロジェクトとしてImport
3. 環境変数を設定
   - `NEXT_PUBLIC_APP_URL`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `OPENAI_API_KEY`
   - `OPENAI_MODEL`
4. `npm run build` が通ることを確認
5. Production Deploy

## 公開前チェック

- Supabase RLSが有効
- Storage bucketが非公開
- PDF、DXF、DWG、JPEG、PNGのアップロード確認
- Googleログインとメールログイン確認
- QRコードからスマホで案件詳細が開けること
- 見積PDFが保存、再ダウンロードできること
- AI解析結果を人が確認、修正できるUIを用意すること
