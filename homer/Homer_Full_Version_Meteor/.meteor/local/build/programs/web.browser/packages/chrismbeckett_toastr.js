//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/chrismbeckett:toastr/lib/toastr.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
 * Toastr                                                                                                              // 2
 * Copyright 2012-2014 John Papa, Hans Fjällemark, and Tim Ferrell.                                                    // 3
 * All Rights Reserved.                                                                                                // 4
 * Use, reproduction, distribution, and modification of this code is subject to the terms and                          // 5
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php                      // 6
 *                                                                                                                     // 7
 * Author: John Papa and Hans Fjällemark                                                                               // 8
 * ARIA Support: Greta Krafsig                                                                                         // 9
 * Project: https://github.com/CodeSeven/toastr                                                                        // 10
 */                                                                                                                    // 11
; (function (define) {                                                                                                 // 12
    define(['jquery'], function ($) {                                                                                  // 13
        return (function () {                                                                                          // 14
            var $container;                                                                                            // 15
            var listener;                                                                                              // 16
            var toastId = 0;                                                                                           // 17
            var toastType = {                                                                                          // 18
                error: 'error',                                                                                        // 19
                info: 'info',                                                                                          // 20
                success: 'success',                                                                                    // 21
                warning: 'warning'                                                                                     // 22
            };                                                                                                         // 23
                                                                                                                       // 24
            var toastr = {                                                                                             // 25
                clear: clear,                                                                                          // 26
                remove: remove,                                                                                        // 27
                error: error,                                                                                          // 28
                getContainer: getContainer,                                                                            // 29
                info: info,                                                                                            // 30
                options: {},                                                                                           // 31
                subscribe: subscribe,                                                                                  // 32
                success: success,                                                                                      // 33
                version: '2.1.0',                                                                                      // 34
                warning: warning                                                                                       // 35
            };                                                                                                         // 36
                                                                                                                       // 37
            var previousToast;                                                                                         // 38
                                                                                                                       // 39
            return toastr;                                                                                             // 40
                                                                                                                       // 41
            //#region Accessible Methods                                                                               // 42
            function error(message, title, optionsOverride) {                                                          // 43
                return notify({                                                                                        // 44
                    type: toastType.error,                                                                             // 45
                    iconClass: getOptions().iconClasses.error,                                                         // 46
                    message: message,                                                                                  // 47
                    optionsOverride: optionsOverride,                                                                  // 48
                    title: title                                                                                       // 49
                });                                                                                                    // 50
            }                                                                                                          // 51
                                                                                                                       // 52
            function getContainer(options, create) {                                                                   // 53
                if (!options) { options = getOptions(); }                                                              // 54
                $container = $('#' + options.containerId);                                                             // 55
                if ($container.length) {                                                                               // 56
                    return $container;                                                                                 // 57
                }                                                                                                      // 58
                if(create) {                                                                                           // 59
                    $container = createContainer(options);                                                             // 60
                }                                                                                                      // 61
                return $container;                                                                                     // 62
            }                                                                                                          // 63
                                                                                                                       // 64
            function info(message, title, optionsOverride) {                                                           // 65
                return notify({                                                                                        // 66
                    type: toastType.info,                                                                              // 67
                    iconClass: getOptions().iconClasses.info,                                                          // 68
                    message: message,                                                                                  // 69
                    optionsOverride: optionsOverride,                                                                  // 70
                    title: title                                                                                       // 71
                });                                                                                                    // 72
            }                                                                                                          // 73
                                                                                                                       // 74
            function subscribe(callback) {                                                                             // 75
                listener = callback;                                                                                   // 76
            }                                                                                                          // 77
                                                                                                                       // 78
            function success(message, title, optionsOverride) {                                                        // 79
                return notify({                                                                                        // 80
                    type: toastType.success,                                                                           // 81
                    iconClass: getOptions().iconClasses.success,                                                       // 82
                    message: message,                                                                                  // 83
                    optionsOverride: optionsOverride,                                                                  // 84
                    title: title                                                                                       // 85
                });                                                                                                    // 86
            }                                                                                                          // 87
                                                                                                                       // 88
            function warning(message, title, optionsOverride) {                                                        // 89
                return notify({                                                                                        // 90
                    type: toastType.warning,                                                                           // 91
                    iconClass: getOptions().iconClasses.warning,                                                       // 92
                    message: message,                                                                                  // 93
                    optionsOverride: optionsOverride,                                                                  // 94
                    title: title                                                                                       // 95
                });                                                                                                    // 96
            }                                                                                                          // 97
                                                                                                                       // 98
            function clear($toastElement) {                                                                            // 99
                var options = getOptions();                                                                            // 100
                if (!$container) { getContainer(options); }                                                            // 101
                if (!clearToast($toastElement, options)) {                                                             // 102
                    clearContainer(options);                                                                           // 103
                }                                                                                                      // 104
            }                                                                                                          // 105
                                                                                                                       // 106
            function remove($toastElement) {                                                                           // 107
                var options = getOptions();                                                                            // 108
                if (!$container) { getContainer(options); }                                                            // 109
                if ($toastElement && $(':focus', $toastElement).length === 0) {                                        // 110
                    removeToast($toastElement);                                                                        // 111
                    return;                                                                                            // 112
                }                                                                                                      // 113
                if ($container.children().length) {                                                                    // 114
                    $container.remove();                                                                               // 115
                }                                                                                                      // 116
            }                                                                                                          // 117
            //#endregion                                                                                               // 118
                                                                                                                       // 119
            //#region Internal Methods                                                                                 // 120
                                                                                                                       // 121
            function clearContainer(options){                                                                          // 122
                var toastsToClear = $container.children();                                                             // 123
                for (var i = toastsToClear.length - 1; i >= 0; i--) {                                                  // 124
                    clearToast($(toastsToClear[i]), options);                                                          // 125
                };                                                                                                     // 126
            }                                                                                                          // 127
                                                                                                                       // 128
            function clearToast($toastElement, options){                                                               // 129
                if ($toastElement && $(':focus', $toastElement).length === 0) {                                        // 130
                    $toastElement[options.hideMethod]({                                                                // 131
                        duration: options.hideDuration,                                                                // 132
                        easing: options.hideEasing,                                                                    // 133
                        complete: function () { removeToast($toastElement); }                                          // 134
                    });                                                                                                // 135
                    return true;                                                                                       // 136
                }                                                                                                      // 137
                return false;                                                                                          // 138
            }                                                                                                          // 139
                                                                                                                       // 140
            function createContainer(options) {                                                                        // 141
                $container = $('<div/>')                                                                               // 142
                    .attr('id', options.containerId)                                                                   // 143
                    .addClass(options.positionClass)                                                                   // 144
                    .attr('aria-live', 'polite')                                                                       // 145
                    .attr('role', 'alert');                                                                            // 146
                                                                                                                       // 147
                $container.appendTo($(options.target));                                                                // 148
                return $container;                                                                                     // 149
            }                                                                                                          // 150
                                                                                                                       // 151
            function getDefaults() {                                                                                   // 152
                return {                                                                                               // 153
                    tapToDismiss: true,                                                                                // 154
                    toastClass: 'toast',                                                                               // 155
                    containerId: 'toast-container',                                                                    // 156
                    debug: false,                                                                                      // 157
                                                                                                                       // 158
                    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery                          // 159
                    showDuration: 300,                                                                                 // 160
                    showEasing: 'swing', //swing and linear are built into jQuery                                      // 161
                    onShown: undefined,                                                                                // 162
                    hideMethod: 'fadeOut',                                                                             // 163
                    hideDuration: 1000,                                                                                // 164
                    hideEasing: 'swing',                                                                               // 165
                    onHidden: undefined,                                                                               // 166
                                                                                                                       // 167
                    extendedTimeOut: 1000,                                                                             // 168
                    iconClasses: {                                                                                     // 169
                        error: 'toast-error',                                                                          // 170
                        info: 'toast-info',                                                                            // 171
                        success: 'toast-success',                                                                      // 172
                        warning: 'toast-warning'                                                                       // 173
                    },                                                                                                 // 174
                    iconClass: 'toast-info',                                                                           // 175
                    positionClass: 'toast-top-right',                                                                  // 176
                    timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky                           // 177
                    titleClass: 'toast-title',                                                                         // 178
                    messageClass: 'toast-message',                                                                     // 179
                    target: 'body',                                                                                    // 180
                    closeHtml: '<button>&times;</button>',                                                             // 181
                    newestOnTop: true,                                                                                 // 182
                    preventDuplicates: false,                                                                          // 183
                    progressBar: false                                                                                 // 184
                };                                                                                                     // 185
            }                                                                                                          // 186
                                                                                                                       // 187
            function publish(args) {                                                                                   // 188
                if (!listener) { return; }                                                                             // 189
                listener(args);                                                                                        // 190
            }                                                                                                          // 191
                                                                                                                       // 192
            function notify(map) {                                                                                     // 193
                var options = getOptions(),                                                                            // 194
                    iconClass = map.iconClass || options.iconClass;                                                    // 195
                                                                                                                       // 196
                if(options.preventDuplicates){                                                                         // 197
                    if(map.message === previousToast){                                                                 // 198
                        return;                                                                                        // 199
                    }                                                                                                  // 200
                    else{                                                                                              // 201
                        previousToast = map.message;                                                                   // 202
                    }                                                                                                  // 203
                }                                                                                                      // 204
                                                                                                                       // 205
                if (typeof (map.optionsOverride) !== 'undefined') {                                                    // 206
                    options = $.extend(options, map.optionsOverride);                                                  // 207
                    iconClass = map.optionsOverride.iconClass || iconClass;                                            // 208
                }                                                                                                      // 209
                                                                                                                       // 210
                toastId++;                                                                                             // 211
                                                                                                                       // 212
                $container = getContainer(options, true);                                                              // 213
                var intervalId = null,                                                                                 // 214
                    $toastElement = $('<div/>'),                                                                       // 215
                    $titleElement = $('<div/>'),                                                                       // 216
                    $messageElement = $('<div/>'),                                                                     // 217
                    $progressElement = $('<div/>'),                                                                    // 218
                    $closeElement = $(options.closeHtml),                                                              // 219
                    progressBar = {                                                                                    // 220
                        intervalId: null,                                                                              // 221
                        hideEta: null,                                                                                 // 222
                        maxHideTime: null                                                                              // 223
                    },                                                                                                 // 224
                    response = {                                                                                       // 225
                        toastId: toastId,                                                                              // 226
                        state: 'visible',                                                                              // 227
                        startTime: new Date(),                                                                         // 228
                        options: options,                                                                              // 229
                        map: map                                                                                       // 230
                    };                                                                                                 // 231
                                                                                                                       // 232
                if (map.iconClass) {                                                                                   // 233
                    $toastElement.addClass(options.toastClass).addClass(iconClass);                                    // 234
                }                                                                                                      // 235
                                                                                                                       // 236
                if (map.title) {                                                                                       // 237
                    $titleElement.append(map.title).addClass(options.titleClass);                                      // 238
                    $toastElement.append($titleElement);                                                               // 239
                }                                                                                                      // 240
                                                                                                                       // 241
                if (map.message) {                                                                                     // 242
                    $messageElement.append(map.message).addClass(options.messageClass);                                // 243
                    $toastElement.append($messageElement);                                                             // 244
                }                                                                                                      // 245
                                                                                                                       // 246
                if (options.closeButton) {                                                                             // 247
                    $closeElement.addClass('toast-close-button').attr("role", "button");                               // 248
                    $toastElement.prepend($closeElement);                                                              // 249
                }                                                                                                      // 250
                                                                                                                       // 251
                if (options.progressBar) {                                                                             // 252
                    $progressElement.addClass('toast-progress');                                                       // 253
                    $toastElement.prepend($progressElement);                                                           // 254
                }                                                                                                      // 255
                                                                                                                       // 256
                $toastElement.hide();                                                                                  // 257
                if (options.newestOnTop) {                                                                             // 258
                    $container.prepend($toastElement);                                                                 // 259
                } else {                                                                                               // 260
                    $container.append($toastElement);                                                                  // 261
                }                                                                                                      // 262
                                                                                                                       // 263
                                                                                                                       // 264
                $toastElement[options.showMethod](                                                                     // 265
                    { duration: options.showDuration, easing: options.showEasing, complete: options.onShown }          // 266
                );                                                                                                     // 267
                                                                                                                       // 268
                if (options.timeOut > 0) {                                                                             // 269
                    intervalId = setTimeout(hideToast, options.timeOut);                                               // 270
                    progressBar.maxHideTime = parseFloat(options.timeOut);                                             // 271
                    progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;                              // 272
                    if (options.progressBar) {                                                                         // 273
                        progressBar.intervalId = setInterval(updateProgress, 10);                                      // 274
                    }                                                                                                  // 275
                }                                                                                                      // 276
                                                                                                                       // 277
                $toastElement.hover(stickAround, delayedHideToast);                                                    // 278
                if (!options.onclick && options.tapToDismiss) {                                                        // 279
                    $toastElement.click(hideToast);                                                                    // 280
                }                                                                                                      // 281
                                                                                                                       // 282
                if (options.closeButton && $closeElement) {                                                            // 283
                    $closeElement.click(function (event) {                                                             // 284
                        if( event.stopPropagation ) {                                                                  // 285
                            event.stopPropagation();                                                                   // 286
                        } else if( event.cancelBubble !== undefined && event.cancelBubble !== true ) {                 // 287
                            event.cancelBubble = true;                                                                 // 288
                        }                                                                                              // 289
                        hideToast(true);                                                                               // 290
                    });                                                                                                // 291
                }                                                                                                      // 292
                                                                                                                       // 293
                if (options.onclick) {                                                                                 // 294
                    $toastElement.click(function () {                                                                  // 295
                        options.onclick();                                                                             // 296
                        hideToast();                                                                                   // 297
                    });                                                                                                // 298
                }                                                                                                      // 299
                                                                                                                       // 300
                publish(response);                                                                                     // 301
                                                                                                                       // 302
                if (options.debug && console) {                                                                        // 303
                    console.log(response);                                                                             // 304
                }                                                                                                      // 305
                                                                                                                       // 306
                return $toastElement;                                                                                  // 307
                                                                                                                       // 308
                function hideToast(override) {                                                                         // 309
                    if ($(':focus', $toastElement).length && !override) {                                              // 310
                        return;                                                                                        // 311
                    }                                                                                                  // 312
                    clearTimeout(progressBar.intervalId);                                                              // 313
                    return $toastElement[options.hideMethod]({                                                         // 314
                        duration: options.hideDuration,                                                                // 315
                        easing: options.hideEasing,                                                                    // 316
                        complete: function () {                                                                        // 317
                            removeToast($toastElement);                                                                // 318
                            if (options.onHidden && response.state !== 'hidden') {                                     // 319
                                options.onHidden();                                                                    // 320
                            }                                                                                          // 321
                            response.state = 'hidden';                                                                 // 322
                            response.endTime = new Date();                                                             // 323
                            publish(response);                                                                         // 324
                        }                                                                                              // 325
                    });                                                                                                // 326
                }                                                                                                      // 327
                                                                                                                       // 328
                function delayedHideToast() {                                                                          // 329
                    if (options.timeOut > 0 || options.extendedTimeOut > 0) {                                          // 330
                        intervalId = setTimeout(hideToast, options.extendedTimeOut);                                   // 331
                        progressBar.maxHideTime = parseFloat(options.extendedTimeOut);                                 // 332
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;                          // 333
                    }                                                                                                  // 334
                }                                                                                                      // 335
                                                                                                                       // 336
                function stickAround() {                                                                               // 337
                    clearTimeout(intervalId);                                                                          // 338
                    progressBar.hideEta = 0;                                                                           // 339
                    $toastElement.stop(true, true)[options.showMethod](                                                // 340
                        { duration: options.showDuration, easing: options.showEasing }                                 // 341
                    );                                                                                                 // 342
                }                                                                                                      // 343
                                                                                                                       // 344
                function updateProgress() {                                                                            // 345
                    var percentage = ((progressBar.hideEta - (new Date().getTime())) / progressBar.maxHideTime) * 100; // 346
                    $progressElement.width(percentage + '%');                                                          // 347
                }                                                                                                      // 348
            }                                                                                                          // 349
                                                                                                                       // 350
            function getOptions() {                                                                                    // 351
                return $.extend({}, getDefaults(), toastr.options);                                                    // 352
            }                                                                                                          // 353
                                                                                                                       // 354
            function removeToast($toastElement) {                                                                      // 355
                if (!$container) { $container = getContainer(); }                                                      // 356
                if ($toastElement.is(':visible')) {                                                                    // 357
                    return;                                                                                            // 358
                }                                                                                                      // 359
                $toastElement.remove();                                                                                // 360
                $toastElement = null;                                                                                  // 361
                if ($container.children().length === 0) {                                                              // 362
                    $container.remove();                                                                               // 363
                }                                                                                                      // 364
            }                                                                                                          // 365
            //#endregion                                                                                               // 366
                                                                                                                       // 367
        })();                                                                                                          // 368
    });                                                                                                                // 369
}(typeof define === 'function' && define.amd ? define : function (deps, factory) {                                     // 370
    if (typeof module !== 'undefined' && module.exports) { //Node                                                      // 371
        module.exports = factory(require('jquery'));                                                                   // 372
    } else {                                                                                                           // 373
        window['toastr'] = factory(window['jQuery']);                                                                  // 374
    }                                                                                                                  // 375
}));                                                                                                                   // 376
                                                                                                                       // 377
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['chrismbeckett:toastr'] = {};

})();
