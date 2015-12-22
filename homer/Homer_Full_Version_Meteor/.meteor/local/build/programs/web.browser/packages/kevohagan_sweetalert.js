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

(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/kevohagan:sweetalert/sweetalert/lib/sweet-alert.js                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// SweetAlert                                                                                                         // 1
// 2014-2015 (c) - Tristan Edwards                                                                                    // 2
// github.com/t4t5/sweetalert                                                                                         // 3
;(function(window, document, undefined) {                                                                             // 4
                                                                                                                      // 5
  var modalClass   = '.sweet-alert',                                                                                  // 6
      overlayClass = '.sweet-overlay',                                                                                // 7
      alertTypes   = ['error', 'warning', 'info', 'success', 'input', 'prompt'],                                      // 8
      defaultParams = {                                                                                               // 9
        title: '',                                                                                                    // 10
        text: '',                                                                                                     // 11
        type: null,                                                                                                   // 12
        allowOutsideClick: false,                                                                                     // 13
        showConfirmButton: true,                                                                                      // 14
        showCancelButton: false,                                                                                      // 15
        closeOnConfirm: true,                                                                                         // 16
        closeOnCancel: true,                                                                                          // 17
        confirmButtonText: 'OK',                                                                                      // 18
        confirmButtonColor: '#AEDEF4',                                                                                // 19
        cancelButtonText: 'Cancel',                                                                                   // 20
        imageUrl: null,                                                                                               // 21
        imageSize: null,                                                                                              // 22
        timer: null,                                                                                                  // 23
        customClass: '',                                                                                              // 24
        html: false,                                                                                                  // 25
        animation: true,                                                                                              // 26
        allowEscapeKey: true,                                                                                         // 27
        inputType: 'text'                                                                                             // 28
      };                                                                                                              // 29
                                                                                                                      // 30
                                                                                                                      // 31
  /*                                                                                                                  // 32
   * Manipulate DOM                                                                                                   // 33
   */                                                                                                                 // 34
                                                                                                                      // 35
  var getModal = function() {                                                                                         // 36
    var $modal = document.querySelector(modalClass);                                                                  // 37
                                                                                                                      // 38
    if (!$modal) {                                                                                                    // 39
      sweetAlertInitialize();                                                                                         // 40
      $modal = getModal();                                                                                            // 41
    }                                                                                                                 // 42
                                                                                                                      // 43
    return $modal;                                                                                                    // 44
  };                                                                                                                  // 45
                                                                                                                      // 46
  var getInput = function() {                                                                                         // 47
    var modal = getModal();                                                                                           // 48
    if (modal) {                                                                                                      // 49
      return modal.querySelector('input');                                                                            // 50
    }                                                                                                                 // 51
  },                                                                                                                  // 52
  getOverlay = function() {                                                                                           // 53
    return document.querySelector(overlayClass);                                                                      // 54
  },                                                                                                                  // 55
  hasClass = function(elem, className) {                                                                              // 56
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');                                        // 57
  },                                                                                                                  // 58
  addClass = function(elem, className) {                                                                              // 59
    if (!hasClass(elem, className)) {                                                                                 // 60
      elem.className += ' ' + className;                                                                              // 61
    }                                                                                                                 // 62
  },                                                                                                                  // 63
  removeClass = function(elem, className) {                                                                           // 64
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';                                              // 65
    if (hasClass(elem, className)) {                                                                                  // 66
      while (newClass.indexOf(' ' + className + ' ') >= 0) {                                                          // 67
        newClass = newClass.replace(' ' + className + ' ', ' ');                                                      // 68
      }                                                                                                               // 69
      elem.className = newClass.replace(/^\s+|\s+$/g, '');                                                            // 70
    }                                                                                                                 // 71
  },                                                                                                                  // 72
  escapeHtml = function(str) {                                                                                        // 73
    var div = document.createElement('div');                                                                          // 74
    div.appendChild(document.createTextNode(str));                                                                    // 75
    return div.innerHTML;                                                                                             // 76
  },                                                                                                                  // 77
  _show = function(elem) {                                                                                            // 78
    elem.style.opacity = '';                                                                                          // 79
    elem.style.display = 'block';                                                                                     // 80
  },                                                                                                                  // 81
  show = function(elems) {                                                                                            // 82
    if (elems && !elems.length) {                                                                                     // 83
      return _show(elems);                                                                                            // 84
    }                                                                                                                 // 85
    for (var i = 0; i < elems.length; ++i) {                                                                          // 86
      _show(elems[i]);                                                                                                // 87
    }                                                                                                                 // 88
  },                                                                                                                  // 89
  _hide = function(elem) {                                                                                            // 90
    elem.style.opacity = '';                                                                                          // 91
    elem.style.display = 'none';                                                                                      // 92
  },                                                                                                                  // 93
  hide = function(elems) {                                                                                            // 94
    if (elems && !elems.length) {                                                                                     // 95
      return _hide(elems);                                                                                            // 96
    }                                                                                                                 // 97
    for (var i = 0; i < elems.length; ++i) {                                                                          // 98
      _hide(elems[i]);                                                                                                // 99
    }                                                                                                                 // 100
  },                                                                                                                  // 101
  isDescendant = function(parent, child) {                                                                            // 102
    var node = child.parentNode;                                                                                      // 103
    while (node !== null) {                                                                                           // 104
      if (node === parent) {                                                                                          // 105
        return true;                                                                                                  // 106
      }                                                                                                               // 107
      node = node.parentNode;                                                                                         // 108
    }                                                                                                                 // 109
    return false;                                                                                                     // 110
  },                                                                                                                  // 111
  getTopMargin = function(elem) {                                                                                     // 112
    elem.style.left = '-9999px';                                                                                      // 113
    elem.style.display = 'block';                                                                                     // 114
                                                                                                                      // 115
    var height = elem.clientHeight,                                                                                   // 116
        padding;                                                                                                      // 117
    if (typeof getComputedStyle !== "undefined") { // IE 8                                                            // 118
      padding = parseInt(getComputedStyle(elem).getPropertyValue('padding-top'), 10);                                 // 119
    } else {                                                                                                          // 120
      padding = parseInt(elem.currentStyle.padding);                                                                  // 121
    }                                                                                                                 // 122
                                                                                                                      // 123
    elem.style.left = '';                                                                                             // 124
    elem.style.display = 'none';                                                                                      // 125
    return ('-' + parseInt((height + padding) / 2) + 'px');                                                           // 126
  },                                                                                                                  // 127
  fadeIn = function(elem, interval) {                                                                                 // 128
    if (+elem.style.opacity < 1) {                                                                                    // 129
      interval = interval || 16;                                                                                      // 130
      elem.style.opacity = 0;                                                                                         // 131
      elem.style.display = 'block';                                                                                   // 132
      var last = +new Date();                                                                                         // 133
      var tick = function() {                                                                                         // 134
        elem.style.opacity = +elem.style.opacity + (new Date() - last) / 100;                                         // 135
        last = +new Date();                                                                                           // 136
                                                                                                                      // 137
        if (+elem.style.opacity < 1) {                                                                                // 138
          setTimeout(tick, interval);                                                                                 // 139
        }                                                                                                             // 140
      };                                                                                                              // 141
      tick();                                                                                                         // 142
    }                                                                                                                 // 143
    elem.style.display = 'block'; //fallback IE8                                                                      // 144
  },                                                                                                                  // 145
  fadeOut = function(elem, interval) {                                                                                // 146
    interval = interval || 16;                                                                                        // 147
    elem.style.opacity = 1;                                                                                           // 148
    var last = +new Date();                                                                                           // 149
    var tick = function() {                                                                                           // 150
      elem.style.opacity = +elem.style.opacity - (new Date() - last) / 100;                                           // 151
      last = +new Date();                                                                                             // 152
                                                                                                                      // 153
      if (+elem.style.opacity > 0) {                                                                                  // 154
        setTimeout(tick, interval);                                                                                   // 155
      } else {                                                                                                        // 156
        elem.style.display = 'none';                                                                                  // 157
      }                                                                                                               // 158
    };                                                                                                                // 159
    tick();                                                                                                           // 160
  },                                                                                                                  // 161
  fireClick = function(node) {                                                                                        // 162
    // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
    // Then fixed for today's Chrome browser.                                                                         // 164
    if (typeof MouseEvent === 'function') {                                                                           // 165
      // Up-to-date approach                                                                                          // 166
      var mevt = new MouseEvent('click', {                                                                            // 167
        view: window,                                                                                                 // 168
        bubbles: false,                                                                                               // 169
        cancelable: true                                                                                              // 170
      });                                                                                                             // 171
      node.dispatchEvent(mevt);                                                                                       // 172
    } else if ( document.createEvent ) {                                                                              // 173
      // Fallback                                                                                                     // 174
      var evt = document.createEvent('MouseEvents');                                                                  // 175
      evt.initEvent('click', false, false);                                                                           // 176
      node.dispatchEvent(evt);                                                                                        // 177
    } else if (document.createEventObject) {                                                                          // 178
      node.fireEvent('onclick') ;                                                                                     // 179
    } else if (typeof node.onclick === 'function' ) {                                                                 // 180
      node.onclick();                                                                                                 // 181
    }                                                                                                                 // 182
  },                                                                                                                  // 183
  stopEventPropagation = function(e) {                                                                                // 184
    // In particular, make sure the space bar doesn't scroll the main window.                                         // 185
    if (typeof e.stopPropagation === 'function') {                                                                    // 186
      e.stopPropagation();                                                                                            // 187
      e.preventDefault();                                                                                             // 188
    } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {                                         // 189
      window.event.cancelBubble = true;                                                                               // 190
    }                                                                                                                 // 191
  };                                                                                                                  // 192
                                                                                                                      // 193
  // Remember state in cases where opening and handling a modal will fiddle with it.                                  // 194
  var previousActiveElement,                                                                                          // 195
      previousWindowKeyDown,                                                                                          // 196
      lastFocusedButton;                                                                                              // 197
                                                                                                                      // 198
                                                                                                                      // 199
  /*                                                                                                                  // 200
   * Add modal + overlay to DOM                                                                                       // 201
   */                                                                                                                 // 202
                                                                                                                      // 203
  var sweetAlertInitialize = function() {                                                                             // 204
    var sweetHTML = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error"><span class="sa-x-mark"><span class="sa-line sa-left"></span><span class="sa-line sa-right"></span></span></div><div class="sa-icon sa-warning"> <span class="sa-body"></span> <span class="sa-dot"></span> </div> <div class="sa-icon sa-info"></div> <div class="sa-icon sa-success"> <span class="sa-line sa-tip"></span> <span class="sa-line sa-long"></span> <div class="sa-placeholder"></div> <div class="sa-fix"></div> </div> <div class="sa-icon sa-custom"></div> <h2>Title</h2><p>Text</p><fieldset><input type="text" tabIndex="3" /><div class="sa-input-error"></div></fieldset> <div class="sa-error-container"><div class="icon">!</div> <p>Not valid!</p></div> <button class="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK</button></div>',
        sweetWrap = document.createElement('div');                                                                    // 206
                                                                                                                      // 207
    sweetWrap.innerHTML = sweetHTML;                                                                                  // 208
                                                                                                                      // 209
    // Append elements to body                                                                                        // 210
    while (sweetWrap.firstChild) {                                                                                    // 211
      document.body.appendChild(sweetWrap.firstChild);                                                                // 212
    }                                                                                                                 // 213
  };                                                                                                                  // 214
                                                                                                                      // 215
                                                                                                                      // 216
                                                                                                                      // 217
  /*                                                                                                                  // 218
   * Global sweetAlert function                                                                                       // 219
   */                                                                                                                 // 220
  var sweetAlert, swal;                                                                                               // 221
                                                                                                                      // 222
  sweetAlert = swal = function() {                                                                                    // 223
    var customizations = arguments[0];                                                                                // 224
                                                                                                                      // 225
    addClass(document.body, 'stop-scrolling');                                                                        // 226
                                                                                                                      // 227
    resetInput();                                                                                                     // 228
                                                                                                                      // 229
    /*                                                                                                                // 230
     * Use argument if defined or default value from params object otherwise.                                         // 231
     * Supports the case where a default value is boolean true and should be                                          // 232
     * overridden by a corresponding explicit argument which is boolean false.                                        // 233
     */                                                                                                               // 234
    function argumentOrDefault(key) {                                                                                 // 235
      var args = customizations;                                                                                      // 236
                                                                                                                      // 237
      if (typeof args[key] !== 'undefined') {                                                                         // 238
        return args[key];                                                                                             // 239
      } else {                                                                                                        // 240
        return defaultParams[key];                                                                                    // 241
      }                                                                                                               // 242
    }                                                                                                                 // 243
                                                                                                                      // 244
    if (arguments[0] === undefined) {                                                                                 // 245
      logStr('SweetAlert expects at least 1 attribute!');                                                             // 246
      return false;                                                                                                   // 247
    }                                                                                                                 // 248
                                                                                                                      // 249
    var params = extend({}, defaultParams);                                                                           // 250
                                                                                                                      // 251
    switch (typeof arguments[0]) {                                                                                    // 252
                                                                                                                      // 253
      // Ex: swal("Hello", "Just testing", "info");                                                                   // 254
      case 'string':                                                                                                  // 255
        params.title = arguments[0];                                                                                  // 256
        params.text  = arguments[1] || '';                                                                            // 257
        params.type  = arguments[2] || '';                                                                            // 258
                                                                                                                      // 259
        break;                                                                                                        // 260
                                                                                                                      // 261
      // Ex: swal({title:"Hello", text: "Just testing", type: "info"});                                               // 262
      case 'object':                                                                                                  // 263
        if (arguments[0].title === undefined) {                                                                       // 264
          logStr('Missing "title" argument!');                                                                        // 265
          return false;                                                                                               // 266
        }                                                                                                             // 267
                                                                                                                      // 268
        params.title = arguments[0].title;                                                                            // 269
                                                                                                                      // 270
        var availableCustoms = [                                                                                      // 271
          'text',                                                                                                     // 272
          'type',                                                                                                     // 273
          'customClass',                                                                                              // 274
          'allowOutsideClick',                                                                                        // 275
          'showConfirmButton',                                                                                        // 276
          'showCancelButton',                                                                                         // 277
          'closeOnConfirm',                                                                                           // 278
          'closeOnCancel',                                                                                            // 279
          'timer',                                                                                                    // 280
          'confirmButtonColor',                                                                                       // 281
          'cancelButtonText',                                                                                         // 282
          'imageUrl',                                                                                                 // 283
          'imageSize',                                                                                                // 284
          'html',                                                                                                     // 285
          'animation',                                                                                                // 286
          'allowEscapeKey',                                                                                           // 287
          'inputType'];                                                                                               // 288
                                                                                                                      // 289
        // It would be nice to just use .forEach here, but IE8... :(                                                  // 290
        var numCustoms = availableCustoms.length;                                                                     // 291
        for (var customIndex = 0; customIndex < numCustoms; customIndex++) {                                          // 292
          var customName = availableCustoms[customIndex];                                                             // 293
          params[customName] = argumentOrDefault(customName);                                                         // 294
        }                                                                                                             // 295
                                                                                                                      // 296
        // Show "Confirm" instead of "OK" if cancel button is visible                                                 // 297
        params.confirmButtonText  = (params.showCancelButton) ? 'Confirm' : defaultParams.confirmButtonText;          // 298
        params.confirmButtonText  = argumentOrDefault('confirmButtonText');                                           // 299
                                                                                                                      // 300
        // Function to call when clicking on cancel/OK                                                                // 301
        params.doneFunction       = arguments[1] || null;                                                             // 302
                                                                                                                      // 303
        break;                                                                                                        // 304
                                                                                                                      // 305
      default:                                                                                                        // 306
        logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]);             // 307
        return false;                                                                                                 // 308
                                                                                                                      // 309
    }                                                                                                                 // 310
                                                                                                                      // 311
    setParameters(params);                                                                                            // 312
    fixVerticalPosition();                                                                                            // 313
    openModal();                                                                                                      // 314
                                                                                                                      // 315
                                                                                                                      // 316
    // Modal interactions                                                                                             // 317
    var modal = getModal();                                                                                           // 318
                                                                                                                      // 319
    // Mouse interactions                                                                                             // 320
    var onButtonEvent = function(event) {                                                                             // 321
      var e = event || window.event;                                                                                  // 322
      var target = e.target || e.srcElement,                                                                          // 323
          targetedConfirm    = (target.className.indexOf("confirm") !== -1),                                          // 324
          targetedOverlay    = (target.className.indexOf("sweet-overlay") !== -1),                                    // 325
          modalIsVisible     = hasClass(modal, 'visible'),                                                            // 326
          doneFunctionExists = (params.doneFunction && modal.getAttribute('data-has-done-function') === 'true');      // 327
                                                                                                                      // 328
      switch (e.type) {                                                                                               // 329
        case ("mouseover"):                                                                                           // 330
          if (targetedConfirm && params.confirmButtonColor) {                                                         // 331
            target.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.04);                          // 332
          }                                                                                                           // 333
          break;                                                                                                      // 334
        case ("mouseout"):                                                                                            // 335
          if (targetedConfirm && params.confirmButtonColor) {                                                         // 336
            target.style.backgroundColor = params.confirmButtonColor;                                                 // 337
          }                                                                                                           // 338
          break;                                                                                                      // 339
        case ("mousedown"):                                                                                           // 340
          if (targetedConfirm && params.confirmButtonColor) {                                                         // 341
            target.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.14);                          // 342
          }                                                                                                           // 343
          break;                                                                                                      // 344
        case ("mouseup"):                                                                                             // 345
          if (targetedConfirm && params.confirmButtonColor) {                                                         // 346
            target.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.04);                          // 347
          }                                                                                                           // 348
          break;                                                                                                      // 349
        case ("focus"):                                                                                               // 350
          var $confirmButton = modal.querySelector('button.confirm'),                                                 // 351
              $cancelButton  = modal.querySelector('button.cancel');                                                  // 352
                                                                                                                      // 353
          if (targetedConfirm) {                                                                                      // 354
            $cancelButton.style.boxShadow = 'none';                                                                   // 355
          } else {                                                                                                    // 356
            $confirmButton.style.boxShadow = 'none';                                                                  // 357
          }                                                                                                           // 358
          break;                                                                                                      // 359
        case ("click"):                                                                                               // 360
          if (targetedConfirm && doneFunctionExists && modalIsVisible) { // Clicked "confirm"                         // 361
            handleConfirm();                                                                                          // 362
          } else if ((doneFunctionExists && modalIsVisible) || targetedOverlay) { // Clicked "cancel"                 // 363
            handleCancel();                                                                                           // 364
          } else if (isDescendant(modal, target) && target.tagName === "BUTTON") {                                    // 365
            sweetAlert.close();                                                                                       // 366
          }                                                                                                           // 367
          break;                                                                                                      // 368
      }                                                                                                               // 369
    };                                                                                                                // 370
                                                                                                                      // 371
    function handleConfirm() {                                                                                        // 372
      var callbackValue = true;                                                                                       // 373
                                                                                                                      // 374
      if (hasClass(modal, 'show-input')) {                                                                            // 375
        callbackValue = modal.querySelector('input').value;                                                           // 376
                                                                                                                      // 377
        if (!callbackValue) {                                                                                         // 378
          callbackValue = "";                                                                                         // 379
        }                                                                                                             // 380
      }                                                                                                               // 381
                                                                                                                      // 382
      params.doneFunction(callbackValue);                                                                             // 383
                                                                                                                      // 384
      if (params.closeOnConfirm) {                                                                                    // 385
        sweetAlert.close();                                                                                           // 386
      }                                                                                                               // 387
    }                                                                                                                 // 388
                                                                                                                      // 389
    function handleCancel() {                                                                                         // 390
      // Check if callback function expects a parameter (to track cancel actions)                                     // 391
      var functionAsStr          = String(params.doneFunction).replace(/\s/g, '');                                    // 392
      var functionHandlesCancel  = functionAsStr.substring(0, 9) === "function(" && functionAsStr.substring(9, 10) !== ")";
                                                                                                                      // 394
      if (functionHandlesCancel) {                                                                                    // 395
        params.doneFunction(false);                                                                                   // 396
      }                                                                                                               // 397
                                                                                                                      // 398
      if (params.closeOnCancel) {                                                                                     // 399
        sweetAlert.close();                                                                                           // 400
      }                                                                                                               // 401
    }                                                                                                                 // 402
                                                                                                                      // 403
    var $buttons = modal.querySelectorAll('button');                                                                  // 404
    for (var i = 0; i < $buttons.length; i++) {                                                                       // 405
      $buttons[i].onclick     = onButtonEvent;                                                                        // 406
      $buttons[i].onmouseover = onButtonEvent;                                                                        // 407
      $buttons[i].onmouseout  = onButtonEvent;                                                                        // 408
      $buttons[i].onmousedown = onButtonEvent;                                                                        // 409
      $buttons[i].onmouseup   = onButtonEvent;                                                                        // 410
      $buttons[i].onfocus     = onButtonEvent;                                                                        // 411
    }                                                                                                                 // 412
                                                                                                                      // 413
    getOverlay().onclick = onButtonEvent;                                                                             // 414
                                                                                                                      // 415
                                                                                                                      // 416
    // Keyboard interactions                                                                                          // 417
    var $okButton = modal.querySelector('button.confirm'),                                                            // 418
        $cancelButton = modal.querySelector('button.cancel'),                                                         // 419
        $modalButtons = modal.querySelectorAll('button[tabindex]');                                                   // 420
                                                                                                                      // 421
                                                                                                                      // 422
    function handleKeyDown(event) {                                                                                   // 423
      var e = event || window.event;                                                                                  // 424
      var keyCode = e.keyCode || e.which;                                                                             // 425
                                                                                                                      // 426
      if ([9,13,32,27].indexOf(keyCode) === -1) {                                                                     // 427
        // Don't do work on keys we don't care about.                                                                 // 428
        return;                                                                                                       // 429
      }                                                                                                               // 430
                                                                                                                      // 431
      var $targetElement = e.target || e.srcElement;                                                                  // 432
                                                                                                                      // 433
      var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.                                 // 434
      for (var i = 0; i < $modalButtons.length; i++) {                                                                // 435
        if ($targetElement === $modalButtons[i]) {                                                                    // 436
          btnIndex = i;                                                                                               // 437
          break;                                                                                                      // 438
        }                                                                                                             // 439
      }                                                                                                               // 440
                                                                                                                      // 441
      if (keyCode === 9) {                                                                                            // 442
        // TAB                                                                                                        // 443
        if (btnIndex === -1) {                                                                                        // 444
          // No button focused. Jump to the confirm button.                                                           // 445
          $targetElement = $okButton;                                                                                 // 446
        } else {                                                                                                      // 447
          // Cycle to the next button                                                                                 // 448
          if (btnIndex === $modalButtons.length - 1) {                                                                // 449
            $targetElement = $modalButtons[0];                                                                        // 450
          } else {                                                                                                    // 451
            $targetElement = $modalButtons[btnIndex + 1];                                                             // 452
          }                                                                                                           // 453
        }                                                                                                             // 454
                                                                                                                      // 455
        stopEventPropagation(e);                                                                                      // 456
        $targetElement.focus();                                                                                       // 457
                                                                                                                      // 458
        if (params.confirmButtonColor) {                                                                              // 459
          setFocusStyle($targetElement, params.confirmButtonColor);                                                   // 460
        }                                                                                                             // 461
                                                                                                                      // 462
      } else {                                                                                                        // 463
        if (keyCode === 13) {                                                                                         // 464
          if ($targetElement.tagName === "INPUT") {                                                                   // 465
            $targetElement = $okButton;                                                                               // 466
            $okButton.focus();                                                                                        // 467
          }                                                                                                           // 468
                                                                                                                      // 469
          if (btnIndex === -1) {                                                                                      // 470
            // ENTER/SPACE clicked outside of a button.                                                               // 471
            $targetElement = $okButton;                                                                               // 472
          } else {                                                                                                    // 473
            // Do nothing - let the browser handle it.                                                                // 474
            $targetElement = undefined;                                                                               // 475
          }                                                                                                           // 476
        } else if (keyCode === 27 && params.allowEscapeKey === true) {                                                // 477
          $targetElement = $cancelButton;                                                                             // 478
          fireClick($targetElement, e);                                                                               // 479
        } else {                                                                                                      // 480
          // Fallback - let the browser handle it.                                                                    // 481
          $targetElement = undefined;                                                                                 // 482
        }                                                                                                             // 483
      }                                                                                                               // 484
    }                                                                                                                 // 485
                                                                                                                      // 486
    previousWindowKeyDown = window.onkeydown;                                                                         // 487
                                                                                                                      // 488
    window.onkeydown = handleKeyDown;                                                                                 // 489
                                                                                                                      // 490
                                                                                                                      // 491
    /*                                                                                                                // 492
     * Makes stuff unselectable. Is it needed? -->                                                                    // 493
     */                                                                                                               // 494
                                                                                                                      // 495
    // function handleOnBlur(event) {                                                                                 // 496
    //   var e = event || window.event;                                                                               // 497
    //   var $targetElement = e.target || e.srcElement,                                                               // 498
    //       $focusElement = e.relatedTarget,                                                                         // 499
    //       modalIsVisible = hasClass(modal, 'visible');                                                             // 500
                                                                                                                      // 501
    //   if (modalIsVisible) {                                                                                        // 502
    //     var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.                            // 503
                                                                                                                      // 504
    //     if ($focusElement !== null) {                                                                              // 505
    //       // If we picked something in the DOM to focus to, let's see if it was a button.                          // 506
    //       for (var i = 0; i < $modalButtons.length; i++) {                                                         // 507
    //         if ($focusElement === $modalButtons[i]) {                                                              // 508
    //           btnIndex = i;                                                                                        // 509
    //           break;                                                                                               // 510
    //         }                                                                                                      // 511
    //       }                                                                                                        // 512
                                                                                                                      // 513
    //       if (btnIndex === -1) {                                                                                   // 514
    //         // Something in the dom, but not a visible button. Focus back on the button.                           // 515
    //         $targetElement.focus();                                                                                // 516
    //       }                                                                                                        // 517
    //     } else {                                                                                                   // 518
    //       // Exiting the DOM (e.g. clicked in the URL bar);                                                        // 519
    //       lastFocusedButton = $targetElement;                                                                      // 520
    //     }                                                                                                          // 521
    //   }                                                                                                            // 522
    // }                                                                                                              // 523
                                                                                                                      // 524
    // $okButton.onblur = handleOnBlur;                                                                               // 525
    // $cancelButton.onblur = handleOnBlur;                                                                           // 526
                                                                                                                      // 527
    window.onfocus = function() {                                                                                     // 528
      // When the user has focused away and focused back from the whole window.                                       // 529
      window.setTimeout(function() {                                                                                  // 530
        // Put in a timeout to jump out of the event sequence. Calling focus() in the event                           // 531
        // sequence confuses things.                                                                                  // 532
        if (lastFocusedButton !== undefined) {                                                                        // 533
          lastFocusedButton.focus();                                                                                  // 534
          lastFocusedButton = undefined;                                                                              // 535
        }                                                                                                             // 536
      }, 0);                                                                                                          // 537
    };                                                                                                                // 538
  };                                                                                                                  // 539
                                                                                                                      // 540
                                                                                                                      // 541
  /*                                                                                                                  // 542
   * Set default params for each popup                                                                                // 543
   * @param {Object} userParams                                                                                       // 544
   */                                                                                                                 // 545
  sweetAlert.setDefaults = swal.setDefaults = function(userParams) {                                                  // 546
    if (!userParams) {                                                                                                // 547
      throw new Error('userParams is required');                                                                      // 548
    }                                                                                                                 // 549
    if (typeof userParams !== 'object') {                                                                             // 550
      throw new Error('userParams has to be a object');                                                               // 551
    }                                                                                                                 // 552
                                                                                                                      // 553
    extend(defaultParams, userParams);                                                                                // 554
  };                                                                                                                  // 555
                                                                                                                      // 556
                                                                                                                      // 557
  /*                                                                                                                  // 558
   * Set type, text and actions on modal                                                                              // 559
   */                                                                                                                 // 560
                                                                                                                      // 561
  function setParameters(params) {                                                                                    // 562
    var modal = getModal();                                                                                           // 563
                                                                                                                      // 564
    var $title = modal.querySelector('h2'),                                                                           // 565
        $text = modal.querySelector('p'),                                                                             // 566
        $cancelBtn = modal.querySelector('button.cancel'),                                                            // 567
        $confirmBtn = modal.querySelector('button.confirm');                                                          // 568
                                                                                                                      // 569
    // Title                                                                                                          // 570
    $title.innerHTML = (params.html) ? params.title : escapeHtml(params.title).split("\n").join("<br>");              // 571
                                                                                                                      // 572
    // Text                                                                                                           // 573
    $text.innerHTML = (params.html) ? params.text : escapeHtml(params.text || '').split("\n").join("<br>");           // 574
                                                                                                                      // 575
    if (params.text) {                                                                                                // 576
      show($text);                                                                                                    // 577
    }                                                                                                                 // 578
                                                                                                                      // 579
    //Custom Class                                                                                                    // 580
    if (params.customClass) {                                                                                         // 581
      addClass(modal, params.customClass);                                                                            // 582
      modal.setAttribute('data-custom-class', params.customClass);                                                    // 583
    } else {                                                                                                          // 584
      // Find previously set classes and remove them                                                                  // 585
      var customClass = modal.getAttribute('data-custom-class');                                                      // 586
      removeClass(modal, customClass);                                                                                // 587
      modal.setAttribute('data-custom-class', "");                                                                    // 588
    }                                                                                                                 // 589
                                                                                                                      // 590
    // Icon                                                                                                           // 591
    hide(modal.querySelectorAll('.sa-icon'));                                                                         // 592
    if (params.type && !isIE8()) {                                                                                    // 593
      var validType = false;                                                                                          // 594
      for (var i = 0; i < alertTypes.length; i++) {                                                                   // 595
        if (params.type === alertTypes[i]) {                                                                          // 596
          validType = true;                                                                                           // 597
          break;                                                                                                      // 598
        }                                                                                                             // 599
      }                                                                                                               // 600
      if (!validType) {                                                                                               // 601
        logStr('Unknown alert type: ' + params.type);                                                                 // 602
        return false;                                                                                                 // 603
      }                                                                                                               // 604
                                                                                                                      // 605
      var typesWithIcons = ['success', 'error', 'warning', 'info'];                                                   // 606
      var $icon;                                                                                                      // 607
                                                                                                                      // 608
      if (typesWithIcons.indexOf(params.type) !== -1) {                                                               // 609
        $icon = modal.querySelector('.sa-icon.' + 'sa-' + params.type);                                               // 610
        show($icon);                                                                                                  // 611
      }                                                                                                               // 612
                                                                                                                      // 613
      var $input = getInput();                                                                                        // 614
                                                                                                                      // 615
      // Animate icon                                                                                                 // 616
      switch (params.type) {                                                                                          // 617
                                                                                                                      // 618
        case "success":                                                                                               // 619
          addClass($icon, 'animate');                                                                                 // 620
          addClass($icon.querySelector('.sa-tip'), 'animateSuccessTip');                                              // 621
          addClass($icon.querySelector('.sa-long'), 'animateSuccessLong');                                            // 622
          break;                                                                                                      // 623
                                                                                                                      // 624
        case "error":                                                                                                 // 625
          addClass($icon, 'animateErrorIcon');                                                                        // 626
          addClass($icon.querySelector('.sa-x-mark'), 'animateXMark');                                                // 627
          break;                                                                                                      // 628
                                                                                                                      // 629
        case "warning":                                                                                               // 630
          addClass($icon, 'pulseWarning');                                                                            // 631
          addClass($icon.querySelector('.sa-body'), 'pulseWarningIns');                                               // 632
          addClass($icon.querySelector('.sa-dot'), 'pulseWarningIns');                                                // 633
          break;                                                                                                      // 634
                                                                                                                      // 635
        case "input":                                                                                                 // 636
        case "prompt":                                                                                                // 637
          $input.setAttribute('type', params.inputType);                                                              // 638
          addClass(modal, 'show-input');                                                                              // 639
          setTimeout(function() {                                                                                     // 640
            $input.focus();                                                                                           // 641
            $input.addEventListener('keyup', swal.resetInputError);                                                   // 642
          }, 400);                                                                                                    // 643
          break;                                                                                                      // 644
      }                                                                                                               // 645
    }                                                                                                                 // 646
                                                                                                                      // 647
    // Custom image                                                                                                   // 648
    if (params.imageUrl) {                                                                                            // 649
      var $customIcon = modal.querySelector('.sa-icon.sa-custom');                                                    // 650
                                                                                                                      // 651
      $customIcon.style.backgroundImage = 'url(' + params.imageUrl + ')';                                             // 652
      show($customIcon);                                                                                              // 653
                                                                                                                      // 654
      var _imgWidth  = 80,                                                                                            // 655
          _imgHeight = 80;                                                                                            // 656
                                                                                                                      // 657
      if (params.imageSize) {                                                                                         // 658
        var dimensions = params.imageSize.toString().split('x');                                                      // 659
        var imgWidth   = dimensions[0];                                                                               // 660
        var imgHeight  = dimensions[1];                                                                               // 661
                                                                                                                      // 662
        if (!imgWidth || !imgHeight) {                                                                                // 663
          logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + params.imageSize);              // 664
        } else {                                                                                                      // 665
          _imgWidth  = imgWidth;                                                                                      // 666
          _imgHeight = imgHeight;                                                                                     // 667
        }                                                                                                             // 668
      }                                                                                                               // 669
      $customIcon.setAttribute('style', $customIcon.getAttribute('style') + 'width:' + _imgWidth + 'px; height:' + _imgHeight + 'px');
    }                                                                                                                 // 671
                                                                                                                      // 672
    // Show cancel button?                                                                                            // 673
    modal.setAttribute('data-has-cancel-button', params.showCancelButton);                                            // 674
    if (params.showCancelButton) {                                                                                    // 675
      $cancelBtn.style.display = 'inline-block';                                                                      // 676
    } else {                                                                                                          // 677
      hide($cancelBtn);                                                                                               // 678
    }                                                                                                                 // 679
                                                                                                                      // 680
    // Show confirm button?                                                                                           // 681
    modal.setAttribute('data-has-confirm-button', params.showConfirmButton);                                          // 682
    if (params.showConfirmButton) {                                                                                   // 683
      $confirmBtn.style.display = 'inline-block';                                                                     // 684
    } else {                                                                                                          // 685
      hide($confirmBtn);                                                                                              // 686
    }                                                                                                                 // 687
                                                                                                                      // 688
    // Edit text on cancel and confirm buttons                                                                        // 689
    if (params.cancelButtonText) {                                                                                    // 690
      $cancelBtn.innerHTML = escapeHtml(params.cancelButtonText);                                                     // 691
    }                                                                                                                 // 692
    if (params.confirmButtonText) {                                                                                   // 693
      $confirmBtn.innerHTML = escapeHtml(params.confirmButtonText);                                                   // 694
    }                                                                                                                 // 695
                                                                                                                      // 696
    if (params.confirmButtonColor) {                                                                                  // 697
      // Set confirm button to selected background color                                                              // 698
      $confirmBtn.style.backgroundColor = params.confirmButtonColor;                                                  // 699
                                                                                                                      // 700
      // Set box-shadow to default focused button                                                                     // 701
      setFocusStyle($confirmBtn, params.confirmButtonColor);                                                          // 702
    }                                                                                                                 // 703
                                                                                                                      // 704
    // Allow outside click?                                                                                           // 705
    modal.setAttribute('data-allow-ouside-click', params.allowOutsideClick);                                          // 706
                                                                                                                      // 707
    // Done-function                                                                                                  // 708
    var hasDoneFunction = (params.doneFunction) ? true : false;                                                       // 709
    modal.setAttribute('data-has-done-function', hasDoneFunction);                                                    // 710
                                                                                                                      // 711
    if (!params.animation) { // No animation                                                                          // 712
      modal.setAttribute('data-animation', 'none');                                                                   // 713
    } else if (typeof(params.animation) === "string") {                                                               // 714
      modal.setAttribute('data-animation', params.animation); // Custom animation                                     // 715
    } else {                                                                                                          // 716
      modal.setAttribute('data-animation', 'pop');                                                                    // 717
    }                                                                                                                 // 718
                                                                                                                      // 719
    // Close timer                                                                                                    // 720
    modal.setAttribute('data-timer', params.timer);                                                                   // 721
  }                                                                                                                   // 722
                                                                                                                      // 723
                                                                                                                      // 724
  /*                                                                                                                  // 725
   * Set hover, active and focus-states for buttons (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
   */                                                                                                                 // 727
                                                                                                                      // 728
  function colorLuminance(hex, lum) {                                                                                 // 729
    // Validate hex string                                                                                            // 730
    hex = String(hex).replace(/[^0-9a-f]/gi, '');                                                                     // 731
    if (hex.length < 6) {                                                                                             // 732
      hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];                                                                // 733
    }                                                                                                                 // 734
    lum = lum || 0;                                                                                                   // 735
                                                                                                                      // 736
    // Convert to decimal and change luminosity                                                                       // 737
    var rgb = "#", c, i;                                                                                              // 738
    for (i = 0; i < 3; i++) {                                                                                         // 739
      c = parseInt(hex.substr(i*2,2), 16);                                                                            // 740
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);                                         // 741
      rgb += ("00"+c).substr(c.length);                                                                               // 742
    }                                                                                                                 // 743
                                                                                                                      // 744
    return rgb;                                                                                                       // 745
  }                                                                                                                   // 746
                                                                                                                      // 747
  function extend(a, b){                                                                                              // 748
    for (var key in b) {                                                                                              // 749
      if (b.hasOwnProperty(key)) {                                                                                    // 750
        a[key] = b[key];                                                                                              // 751
      }                                                                                                               // 752
    }                                                                                                                 // 753
                                                                                                                      // 754
    return a;                                                                                                         // 755
  }                                                                                                                   // 756
                                                                                                                      // 757
  function hexToRgb(hex) {                                                                                            // 758
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);                                               // 759
    return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null; // 760
  }                                                                                                                   // 761
                                                                                                                      // 762
  // Add box-shadow style to button (depending on its chosen bg-color)                                                // 763
  function setFocusStyle($button, bgColor) {                                                                          // 764
    var rgbColor = hexToRgb(bgColor);                                                                                 // 765
    $button.style.boxShadow = '0 0 2px rgba(' + rgbColor +', 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)';              // 766
  }                                                                                                                   // 767
                                                                                                                      // 768
                                                                                                                      // 769
  // Animation when opening modal                                                                                     // 770
  function openModal() {                                                                                              // 771
    var modal = getModal();                                                                                           // 772
    fadeIn(getOverlay(), 10);                                                                                         // 773
    show(modal);                                                                                                      // 774
    addClass(modal, 'showSweetAlert');                                                                                // 775
    removeClass(modal, 'hideSweetAlert');                                                                             // 776
                                                                                                                      // 777
    previousActiveElement = document.activeElement;                                                                   // 778
    var $okButton = modal.querySelector('button.confirm');                                                            // 779
    $okButton.focus();                                                                                                // 780
                                                                                                                      // 781
    setTimeout(function() {                                                                                           // 782
      addClass(modal, 'visible');                                                                                     // 783
    }, 500);                                                                                                          // 784
                                                                                                                      // 785
    var timer = modal.getAttribute('data-timer');                                                                     // 786
                                                                                                                      // 787
    if (timer !== "null" && timer !== "") {                                                                           // 788
      modal.timeout = setTimeout(function() {                                                                         // 789
        sweetAlert.close();                                                                                           // 790
      }, timer);                                                                                                      // 791
    }                                                                                                                 // 792
  }                                                                                                                   // 793
                                                                                                                      // 794
                                                                                                                      // 795
  // Aninmation when closing modal                                                                                    // 796
  sweetAlert.close = swal.close = function() {                                                                        // 797
    var modal = getModal();                                                                                           // 798
                                                                                                                      // 799
    fadeOut(getOverlay(), 5);                                                                                         // 800
    fadeOut(modal, 5);                                                                                                // 801
    removeClass(modal, 'showSweetAlert');                                                                             // 802
    addClass(modal, 'hideSweetAlert');                                                                                // 803
    removeClass(modal, 'visible');                                                                                    // 804
                                                                                                                      // 805
                                                                                                                      // 806
    // Reset icon animations                                                                                          // 807
                                                                                                                      // 808
    var $successIcon = modal.querySelector('.sa-icon.sa-success');                                                    // 809
    removeClass($successIcon, 'animate');                                                                             // 810
    removeClass($successIcon.querySelector('.sa-tip'), 'animateSuccessTip');                                          // 811
    removeClass($successIcon.querySelector('.sa-long'), 'animateSuccessLong');                                        // 812
                                                                                                                      // 813
    var $errorIcon = modal.querySelector('.sa-icon.sa-error');                                                        // 814
    removeClass($errorIcon, 'animateErrorIcon');                                                                      // 815
    removeClass($errorIcon.querySelector('.sa-x-mark'), 'animateXMark');                                              // 816
                                                                                                                      // 817
    var $warningIcon = modal.querySelector('.sa-icon.sa-warning');                                                    // 818
    removeClass($warningIcon, 'pulseWarning');                                                                        // 819
    removeClass($warningIcon.querySelector('.sa-body'), 'pulseWarningIns');                                           // 820
    removeClass($warningIcon.querySelector('.sa-dot'), 'pulseWarningIns');                                            // 821
                                                                                                                      // 822
                                                                                                                      // 823
    removeClass(document.body, 'stop-scrolling');                                                                     // 824
                                                                                                                      // 825
    // Reset the page to its previous state                                                                           // 826
    window.onkeydown = previousWindowKeyDown;                                                                         // 827
    if (previousActiveElement) {                                                                                      // 828
      previousActiveElement.focus();                                                                                  // 829
    }                                                                                                                 // 830
    lastFocusedButton = undefined;                                                                                    // 831
    clearTimeout(modal.timeout);                                                                                      // 832
  };                                                                                                                  // 833
                                                                                                                      // 834
                                                                                                                      // 835
  /*                                                                                                                  // 836
   * Validation of the input field is done by user                                                                    // 837
   * If something is wrong => call showInputError with errorMessage                                                   // 838
   */                                                                                                                 // 839
                                                                                                                      // 840
  sweetAlert.showInputError = swal.showInputError = function(errorMessage) {                                          // 841
    var modal = getModal();                                                                                           // 842
                                                                                                                      // 843
    var $errorIcon = modal.querySelector('.sa-input-error');                                                          // 844
    addClass($errorIcon, 'show');                                                                                     // 845
                                                                                                                      // 846
    var $errorContainer = modal.querySelector('.sa-error-container');                                                 // 847
    addClass($errorContainer, 'show');                                                                                // 848
                                                                                                                      // 849
    $errorContainer.querySelector('p').innerHTML = errorMessage;                                                      // 850
                                                                                                                      // 851
    modal.querySelector('input').focus();                                                                             // 852
  };                                                                                                                  // 853
                                                                                                                      // 854
  function resetInput() {                                                                                             // 855
    var $modal = getModal();                                                                                          // 856
    var $input = getInput();                                                                                          // 857
                                                                                                                      // 858
    removeClass($modal, 'show-input');                                                                                // 859
    $input.value = "";                                                                                                // 860
    $input.setAttribute('type', defaultParams.inputType);                                                             // 861
                                                                                                                      // 862
    swal.resetInputError();                                                                                           // 863
  }                                                                                                                   // 864
                                                                                                                      // 865
  sweetAlert.resetInputError = swal.resetInputError = function(event) {                                               // 866
    // If press enter => ignore                                                                                       // 867
    if (event && event.keyCode === 13) {                                                                              // 868
      return false;                                                                                                   // 869
    }                                                                                                                 // 870
                                                                                                                      // 871
    var $modal = getModal();                                                                                          // 872
                                                                                                                      // 873
    var $errorIcon = $modal.querySelector('.sa-input-error');                                                         // 874
    removeClass($errorIcon, 'show');                                                                                  // 875
                                                                                                                      // 876
    var $errorContainer = $modal.querySelector('.sa-error-container');                                                // 877
    removeClass($errorContainer, 'show');                                                                             // 878
  };                                                                                                                  // 879
                                                                                                                      // 880
                                                                                                                      // 881
                                                                                                                      // 882
  /*                                                                                                                  // 883
   * Set "margin-top"-property on modal based on its computed height                                                  // 884
   */                                                                                                                 // 885
                                                                                                                      // 886
  function fixVerticalPosition() {                                                                                    // 887
    var modal = getModal();                                                                                           // 888
                                                                                                                      // 889
    modal.style.marginTop = getTopMargin(getModal());                                                                 // 890
  }                                                                                                                   // 891
                                                                                                                      // 892
  // If browser is Internet Explorer 8                                                                                // 893
  function isIE8() {                                                                                                  // 894
    if (window.attachEvent && !window.addEventListener) {                                                             // 895
      return true;                                                                                                    // 896
    } else {                                                                                                          // 897
      return false;                                                                                                   // 898
    }                                                                                                                 // 899
  }                                                                                                                   // 900
                                                                                                                      // 901
  // Error messages for developers                                                                                    // 902
  function logStr(string) {                                                                                           // 903
    if (window.console) { // IE...                                                                                    // 904
      window.console.log("SweetAlert: " + string);                                                                    // 905
    }                                                                                                                 // 906
  }                                                                                                                   // 907
                                                                                                                      // 908
  if (typeof define === 'function' && define.amd) {                                                                   // 909
    define(function() { return sweetAlert; });                                                                        // 910
  } else if (typeof module !== 'undefined' && module.exports) {                                                       // 911
    module.exports = sweetAlert;                                                                                      // 912
  } else if (typeof window !== 'undefined') {                                                                         // 913
    window.sweetAlert = window.swal = sweetAlert;                                                                     // 914
  }                                                                                                                   // 915
                                                                                                                      // 916
})(window, document);                                                                                                 // 917
                                                                                                                      // 918
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['kevohagan:sweetalert'] = {};

})();
