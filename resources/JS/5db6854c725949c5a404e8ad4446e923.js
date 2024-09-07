var app;
(
    function () {
        'use strict';
        app = angular.module('app',
            [
                
                'ui.router',
                'ngAria',
                'ngStorage',
                'ngCookies',
                'angular.filter',
                'ngMessages',
                'pascalprecht.translate',
                'ngSanitize',
                'wc.directives',    
                'angularUtils.directives.dirPagination',
                'ui.sortable',
                'summernote'
            ]);

       
    }
)();

app.filter('startsWith', function () {
    return function (items, prefixes, itemProperty) {
        if (items && items.length) {
            prefixes = prefixes.split(",")
            return items.filter(function (item) {
                var findIn = itemProperty ? item[itemProperty] : item;
                for (var i = 0; i < prefixes.length; i++) {
                    if (findIn.toString().indexOf(prefixes[i].trim()) === 0) {
                        return true
                    }
                }
                return false
            });
        }
    };
});

app.config([
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider',
    '$urlMatcherFactoryProvider',
    '$compileProvider',
    '$translateProvider',
    'paginationTemplateProvider',
    function (
        $locationProvider,
        $stateProvider,
        $urlRouterProvider,
        $urlMatcherFactoryProvider,
        $compileProvider,
        $translateProvider,
        paginationTemplateProvider) {

        var version = moment().format('YYYYMMDDHHmm');

        $locationProvider.html5Mode(true);

        

        $urlMatcherFactoryProvider.strictMode(false);
        $compileProvider.debugInfoEnabled(false);

       

        var v = './Partials/View/',
            c = './Partials/Controller',
            h = './Partials/View/Nav/',
            f = './Partials/View/Footer/';






        $stateProvider
            .state('home', {
                url: '/',
                cache: false,
                views: {
                   
                    'main': {
                        templateUrl: v + 'home.html?v=' + version,
                        controller: 'HomeController'
                    }
                }

            });


        $stateProvider
            .state('error', {
                cache: false,
                url: '/error',
                views: {

                    'main': {
                        templateUrl: v + 'error.html?v=' + version
                    }
                }

            });

        $urlRouterProvider.otherwise('/error');
    }]);



