module.exports = {
    // configureWebpack:{
        // module:{
        //     rules:[
        //         {
        //             test: /\.coffee$/,
        //             use: ['coffee-loader'],
        //         },
        //         {
        //          test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        //           use: [
        //            {
        //              loader: '/Users/elad.tanamiaxonius.com/vscode/vue-robot/node_modules/url-loader/dist/cjs.js',
        //                 options: {
        //                 limit: 4096,
        //                 fallback: {
        //                  loader: '/Users/elad.tanamiaxonius.com/vscode/vue-robot/node_modules/file-loader/dist/cjs.js',
        //                     options: {
        //                      name: 'img/[name].[hash:8].[ext]'
        //                   }
        //                  }
        //              }
        //               }
        //            ]
        //           },
        //    ]
        // }
        // better way to add rules to Webpack with function we can do checking:
    configureWebpack: (config) => {
        config.module.rules.push({
            test: /\.coffee$/,
            use: ['coffee-loader'],
        });

        const newRule = {
            test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
            use: [
              {
                loader: '/Users/elad.tanamiaxonius.com/vscode/vue-robot/node_modules/url-loader/dist/cjs.js',
                options: {
                  limit: 500,
                  fallback: {
                    loader: '/Users/elad.tanamiaxonius.com/vscode/vue-robot/node_modules/file-loader/dist/cjs.js',
                    options: {
                      name: 'img/[name].[hash:8].[ext]'
                    }
                  }
                }
              }
            ]
        };
        const imageRuleIndex = config.module.rules
            .findIndex(x => x.test.source.includes('png|jpe?g|gif|webp'));
        
        config.module.rules.splice(imageRuleIndex, 1, newRule);
    },
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:8081',
                changeOrigin: true,
            }
        }
    }
}