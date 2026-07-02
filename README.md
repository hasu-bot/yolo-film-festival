# あなたのまちの映画祭 — Your Town Film Festival

熊本のクリエイティブコミュニティ **YOLO** が主催する短編映画祭の公式サイト。
会場は熊本・電気館（Denkikan）。テーマは「地元」で、九州の作り手による短編映画を上映します。

**デザイン: 「上映前の、あの一瞬」＝暖色の光・感動トーン**（明朝・小さめ・余白・生成り＋琥珀＋朱赤）。
意図の詳細は `docs/DESIGN_BRIEF.md` を参照。

**運営設計（収益・スポンサー・審査・応募・年間スケジュール）は [`docs/FESTIVAL-MASTER-PLAN.md`](./docs/FESTIVAL-MASTER-PLAN.md)** を参照。
Creative YOLO 全体の計画は yolo-members リポジトリの `docs/creative-yolo/` にある。

## 構成（複数ページ）

```
index.html       トップ（暖色の光ヒーロー＋Concept / Program / Features / 応募CTA）
about.html       映画祭について
program.html     上映プログラム（実写・AI部門タブ／作品詳細）
schedule.html    タイムテーブル
access.html      アクセス（電気館）
news.html        ニュース
archive.html     過去の開催
tokens.css       デザイントークン（配色・タイポ）＋リセット ※トップが使用
components.css   トップ用コンポーネント
assets/style.css 下層ページ共通スタイル
site.js          共通挙動（ヘッダー／モバイルナビ／横スクロール／reveal）
docs/DESIGN_BRIEF.md  デザイン設計書（ハンドオフ仕様）
```

## 公開

GitHub Pages（`claude/film-festival-site-progress-wpt3ym` ブランチから配信）:
**https://hasu-bot.github.io/yolo-film-festival/**
（push すると自動で再ビルド。ローカル確認は `npx http-server . -p 8080`）

最終形態はスタンドアロン静的HTML想定。**この専用リポジトリで独立管理**します
（※以前 lumina リポジトリ内にも同種のサイトがありましたが、こちらに集約）。

## 経緯メモ
- トップの世界観（暖色の光ヒーロー）に合わせ、**下層ページのヘッダー帯の青（navy）を暖色に統一**。
- 監督名はトップでは「監督名（仮）」表示。`program.html` 等の詳細はサンプル名・あらすじ入り（公開前に実データへ差し替え）。
- 写真は未使用（ヒーロー＝光のグラデーション、作品サムネ＝暖色グラデーション）。差し替え前提。

## 残タスク（任意）
- トップのナビ（現在は同一ページ内アンカー）を各ページへのリンクに統一すると、多ページ間の回遊が自然に。
- `program.html` / `schedule.html` の監督名を「監督名（仮）」に統一（トップと整合）。
- `og:url` / `og:image`（1200×630）を本番値・実画像へ差し替え。
