(function(){
Template.__checkName("alerts");
Template["alerts"] = new Template("Template.alerts", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Alerts"),
      desc: Spacebars.call("Notification and custom alerts"),
      category: Spacebars.call("Interface")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n        ", HTML.DIV({
      "class": "content"
    }, "\n\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Sweet alert")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                        ", HTML.P('\n                            Sweet Alert is a beautiful replacement for standard Javascript\'s "Alert".\n                        '), "\n                        ", HTML.TABLE({
          "class": "table table-hover table-striped"
        }, "\n                            ", HTML.THEAD("\n                            ", HTML.TR("\n                                ", HTML.TH("\n                                    Examples\n                                "), "\n                                ", HTML.TH("\n                                    Action\n                                "), "\n                            "), "\n                            "), "\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    A basic message\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.BUTTON({
          "class": "btn btn-primary btn-sm demo1"
        }, "Run example"), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    A success message!\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.BUTTON({
          "class": "btn btn-success btn-sm demo2"
        }, "Run example"), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD('\n                                    A warning message, with a function attached to the "Confirm"-button\n                                '), "\n                                ", HTML.TD("\n                                    ", HTML.BUTTON({
          "class": "btn btn-warning btn-sm demo3"
        }, "Run example"), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD('\n                                    ... and by passing a parameter, you can execute something else for "Cancel".\n                                '), "\n                                ", HTML.TD("\n                                    ", HTML.BUTTON({
          "class": "btn btn-danger btn-sm demo4"
        }, "Run example"), "\n                                "), "\n                            "), "\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
          "class": "m-t-md"
        }, "\n                            ", HTML.P("\n                                You can easy add sweet alert in your controller by adding code like this:\n                            "), "\n                    ", HTML.PRE('\nswal({\n    title: "Good job!",\n    text: "You clicked the button!",\n    type: "success"\n});'), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Toastr notification")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.P("\n                            Minimalistic and extensible notification service for Homer theme.\n                        "), "\n\n                        ", HTML.DIV({
          "class": "text-center float-e-margins"
        }, "\n                            ", HTML.DIV({
          "class": "font-bold m"
        }, "Example with Homer template"), "\n                            ", HTML.BUTTON({
          "class": "homerDemo1 btn btn-info btn-sm"
        }, "Run example"), "\n                            ", HTML.BUTTON({
          "class": "homerDemo2 btn btn-success btn-sm"
        }, "Run example"), "\n                            ", HTML.BUTTON({
          "class": "homerDemo3 btn btn-warning btn-sm"
        }, "Run example"), "\n                            ", HTML.BUTTON({
          "class": "homerDemo4 btn btn-danger btn-sm"
        }, "Run example"), "\n                        "), "\n\n                        ", HTML.DIV({
          "class": "m-t-md"
        }, "\n                            ", HTML.P("\n                                You can easy add any notification in your scripts by adding code like this:\n                            "), "\n                    ", HTML.PRE('\nCommand: toastr["success"]("Example message ", "Example title")\n\ntoastr.options = {\n  "closeButton": true,\n  "debug": false,\n  "newestOnTop": false,\n  "progressBar": false,\n  "positionClass": "toast-top-center",\n  "preventDuplicates": false,\n  "onclick": null,\n  "showDuration": "300",\n  "hideDuration": "1000",\n  "timeOut": "5000",\n  "extendedTimeOut": "1000",\n  "showEasing": "swing",\n  "hideEasing": "linear",\n  "showMethod": "fadeIn",\n  "hideMethod": "fadeOut"\n} '), "\n                        "), "\n                    " ];
      });
    }), "\n\n                "), "\n            "), "\n        "), "\n\n    " ];
  }) ];
}));

})();
