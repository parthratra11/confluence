module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "chore",
        "revert",
        "ci",
        "content" // Since the content is deeply tighltly coupled with the code, it's better to have a separate commit type for it
      ]
    ]
  }
};
