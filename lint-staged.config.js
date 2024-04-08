module.exports = {
  '*.ts': [() => 'lerna run lint', 'prettier --write'],
};
