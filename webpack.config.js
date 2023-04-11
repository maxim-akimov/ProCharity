const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '',
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        port: 8080
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: '/node_modules/'
            },
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'lk-competencies.html',
            template: './src/lk-competencies.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'lk-motivation.html',
            template: './src/lk-motivation.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'lk-personal-data.html',
            template: './src/lk-personal-data.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'lk-portfolio.html',
            template: './src/lk-portfolio.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'lk-social.html',
            template: './src/lk-social.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'registration.html',
            template: './src/registration.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'registration-first-step.html',
            template: './src/registration-first-step.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'registration-new-volunteer.html',
            template: './src/registration-new-volunteer.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'settings-change-password.html',
            template: './src/settings-change-password.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'settings-notifications.html',
            template: './src/settings-notifications.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'settings-profile.html',
            template: './src/settings-profile.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'ui-kit-albert-taygibov.html',
            template: './src/ui-kit-albert-taygibov.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'ui-kit-tatijana-kovpak.html',
            template: './src/ui-kit-tatijana-kovpak.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'ui-kit-artem-sobolevsky.html',
            template: './src/ui-kit-artem-sobolevsky.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'ui-kit-maksim-akimov.html',
            template: './src/ui-kit-maksim-akimov.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'ui-kit-nikita-vereschagin.html',
            template: './src/ui-kit-nikita-vereschagin.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'ui-kit-tatijana-kovpak.html',
            template: './src/ui-kit-tatijana-kovpak.html',
            inject: 'body'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ]
}