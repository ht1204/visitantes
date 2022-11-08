const config = {
    mongoUri: process.env.MONGODB_URL || 'mongodb://localhost:27017/mongo-1',
    PORT: process.env.PORT || 3000,
}

export default config;
