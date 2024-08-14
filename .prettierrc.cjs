module.exports = {
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  singleQuote: true, // ダブルに代わりシングルクオーテーションを使う
  semi: true, // 行末にセミコロンを追加
  tabWidth: 2, // タブのスペース2
  trailingComma: "all", // 複数行の場合は可能な限り末尾のカンマを表示
};
