let baseUrl = "http://localhost:3000";

export function registerNewAccount(data, callback) {

    let url = baseUrl + "/api/users";
    let obj = getConfigurationForPostRequest(data);

    fetch(url, obj)
        .then(x => x.json())
        .then(x => callback(x))
        .catch(x => callback(x));
}

export function signInUser(data, callback) {
    let url = baseUrl + "/api/auth";
    let obj = getConfigurationForPostRequest(data);
    fetch(url, obj) //send the server (mongoDB) the user's info
        .then(x => {
            return x.json()
        })
        .then(x => {
            callback(x)
        })
        .catch(x => {
            callback(x)
        });
}

export function getMeData(token, callback) {
    if (!token) return;
    let url = baseUrl + "/api/users/me";
    fetch(url, {headers: {'x-auth-token': token}
        })
        .then(x => x.json())
        .then(x => callback(x))
        .catch(x => callback(x));
}

export function getMeCards(token, callback) {
    let url = baseUrl + "/api/users/mecards";
    fetch(url, {
            headers: {
                'x-auth-token': token
            }
        })
        .then(x => x.json())
        .then(x => callback(x))
        .catch(x => callback(x));
}

export function insertNewCard(data, token, callback) {
    let url = baseUrl + "/api/cards";
    let obj = getConfigurationForPostRequest(data); // we prepare the client-side info to be converted into server-side
    obj.headers['x-auth-token'] = token;            //the token from local storage will; now be stored in obj.headers['x-aith-token] for 
                                                    //validation purposes

    fetch(url, obj)                                 //and now the object includes the x-auth-token as well.
        .then(x => x.json())
        .then(x => callback(x))
        .catch(x => callback(x));
}

export function deleteCard(idToDelete, token, callback) {
    let url = baseUrl + "/api/cards/" + idToDelete;
    fetch(url, {
            method: 'DELETE',
            headers: {
                'x-auth-token': token
            }
        })
        .then(x => x.json())
        .then(x => callback(x))
        .catch(x => callback(x));
}

export function editCard(card,token, callback) {
    let url = baseUrl + "/api/cards/" + card.id;
    let obj = getConfigurationForPutRequest(card,token);
    fetch(url, obj)
        .then(x => x.json())
        .then(x => callback(x))
        .catch(x => callback(x));
}


function getConfigurationForPostRequest(data) { 
    return {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    };

}


function getConfigurationForPutRequest(data,token) {
    return {

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-auth-token': token
        },
        method: 'PUT',
        body: JSON.stringify({
            bizName:data.bizName,
            bizDescription:data.bizDescription,
            bizAddress:data.bizAddress,
            bizPhone:data.bizPhone,
            bizImage:data.bizImage,
        })
    };
}