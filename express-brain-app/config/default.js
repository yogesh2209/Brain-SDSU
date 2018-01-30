module.exports = {
    db: {
      production:  'postgresql://readonly:readonly@localhost:5432/brain',
      development: 'postgresql://readonly:readonly@localhost:5432/brain',
      test: 'postgresql://postgres:postgres@localhost:5432/brain'
    }
  };
