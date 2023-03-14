import React from 'react';

const client_id = '07395201571e48f9aebdaf2365b27928';
const redirect_uri = 'http://localhost:3000/Profile'
const scope = ["user-library-modify", "playlist-modify-public",	"user-follow-modify", 	"playlist-modify-private"]
const space_delimiter = "%20"
const scopes_url_param = scope.join(space_delimiter)

const url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
url += '&state=' + encodeURIComponent(state);


const Spotify = () => {
    return (









    )
}