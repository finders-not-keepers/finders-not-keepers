

module.exports = function FindersAPI(conn) {
return {
        createItem : function (item, callback){
        if (err) {
          callback(err);
        }
            else {
               conn.query( `INSERT INTO items (categoryId, accountId, title, description, media, createdAt, updatedAt)
                VALUES (?,?,?,?,?,?,?)`, [item.categoryId, item.accountId, item.title, item.description, item.media, new Date(), new Date()],
                function (err, res){
                    if(err){
                        console.log(err);
                        callback(err);
                    }
                    else{
                        console.log("else of the createItem");
                        callback(null, res);
                    }
                }
            )}
        },
        createAccount : function (account, callback) {
           if(err){
               if (err.code === 'ER_DUP_ENTRY') {
                  callback(new Error('An account with this username already exists'));
                }
                else {
                  callback(err);
                }
           } 
           else{
               conn.query(`INSERT INTO items (name, addressId, media, category_account, media, createdAt, updatedAt)
                VALUES (?,?,?,?,?,?,?)`, [account.name, account.addressId, account.media, account.category_account, account.media, new Date(), new Date()], 
                function (ree, res) {
                    if(err){
                        console.log(err);
                        callback(err);
                    }
                    else{
                        console.log("else of the createAccount");
                        callback(null, res);
                    }
                }
           )}
        },
        createAdmin: function (){
            if(err){
                if(err.code === 'ER_DUP_ENTRY'){
                    callback(new Error('An admin with this username already exists'));
                }
                else {
                    callback(err);
                }
            }
            else{
                
            }
        }/*,
        createAddress : function (){
            
        },
        getAllItemsForSearch : function (){
            
        },
        getAllItemsForAccount : function (){
            
        },
        getAddress : function () {
            
        },
        createSession: function() {
            
        },
        getUserFromSession: function (){
            
        },
        deleteSession: function(){
            
        }
    }
}

*/
