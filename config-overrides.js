module.exports = (config, env) => {
    console.log('push new rules');
    config.module.rules.push(
        {
            test: /\.styl$/,
            use: [
                'style-loader',
                'css-loader',
                'stylus-loader',
            ],
        }
    );
    return config
};
