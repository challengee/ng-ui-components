// Config
angular
    .module('ngUiCompontents.config', [])
    .value('ngUiCompontents.config', {
        debug: true
    })
    .config(function () {
        // init global stuff here
    });

// Modules
angular.module('ngUiCompontents.directives', []);
angular.module('ngUiCompontents.filters', []);
angular.module('ngUiCompontents.services', []);
angular.module('ngUiCompontents',
    [
        'ngUiCompontents.config',
        'ngUiCompontents.directives',
        'ngUiCompontents.filters',
        'ngUiCompontents.services'
    ]);
