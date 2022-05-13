import * as SQLite from 'expo-sqlite';

const Database = {
  getConnection: () => {
    
    const db = SQLite.openDatabase('database.db');

    db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists loginOptions (id integer primary key not null, userId integer not null, keepConnected numeric not null, userEmail text, userPassword text);'
      );
    });

    const ExecuteQuery = (sql, params = []) =>
      new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(
            sql,
            params,
            (trans, results) => {
              resolve(results);
            },
            (error) => {
              console.log(error);
              reject(error);
            }
          );
        });
      });

    return ExecuteQuery;
  },
};

const DB_EXEC = Database.getConnection();

export const getLoginOptions = async (params) => {
  let results = await DB_EXEC(`select * loginOptions where userId = ? order by id desc`, [params.userId]);
  //console.log(results);
  //return results.rows._array;
}

export const insertLoginOptions = async (params) => {
  let results = await DB_EXEC(`insert into loginOptions(keepConnected,userId,userEmail,userPassword) values (?,?,?,?)`, [params.keepConnected,params.userId, params.email, params.password]);
  //console.log(results);
  return results.rowsAffected;
}

export const updateLoginOptions = async (params) => {
  let results = await DB_EXEC(`update loginOptions set keepConnected = ?, userEmail = ?, userPassword = ? where userId = ?`, [params.keepConnected, params.email, params.password, params.userId]);
  //console.log(results);
  return results.rowsAffected;
}

export const delteLoginOptions = async (params) => {
  let results = await DB_EXEC(`delete from loginOptions where userId=?`, [params.userId]);
  //console.log(results);
  return results.rowsAffected;
}




