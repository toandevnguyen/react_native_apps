module.exports = {
  root: true,
  extends: '@react-native',
  parser: 'babel-eslint', 
  plugins: [
    'prettier'
  ],
  rules: {
    'prettier/prettier': ['error', {
      endOfLine: 'crlf' 
    }]
  }
};