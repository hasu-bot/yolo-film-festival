# あなたのまちの映画祭 — Your Town Film Festival

熊本のクリエイティブコミュニティ **YOLO** が主催する短編映画祭の公式サイト。
会場は熊本・電気館（Denkikan）。テーマは「あなたのまち」で、全国から短編映画を募集します。

第2回は2026年12月12日（土）、17:30受付開始・18:00開演。入場料は一般2,000円、学生1,500円（学生証提示必須）です。
会場はラストコール上映会と同じDenkikan 2階（96席）。チケットは `yolo-tickets` で予約し、QR受付・当日現金払いとしますが、予約受付は後日開始します。

**デザイン: 「上映前の、あの一瞬」＝暖色の光・感動トーン**（明朝・小さめ・余白・生成り＋琥珀＋朱赤）。
意図の詳細は `docs/DESIGN_BRIEF.md` を参照。

**運営設計（収益・スポンサー・審査・応募・年間スケジュール）は [`docs/FESTIVAL-MASTER-PLAN.md`](./docs/FESTIVAL-MASTER-PLAN.md)** を参照。
応募フォームの設計は [`docs/ENTRY-FORM-SPEC.md`](./docs/ENTRY-FORM-SPEC.md)。
Creative YOLO 全体の計画は yolo-members リポジトリの `docs/creative-yolo/` にある。

## 構成（複数ページ）

```
index.html       トップ（暖色の光ヒーロー＋Concept / Program / Features / 応募CTA）
entry.html       作品応募（募集要項・実写/AI部門・応募フロー・要件・FAQ）
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

**Vercel（`main` ブランチから自動デプロイ）**。push すると自動で再ビルド・反映される。
ローカル確認は `npx http-server . -p 8080`。

正規URLは `https://yolo-film-festival.vercel.app/`。
旧GitHub Pagesは2026年7月27日に停止済み。サイト内の canonical・OGP・sitemap はVercelへ統一する。

最終形態はスタンドアロン静的HTML想定。**この専用リポジトリで独立管理**します
（※以前 lumina リポジトリ内にも同種のサイトがありましたが、こちらに集約）。

## 公開前の確認事項
- チケットの販売方法と購入URL
- 電気館への搬入時間・MP4再生条件・アクセシビリティの確認
- 上映作品・審査員の確定情報への差し替え
