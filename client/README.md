## 環境構築
TypeScriptでNext.jsプロジェクトの作成</br>
`npx create-next-app@latest --ts`</br>

storybookの導入。何回かこのコマンドを打ったら上手くいった。</br>
`npx sb@next init`</br>
これで`.storybook`フォルダが作成されたり`package.json`が変更される。</br>
`npm run storybook`で起動。</br>

styled-componentsの導入。</br>
`npm install styled-components`</br>

## 実装方針
`pages/components`内にatomic designに従うコンポーネントを作成。stories.tsxファイルは`stories`フォルダにおく。</br>
APIとつなぎ込んだpagesはpagesフォルダ直下におく（繋ぎ込み前の静的ページは`pages/components/templates`）。
