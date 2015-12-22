(function(){
Template.__checkName("draggable");
Template["draggable"] = new Template("Template.draggable", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Draggable panels"),
      desc: Spacebars.call("Example page for draggable panels"),
      category: Spacebars.call("Interface")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", HTML.DIV({
    "class": "content"
  }, "\n\n        ", HTML.DIV({
    "class": "row"
  }, "\n\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Box example"),
      built: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("panel"), function() {
      return [ "\n                    ", HTML.DIV({
        "class": "m-t-md m-b-md text-center"
      }, "\n                        ", HTML.I({
        "class": "fa fa-hand-o-up fa-4x"
      }), "\n                        ", HTML.DIV({
        "class": "m-t"
      }, "Drag and move panels."), "\n                    "), "\n                " ];
    });
  }), "\n                ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Box example"),
      built: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("panel"), function() {
      return [ "\n                    ", HTML.P("\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\n                        of type and scrambled it to make a type specimen book.\n                    "), "\n                " ];
    });
  }), "\n                ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Box example"),
      built: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("panel"), function() {
      return [ "\n                    ", HTML.P("\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\n                        of type and scrambled it to make a type specimen book.\n                    "), "\n                " ];
    });
  }), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Box example"),
      built: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("panel"), function() {
      return [ "\n                    ", HTML.P("\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\n                        of type and scrambled it to make a type specimen book.\n                    "), "\n                " ];
    });
  }), "\n                ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Box example"),
      built: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("panel"), function() {
      return [ "\n                    ", HTML.P("\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\n                        of type and scrambled it to make a type specimen book.\n                    "), "\n                " ];
    });
  }), "\n                ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Box example"),
      built: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("panel"), function() {
      return [ "\n                    ", HTML.P("\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\n                        of type and scrambled it to make a type specimen book.\n                    "), "\n                " ];
    });
  }), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Box example"),
      built: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("panel"), function() {
      return [ "\n                    ", HTML.P("\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\n                        of type and scrambled it to make a type specimen book.\n                    "), "\n                " ];
    });
  }), "\n                ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Box example"),
      built: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("panel"), function() {
      return [ "\n                    ", HTML.P("\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\n                        of type and scrambled it to make a type specimen book.\n                    "), "\n                " ];
    });
  }), "\n                ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Box example"),
      built: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("panel"), function() {
      return [ "\n                    ", HTML.P("\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\n                        of type and scrambled it to make a type specimen book.\n                    "), "\n                " ];
    });
  }), "\n            "), "\n\n        "), "\n\n    ") ];
}));

})();
