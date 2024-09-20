const PORT = 8004
const NAME = `riset-`

module.exports = {
    apps: [{
        name: `${NAME}`,
        script: `PORT=${PORT} node .output/server/index.mjs`,
        watch: '.'
    }],

};
