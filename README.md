### Running

This example requires docker or a local mongodb installation.  If using a local mongodb, see `app.module.ts` for connection options, and make sure there are matching options for the mongodb installation and the source code.

#### Docker

There is a `docker-compose.yml` file for starting Docker.

`docker-compose up`

After running the sample, you can stop the Docker container with

`docker-compose down`

### Run migrations

Then, run Nest as usual:

`yarn migrate:up`
### Run the sample

Then, run Nest as usual:

`yarn start`

### Clear DB

Then, run Nest as usual:

`yarn migrate:down`

## Note
App looks JWT bearer token in an authorization header

## public api (not JWT token required)
(POST)  /api/user/register

(POST)  /api/auth/login
