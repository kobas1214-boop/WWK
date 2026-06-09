# WWK Works Cloud

WOOD WORK KOBAYASHI（小林木工所）向けの図面管理、案件管理、顧客管理、写真管理、見積管理システムです。

## 対象

- 家具工房
- 木工所
- 建具屋
- オーダー家具製作会社
- 従業員1〜20名

## 機能

- 案件番号自動発行 `WWK-260001`
- 案件一覧、ステータス管理
- PDF / DXF / DWG / JPEG / PNG 図面管理
- 案件番号、顧客名、商品名、材種検索
- 案件ごとのQRコード生成
- 顧客管理と案件履歴
- 製作前、製作中、完成後の写真保存
- 見積作成、PDF出力、履歴保存
- OpenAI APIによる図面PDF解析、寸法抽出、材種抽出、過去案件検索の土台

## 技術構成

- Frontend: Next.js
- Backend: Supabase
- Storage: Supabase Storage
- AI: OpenAI API
- Auth: Supabase Auth Google / Email

## 画面

- ダッシュボード
- 案件一覧
- 案件詳細
- 図面一覧
- 顧客管理
- 見積管理
- 設定

## 実行

```bash
npm install
cp .env.example .env.local
npm run dev
```

詳細は `docs/SETUP.md` と `docs/DEPLOY.md` を参照してください。

## 認証

`/login` でメールリンクログインとGoogleログインに対応しています。Supabase AuthのRedirect URLには `/auth/callback` を含めてください。
