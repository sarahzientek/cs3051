const verifyUser = function(username,password) {
    database.verifyUser(username, password)
    .then(userInfo => dataBase.getRoles(userInfo))
    .then(rolesInfo => dataBase.logAccess(rolesInfo))
    .then(finalResult => {
        //do whatever the call back would do
    })
    .catch((err) => {
        //do whatever error would handle
    });

};