# yolo-film-festival

「あなたのまちの映画祭」公式サイト。ビルド工程のない素の静的HTML/CSS/JS。

## このリポジトリが正本
映画祭サイトの正（source of truth）はこのリポジトリ。他リポジトリ（lumina 等）に過去のコピーがあっても編集しない。

## 構成
- 各ページ = ルート直下の `*.html`（index / about / program / schedule / entry / news / archive / access）
- デザイントークン: `tokens.css`（色・タイポ・余白の変数）→ `components.css`（共通部品）→ `assets/style.css`
- 共通JS: `site.js`
- 仕様・企画: `docs/`（DESIGN_BRIEF / ENTRY-FORM-SPEC / FESTIVAL-MASTER-PLAN）

## ルール
- 色・フォント・余白は必ず `tokens.css` の変数を経由する。ページに直値を書かない
- ページ追加時はナビゲーション（全ページのヘッダー/フッター）も更新する
- ブランド名は「あなたのまちの映画祭」（旧称「地元の映画祭」は使わない）
- 事業判断・コピーの方針は yolo-members リポジトリの `docs/creative-yolo/` が正。単独セッションでは add_repo で参照

## デプロイ
GitHub Pages（main へのマージで公開。`.nojekyll` 必須、削除しない）

## コミット規約
Conventional Commits + 日本語本文（例: `feat: 応募ページを追加` / `design: ヒーローの余白調整`）
