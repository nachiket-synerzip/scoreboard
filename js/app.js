'use strict';
/*jshint unused:vars */
requirejs.config({
    shim: {
        'jquery': {
            exports: '$'
        },
        'jquery-ui': {
            deps: ['jquery']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'backbone': {
            exports: 'Backbone',
            deps: ['underscore', 'jquery']
        }
    },
    paths: {
        'bootstrap': 'components/bootstrap/docs/assets/js/bootstrap.min',
        'jquery': 'components/jquery/jquery.min',
        'jquery-ui': 'components/jquery-ui/ui/minified/jquery-ui.min',
        'backbone': 'components/backbone/backbone-min',
        'underscore': 'components/underscore/underscore-min',
        'app-view': 'views/AppView'
    }
});

require(['app-view'], function(AppView){
    var appView = new AppView();
    console.log(appView);
});