const
    servers = {
        api: {
            PORT: process.env.PORT || 4001
        },
        static: {
            HOST: process.env.HOST || 'http://localhost',
            PORT: process.env.PORT || 5000
        }
    };

export default servers;