app.run(['$rootScope', '$state', 'dataService', '$sessionStorage', '$templateCache', '$sce', '$filter', '$timeout',
    function (rs, state, $d, $store, $templateCache, $sce, $fil, $timeout) {

    
        rs.$on('$viewContentLoaded', function () {
            rs.viewPort = {};
            rs.viewPort.height = 0;
            rs.viewPort.width = 0;
            rs.getViewPort = function () {
                rs.viewPort.width =
                    Math.max(document.documentElement.clientWidth,
                        window.innerWidth || 0)
                rs.viewPort.height =
                    Math.max(document.documentElement.clientHeight,
                        window.innerHeight || 0)
            };

            rs.getViewPort();
            if (rs.viewPort.width < 1000) {

                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        });





    }]);

app.controller('mainCtrl',
    ['$rootScope',
        '$scope',
        '$sce',
        '$state',
        '$location',
        '$filter',
        'dataService',
        '$cookies',
        '$q', '$sessionStorage', '$timeout', function (
            rs,
            $s,
            $sce,
            state,
            $location,
            $fil,
            $d,
            $cookies,
            $q,
            $sessionStorage,
            $timeout) {
            $s.mod = {};
            $s.lang = rs.lang;
            $s.setting = {};
            $s.setting.editMode = false;
            $s.setting.selItem = 0;
            $s.setting.selItemDel = 0;
            $s.setting.selItemSuccess = 0;
            $s.setting.selItemConfirm = 0;
            $s.myState = state;
            $s.searchMode = false;




            $s.changeSelItem = function (i) {
                $s.setting.selItem = i;
            };
            $s.checkSelItem = function (i) {
                return i === $s.setting.selItem;
            };
            $s.changeSelItemDel = function (i) {
                $s.setting.selItemDel = i;
            };
            $s.checkSelItemDel = function (i) {
                return i === $s.setting.selItemDel;
            };
            $s.changeSelItemSuccess = function (i) {
                $s.setting.selItemSuccess = i;
            };
            $s.checkSelItemSuccess = function (i) {
                return i === $s.setting.selItemSuccess;
            };
            $s.changeSelItemConfirm = function (i) {
                $s.setting.selItemConfirm = i;
            };
            $s.checkSelItemConfirm = function (i) {
                return i === $s.setting.selItemConfirm;
            };
          
            $s.confirmation = function (m) {
                var def = $.Deferred();
                Swal.fire({
                    icon: 'question',
                    html: m,
                    showCancelButton: true,
                    confirmButtonText: $sce.valueOf($fil('translate')('yes')),
                    cancelButtonText: $sce.valueOf($fil('translate')('no')),
                    focusConfirm: false,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    customClass: {
                        confirmButton: 'btn bg-primary rounded-pill btn-primary ',
                        cancelButton: 'btn  rounded-pill btn-secondary '
                    }
                }).then(function (ret) {
                    def.resolve(ret);

                });

                return def.promise();
            };

            $s.trustHTML = function (i) {
                return $sce.trustAsHtml(i);
            }

            $s.warning = function (m) {
                var def = $.Deferred();
                Swal.fire({
                    icon: 'warning',
                    html: m,
                    confirmButtonText: $sce.valueOf($fil('translate')('ok')),
                    focusConfirm: true,
                    allowOutsideClick: false,
                    customClass: {
                        confirmButton: 'btn bg-primary rounded-pill btn-primary '
                    }
                }).then(function (ret) {
                    def.resolve(ret);

                });

                return def.promise();


            };
            $s.success = function (m) {
                var def = $.Deferred();
                Swal.fire({
                    icon: 'success',
                    html: m + '<br/><br/>',
                    confirmButtonText: $sce.valueOf($fil('translate')('ok')),
                    focusConfirm: true,
                    allowOutsideClick: false,
                    customClass: {
                        confirmButton: 'btn bg-primary rounded-pill btn-primary '
                    }
                }).then(function (ret) {
                    def.resolve(ret);

                });

                return def.promise();
            };
            $s.infoMsg = function (m) {
                Swal.fire({
                    icon: 'info',
                    html: m,
                    confirmButtonText: $sce.valueOf($fil('translate')('ok')),
                    focusConfirm: true,
                    allowOutsideClick: false,
                    customClass: {
                        confirmButton: 'btn bg-primary rounded-pill btn-primary '
                    }
                });
            };
            $s.error = function (m) {

                Swal.fire({
                    icon: 'error',
                    html: m,
                    confirmButtonText: $sce.valueOf($fil('translate')('ok')),
                    focusConfirm: true,
                    allowOutsideClick: false,
                    customClass: {
                        confirmButton: 'btn bg-primary rounded-pill btn-primary '
                    }
                });


            };

            $s.successToast = function (m) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'center',
                    showConfirmButton: false,
                    showCloseButton: true,
                    timer: 4000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });

                Toast.fire({
                    icon: 'success',
                    html: m,
                    customClass: {
                        popup: 'bg-dark py-1',
                        htmlContainer: 'pt-2  text-light fw-bold fst-italic',
                        closeButton: 'text-primary'
                    }
                });
            };

            $s.RedirectMe = function (u, p) {

                state.go(u, p === undefined ? {} : p);
                return false;
            };
            $s.currentState = function (e, p) {
                if (p === undefined) {

                    return state.current.name === e;
                } else {
                    return state.current.name === e && location.href.contains(p);
                }
            };
            $s.formValidation = function (obj, m) {
                m = m === undefined ? 0 : m;
                var ret = true;
                $s.isInvalid = false;



                $(obj + ' input, ' + obj + ' textarea, ' + obj + ' select').each(function (e) {
                    var that = $(this);
                    var elemType = that.prop('nodeName').toUpperCase();

                    that.removeClass('is-invalid');

                    if (elemType === 'INPUT') {
                        if ((that.attr('type') === 'text' || that.attr('type') === 'number' || that.attr('type') === 'password') && that.val().length <= m) {
                            that.removeClass('is-invalid').addClass('is-invalid');
                            that.focus();
                            if (that.parent().hasClass('flex-grow-1')) {
                                $s.gotoSection(that.parent().parent());
                            } else {
                                $s.gotoSection(that.parent());
                            }

                            ret = false;
                            return ret;
                        }
                    }

                    if (elemType === 'TEXTAREA') {
                        if (that.val().length <= m && !that.prop('readonly')) {
                            that.removeClass('is-invalid').addClass('is-invalid');
                            that.focus();
                            $s.gotoSection(that.parent());
                            ret = false;
                            return ret;
                        }

                    }


                    if (elemType === 'SELECT') {
                        if (that.val().length === 0 && !that.prop('disabled')) {
                            that.removeClass('is-invalid').addClass('is-invalid');
                            that.focus();
                            $s.gotoSection(that.parent());
                            ret = false;
                            return ret;
                        }

                    }




                });

                $s.isInvalid = !ret;
                return ret;
            };


            $s.IndexInit = function () {
                $s.isMobile = false;
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
                    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
                    $s.isMobile = true;
                }



                $(window).scroll(function () {
                    if ($(window).scrollTop() > 200) {
                        $timeout(function () { $s.showTopToggle = true });
                    } else {
                        $timeout(function () { $s.showTopToggle = false });
                    }
                });

               
                $timeout(function () {
                    $s.pageIsReady = true;
                });
            };


            $s.popoverShow = function (i, j) {
                if (j) {
                    $('[name="' + i + '"]').popover('dispose');
                    return;
                }
                $('[name="' + i + '"]').popover('show');
            };


            $s.getDiffDate = function (i,j) {
                i = new Date(i);
                k = j;
                j = j === "Present" ? new Date() : new Date(j);
                ret = moment(i).from(moment(j),true);
                return  ret;
            };
            $s.rateSummary = function (i, j) {
                if (i >= j) {
                    return 'text-warning';
                } else {
                    return 'text-white-50';
                }
            };



            $s.calculateKHMenuTop = function (i, ctrl) {
                ctrl = ctrl === undefined ? 'knowledgHubMenu' : ctrl;
                if (i === false) {
                    return 0;
                } else {
                    return $('[data-control="' + ctrl + '"]').outerHeight() + 60;
                }

            };

            $s.backToTop = function () {
                $(window).scrollTop(0);
            };
            $s.gotoSection = function (i, j) {
                j = j === undefined ? 0 : j;
                ss = $(i)[0].offsetTop === undefined ? 0 : $(i)[0].offsetTop;
                $(window).scrollTop(ss - j);
                $('#menu').offcanvas('hide');
            };



        }]);







