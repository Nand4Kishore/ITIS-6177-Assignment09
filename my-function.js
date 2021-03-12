exports.handler = async (event) => {
    // TODO implement
    if(event.httpMethod === 'GET') {
        if (event && (!event.queryStringParameters || !event.queryStringParameters.keyword)) {
            return {
                 statusCode:400,
                 body:JSON.stringify({error:"Missing parameter"})
            }
        }
        
        if(event && event.queryStringParameters && event.queryStringParameters.keyword){
            let key = event.queryStringParameters.keyword
            let responseBody = "Venkata sai Nanda Kishore Khanderao says " + key
            return {
                statusCode :200,
                body: JSON.stringify(responseBody)
            }
        }
    }
};