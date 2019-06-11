const path = require('path');
const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');


module.exports = {
    mode: "development",
    entry: './index.ts',
    resolve: {
        extensions: [
            '.ts', '.d.ts'
        ]
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'safe-any',
        path: path.resolve(__dirname, 'dist'),
        globalObject: 'this',
    },
    plugins: [
        new TypescriptDeclarationPlugin({
          out: 'index.d.ts'
        })
      ]
};
