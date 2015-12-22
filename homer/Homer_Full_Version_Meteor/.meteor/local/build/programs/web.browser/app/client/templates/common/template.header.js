(function(){
Template.__checkName("header");
Template["header"] = new Template("Template.header", (function() {
  var view = this;
  return HTML.DIV({
    id: "header"
  }, HTML.Raw('\n        <div class="color-line">\n        </div>\n        <div id="logo" class="light-version">\n        <span>\n            Homer Theme\n        </span>\n        </div>\n        '), HTML.NAV({
    role: "navigation"
  }, "\n            ", HTML.Raw('<div class="header-link hide-menu"><i class="fa fa-bars"></i></div>'), "\n            ", HTML.Raw('<div class="small-logo">\n                <span class="text-primary">HOMER APP</span>\n            </div>'), "\n            ", HTML.Raw('<form role="search" class="navbar-form-custom" method="post" action="#">\n                <div class="form-group">\n                    <input type="text" placeholder="Search something special" class="form-control" name="search">\n                </div>\n            </form>'), "\n            ", HTML.DIV({
    "class": "mobile-menu"
  }, "\n                ", HTML.Raw('<button type="button" class="navbar-toggle mobile-menu-toggle" data-toggle="collapse" data-target="#mobile-collapse">\n                    <i class="fa fa-chevron-down"></i>\n                </button>'), "\n                ", HTML.DIV({
    "class": "collapse mobile-navbar",
    id: "mobile-collapse"
  }, "\n                    ", HTML.UL({
    "class": "nav navbar-nav"
  }, "\n                        ", HTML.LI("\n                            ", HTML.A({
    "class": "",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "login"
      }));
    }
  }, "Login"), "\n                        "), "\n                        ", HTML.LI("\n                            ", HTML.A({
    "class": "",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "login"
      }));
    }
  }, "Logout"), "\n                        "), "\n                        ", HTML.LI("\n                            ", HTML.A({
    "class": "",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "Profile"), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "navbar-right"
  }, "\n                ", HTML.UL({
    "class": "nav navbar-nav no-borders"
  }, "\n                    ", HTML.Raw('<li class="dropdown">\n                        <a class="dropdown-toggle" href="#" data-toggle="dropdown">\n                            <i class="pe-7s-speaker"></i>\n                        </a>\n                        <ul class="dropdown-menu hdropdown notification animated flipInX">\n                            <li>\n                                <a>\n                                    <span class="label label-success">NEW</span> It is a long established.\n                                </a>\n                            </li>\n                            <li>\n                                <a>\n                                    <span class="label label-warning">WAR</span> There are many variations.\n                                </a>\n                            </li>\n                            <li>\n                                <a>\n                                    <span class="label label-danger">ERR</span> Contrary to popular belief.\n                                </a>\n                            </li>\n                            <li class="summary"><a href="#">See all notifications</a></li>\n                        </ul>\n                    </li>'), "\n                    ", HTML.LI({
    "class": "dropdown"
  }, "\n                        ", HTML.Raw('<a class="dropdown-toggle" href="#" data-toggle="dropdown">\n                            <i class="pe-7s-keypad"></i>\n                        </a>'), "\n                        ", HTML.DIV({
    "class": "dropdown-menu hdropdown bigmenu animated flipInX"
  }, "\n\n\n                            ", HTML.TABLE("\n                                ", HTML.TBODY("\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "projects"
      }));
    }
  }, "\n                                            ", HTML.I({
    "class": "pe pe-7s-portfolio text-info"
  }), "\n                                            ", HTML.H5("Projects"), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "mailbox"
      }));
    }
  }, "\n                                            ", HTML.I({
    "class": "pe pe-7s-mail text-warning"
  }), "\n                                            ", HTML.H5("Email"), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "contacts"
      }));
    }
  }, "\n                                            ", HTML.I({
    "class": "pe pe-7s-users text-success"
  }), "\n                                            ", HTML.H5("Contacts"), "\n                                        "), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "forum"
      }));
    }
  }, "\n                                            ", HTML.I({
    "class": "pe pe-7s-comment text-info"
  }), "\n                                            ", HTML.H5("Forum"), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "analytics"
      }));
    }
  }, "\n                                            ", HTML.I({
    "class": "pe pe-7s-graph1 text-danger"
  }), "\n                                            ", HTML.H5("Analytics"), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "fileManager"
      }));
    }
  }, "\n                                            ", HTML.I({
    "class": "pe pe-7s-box1 text-success"
  }), "\n                                            ", HTML.H5("Files"), "\n                                        "), "\n                                    "), "\n                                "), "\n                                "), "\n                            "), "\n\n                        "), "\n                    "), "\n                    ", HTML.Raw('<li class="dropdown">\n                        <a class="dropdown-toggle label-menu-corner" href="#" data-toggle="dropdown">\n                            <i class="pe-7s-mail"></i>\n                            <span class="label label-success">4</span>\n                        </a>\n                        <ul class="dropdown-menu hdropdown animated flipInX">\n                            <div class="title">\n                                You have 4 new messages\n                            </div>\n                            <li>\n                                <a>\n                                    It is a long established.\n                                </a>\n                            </li>\n                            <li>\n                                <a>\n                                    There are many variations.\n                                </a>\n                            </li>\n                            <li>\n                                <a>\n                                    Lorem Ipsum is simply dummy.\n                                </a>\n                            </li>\n                            <li>\n                                <a>\n                                    Contrary to popular belief.\n                                </a>\n                            </li>\n                            <li class="summary"><a href="#">See All Messages</a></li>\n                        </ul>\n                    </li>'), "\n                    ", HTML.Raw('<li>\n                        <a href="#" id="sidebar" class="right-sidebar-toggle">\n                            <i class="pe-7s-upload pe-7s-news-paper"></i>\n                        </a>\n                    </li>'), "\n                    ", HTML.LI({
    "class": "dropdown"
  }, "\n                        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "login"
      }));
    }
  }, "\n                            ", HTML.Raw('<i class="pe-7s-upload pe-rotate-90"></i>'), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    ");
}));

})();
