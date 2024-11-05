module.exports = {
	root: true,
	env: {
		node: true,
		es6: true
	},
	extends: [
		'plugin:vue/essential',
		'plugin:vue/recommended',
		'eslint:recommended',
		'prettier' // 放到最后覆盖其他配置，防止prettier和eslint其他配置冲突
	],
	parserOptions: {
		parser: 'babel-eslint',
		ecmaFeatures:{
      // 支持装饰器
      legacyDecorators: true
    }
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/attribute-hyphenation': 'off',
		'vue/max-attributes-per-line': 'off', //关闭提示-多个特性的元素应该分多行撰写
		'vue/singleline-html-element-content-newline': 'off', //关闭提示-HTML标记前后的预期换行
		'vue/html-closing-bracket-newline': 'off',
		'vue/html-indent': 'off',
		'vue/html-self-closing': 'off',
		'no-mixed-spaces-and-tabs': 0,
		'vue/multi-word-component-names': 0
		// 'prettier/prettier': 2	// 对于不符合prettier规范的写法，eslint会提示报错
	},
	plugins: [
		'prettier' // eslint 会使用pretter的规则对代码格式化
	],
	globals: {
		__webpack_public_path__: 'writable'
	}
};
