export function makeTsHelper() {
    return {
        extends: [
            "plugin:@typescript-eslint/eslint-recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:promise/recommended",
        ],
        parser: "@typescript-eslint/parser",
        
    }
}