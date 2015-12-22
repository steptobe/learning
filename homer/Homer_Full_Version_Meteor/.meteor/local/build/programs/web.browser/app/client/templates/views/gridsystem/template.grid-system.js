(function(){
Template.__checkName("gridSystem");
Template["gridSystem"] = new Template("Template.gridSystem", (function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n    ", HTML.DIV({
      "class": "content"
    }, "\n\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-md-12"
    }, "\n                ", HTML.DIV({
      "class": "hpanel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.H1("Grid system"), "\n                        ", HTML.P({
      "class": "lead"
    }, "Bootstrap includes a responsive, mobile first fluid grid system that appropriately scales up to 12 columns as the device or viewport size increases. It includes\n                            predefined classesfor easy layout options, as well as powerfulmixins for generating more semantic layouts."), "\n                        ", HTML.H3({
      id: "grid-intro"
    }, "Introduction"), "\n                        ", HTML.P("Grid systems are used for creating page layouts through a series of rows and columns that house your content. Here's how the Bootstrap grid system works:"), "\n                        ", HTML.UL("\n                            ", HTML.LI("Rows must be placed within a ", HTML.CODE(".container"), " (fixed-width) or ", HTML.CODE(".container-fluid"), " (full-width) for proper alignment and padding."), "\n                            ", HTML.LI("Use rows to create horizontal groups of columns."), "\n                            ", HTML.LI("Content should be placed within columns, and only columns may be immediate children of rows."), "\n                            ", HTML.LI("Predefined grid classes like ", HTML.CODE(".row"), " and ", HTML.CODE(".col-xs-4"), " are available for quickly making grid layouts. Less mixins can also be used for more semantic\n                                layouts.\n                            "), "\n                            ", HTML.LI("Columns create gutters (gaps between column content) via ", HTML.CODE("padding"), ". That padding is offset in rows for the first and last column via negative margin on\n                                ", HTML.CODE(".row"), "s.\n                            "), "\n                            ", HTML.LI("The negative margin is why the examples below are outdented. It's so that content within grid columns is lined up with non-grid content."), "\n                            ", HTML.LI("Grid columns are created by specifying the number of twelve available columns you wish to span. For example, three equal columns would use three ", HTML.CODE(".col-xs-4"), ".\n                            "), "\n                            ", HTML.LI("If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line."), "\n                            ", HTML.LI("Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, e.g.\n                                applying any ", HTML.CODE(".col-md-*"), " class to an element will not only affect its styling on medium devices but also on large devices if a ", HTML.CODE(".col-lg-*"), " class\n                                is not present.\n                            "), "\n                        "), "\n\n\n                    "), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                ", HTML.DIV({
      "class": "hpanel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                           Grid options\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n\n                        ", HTML.P("See how aspects of the Bootstrap grid system work across multiple devices with a handy table."), "\n\n                        ", HTML.DIV({
      "class": "table-responsive"
    }, "\n                            ", HTML.TABLE({
      "class": "table table-bordered table-striped"
    }, "\n                                ", HTML.THEAD("\n                                ", HTML.TR("\n                                    ", HTML.TH(), "\n                                    ", HTML.TH("\n                                        Extra small devices\n                                        ", HTML.SMALL("Phones (", HTML.CharRef({
      html: "&lt;",
      str: "<"
    }), "768px)"), "\n                                    "), "\n                                    ", HTML.TH("\n                                        Small devices\n                                        ", HTML.SMALL("Tablets (", HTML.CharRef({
      html: "&ge;",
      str: "≥"
    }), "768px)"), "\n                                    "), "\n                                    ", HTML.TH("\n                                        Medium devices\n                                        ", HTML.SMALL("Desktops (", HTML.CharRef({
      html: "&ge;",
      str: "≥"
    }), "992px)"), "\n                                    "), "\n                                    ", HTML.TH("\n                                        Large devices\n                                        ", HTML.SMALL("Desktops (", HTML.CharRef({
      html: "&ge;",
      str: "≥"
    }), "1200px)"), "\n                                    "), "\n                                "), "\n                                "), "\n                                ", HTML.TBODY("\n                                ", HTML.TR("\n                                    ", HTML.TH("Grid behavior"), "\n                                    ", HTML.TD("Horizontal at all times"), "\n                                    ", HTML.TD({
      colspan: "3"
    }, "Collapsed to start, horizontal above breakpoints"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TH("Max container width"), "\n                                    ", HTML.TD("None (auto)"), "\n                                    ", HTML.TD("750px"), "\n                                    ", HTML.TD("970px"), "\n                                    ", HTML.TD("1170px"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TH("Class prefix"), "\n                                    ", HTML.TD("\n                                        ", HTML.CODE(".col-xs-"), "\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.CODE(".col-sm-"), "\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.CODE(".col-md-"), "\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.CODE(".col-lg-"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TH("# of columns"), "\n                                    ", HTML.TD({
      colspan: "4"
    }, "12"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TH("Max column width"), "\n                                    ", HTML.TD({
      "class": "text-muted"
    }, "Auto"), "\n                                    ", HTML.TD("60px"), "\n                                    ", HTML.TD("78px"), "\n                                    ", HTML.TD("95px"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TH("Gutter width"), "\n                                    ", HTML.TD({
      colspan: "4"
    }, "30px (15px on each side of a column)"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TH("Nestable"), "\n                                    ", HTML.TD({
      colspan: "4"
    }, "Yes"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TH("Offsets"), "\n                                    ", HTML.TD({
      colspan: "4"
    }, "Yes"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TH("Column ordering"), "\n                                    ", HTML.TD({
      colspan: "4"
    }, "Yes"), "\n                                "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.P("Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, applying any\n                            ", HTML.CODE(".col-md-"), " class to an element will not only affect its styling on medium devices but also on large devices if a\n                            ", HTML.CODE(".col-lg-"), " class is not present."), "\n\n                    "), "\n                "), "\n            "), "\n\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                ", HTML.DIV({
      "class": "hpanel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        Stacked-to-horizontal\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n\n                        ", HTML.P("Using a single set of\n                            ", HTML.CODE(".col-md-*"), " grid classes, you can create a default grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before\n                            becoming horizontal on desktop (medium) devices. Place grid columns in any\n                            ", HTML.CODE(".row"), "."), "\n\n                        ", HTML.DIV({
      "class": "row show-grid"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-1"
    }, ".col-md-1"), "\n                            ", HTML.DIV({
      "class": "col-md-1"
    }, ".col-md-1"), "\n                            ", HTML.DIV({
      "class": "col-md-1"
    }, ".col-md-1"), "\n                            ", HTML.DIV({
      "class": "col-md-1"
    }, ".col-md-1"), "\n                            ", HTML.DIV({
      "class": "col-md-1"
    }, ".col-md-1"), "\n                            ", HTML.DIV({
      "class": "col-md-1"
    }, ".col-md-1"), "\n                            ", HTML.DIV({
      "class": "col-md-1"
    }, ".col-md-1"), "\n                            ", HTML.DIV({
      "class": "col-md-1"
    }, ".col-md-1"), "\n                            ", HTML.DIV({
      "class": "col-md-1"
    }, ".col-md-1"), "\n                            ", HTML.DIV({
      "class": "col-md-1"
    }, ".col-md-1"), "\n                            ", HTML.DIV({
      "class": "col-md-1"
    }, ".col-md-1"), "\n                            ", HTML.DIV({
      "class": "col-md-1"
    }, ".col-md-1"), "\n                        "), "\n                        ", HTML.DIV({
      "class": "row show-grid"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-8"
    }, ".col-md-8"), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, ".col-md-4"), "\n                        "), "\n                        ", HTML.DIV({
      "class": "row show-grid"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, ".col-md-4"), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, ".col-md-4"), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, ".col-md-4"), "\n                        "), "\n                        ", HTML.DIV({
      "class": "row show-grid"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-6"
    }, ".col-md-6"), "\n                            ", HTML.DIV({
      "class": "col-md-6"
    }, ".col-md-6"), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n\n        "), "\n\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                ", HTML.DIV({
      "class": "hpanel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        Mobile and desktop\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n\n                        ", HTML.P("Don't want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding\n                            ", HTML.CODE(".col-xs-*"), "\n                            ", HTML.CODE(".col-md-*"), " to your columns. See the example below for a better idea of how it all works."), "\n\n                        ", HTML.DIV({
      "class": "row show-grid"
    }, "\n                            ", HTML.DIV({
      "class": "col-xs-12 col-md-8"
    }, ".col-xs-12 .col-md-8"), "\n                            ", HTML.DIV({
      "class": "col-xs-6 col-md-4"
    }, ".col-xs-6 .col-md-4"), "\n                        "), "\n                        ", HTML.DIV({
      "class": "row show-grid"
    }, "\n                            ", HTML.DIV({
      "class": "col-xs-6 col-md-4"
    }, ".col-xs-6 .col-md-4"), "\n                            ", HTML.DIV({
      "class": "col-xs-6 col-md-4"
    }, ".col-xs-6 .col-md-4"), "\n                            ", HTML.DIV({
      "class": "col-xs-6 col-md-4"
    }, ".col-xs-6 .col-md-4"), "\n                        "), "\n                        ", HTML.DIV({
      "class": "row show-grid"
    }, "\n                            ", HTML.DIV({
      "class": "col-xs-6"
    }, ".col-xs-6"), "\n                            ", HTML.DIV({
      "class": "col-xs-6"
    }, ".col-xs-6"), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                ", HTML.DIV({
      "class": "hpanel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        Mobile, tablet, desktops\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n\n                        ", HTML.P("Build on the previous example by creating even more dynamic and powerful layouts with tablet\n                            ", HTML.CODE(".col-sm-*"), " classes."), "\n\n                        ", HTML.DIV({
      "class": "row show-grid"
    }, "\n                            ", HTML.DIV({
      "class": "col-xs-12 col-sm-6 col-md-8"
    }, ".col-xs-12 .col-sm-6 .col-md-8"), "\n                            ", HTML.DIV({
      "class": "col-xs-6 col-md-4"
    }, ".col-xs-6 .col-md-4"), "\n                        "), "\n                        ", HTML.DIV({
      "class": "row show-grid"
    }, "\n                            ", HTML.DIV({
      "class": "col-xs-6 col-sm-4"
    }, ".col-xs-6 .col-sm-4"), "\n                            ", HTML.DIV({
      "class": "col-xs-6 col-sm-4"
    }, ".col-xs-6 .col-sm-4"), "\n                            ", HTML.Comment(" Optional: clear the XS cols if their content doesn't match in height "), "\n                            ", HTML.DIV({
      "class": "clearfix visible-xs"
    }), "\n                            ", HTML.DIV({
      "class": "col-xs-6 col-sm-4"
    }, ".col-xs-6 .col-sm-4"), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                ", HTML.DIV({
      "class": "hpanel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        Responsive column resets\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n\n                        ", HTML.P("With the four tiers of grids available you're bound to run into issues where, at certain breakpoints, your columns don't clear quite right as one is taller than the other. To fix\n                            that, use a combination of a\n                            ", HTML.CODE(".clearfix"), " and our ", HTML.A({
      href: "#"
    }, "responsive utility classes"), "."), "\n\n                        ", HTML.DIV({
      "class": "row show-grid"
    }, "\n                            ", HTML.DIV({
      "class": "col-xs-6 col-sm-3"
    }, "\n                                .col-xs-6 .col-sm-3\n                                ", HTML.BR(), "Resize your viewport or check it out on your phone for an example.\n                            "), "\n                            ", HTML.DIV({
      "class": "col-xs-6 col-sm-3"
    }, ".col-xs-6 .col-sm-3"), "\n\n                            ", HTML.Comment(" Add the extra clearfix for only the required viewport "), "\n                            ", HTML.DIV({
      "class": "clearfix visible-xs"
    }), "\n\n                            ", HTML.DIV({
      "class": "col-xs-6 col-sm-3"
    }, ".col-xs-6 .col-sm-3"), "\n                            ", HTML.DIV({
      "class": "col-xs-6 col-sm-3"
    }, ".col-xs-6 .col-sm-3"), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                ", HTML.DIV({
      "class": "hpanel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        Offsetting columns\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n\n                        ", HTML.P("Move columns to the right using\n                            ", HTML.CODE(".col-md-offset-*"), " classes. These classes increase the left margin of a column by\n                            ", HTML.CODE("*"), " columns. For example,\n                            ", HTML.CODE(".col-md-offset-4"), " moves\n                            ", HTML.CODE(".col-md-4"), " over four columns."), "\n\n                        ", HTML.DIV({
      "class": "row show-grid"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, ".col-md-4"), "\n                            ", HTML.DIV({
      "class": "col-md-4 col-md-offset-4"
    }, ".col-md-4 .col-md-offset-4"), "\n                        "), "\n                        ", HTML.DIV({
      "class": "row show-grid"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-3 col-md-offset-3"
    }, ".col-md-3 .col-md-offset-3"), "\n                            ", HTML.DIV({
      "class": "col-md-3 col-md-offset-3"
    }, ".col-md-3 .col-md-offset-3"), "\n                        "), "\n                        ", HTML.DIV({
      "class": "row show-grid"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-6 col-md-offset-3"
    }, ".col-md-6 .col-md-offset-3"), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                ", HTML.DIV({
      "class": "hpanel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        Nesting columns\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.P("To nest your content with the default grid, add a new\n                            ", HTML.CODE(".row"), " and set of\n                            ", HTML.CODE(".col-md-*"), " columns within an existing\n                            ", HTML.CODE(".col-md-*"), " column. Nested rows should include a set of columns that add up to 12."), "\n\n                        ", HTML.DIV({
      "class": "row show-grid"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-9"
    }, "\n                                Level 1: .col-md-9\n                                ", HTML.DIV({
      "class": "row show-grid"
    }, "\n                                    ", HTML.DIV({
      "class": "col-md-6"
    }, "\n                                        Level 2: .col-md-6\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-md-6"
    }, "\n                                        Level 2: .col-md-6\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                ", HTML.DIV({
      "class": "hpanel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        Column ordering\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.P("Easily change the order of our built-in grid columns with\n                            ", HTML.CODE(".col-md-push-*"), " and\n                            ", HTML.CODE(".col-md-pull-*"), " modifier classes."), "\n\n                        ", HTML.DIV({
      "class": "row show-grid"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-9 col-md-push-3"
    }, ".col-md-9 .col-md-push-3"), "\n                            ", HTML.DIV({
      "class": "col-md-3 col-md-pull-9"
    }, ".col-md-3 .col-md-pull-9"), "\n                        "), "\n                    "), "\n                "), "\n\n            "), "\n        "), "\n    "), "\n\n    " ];
  });
}));

})();