app.factory('dataService', ['$http', '$q', '$state', '$cookies', '$sessionStorage', function (h, $q, state, $cookies, $store) {


    var serviceBase = '',
        dataFactory = {};

    serviceBase = location.origin + '/resources/data.json?v=' + Math.random();


    dataFactory.GetServiceBase = function () {
        return serviceBase;
    };


    dataFactory._isNotMobile = function () {
        var ret = function () {
            var check = false;
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
            return !check;
        }();

        return dataFactory;
    };


    dataFactory.Request = function () {

        var defAbort = $q.defer();
        var ds = h.get(serviceBase);

        var ret = ds.then(function (results) {
            return results.data;
        }, function (error) {
            console.log(error);
            return $q.reject(error.data.error);
        });

        ret.abort = function () {
            defAbort.resolve();
        };

        ret.finally(
            function () {
                ret.abort = angular.noop;
                defAbort = request = promise = null;
            }
        );

        return ret;
    };
    dataFactory.RequestWithUpload = function (controller, action, p, Data) {
   
        var defAbort = $q.defer();
        var fd = new FormData();
        if (p) {
            var ky = Object.keys(p);
            for (var j in ky)
                fd.append(ky[j], p[ky[j]]);
        }
        if (Data.length > 1) {
            for (var i = 0; i < Data.length; i++) {
                fd.append('file' + i.toString(), Data[i]);
            }
        } else {
            fd.append('file', Data);
        }


        var ds = h({
            method: 'POST',
            url: serviceBase + controller + '/' + action,
            data: fd,
            headers: {
                'Content-Type': undefined
            },
            transformRequest: angular.identity
        });

        var ret = ds.then(function (results) {
            return results.data;
        }, function (error) {

            //location = location.origin + '/error';


            return $q.reject(error.data.error);
        });

        ret.abort = function () {
            defAbort.resolve();
        };

        ret.finally(
            function () {
                ret.abort = angular.noop;
                defAbort = request = promise = null;
            }
        );

        return ret;
    };

    dataFactory.RequestFromLink = function (link, type, params,headers, disableInterceptor, ignoreLoadingBar) {

        var defAbort = $q.defer();
        var ds = h({
            method: type,
            url: link,
            data: params === undefined ? {} : params,
            headers: headers,
            disableInterceptor: (disableInterceptor === undefined ? false : disableInterceptor),
            ignoreLoadingBar: (ignoreLoadingBar === undefined ? false : ignoreLoadingBar)
        });

        var ret = ds.then(function (results) {
            return results.data;
        }, function (error) {
            return $q.reject(error.data.error);
        });

        ret.abort = function () {
            defAbort.resolve();
        };

        ret.finally(
            function () {
                ret.abort = angular.noop;
                defAbort = request = promise = null;
            }
        );

        return ret;
    };

    return dataFactory;
}]);


