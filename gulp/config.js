var src = 'src/';
var app = src + 'my/';
var dev = src + 'dev/';
var generated_sources = 'generated_sources/';
var build = 'build/';
var deploy = 'deploy/';

module.exports = {
    //
    APP_NAME : 'my',
    //
    TEMPLATES_ROOT: 'my',
    //
    FOLDERS: {
        SRC: src,
        APP: src + app,
        DEV: src + dev,
        GENERATED_SOURCES: generated_sources,
        GENERATED_SCRIPTS: generated_sources + 'scripts/',
        GENERATED_STYLES: generated_sources + 'styles/',
        GENERATED_IMAGES: generated_sources + 'images/',
        GENERATED_FONTS: generated_sources + 'fonts/',
        BUILD: build,
        DEPLOY: deploy
    },
    //
    FILTERS: {
        SCRIPTS: {
            DEV: [app + '**/*.js', dev + '**/*.js', generated_sources + 'scripts/templateCacheHtml.js'],
            PROD: [app + '**/*.js', generated_sources + 'scripts/templateCacheHtml.js']
        },
        STYLES: {
            CSS: {
                DEV: [app + '**/*.css', dev + '**/*.css'],
                PROD: [app + '**/*.css']
            },
            LESS: {
                DEV: [],
                PROD: []
            }
        },
        HTML: {
            DEV: [app + '**/*.html', dev + '**/*.html'],
            PROD: [app + '**/*.html']
        },
        IMAGES: {
            DEV: [app + '**/*.jpg', dev + '**/*.jpg'],
            PROD: [app + '**/*.jpg']
        },
        FONTS: {
            DEV: [],
            PROD: []
        }
    }
}