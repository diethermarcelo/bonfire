class APIRequest {
    url         = get_env('api_url');
    endpoint    = '';
    options     = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    async get(options = this.options){ 
        const api_url = this.url + this.endpoint;
        return fetch(api_url, options)
            .then(res => res.json())
            .then(data => data);
    }

} 

class UsersAPI extends APIRequest{
    endpoint = '/users.json'

    async getUserByEmail(email){
        const api_url = this.url + this.endpoint;
        return fetch(api_url, this.options)
            .then(res => res.json())
            .then(data => {
                console.log(data,' data...')
                const user = data.filter((user) => user.user_email === email);
                return user.length ? user[0] : [];
            });
    }
}

