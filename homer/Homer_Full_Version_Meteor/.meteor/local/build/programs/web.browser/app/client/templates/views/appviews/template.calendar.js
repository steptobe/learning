(function(){
Template.__checkName("calendar");
Template["calendar"] = new Template("Template.calendar", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Calendar"),
      desc: Spacebars.call("Full-sized, drag & drop event calendar."),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", HTML.DIV({
    "class": "content"
  }, "\n\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.Raw('<div class="col-lg-12">\n                <div class="row">\n                    <div class="col-md-6">\n                        <div class="hpanel">\n                            <div class="panel-body">\n                                <div>\n                                    <h2>FullCalendar</h2>\n                                    is a jQuery plugin that provides a full-sized, drag &amp; drop calendar like the one below. It uses AJAX to fetch events on-the-fly for each month and is easily configured to use your own feed format (an extension is provided for Google Calendar).\n                                    <p>\n                                        <a href="http://arshaw.com/fullcalendar/" target="_blank">FullCalendar documentation</a>\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="col-md-6">\n                        <div class="hpanel">\n                            <div class="panel-body">\n                                <div id="external-events">\n                                    <strong>Click, Drop or Resize event on calendar!</strong>\n\n                                    <p>Message from functions:\n                                        <br>\n\n                                    <div id="external-events">\n                                        <p>Drag a event and drop into callendar.</p>\n                                        <div class="external-event h-bg-green text-white">Go to shop and buy some products.</div>\n                                        <div class="external-event h-bg-green text-white">Check the new CI from Corporation.</div>\n                                        <p class="m-t">\n                                            <input type="checkbox" id="drop-remove" class="i-checks" checked=""> <label for="drop-remove">remove after drop</label>\n                                        </p>\n                                    </div>\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>'), "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Calendar")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("panel"), function() {
      return [ "\n                    ", HTML.DIV({
        id: "calendar"
      }), "\n                " ];
    });
  }), "\n            "), "\n        "), "\n\n    ") ];
}));

})();
