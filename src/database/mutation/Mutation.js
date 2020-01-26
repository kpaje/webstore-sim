import connection from "../connection";

class Mutation {
  constructor(query) {
    this.query = query;
  }

  sendSQLQuery(id, input) {
    const data = [input, id];
    function resolveQuery(error, result) {
      if (error) throw error;
      return result;
    }
    function runQuery(query, data) {
      connection.query(query, data, resolveQuery());
    }
    runQuery(this.query, data);
  }
}

export default Mutation;
