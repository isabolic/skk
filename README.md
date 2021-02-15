
#### Docker

There is a `docker-compose.yml` file for starting Docker.

`docker-compose up`

After running the sample, you can stop the Docker container with

`docker-compose down`

### Run migrations

`yarn migrate:up`
### Run the sample

Then, run Nest as usual:

`yarn start`

### Clear DB

`yarn migrate:down`

## Note
App looks JWT bearer token in an authorization header

## public api (no JWT token required)
(POST)  /api/user/register

(POST)  /api/auth/login
