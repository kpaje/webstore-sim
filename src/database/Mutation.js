import connection from "./connection";

class Mutation {
  constructor(sql) {
    this.sql = sql;
  }

  createSQLQuery(id, input) {
    const data = [input, id];
    function resolveQuery(err, res) {
      if (err) throw err;
      return res;
    }
    function runQuery(sql, data) {
      connection.query(sql, data, resolveQuery());
    }
    runQuery(this.sql, data);
  }
}

export default Mutation;
