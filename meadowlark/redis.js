const Redis = require('ioredis');
const fs = require('fs');

const redis = new Redis({
    host: 'redis-17372.c292.ap-southeast-1-1.ec2.cloud.redislabs.com',
    port: 17372,
    password: 'kcU7A4lsXfqhMGMzExb534pQmvLYwmXu'
});