(function () {

    var injectParams = ['$q', '$timeout', '$window', 'httpInterceptor'];

    var wcOverlayDirective = function ($q, $timeout, $window, httpInterceptor) {

        var template = ' <div id="preloader" class=" align-items-center w-100 h-100">' +
            '<div class="mx-auto" style="width: 8rem;"><img src="resources/images/loader.svg" class="img-fluid"></div>',
            link = function (scope, element, attrs, model) {
                var overlayContainer = null,
                    timerPromise = null,
                    timerPromiseHide = null,
                    queue = [];

                init();

                scope.$watch(function () {
                    return model.$modelValue;
                }, function (newValue) {
                    if (newValue === "Show") {
                        showOverlay();
                    } else {
                        hideOverlay();
                    }
                });

                function init() {
                    wireUpHttpInterceptor();
                    if ($window.jQuery) wirejQueryInterceptor();
                    overlayContainer = document.getElementById("preloader");  //element[0].firstChild; //Get to template
                }

                //Hook into httpInterceptor factory request/response/responseError functions
                function wireUpHttpInterceptor() {

                    httpInterceptor.request = function (config) {
                        if (config.disableInterceptor === undefined || config.disableInterceptor === false) processRequest();
                        return config || $q.when(config);
                    };

                    httpInterceptor.response = function (response) {
                        processResponse();
                        return response || $q.when(response);
                    };

                    httpInterceptor.responseError = function (rejection) {
                        processResponse();
                        //if (rejection.status === 401) {
                        //    $location.path("/404");
                        //} else {
                        //    console.log(rejection);
                        //}
                        rejection.data = "";
                        return $q.reject(rejection);
                    };
                }

                //Monitor jQuery Ajax calls in case it's used in an app
                function wirejQueryInterceptor() {
                    $(document).ajaxStart(function () {
                        processRequest();
                    });

                    $(document).ajaxComplete(function () {
                        processResponse();
                    });

                    $(document).ajaxError(function () {
                        processResponse();
                    });
                }

                function processRequest() {
                    queue.push({});
                    if (queue.length === 1) {
                        timerPromise = $timeout(function () {
                            if (queue.length) showOverlay();
                        }, scope.wcOverlayDelay ? scope.wcOverlayDelay : 300); //Delay showing for 500 millis to avoid flicker
                    }
                }

                function processResponse() {
                    queue.pop();
                    if (queue.length === 0) {
                        //Since we don't know if another XHR request will be made, pause before
                        //hiding the overlay. If another XHR request comes in then the overlay
                        //will stay visible which prevents a flicker
                        timerPromiseHide = $timeout(function () {
                            //Make sure queue is still 0 since a new XHR request may have come in
                            //while timer was running
                            if (queue.length === 0) {
                                hideOverlay();
                                if (timerPromiseHide) $timeout.cancel(timerPromiseHide);
                            }
                        }, scope.wcOverlayDelay ? scope.wcOverlayDelay : 300);
                    }
                }

                function showOverlay() {

                    // overlayContainer.style.display = 'block';

                    overlayContainer.classList.remove("d-none");
                }

                function hideOverlay() {
                    if (timerPromise) $timeout.cancel(timerPromise);
                    $timeout(function () {

                        overlayContainer.classList.remove("d-none");
                        overlayContainer.classList.add("d-none");
                    }, scope.wcOverlayLate ? scope.wcOverlayLate : 500);
                }

                var getComputedStyle = function () {
                    var func = null;
                    if (document.defaultView && document.defaultView.getComputedStyle) {
                        func = document.defaultView.getComputedStyle;
                    } else if (typeof (document.body.currentStyle) !== "undefined") {
                        func = function (element, anything) {
                            return element["currentStyle"];
                        };
                    }

                    return function (element, style) {
                        return func(element, null)[style];
                    };
                }();
            };

        return {
            restrict: 'EA',
            transclude: true,
            require: "ngModel",
            scope: {
                wcOverlayDelay: "@",
                wcOverlayLate: "@"
            },
            template: template,
            link: link
        };
    };

    var wcDirectivesApp = angular.module('wc.directives', []);


    wcDirectivesApp.factory('httpInterceptor', function () {
        return {};
    });

    wcDirectivesApp.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptor');
    }]);


    wcOverlayDirective.$inject = injectParams;

    wcDirectivesApp.directive('wcOverlay', wcOverlayDirective);

    var authHttpResponseInterceptor = function ($q, $location, t, $injector) {
        return {
            response: function (response) {
                if (response.status === 401) {
                    //console.log("Response 401");
                }
                return response || $q.when(response);
            },
            responseError: function (rejection) {
                //console.log(rejection);
                if (rejection.status === 401) {
                    //window.location = 'login.aspx';
                }

                if (rejection.status === 404 || rejection.status === 500) {
                    //console.log(rejection.status);
                    t(function () {
                        $location.path('/error');
                        setTimeout(function () {
                            var $modalStack = $injector.get('$uibModalStack');//di pde iinject(circular reference). manual injector to.
                            var top = $modalStack.getTop();
                            if (top) {
                                $modalStack.dismiss(top.key);
                            }
                        }, 150);
                    });
                }
                return $q.reject(rejection);
            }
        };
    }, httpAuthProvider = function ($httpProvider) {
        $httpProvider.interceptors.push('authHttpResponseInterceptor');
    };

    wcDirectivesApp.factory('authHttpResponseInterceptor', ['$q', '$location', '$timeout', '$injector', authHttpResponseInterceptor]);
    wcDirectivesApp.config(['$httpProvider', httpAuthProvider]);





    var customOnChange = function () {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, element, attrs, ngModelCtrl) {
                var onChangeHandler = scope.$eval(attrs.customOnChange);
                element.on('change', onChangeHandler);
                element.on('$destroy', function () {
                    element.off();
                });
            }
        };
    };

    wcDirectivesApp.directive('customOnChange', [customOnChange]);


    var onErrorSrc = function () {
        return {
            link: function (scope, element, attrs) {
                element.bind('error', function () {
                    if (attrs.src !== attrs.onErrorSrc) {
                        attrs.$set('src', attrs.onErrorSrc);
                    }
                });
            }
        };
    };

    wcDirectivesApp.directive('onErrorSrc', [onErrorSrc]);
    var onErrorSrcHide = function () {
        return {
            link: function (scope, element, attrs) {
                element.bind('error', function () {

                    attrs.$set('class', 'd-none');
                });
            }
        };
    };

    wcDirectivesApp.directive('onErrorSrcHide', [onErrorSrcHide]);
   


    var onFinishRender = function () {
        return {
            restrict: 'A',
            link: function (s, e, a) {
                if (s.$last === true) {
                    s.$emit(a.onFinishRender);
                }
            }
        };
    };

    wcDirectivesApp.directive('onFinishRender', [onFinishRender]);


    var restrictTo = function () {
        return {
            restrict: 'A',
            link: function (s, e, a) {
                var re = RegExp(a.restrictTo);
                var exclude = /Backspace|Enter|Tab|Delete|Del|ArrowUp|Up|ArrowDown|Down|ArrowLeft|Left|ArrowRight|Right/;

                e[0].addEventListener('keydown', function (event) {
                    if (!exclude.test(event.key) && !re.test(event.key)) {
                        event.preventDefault();
                    }
                });
            }
        };
    };

    wcDirectivesApp.directive('restrictTo', [restrictTo]);
    var autoFocus = function ($timeout) {
        return {
            restrict: 'A',
            link: function ($scope, $element) {
                $timeout(function () {
                    $element[0].focus();
                    $(window).scrollTop($element[0].offsetTop);
                });
            }
        };
    };

    wcDirectivesApp.directive('autoFocus', ['$timeout', autoFocus]);


}());
app.controller('HomeController', [
    '$scope',
    '$controller',
    '$filter',
    '$sce',
    'dataService',
    '$timeout',
    '$state',
    '$sessionStorage',
    '$cookies',
    function (
        $s,
        $c,
        $fil,
        $sce,
        $d,
        $timeout,
        state,
        $sessionStorage,
        $cookies, tr) {
        $s.homeInit = function () {
            $d.Request().then(function (r) {
                $s.myData = r;
                $.extend($s.myData,{copyright:(new Date()).getFullYear()});
                $(window).scroll(function () {
                    $s.scrollValue = $(window).scrollTop();
                    if ($(window).scrollTop() > 150) {
                        $timeout(function () { $('#headerHero').offcanvas('show'); $s.showTopToggle = true; });
                    } else {
                        $timeout(function () { $('#headerHero').offcanvas('hide'); $s.showTopToggle = false; });
                    }
                });
                $("[download-my-resume]").tooltip("show");
                $("[download-my-resume]").on("click", function(e){
                    e.preventDefault();

                });
                $timeout(function () {
                    $('[data-control="myAccomplishmentsListCarousel"]').owlCarousel({
                        loop: true,
                        margin: 9,
                        stagePadding: 9,
                        nav: true,
                        navText: ['<i class="mdi mdi-arrow-left-drop-circle text-light mdi-18px"></i>', '<i class="mdi mdi-arrow-right-drop-circle text-light mdi-18px"></i>'],
                        responsiveClass: true,
                        autoplay: true,
                        autoplayTimeout: 5000,
                        autoplayHoverPause: true,
                        responsive: {
                            0: {
                                items: 1
                            },
                            600: {
                                items: 2
                            },
                            1000: {
                                items: 3
                            },
                            1200: {
                                items: 4
                            }
                        }
                    });
                });
            });
        };
    }]);

