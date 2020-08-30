module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: [
      'tsconfig.json',
      'tsconfig.app.json',
      'tsconfig.spec.json'
    ]
  },
  env: {
    jasmine: true
  }
}
