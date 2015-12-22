(function(){
Template.__checkName("formsExtended");
Template["formsExtended"] = new Template("Template.formsExtended", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Forms extended"),
      desc: Spacebars.call("Examples of various extended form controls."),
      category: Spacebars.call("Forms")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n        ", HTML.DIV({
      "class": "content"
    }, "\n\n\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel"
    }, "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.H3("Forms extended"), "\n\n                            ", HTML.P("Extra from controls for select, date, multiselect, inline edit and spin. All form\n                                controls automatically receive some global styling."), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("X-editable")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.P("\n                            ", HTML.STRONG("X-editable"), " library allows you to create editable elements on your page. It\n                            includes both popup and inline modes. Please try out demo below to see how it works.\n                        "), "\n\n                        ", HTML.DIV({
          "class": "text-center"
        }, "\n                            ", HTML.I({
          "class": "fa fa-angle-down fa-2x"
        }), "\n                        "), "\n\n                        ", HTML.DIV("\n                            ", HTML.H5("How to use"), "\n\n                            ", HTML.P("Markup elements that should be editable. Usually it is ", HTML.CODE(HTML.CharRef({
          html: "&lt;",
          str: "<"
        }), "A", HTML.CharRef({
          html: "&gt;",
          str: ">"
        })), " element\n                                with additional ", HTML.CODE("data-*"), " attributes"), "\n\n\n                            ", HTML.TABLE({
          id: "user",
          "class": "table table-bordered table-striped",
          style: "clear: both"
        }, "\n                                ", HTML.TBODY("\n                                ", HTML.TR("\n                                    ", HTML.TD({
          width: "35%"
        }, "Simple text field"), "\n                                    ", HTML.TD({
          width: "65%"
        }, HTML.A({
          href: "#",
          id: "username",
          "data-type": "text",
          "data-pk": "1",
          "data-title": "Enter username",
          "class": "editable editable-click"
        }, "superuser"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Empty text field, required"), "\n                                    ", HTML.TD(HTML.A({
          href: "#",
          id: "firstname",
          "data-type": "text",
          "data-pk": "1",
          "data-placement": "right",
          "data-placeholder": "Required",
          "data-title": "Enter your firstname",
          "class": "editable editable-click editable-empty"
        }, "Empty")), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Select, local array, custom display"), "\n                                    ", HTML.TD(HTML.A({
          href: "#",
          id: "sex",
          "data-type": "select",
          "data-pk": "1",
          "data-value": "",
          "data-title": "Select sex",
          "class": "editable editable-click",
          style: "color: gray;"
        }, "not\n                                        selected")), "\n                                "), "\n\n                                ", HTML.TR("\n                                    ", HTML.TD("Combodate (date)"), "\n                                    ", HTML.TD(HTML.A({
          href: "#",
          id: "dob",
          "data-type": "combodate",
          "data-value": "1984-05-15",
          "data-format": "YYYY-MM-DD",
          "data-viewformat": "DD/MM/YYYY",
          "data-template": "D / MMM / YYYY",
          "data-pk": "1",
          "data-title": "Select Date of birth",
          "class": "editable editable-click"
        }, "15/05/1984")), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Combodate (datetime)"), "\n                                    ", HTML.TD(HTML.A({
          href: "#",
          id: "event",
          "data-type": "combodate",
          "data-template": "D MMM YYYY  HH:mm",
          "data-format": "YYYY-MM-DD HH:mm",
          "data-viewformat": "MMM D, YYYY, HH:mm",
          "data-pk": "1",
          "data-title": "Setup event date and time",
          "class": "editable editable-click editable-empty"
        }, "Empty")), "\n                                "), "\n\n\n                                ", HTML.TR("\n                                    ", HTML.TD("Textarea, buttons below. Submit by ", HTML.I("ctrl+enter")), "\n                                    ", HTML.TD(HTML.A({
          href: "#",
          id: "comments",
          "data-type": "textarea",
          "data-pk": "1",
          "data-placeholder": "Your comments here...",
          "data-title": "Enter comments",
          "class": "editable editable-pre-wrapped editable-click"
        }, "awesome user!")), "\n                                "), "\n\n\n                                ", HTML.TR("\n                                    ", HTML.TD("Checklist"), "\n                                    ", HTML.TD(HTML.A({
          href: "#",
          id: "fruits",
          "data-type": "checklist",
          "data-value": "2,3",
          "data-title": "Select fruits",
          "class": "editable editable-click"
        }, "peach", HTML.BR(), "apple"), "\n                                    "), "\n                                "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.P({
          "class": "m-t-lg"
        }, "\n                                All examples and documentation you can find at: ", HTML.A({
          href: "http://vitalets.github.io/x-editable/",
          target: "_blank"
        }, "http://vitalets.github.io/x-editable/"), "\n                            "), "\n\n                        "), "\n\n\n                    " ];
      });
    }), "\n                "), "\n\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Select2")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                        ", HTML.P("\n                            ", HTML.STRONG("Select2"), " Select2 gives you a customizable select box with support for\n                            searching, tagging, remote data sets, infinite scrolling, and many other highly used\n                            options.\n                        "), "\n\n                        ", HTML.H5("Bootstrap theme with Select 2 - basic example"), "\n                        ", HTML.SELECT({
          "class": "js-source-states",
          style: "width: 100%"
        }, "\n                            ", HTML.OPTGROUP({
          label: "Alaskan/Hawaiian Time Zone"
        }, "\n                                ", HTML.OPTION({
          value: "AK"
        }, "Alaska"), "\n                                ", HTML.OPTION({
          value: "HI"
        }, "Hawaii"), "\n                            "), "\n                            ", HTML.OPTGROUP({
          label: "Pacific Time Zone"
        }, "\n                                ", HTML.OPTION({
          value: "CA"
        }, "California"), "\n                                ", HTML.OPTION({
          value: "NV"
        }, "Nevada"), "\n                                ", HTML.OPTION({
          value: "OR"
        }, "Oregon"), "\n                                ", HTML.OPTION({
          value: "WA"
        }, "Washington"), "\n                            "), "\n                            ", HTML.OPTGROUP({
          label: "Mountain Time Zone"
        }, "\n                                ", HTML.OPTION({
          value: "AZ"
        }, "Arizona"), "\n                                ", HTML.OPTION({
          value: "CO"
        }, "Colorado"), "\n                                ", HTML.OPTION({
          value: "ID"
        }, "Idaho"), "\n                                ", HTML.OPTION({
          value: "MT"
        }, "Montana"), "\n                                ", HTML.OPTION({
          value: "NE"
        }, "Nebraska"), "\n                                ", HTML.OPTION({
          value: "NM"
        }, "New Mexico"), "\n                                ", HTML.OPTION({
          value: "ND"
        }, "North Dakota"), "\n                                ", HTML.OPTION({
          value: "UT"
        }, "Utah"), "\n                                ", HTML.OPTION({
          value: "WY"
        }, "Wyoming"), "\n                            "), "\n                            ", HTML.OPTGROUP({
          label: "Central Time Zone"
        }, "\n                                ", HTML.OPTION({
          value: "AL"
        }, "Alabama"), "\n                                ", HTML.OPTION({
          value: "AR"
        }, "Arkansas"), "\n                                ", HTML.OPTION({
          value: "IL"
        }, "Illinois"), "\n                                ", HTML.OPTION({
          value: "IA"
        }, "Iowa"), "\n                                ", HTML.OPTION({
          value: "KS"
        }, "Kansas"), "\n                                ", HTML.OPTION({
          value: "KY"
        }, "Kentucky"), "\n                                ", HTML.OPTION({
          value: "LA"
        }, "Louisiana"), "\n                                ", HTML.OPTION({
          value: "MN"
        }, "Minnesota"), "\n                                ", HTML.OPTION({
          value: "MS"
        }, "Mississippi"), "\n                                ", HTML.OPTION({
          value: "MO"
        }, "Missouri"), "\n                                ", HTML.OPTION({
          value: "OK"
        }, "Oklahoma"), "\n                                ", HTML.OPTION({
          value: "SD"
        }, "South Dakota"), "\n                                ", HTML.OPTION({
          value: "TX"
        }, "Texas"), "\n                                ", HTML.OPTION({
          value: "TN"
        }, "Tennessee"), "\n                                ", HTML.OPTION({
          value: "WI"
        }, "Wisconsin"), "\n                            "), "\n                            ", HTML.OPTGROUP({
          label: "Eastern Time Zone"
        }, "\n                                ", HTML.OPTION({
          value: "CT"
        }, "Connecticut"), "\n                                ", HTML.OPTION({
          value: "DE"
        }, "Delaware"), "\n                                ", HTML.OPTION({
          value: "FL"
        }, "Florida"), "\n                                ", HTML.OPTION({
          value: "GA"
        }, "Georgia"), "\n                                ", HTML.OPTION({
          value: "IN"
        }, "Indiana"), "\n                                ", HTML.OPTION({
          value: "ME"
        }, "Maine"), "\n                                ", HTML.OPTION({
          value: "MD"
        }, "Maryland"), "\n                                ", HTML.OPTION({
          value: "MA"
        }, "Massachusetts"), "\n                                ", HTML.OPTION({
          value: "MI"
        }, "Michigan"), "\n                                ", HTML.OPTION({
          value: "NH"
        }, "New Hampshire"), "\n                                ", HTML.OPTION({
          value: "NJ"
        }, "New Jersey"), "\n                                ", HTML.OPTION({
          value: "NY"
        }, "New York"), "\n                                ", HTML.OPTION({
          value: "NC"
        }, "North Carolina"), "\n                                ", HTML.OPTION({
          value: "OH"
        }, "Ohio"), "\n                                ", HTML.OPTION({
          value: "PA"
        }, "Pennsylvania"), "\n                                ", HTML.OPTION({
          value: "RI"
        }, "Rhode Island"), "\n                                ", HTML.OPTION({
          value: "SC"
        }, "South Carolina"), "\n                                ", HTML.OPTION({
          value: "VT"
        }, "Vermont"), "\n                                ", HTML.OPTION({
          value: "VA"
        }, "Virginia"), "\n                                ", HTML.OPTION({
          value: "WV"
        }, "West Virginia"), "\n                            "), "\n                        "), "\n                        ", HTML.H5({
          "class": "m-t-md"
        }, "Multi Selection example"), "\n                        ", HTML.SELECT({
          "class": "js-source-states-2",
          multiple: "multiple",
          style: "width: 100%"
        }, "\n                            ", HTML.OPTION({
          value: "Blue"
        }, "Blue"), "\n                            ", HTML.OPTION({
          value: "Red"
        }, "Red"), "\n                            ", HTML.OPTION({
          value: "Green"
        }, "Green"), "\n                            ", HTML.OPTION({
          value: "Maroon"
        }, "Maroon"), "\n                        "), "\n                    " ];
      });
    }), "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Bootstrap TouchSpin")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n\n                        ", HTML.P("\n                            ", HTML.STRONG("TouchSpin"), " A mobile and touch friendly input spinner component for Bootstrap\n                            3. It supports the mousewheel and the up/down keys.\n                        "), "\n\n                        ", HTML.DIV("\n                            ", HTML.H5("Basci example"), "\n                            ", HTML.INPUT({
          id: "demo1",
          type: "text",
          name: "demo1",
          value: "50"
        }), "\n                        "), "\n\n                        ", HTML.DIV({
          "class": "m-t-md"
        }, "\n                            ", HTML.H5("Vertical button alignment:"), "\n                            ", HTML.INPUT({
          id: "demo2",
          type: "text",
          name: "demo2",
          value: "50"
        }), "\n                        "), "\n\n                        ", HTML.DIV({
          "class": "m-t-md"
        }, "\n                            ", HTML.H5("Example with postfix "), "\n                            ", HTML.INPUT({
          id: "demo3",
          type: "text",
          name: "demo3",
          value: "50"
        }), "\n                        "), "\n\n                        ", HTML.DIV({
          "class": "m-t-md"
        }, "\n                            ", HTML.H5("Basci with button postfix "), "\n                            ", HTML.INPUT({
          id: "demo4",
          type: "text",
          name: "demo4",
          value: "50"
        }), "\n                        "), "\n\n                    " ];
      });
    }), "\n                "), "\n\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n\n                ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Bootstrap datepicker")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.P("\n                            Bootstrap-datepicker provides a flexible datepicker widget in the Twitter bootstrap style.\n                            http://bootstrap-datepicker.readthedocs.org/en/latest/index.html\n                        "), "\n\n                        ", HTML.DIV({
          "class": "row"
        }, "\n\n                            ", HTML.DIV({
          "class": "col-lg-3"
        }, "\n                                ", HTML.STRONG("\n                                    Inline version\n                                "), "\n\n                                ", HTML.DIV({
          id: "datepicker",
          "data-date": "12/03/2012"
        }), "\n                                ", HTML.INPUT({
          type: "hidden",
          id: "my_hidden_input"
        }), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-lg-9"
        }, "\n\n                                ", HTML.DIV({
          "class": "row"
        }, "\n\n                                    ", HTML.DIV({
          "class": "col-md-6"
        }, "\n                                        ", HTML.H5("\n                                            Input\n                                        "), "\n\n                                        ", HTML.P("\n                                            The simplest case: focusing the input (clicking or tabbing into it) will\n                                            show the picker.\n                                        "), "\n                                        ", HTML.INPUT({
          id: "datapicker2",
          type: "text",
          value: "02-16-2012",
          "class": "form-control"
        }), "\n\n                                        ", HTML.H5("Component"), "\n\n                                        ", HTML.P("\n                                            Adding the date class to an input-group bootstrap component will allow the\n                                            input-group-addon elements to trigger the picker.\n                                        "), "\n\n                                        ", HTML.DIV({
          "class": "input-group date"
        }, "\n                                            ", HTML.INPUT({
          type: "text",
          "class": "form-control"
        }), HTML.SPAN({
          "class": "input-group-addon"
        }, HTML.I({
          "class": "glyphicon glyphicon-th"
        })), "\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "col-md-6"
        }, "\n                                        ", HTML.H5("\n                                            Range\n                                        "), "\n\n                                        ", HTML.P("\n                                            Using the input-daterange construct with multiple child inputs will\n                                            instantiate one picker per input and link them together to allow selecting\n                                            ranges.\n                                        "), "\n\n                                        ", HTML.DIV({
          "class": "input-daterange input-group",
          id: "datepicker"
        }, "\n                                            ", HTML.INPUT({
          type: "text",
          "class": "input-sm form-control",
          name: "start"
        }), "\n                                            ", HTML.SPAN({
          "class": "input-group-addon"
        }, "to"), "\n                                            ", HTML.INPUT({
          type: "text",
          "class": "input-sm form-control",
          name: "end"
        }), "\n                                        "), "\n\n                                        ", HTML.H5("Options"), "\n\n                                        ", HTML.P("\n                                            There are many avalible options to datapicker, check: ", HTML.A({
          href: "https://bootstrap-datepicker.readthedocs.org/en/latest/options.html",
          target: "_blank"
        }, "https://bootstrap-datepicker.readthedocs.org/en/latest/options.html"), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n\n                    " ];
      });
    }), "\n\n                "), "\n\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n\n                ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Awesome bootstrap checkbox")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                        ", HTML.P("\n                            Font Awesome Bootstrap Checkboxes & Radios. Pure css way to make inputs look prettier.\n                            https://github.com/flatlogic/awesome-bootstrap-checkbox\n                        "), "\n\n                        ", HTML.DIV({
          "class": "row"
        }, "\n                            ", HTML.DIV({
          "class": "col-md-4"
        }, "\n                                ", HTML.FIELDSET("\n                                    ", HTML.LEGEND("\n                                        Basic\n                                    "), "\n                                    ", HTML.P("\n                                        Supports bootstrap brand colors: ", HTML.CODE(".checkbox-primary"), ", ", HTML.CODE(".checkbox-info"), "\n                                        etc.\n                                    "), "\n\n                                    ", HTML.DIV({
          "class": "checkbox"
        }, "\n                                        ", HTML.INPUT({
          id: "checkbox1",
          type: "checkbox"
        }), "\n                                        ", HTML.LABEL({
          "for": "checkbox1"
        }, "\n                                            Default\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "checkbox checkbox-primary"
        }, "\n                                        ", HTML.INPUT({
          id: "checkbox2",
          type: "checkbox",
          checked: ""
        }), "\n                                        ", HTML.LABEL({
          "for": "checkbox2"
        }, "\n                                            Primary\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "checkbox checkbox-success"
        }, "\n                                        ", HTML.INPUT({
          id: "checkbox3",
          type: "checkbox"
        }), "\n                                        ", HTML.LABEL({
          "for": "checkbox3"
        }, "\n                                            Success\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "checkbox checkbox-info"
        }, "\n                                        ", HTML.INPUT({
          id: "checkbox4",
          type: "checkbox"
        }), "\n                                        ", HTML.LABEL({
          "for": "checkbox4"
        }, "\n                                            Info\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "checkbox checkbox-warning"
        }, "\n                                        ", HTML.INPUT({
          id: "checkbox5",
          type: "checkbox",
          checked: ""
        }), "\n                                        ", HTML.LABEL({
          "for": "checkbox5"
        }, "\n                                            Warning\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "checkbox checkbox-danger"
        }, "\n                                        ", HTML.INPUT({
          id: "checkbox6",
          type: "checkbox",
          checked: ""
        }), "\n                                        ", HTML.LABEL({
          "for": "checkbox6"
        }, "\n                                            Check me out\n                                        "), "\n                                    "), "\n                                    ", HTML.P("Checkboxes without label text"), "\n\n                                    ", HTML.DIV({
          "class": "checkbox"
        }, "\n                                        ", HTML.INPUT({
          type: "checkbox",
          id: "singleCheckbox1",
          value: "option1",
          "aria-label": "Single checkbox One"
        }), "\n                                        ", HTML.LABEL(), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "checkbox checkbox-primary"
        }, "\n                                        ", HTML.INPUT({
          type: "checkbox",
          id: "singleCheckbox2",
          value: "option2",
          checked: "",
          "aria-label": "Single checkbox Two"
        }), "\n                                        ", HTML.LABEL(), "\n                                    "), "\n                                    ", HTML.P("Inline checkboxes"), "\n\n                                    ", HTML.DIV({
          "class": "checkbox checkbox-inline"
        }, "\n                                        ", HTML.INPUT({
          type: "checkbox",
          id: "inlineCheckbox1",
          value: "option1"
        }), "\n                                        ", HTML.LABEL({
          "for": "inlineCheckbox1"
        }, " Inline One "), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "checkbox checkbox-success checkbox-inline"
        }, "\n                                        ", HTML.INPUT({
          type: "checkbox",
          id: "inlineCheckbox2",
          value: "option1",
          checked: ""
        }), "\n                                        ", HTML.LABEL({
          "for": "inlineCheckbox2"
        }, " Inline Two "), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "checkbox checkbox-inline"
        }, "\n                                        ", HTML.INPUT({
          type: "checkbox",
          id: "inlineCheckbox3",
          value: "option1"
        }), "\n                                        ", HTML.LABEL({
          "for": "inlineCheckbox3"
        }, " Inline Three "), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-md-4"
        }, "\n                                ", HTML.FIELDSET("\n                                    ", HTML.LEGEND("\n                                        Circled\n                                    "), "\n                                    ", HTML.P("\n                                        ", HTML.CODE(".checkbox-circle"), " for roundness.\n                                    "), "\n\n                                    ", HTML.DIV({
          "class": "checkbox checkbox-circle"
        }, "\n                                        ", HTML.INPUT({
          id: "checkbox7",
          type: "checkbox"
        }), "\n                                        ", HTML.LABEL({
          "for": "checkbox7"
        }, "\n                                            Simply Rounded\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "checkbox checkbox-info checkbox-circle"
        }, "\n                                        ", HTML.INPUT({
          id: "checkbox8",
          type: "checkbox",
          checked: ""
        }), "\n                                        ", HTML.LABEL({
          "for": "checkbox8"
        }, "\n                                            Me too\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-md-4"
        }, "\n                                ", HTML.FIELDSET("\n                                    ", HTML.LEGEND("\n                                        Radio\n                                    "), "\n                                    ", HTML.P("\n                                        Supports bootstrap brand colors: ", HTML.CODE(".radio-primary"), ", ", HTML.CODE(".radio-danger"), "\n                                        etc.\n                                    "), "\n\n                                    ", HTML.DIV({
          "class": "row"
        }, "\n                                        ", HTML.DIV({
          "class": "col-sm-6"
        }, "\n                                            ", HTML.DIV({
          "class": "radio"
        }, "\n                                                ", HTML.INPUT({
          type: "radio",
          name: "radio1",
          id: "radio1",
          value: "option1",
          checked: ""
        }), "\n                                                ", HTML.LABEL({
          "for": "radio1"
        }, "\n                                                    Small\n                                                "), "\n                                            "), "\n                                            ", HTML.DIV({
          "class": "radio"
        }, "\n                                                ", HTML.INPUT({
          type: "radio",
          name: "radio1",
          id: "radio2",
          value: "option2"
        }), "\n                                                ", HTML.LABEL({
          "for": "radio2"
        }, "\n                                                    Big\n                                                "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.DIV({
          "class": "col-sm-6"
        }, "\n                                            ", HTML.DIV({
          "class": "radio radio-danger"
        }, "\n                                                ", HTML.INPUT({
          type: "radio",
          name: "radio2",
          id: "radio3",
          value: "option1"
        }), "\n                                                ", HTML.LABEL({
          "for": "radio3"
        }, "\n                                                    Next\n                                                "), "\n                                            "), "\n                                            ", HTML.DIV({
          "class": "radio radio-danger"
        }, "\n                                                ", HTML.INPUT({
          type: "radio",
          name: "radio2",
          id: "radio4",
          value: "option2",
          checked: ""
        }), "\n                                                ", HTML.LABEL({
          "for": "radio4"
        }, "\n                                                    One\n                                                "), "\n                                            "), "\n                                        "), "\n                                    "), "\n                                    ", HTML.P("Radios without label text"), "\n\n                                    ", HTML.DIV({
          "class": "radio"
        }, "\n                                        ", HTML.INPUT({
          type: "radio",
          id: "singleRadio1",
          value: "option1",
          name: "radioSingle1",
          "aria-label": "Single radio One"
        }), "\n                                        ", HTML.LABEL(), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "radio radio-success"
        }, "\n                                        ", HTML.INPUT({
          type: "radio",
          id: "singleRadio2",
          value: "option2",
          name: "radioSingle1",
          checked: "",
          "aria-label": "Single radio Two"
        }), "\n                                        ", HTML.LABEL(), "\n                                    "), "\n                                    ", HTML.P("Inline radios"), "\n\n                                    ", HTML.DIV({
          "class": "radio radio-info radio-inline"
        }, "\n                                        ", HTML.INPUT({
          type: "radio",
          id: "inlineRadio1",
          value: "option1",
          name: "radioInline",
          checked: ""
        }), "\n                                        ", HTML.LABEL({
          "for": "inlineRadio1"
        }, " Inline One "), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "radio radio-inline"
        }, "\n                                        ", HTML.INPUT({
          type: "radio",
          id: "inlineRadio2",
          value: "option2",
          name: "radioInline"
        }), "\n                                        ", HTML.LABEL({
          "for": "inlineRadio2"
        }, " Inline Two "), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n\n                    " ];
      });
    }), "\n\n                "), "\n\n            "), "\n\n        "), "\n\n    " ];
  }) ];
}));

})();
