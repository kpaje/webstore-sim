import connection from "../connection";

class Mutation {
  constructor(query) {
    this.query = query;
  }

  sendSQLQuery(id, input) {
    const data = [input, id];
    function resolveQuery(err, res) {
      if (err) throw err;
      return res;
    }
    function runQuery(query, data) {
      connection.query(query, data, resolveQuery());
    }
    runQuery(this.query, data);
  }
}

export default Mutation;
