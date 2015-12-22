(function(){
Template.__checkName("codeEditor");
Template["codeEditor"] = new Template("Template.codeEditor", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Code editor"),
      desc: Spacebars.call("Versatile text editor implemented in JavaScript for the browser."),
      category: Spacebars.call("Interface")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n        ", HTML.DIV({
      "class": "content"
    }, "\n\n\n\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n\n                    ", HTML.DIV({
      "class": "hpanel"
    }, "\n\n                        ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                            Code Editor\n                        "), "\n\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n\n                            ", HTML.P("\n                                CodeMirror is a versatile text editor implemented in JavaScript for the browser. It is specialized for editing code, and comes with a number of language modes and addons that implement more advanced editing functionality.\n                            "), "\n\n", HTML.TEXTAREA({
      id: "code1",
      "class": "form-control",
      value: '\n  // EDITOR CONSTRUCTOR\n\n  // A CodeMirror instance represents an editor. This is the object\n  // that user code is usually dealing with.\n\n  function CodeMirror(place, options) {\n    if (!(this instanceof CodeMirror)) return new CodeMirror(place, options);\n\n    this.options = options = options ? copyObj(options) : {};\n    // Determine effective options based on given values and defaults.\n    copyObj(defaults, options, false);\n    setGuttersForLineNumbers(options);\n\n    var doc = options.value;\n    if (typeof doc == "string") doc = new Doc(doc, options.mode);\n    this.doc = doc;\n\n    var display = this.display = new Display(place, doc);\n    display.wrapper.CodeMirror = this;\n    updateGutters(this);\n    themeChanged(this);\n    if (options.lineWrapping)\n      this.display.wrapper.className += " CodeMirror-wrap";\n    if (options.autofocus && !mobile) focusInput(this);\n\n    this.state = {\n      keyMaps: [],  // stores maps added by addKeyMap\n      overlays: [], // highlighting overlays, as added by addOverlay\n      modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info\n      overwrite: false, focused: false,\n      suppressEdits: false, // used to disable editing during key handlers when in readOnly mode\n      pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in readInput\n      draggingText: false,\n      highlight: new Delayed() // stores highlight worker timeout\n    };\n\n    // Override magic textarea content restore that IE sometimes does\n    // on our hidden textarea on reload\n    if (ie && ie_version < 11) setTimeout(bind(resetInput, this, true), 20);\n\n    registerEventHandlers(this);\n    ensureGlobalHandlers();\n\n    startOperation(this);\n    this.curOp.forceUpdate = true;\n    attachDoc(this, doc);\n\n    if ((options.autofocus && !mobile) || activeElt() == display.input)\n      setTimeout(bind(onFocus, this), 20);\n    else\n      onBlur(this);\n\n    for (var opt in optionHandlers) if (optionHandlers.hasOwnProperty(opt))\n      optionHandlers[opt](this, options[opt], Init);\n    maybeUpdateLineNumberWidth(this);\n    for (var i = 0; i < initHooks.length; ++i) initHooks[i](this);\n    endOperation(this);\n  }\n\n'
    }), "\n\n                        "), "\n                    "), "\n\n                "), "\n            "), "\n\n\n\n        "), "\n\n    " ];
  }) ];
}));

})();
