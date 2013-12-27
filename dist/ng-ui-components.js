(function(window, document) {// Config
angular
    .module('ngUiComponents.config', [])
    .value('ngUiComponents.config', {
        debug: true
    })
    .config(function () {
        // init global stuff here
    });

// Modules
angular.module('ngUiComponents.directives', []);
angular.module('ngUiComponents.filters', []);
angular.module('ngUiComponents.services', []);
angular.module('ngUiComponents',
    [
        'ngUiComponents.config',
        'ngUiComponents.directives',
        'ngUiComponents.filters',
        'ngUiComponents.services'
    ]);
})(window, document);