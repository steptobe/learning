(function(){
Template.__checkName("navigation");
Template["navigation"] = new Template("Template.navigation", (function() {
  var view = this;
  return HTML.ASIDE({
    id: "menu"
  }, "\n        ", HTML.DIV({
    id: "navigation"
  }, "\n            ", HTML.DIV({
    "class": "profile-picture"
  }, "\n                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard"
      }));
    }
  }, "\n                    ", HTML.Raw('<img src="images/profile.jpg" class="img-circle m-b" alt="logo">'), "\n                "), "\n\n                ", HTML.DIV({
    "class": "stats-label text-color"
  }, "\n                    ", HTML.Raw('<span class="font-extra-bold font-uppercase">Robert Razer</span>'), "\n\n                    ", HTML.DIV({
    "class": "dropdown"
  }, "\n                        ", HTML.Raw('<a class="dropdown-toggle" href="#" data-toggle="dropdown">\n                            <small class="text-muted">Founder of App <b class="caret"></b></small>\n                        </a>'), "\n                        ", HTML.UL({
    "class": "dropdown-menu animated fadeInRight m-t-xs"
  }, "\n                            ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "contacts"
      }));
    }
  }, "Contacts")), "\n                            ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "Profile")), "\n                            ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "analytics"
      }));
    }
  }, "Analytics")), "\n                            ", HTML.Raw('<li class="divider"></li>'), "\n                            ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "login"
      }));
    }
  }, "Logout")), "\n                        "), "\n                    "), "\n\n\n                    ", HTML.Raw('<div id="sparkline1" class="small-chart m-t-sm"></div>'), "\n                    ", HTML.Raw('<div>\n                        <h4 class="font-extra-bold m-b-xs">\n                            $260 104,200\n                        </h4>\n                        <small class="text-muted">Your income from the last year in sales product X.</small>\n                    </div>'), "\n                "), "\n            "), "\n\n            ", HTML.UL({
    "class": "nav",
    id: "side-menu"
  }, "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "dashboard"
      }));
    }
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard"
      }));
    }
  }, " ", HTML.Raw('<span class="nav-label">Dashboard</span>'), " ", HTML.Raw('<span class="label label-success pull-right">v.1</span>'), " "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "analytics"
      }));
    }
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "analytics"
      }));
    }
  }, " ", HTML.Raw('<span class="nav-label">Analytics</span>'), HTML.Raw('<span class="label label-warning pull-right">NEW</span>'), " "), "\n                "), "\n\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "codeEditor|panels|typography|buttons|components|alerts|modals|draggable|nestableList|tour|icons"
      }));
    }
  }, "\n                    ", HTML.Raw('<a href="#"><span class="nav-label">Interface</span><span class="fa arrow"></span> </a>'), "\n                    ", HTML.UL({
    "class": function() {
      return [ "nav nav-second-level ", Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "codeEditor|panels|typography|buttons|components|alerts|modals|draggable|nestableList|tour|icons",
        className: "in"
      })) ];
    }
  }, "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "panels"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "panels"
      }));
    }
  }, "Panels design")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "typography"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "typography"
      }));
    }
  }, "Typography")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "buttons"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "buttons"
      }));
    }
  }, "Colors ", HTML.Raw("&amp;"), " Buttons")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "components"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "components"
      }));
    }
  }, "Components")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "alerts"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "alerts"
      }));
    }
  }, "Alerts")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "modals"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "modals"
      }));
    }
  }, "Modals")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "draggable"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "draggable"
      }));
    }
  }, "Draggable panels")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "codeEditor"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "codeEditor"
      }));
    }
  }, "Code editor")), "\n                        ", HTML.Raw('<li><a href="emailTemplate/email_template.html">Email template</a></li>'), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "nestableList"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "nestableList"
      }));
    }
  }, "List")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "tour"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "tour"
      }));
    }
  }, "Tour")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "icons"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "icons"
      }));
    }
  }, "Icons library")), "\n                    "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "emailView|emailCompose|notes|appPlans|faq|contacts|projects|project|socialBoard|timeline|profile|mailbox|blog|blogDetails|forum|forumDetails|gallery|calendar|search|chatView|fileManager|invoice"
      }));
    }
  }, "\n                    ", HTML.Raw('<a href="#"><span class="nav-label">App views</span><span class="fa arrow"></span> </a>'), "\n                    ", HTML.UL({
    "class": function() {
      return [ "nav nav-second-level ", Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "emailView|emailCompose|notes|appPlans|faq|contacts|projects|project|socialBoard|timeline|profile|mailbox|blog|blogDetails|forum|forumDetails|gallery|calendar|search|chatView|fileManager|invoice",
        className: "in"
      })) ];
    }
  }, "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "contacts"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "contacts"
      }));
    }
  }, "Contacts")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "projects"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "projects"
      }));
    }
  }, "Projects")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "project"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "project"
      }));
    }
  }, "Project detail")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "appPlans"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "appPlans"
      }));
    }
  }, "App plans")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "socialBoard"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "socialBoard"
      }));
    }
  }, "Social board")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "faq"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "faq"
      }));
    }
  }, "FAQ")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "timeline"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "timeline"
      }));
    }
  }, "Timeline")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "notes"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "notes"
      }));
    }
  }, "Notes")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "profile"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "Profile")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "mailbox"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "mailbox"
      }));
    }
  }, "Mailbox")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "emailCompose"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailCompose"
      }));
    }
  }, "Email compose")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "emailView"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Email view")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "blog"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "blog"
      }));
    }
  }, "Blog")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "blogDetails"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "blogDetails"
      }));
    }
  }, "Blog article")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "forum"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "forum"
      }));
    }
  }, "Forum")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "forumDetails"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "forumDetails"
      }));
    }
  }, "Forum details")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "gallery"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "gallery"
      }));
    }
  }, "Gallery")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "calendar"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "calendar"
      }));
    }
  }, "Calendar")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "invoice"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "invoice"
      }));
    }
  }, "Invoice")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "fileManager"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "fileManager"
      }));
    }
  }, "File manager")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "chatView"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "chatView"
      }));
    }
  }, "Chat view")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "search"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "search"
      }));
    }
  }, "Search view")), "\n                    "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "chartist|chartJs|flot|inlineGraphs"
      }));
    }
  }, "\n                    ", HTML.Raw('<a href="#"><span class="nav-label">Charts</span><span class="fa arrow"></span> </a>'), "\n                    ", HTML.UL({
    "class": function() {
      return [ "nav nav-second-level ", Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "chartist|chartJs|flot|inlineGraphs",
        className: "in"
      })) ];
    }
  }, "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "chartJs"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "chartJs"
      }));
    }
  }, "ChartJs")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "flot"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "flot"
      }));
    }
  }, "Flot charts")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "inlineGraphs"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "inlineGraphs"
      }));
    }
  }, "Inline graphs")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "chartist"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "chartist"
      }));
    }
  }, "Chartist")), "\n                    "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "transitionOverview|transitionOne|transitionTwo|transitionThree|transitionFour|transitionFive"
      }));
    }
  }, "\n                    ", HTML.Raw('<a href="#"><span class="nav-label">Box transitions</span><span class="fa arrow"></span> </a>'), "\n                    ", HTML.UL({
    "class": function() {
      return [ "nav nav-second-level ", Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "transitionOverview|transitionOne|transitionTwo|transitionThree|transitionFour|transitionFive",
        className: "in"
      })) ];
    }
  }, "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "transitionOverview"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "transitionOverview"
      }));
    }
  }, HTML.Raw('<span class="label label-success pull-right">Start</span>'), " Overview "), "  "), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "transitionOne"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "transitionOne"
      }));
    }
  }, "Columns from up")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "transitionTwo"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "transitionTwo"
      }));
    }
  }, "Columns custom")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "transitionThree"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "transitionThree"
      }));
    }
  }, "Panels zoom")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "transitionFour"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "transitionFour"
      }));
    }
  }, "Rows from down")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "transitionFive"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "transitionFive"
      }));
    }
  }, "Rows from right")), "\n                    "), "\n                "), "\n                ", HTML.LI("\n                    ", HTML.Raw('<a href="#"><span class="nav-label">Common views</span><span class="fa arrow"></span> </a>'), "\n                    ", HTML.UL({
    "class": "nav nav-second-level"
  }, "\n                        ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "login"
      }));
    }
  }, "Login")), "\n                        ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "register"
      }));
    }
  }, "Register")), "\n                        ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "errorOne"
      }));
    }
  }, "Error 404")), "\n                        ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "errorTwo"
      }));
    }
  }, "Error 505")), "\n                        ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "lock"
      }));
    }
  }, "Lock screen")), "\n                    "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "tablesDesign|dataTables|fooTable"
      }));
    }
  }, "\n                    ", HTML.Raw('<a href="#"><span class="nav-label">Tables</span><span class="fa arrow"></span> </a>'), "\n                    ", HTML.UL({
    "class": function() {
      return [ "nav nav-second-level ", Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "tablesDesign|dataTables|fooTable",
        className: "in"
      })) ];
    }
  }, "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "tablesDesign"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "tablesDesign"
      }));
    }
  }, "Tables design")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "dataTables"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dataTables"
      }));
    }
  }, "Data tables")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "fooTable"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "fooTable"
      }));
    }
  }, "Foo Table")), "\n\n                    "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "widgets"
      }));
    }
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "widgets"
      }));
    }
  }, " ", HTML.Raw('<span class="nav-label">Widgets</span>'), " ", HTML.Raw('<span class="label label-success pull-right">Special</span>')), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "formsElements|formsExtended|textEditor|wizard|validation"
      }));
    }
  }, "\n                    ", HTML.Raw('<a href="#"><span class="nav-label">Forms</span><span class="fa arrow"></span> </a>'), "\n                    ", HTML.UL({
    "class": function() {
      return [ "nav nav-second-level ", Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "formsElements|formsExtended|textEditor|wizard|validation",
        className: "in"
      })) ];
    }
  }, "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "formsElements"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "formsElements"
      }));
    }
  }, "Forms elements")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "formsExtended"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "formsExtended"
      }));
    }
  }, "Forms extended")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "textEditor"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "textEditor"
      }));
    }
  }, "Text editor")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "wizard"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "wizard"
      }));
    }
  }, "Wizard")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "validation"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "validation"
      }));
    }
  }, "Validation")), "\n                    "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "options"
      }));
    }
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "options"
      }));
    }
  }, " ", HTML.Raw('<span class="nav-label">Layout options</span>')), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "layouts"
      }));
    }
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "gridSystem"
      }));
    }
  }, " ", HTML.Raw('<span class="nav-label">Grid system</span>')), "\n                "), "\n                ", HTML.LI("\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "landingPage"
      }));
    }
  }, " ", HTML.Raw('<span class="nav-label">Landing page</span>')), "\n                "), "\n            "), "\n        "), "\n    ");
}));

})();
