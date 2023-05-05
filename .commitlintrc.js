// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // Header
    'header-max-length': [2, 'always', 200],
    // <type>枚举
    'type-enum': [2, 'always', [
      'init',
      'feat',
      'fix',
      'docs',
      'style',
      'ui',
      'refactor',
      'replace',
      'deploy',
      'test',
      'chore',
      'revert',
      'add',
      'minus',
      'del',
      'build',
			'perf',

    ]],
    // <type> 不能为空
    'type-empty': [2, 'never'],
    // <type> 格式 小写
    'type-case': [2, 'always', 'lower-case'],
    // // <scope> 不能为空
    // 'scope-empty': [2, 'never'],
    // <scope> 格式 小写
    'scope-case': [2, 'always', 'lower-case'],
    // <subject> 不能为空
    'subject-empty': [2, 'never'],
    // <subject> 以.为结束标志
    'subject-full-stop': [2, 'never', '.'],
    // <subject> 格式
    // 可选值
    // 'lower-case' 小写 lowercase
    // 'upper-case' 大写 UPPERCASE
    // 'camel-case' 小驼峰 camelCase
    // 'kebab-case' 短横线 kebab-case
    // 'pascal-case' 大驼峰 PascalCase
    // 'sentence-case' 首字母大写 Sentence case
    // 'snake-case' 下划线 snake_case
    // 'start-case' 所有首字母大写 start-case
    'subject-case': [2, 'never', []],
    // <body> 以空行开头
    'body-leading-blank': [1, 'always'],
    // <footer> 以空行开头
    'footer-leading-blank': [1, 'always']
  },
  prompt: {
    messages: {
      type: "选择你的提交类型:",
      scope: "选择一个模块范围(可选):",
      customScope: "自定义修改模块范围",
      subject: '简短说明 \n',
      body: '详细说明(可选) 使用"|"可换行 \n',
      breaking: "非兼容性说明(可选) 使用" | "可换行\n",
      footerPrefixsSelect: "选择关联issue前缀(可选):",
      customFooterPrefixs: "输入自定义issue前缀",
      footer: "列举关联issue (可选) 例如: #31, #I3244:\n",
      confirmCommit: "是否提交或修改commit ?"
    },
    types: [
      { value: 'feat', name: '新增:    新增功能' },
      { value: 'fix', name: '修复:    修复Bug' },
      { value: 'docs', name: '文档:    文档变更' },
      { value: 'style', name: '格式:    代码格式（不影响功能，例如空格、分号等格式修正）' },
      { value: 'refactor', name: '重构:    代码重构（不包括 bug 修复、功能新增）' },
      { value: 'perf', name: '性能:    性能优化' },
      { value: 'del', name: '删除:    删除无用文件' },
      { value: 'test', name: '测试:    添加、修改测试用例' },
      { value: 'build', name: 'build:    构建流程、外部依赖变更（如升级 npm 包、修改 脚手架 配置等）' },
      { value: 'revert', name: '回滚:    代码回退' },
      { value: 'chore', name: 'chore:    对构建过程或辅助工具和库的更改（不影响源文件、测试用例）' },
    ],
    useEmoji: true,
    scopes: [
      { value: "projects", name: "项目相关" },
      { value: "components", name: "组件相关" },
			{ value: "styles", name: "样式相关" },
      { value: "hooks", name: "hook 相关" },
			{ value: "utils", name: "utils 相关" },
			{ value: "deps", name: "项目依赖" },
			{ value: "other", name: "其他修改" },
			{ value: "custom", name: "以上都不是？我要自定义" },
    ],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    upperCaseSubject: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: ['breaking', 'footerPrefix', 'footer'],
    issuePrefixs: [
      // 如果使用 gitee 作为开发管理
      { value: "link", name: "link:     将任务状态更改为进行中" },
      { value: "closed", name: "closed:   ISSUES 已经解决" }
    ],
    customIssuePrefixsAlign: "top",
    emptyIssuePrefixsAlias: "skip",
    customIssuePrefixsAlias: "custom",
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: ""
  }
};
