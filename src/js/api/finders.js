

module.exports = function FindersAPI(conn) {
return {
        createItem: function (item, accountid, callback){
            conn.query( `INSERT INTO items (category, accountId, title, description, media, createdAt, updatedAt)
                VALUES (?,?,?,?,?,?,?)`, [item.category , accountid, item.title, item.description, item.imageUrl, new Date(), new Date()],
                function (err, res){
                    if(err){
                        console.log(err);
                        callback(err);
                    }
                    else{
                        callback(null, res);
                    }
                })
        },
        createAccount: function (account, callback) {
               conn.query(`INSERT INTO accounts (name, media, category_account, createdAt, updatedAt)
                VALUES (?,?,?,?,?,?)`, [account.name,  account.media, account.category_account,  new Date(), new Date()], 
                function (err, res) {
                    if(err){
                        callback(err);
                    }
                    else{
                        callback(null, res);
                    }
                })
        },
        createAddress: function (address, accountId, callback){
            conn.query(`INSERT INTO addresses (street_number, streetline1, streetline2, city, province, country, zip)
                VALUES (?,?,?,?,?,?,?)`, [address.street_number, address.streetline1, address.streetline2, address.city, address.province, address.country, address.zip], 
                function(err, res){
                    if(err){
                        callback(err);
                        console.log(err);
                    }
                    else {
                        callback(null, res);
                    }
                })
        },
        getAllItemsForSearch: function (searchterm, callback){
          var itemname = searchterm.item;
          var itemaccountid = searchterm.username;
          conn.query( `
            SELECT accounts.name, items.title, items.id, items.media , items.description, items.createdAt
            FROM accounts 
            LEFT JOIN items 
            ON items.accountId = accounts.id 
            WHERE accounts.id = ? AND ((MATCH (title, description)
            AGAINST (? IN BOOLEAN MODE)) OR (items.title LIKE '%${itemname}%' OR items.description LIKE '%${itemname}%'))
            ORDER BY items.createdAt DESC;`, [itemaccountid, itemname],
                        function (err, res){
                            if(err){
                                callback(err);
                            }
                            else {
                                callback(null, res);
                            }
                        })  
        },
        getAllItemsForSearch2: function (itemsearch, callback){
            // console.log("GETTIN INSIDE API FUNCTION");
          conn.query( `
            SELECT accounts.name, items.title, items.id, items.media , items.description, items.createdAt
            FROM accounts 
            LEFT JOIN items 
            ON items.accountId = accounts.id 
            WHERE accounts.name = "%${itemsearch.username}%" AND MATCH (title, description)
            AGAINST ("%${itemsearch.item}%" IN BOOLEAN MODE);`,
                        function (err, res){
                            if(err){
                                callback(err);
                            }
                            else {
                                callback(null, res);
                            }
                        })  
        },
        getItem: function (itemid, callback){
            conn.query(`
            SELECT * 
            FROM items 
            WHERE id = ? `, [itemid], function (err, res){
                if(err){
                    callback(err)
                }
                else {
                    callback(null, res);
                }
            })
        },
        getAllItemsForAccount: function (id, callback){
            conn.query( `SELECT items.*, accounts.clientid, accounts.name
                        FROM items 
                        LEFT JOIN accounts 
                        ON items.accountId = accounts.id 
                        WHERE accounts.id = ?
                        ORDER BY items.createdAt DESC;`
                        , [id],
                        function (err, res){
                            if(err){
                                callback(err);
                            }
                            else {
                                callback(null, res);
                            }
                        }) 
        },
        getAllItemsForAccountSubid: function (subid, callback){
            conn.query( `SELECT items.*, accounts.clientid, accounts.name
                        FROM items 
                        LEFT JOIN accounts 
                        ON items.accountId = accounts.id 
                        WHERE accounts.clientid = ?;`
                        , [subid],
                        function (err, res){
                            if(err){
                                callback(err);
                            }
                            else {
                                callback(null, res);
                            }
                        }) 
        },
        getAddresses: function (accountId, callback) {
            conn.query( `SELECT  * , addresses.id
                                FROM addresses
                                LEFT JOIN accounts
                                ON accounts.addressId = addresses.id
                                WHERE addresses.id = ?;`
                        , [accountId],
                        function (err, res){
                            if(err){
                                callback(err);
                            }
                            else {
                                callback(null, res);
                            }
                        }) 
        }, 
        getAccounts: function (accountname, callback){
            conn.query (`
            SELECT * FROM accounts WHERE name LIKE '%${accountname.account}%' ORDER BY name`,
            function (err, res) {
                if(err){
                    callback(err);
                }
                else {
                    callback(null, res);
                }
            })
        },
        deleteItem: function (itemid, callback){
            conn.query(`
            DELETE
            FROM items 
            WHERE id = ?`, [itemid], function (err, res){
                if (err){
                    console.log(err);
                    callback(err);
                }
                else {
                    callback(null, res);
                }
            })
        }, 
        editItem: function (item,  callback) {
            console.log("INSIDE EDIT POST", item);
            conn.query( `UPDATE items
                    SET title = ?, description = ?, category = ? , media = ?
                    WHERE items.id = ?;`     
            , [ item.title, item.description, item.category, item.imgUrl, item.itemId] ,
                function (err, res){
                    if(err){
                        console.log(err);
                        callback(err);
                    }
                    else{
                        console.log(res);
                        callback(null, res);
                    }
                })
         }, 
        getItemDescription: function(itemid, callback) {
            conn.query(`
                    SELECT  description, title, media, createdAt
                    FROM items 
                    WHERE id =?`, [itemid],
                function(err, res) {
                    if (err) {
                        callback(err);
                    }
                    else {
                        callback(null, res);
                    }
                })
        }, 
        getAccountEmail: function (itemid, callback){
            conn.query(`
                SELECT items.accountId, accounts.email, items.title, items.media, items.description, accounts.name
                FROM items 
                LEFT JOIN accounts 
                ON items.accountId = accounts.id 
                WHERE items.id = ?;`, [itemid],
                function(err, res) {
                    if (err) {
                        callback(err);
                    }
                    else {
                        callback(null, res);
                    }
                })
        }, 
        checkAccountExist: function (clientid, callback) {
            conn.query(`
                SELECT *
                FROM accounts
                WHERE accounts.clientid = ?;`, [clientid],
                function(err, res) {
                    if (err) {
                        callback(err);
                    }
                    else {
                        console.log(res);
                    }
            })
        },
        createProfile: function (account, callback){
             conn.query(`INSERT INTO accounts (name, address, media, category_account, email, clientid, createdAt)
                VALUES (?,?,?,?,?,?,?)`, [account.user_metadata.bizname, account.user_metadata.address, account.picture, account.user_metadata.type, account.name, account.user_id , account.created_at], 
                function (err, res) {
                    if(err){
                        console.log( err);
                        callback(err);
                    }
                    else{
                        callback(null, res);
                    }
                })
        }, 
        getProfileById: function(subid, callback) {
            conn.query(`SELECT * FROM accounts
                        WHERE clientid = ?`, [subid],
                function(err, res) {
                    if (err) {
                        callback(err);
                    }
                    else {
                        callback(null, res);
                    }
                })
        },
        getAccountById: function(subid, callback) {
            conn.query(`SELECT id FROM accounts
                        WHERE clientid = ?`, [subid],
                function(err, res) {
                    if (err) {
                        callback(err);
                    }
                    else {
                        callback(null, res);
                    }
                })
        } 
    }
}
        

