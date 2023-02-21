export default {
  "@typescript-eslint/member-delimiter-style": [
    2,
    {
      // interface, type内的成员末尾必须使用统一符号（逗号）
      multiline: {
        delimiter: "semi",
        requireLast: true,
      },
      singleline: {
        delimiter: "semi",
        requireLast: false,
      },
    },
  ],
  "@typescript-eslint/naming-convention": [
    2,
    {
      selector: "property",
      format: ["camelCase", "PascalCase", "UPPER_CASE"],
      leadingUnderscore: "allow",
    }, // 强制使用驼峰、帕斯卡、常量大写命名  --CUSTOM
    {
      selector: "interface",
      format: ["PascalCase"],
    },
    {
      selector: "typeAlias",
      format: ["PascalCase"],
    },
    {
      selector: "class",
      format: ["PascalCase"],
    }, // class和interface采用帕斯卡命名(不允许下划线)
  ],
  "@typescript-eslint/interface-name-prefix": 0, // interface命名必须以I开头
  "@typescript-eslint/no-var-requires": 0, // 禁止var foo = require("foo"）用import代替
  "@typescript-eslint/explicit-function-return-type": 0, // 对返回类型不明确的函数必须声明类型
  "@typescript-eslint/no-non-null-assertion": 0, // 禁止使用!的非null断言后缀运算符
  "@typescript-eslint/no-use-before-define": 0, // 在定义变量和函数之前禁止使用
  "@typescript-eslint/no-explicit-any": 0, // 禁止使用any类型
  "@typescript-eslint/no-angle-bracket-type-assertion": 0, // 禁止使用尖括号范型
  "@typescript-eslint/no-inferrable-types": 0, // 不允许对初始化为数字，字符串或布尔值的变量或参数进行显式类型声明
  "@typescript-eslint/consistent-type-assertions": 1, // 强制规范类型定义的方式  --CUSTOM
  "@typescript-eslint/no-this-alias": 1, // 禁止对this使用别名  --CUSTOM
  "@typescript-eslint/no-namespace": 1, // 禁止使用自定义TypeScript模块和名称空间  --CUSTOM
  "@typescript-eslint/no-unused-vars": [
    1,
    { vars: "all", args: "none", ignoreRestSiblings: true },
  ], // 提示未使用的变量  --CUSTOM
  "@typescript-eslint/type-annotation-spacing": [
    2,
    {
      // 声明类型时必须无空格
      overrides: {
        colon: {
          before: false,
          after: true,
        },
        arrow: {
          before: true,
          after: true,
        },
      },
    },
  ],
};
