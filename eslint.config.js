import tsPlugin from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";

export default tsPlugin.config(
  {
    ignores: ["dist/**"],
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
