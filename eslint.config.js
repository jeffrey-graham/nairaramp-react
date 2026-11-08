import tsPlugin from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";

export default tsPlugin.config(
  {
    ignores: ["dist/**", "coverage/**"],
  },
  ...tsPlugin.configs.recommended,
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  }
);
