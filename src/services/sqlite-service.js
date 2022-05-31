import * as SQLite from 'expo-sqlite';
import { Platform } from 'react-native';

const Database = {
  getConnection: () => {
    
    const db = SQLite.openDatabase('database.db');

    db.transaction((tx) => {
      tx.executeSql('create table if not exists loginOptions (id integer primary key not null, userId integer not null, keepConnected numeric not null, userEmail text, userPassword text);');
      tx.executeSql('create table if not exists lastSeen (id integer primary key not null, recipeId integer not null);');
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
  let results = await DB_EXEC(`select * from loginOptions where userId = ? order by id desc`, [params.userId]);
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

//#region Ultimos Vistos
export const insertLastSeen = async (params) => {
  console.log("cheguei "+ params.recipeId );
  let results = await DB_EXEC(`insert into lastSeen(recipeId) values (?)`, [params.recipeId]);
  console.log(results);
  return results.rowsAffected;
}
export const getLastSeen = async () => {
  let results = await DB_EXEC(`select * from lastSeen `);
  //console.log(results);
  if(Platform.OS != 'web') 
    return results.rows._array;
  let arraySql = results.rows;
  let arrayJs = [];

  for (let index = 0; index < arraySql.length; index++) {
      arrayJs.push(arraySql[index]);
  }
 // console.log(arrayJs); 
  return arrayJs;
}
export const deleteLastSeen = async (recipeIdList) => {
  let results = await DB_EXEC(`delete from lastSeen where id in (?)`, [recipeIdList]);
  console.log(results);
  return results.rowsAffected;
}
//#endregion




