(function(){
Template.__checkName("icons");
Template["icons"] = new Template("Template.icons", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Icons"),
      desc: Spacebars.call("Two great icon libraries. Pe-icon-7-stroke and Font Awesome"),
      category: Spacebars.call("Interface")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n    ", HTML.DIV({
      "class": "content"
    }, "\n\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Pe-icon-7-stroke")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "icons-box"
        }, "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-cloud-upload"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-cloud-upload"), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-close"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-close"), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-cloud-download"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-cloud-download"), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-close-circle"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-close-circle"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-angle-up"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-angle-up"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-angle-up-circle"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-angle-up-circle"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-angle-right"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-angle-right"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-angle-right-circle"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-angle-right-circle"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-angle-left"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-angle-left"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-angle-left-circle"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-angle-left-circle"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-angle-down"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-angle-down"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-angle-down-circle"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-angle-down-circle"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-wallet"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-wallet"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-volume2"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-volume2"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-volume1"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-volume1"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-voicemail"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-voicemail"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-video"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-video"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-user"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-user"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-upload"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-upload"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-unlock"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-unlock"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-umbrella"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-umbrella"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-trash"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-trash"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-tools"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-tools"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-timer"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-timer"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-ticket"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-ticket"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-target"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-target"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-sun"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-sun"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-study"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-study"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-stopwatch"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-stopwatch"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-star"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-star"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-speaker"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-speaker"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-signal"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-signal"), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-shuffle"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-shuffle"), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-shopbag"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-shopbag"), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-share"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-share"), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-server"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-server"), "\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-search"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-search"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-science"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-science"), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-ribbon"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-ribbon"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-repeat"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-repeat"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-refresh"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-refresh"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-refresh-cloud"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-refresh-cloud"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-radio"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-radio"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-print"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-print"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-prev"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-prev"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-power"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-power"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-portfolio"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-portfolio"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-plus"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-plus"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-play"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-play"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-plane"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-plane"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-photo-gallery"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-photo-gallery"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-phone"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-phone"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-pen"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-pen"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-paper-plane"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-paper-plane"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-paint"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-paint"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-notebook"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-notebook"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-note"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-note"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-next"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-next"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-news-paper"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-news-paper"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-musiclist"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-musiclist"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-music"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-music"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-mouse"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-mouse"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-more"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-more"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-moon"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-moon"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-monitor"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-monitor"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-micro"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-micro"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-menu"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-menu"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-map"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-map"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-map-marker"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-map-marker"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-mail"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-mail"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-mail-open"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-mail-open"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-mail-open-file"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-mail-open-file"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-magnet"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-magnet"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-loop"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-loop"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-look"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-look"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-lock"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-lock"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-lintern"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-lintern"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-link"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-link"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-like"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-like"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-light"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-light"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-less"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-less"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-keypad"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-keypad"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-junk"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-junk"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-info"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-info"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-home"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-home"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-help2"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-help2"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-help1"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-help1"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-graph3"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-graph3"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-graph2"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-graph2"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-graph1"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-graph1"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-graph"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-graph"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-global"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-global"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-gleam"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-gleam"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-glasses"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-glasses"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-gift"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-gift"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-folder"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-folder"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-flag"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-flag"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-filter"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-filter"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-file"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-file"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-expand1"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-expand1"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-exapnd2"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-exapnd2"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-edit"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-edit"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-drop"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-drop"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-drawer"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-drawer"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-download"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-download"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-display2"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-display2"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-display1"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-display1"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-diskette"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-diskette"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-date"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-date"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-cup"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-cup"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-culture"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-culture"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-crop"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-crop"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-credit"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-credit"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-copy-file"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-copy-file"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-config"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-config"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-compass"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-compass"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-comment"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-comment"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-coffee"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-coffee"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-cloud"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-cloud"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-clock"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-clock"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-check"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-check"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-chat"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-chat"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-cart"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-cart"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-camera"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-camera"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-call"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-call"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-calculator"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-calculator"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-browser"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-browser"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-box2"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-box2"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-box1"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-box1"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-bookmarks"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-bookmarks"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-bicycle"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-bicycle"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-bell"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-bell"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-battery"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-battery"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-ball"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-ball"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-back"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-back"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-attention"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-attention"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-anchor"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-anchor"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-albums"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-albums"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-alarm"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-alarm"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-airplay"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-airplay"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-cash"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-cash"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-bluetooth"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-bluetooth"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-way"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-way"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-id"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-id"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-wristwatch"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-wristwatch"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-world"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-world"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-volume"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-volume"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-users"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-users"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-user-female"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-user-female"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-up-arrow"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-up-arrow"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-switch"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-switch"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-scissors"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-scissors"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-safe"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-safe"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-right-arrow"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-right-arrow"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-plug"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-plug"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-pin"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-pin"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-paperclip"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-paperclip"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-note2"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-note2"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-network"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-network"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-mute"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-mute"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-medal"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-medal"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-like2"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-like2"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-left-arrow"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-left-arrow"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-key"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-key"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-joy"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-joy"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-film"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-film"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-disk"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-disk"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-delete-user"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-delete-user"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-bottom-arrow"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-bottom-arrow"), "\n                                    "), "\n\n                                "), "\n                                ", HTML.DIV({
          "class": "infont col-md-2"
        }, "\n                                    ", HTML.DIV({
          "class": "font-icon-detail"
        }, "\n                                        ", HTML.I({
          "class": "pe-7s-add-user"
        }), HTML.SPAN({
          "class": "font-icon-name"
        }, " pe-7s-add-user"), "\n                                    "), "\n\n                                "), "\n                            "), "\n\n                        "), "\n        " ];
      });
    }), "\n            "), "\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n        ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Font Awesome / New Icons in 4.4.0")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n            ", HTML.DIV({
          "class": "icons-box"
        }, "\n\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-500px"
        }), " 500px")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-amazon"
        }), " amazon")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-balance-scale"
        }), " balance-scale")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-battery-0"
        }), " battery-0 ", HTML.SPAN({
          "class": "text-muted"
        }, "(alias)"))), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-battery-1"
        }), " battery-1 ", HTML.SPAN({
          "class": "text-muted"
        }, "(alias)"))), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-battery-2"
        }), " battery-2 ", HTML.SPAN({
          "class": "text-muted"
        }, "(alias)"))), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-battery-3"
        }), " battery-3 ", HTML.SPAN({
          "class": "text-muted"
        }, "(alias)"))), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-battery-4"
        }), " battery-4 ", HTML.SPAN({
          "class": "text-muted"
        }, "(alias)"))), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-battery-empty"
        }), " battery-empty")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-battery-full"
        }), " battery-full")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-battery-half"
        }), " battery-half")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-battery-quarter"
        }), " battery-quarter")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-battery-three-quarters"
        }), " battery-three-quarters")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-black-tie"
        }), " black-tie")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-calendar-check-o"
        }), " calendar-check-o")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-calendar-minus-o"
        }), " calendar-minus-o")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-calendar-plus-o"
        }), " calendar-plus-o")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-calendar-times-o"
        }), " calendar-times-o")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-cc-diners-club"
        }), " cc-diners-club")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-cc-jcb"
        }), " cc-jcb")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-chrome"
        }), " chrome")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-clone"
        }), " clone")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-commenting"
        }), " commenting")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-commenting-o"
        }), " commenting-o")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-contao"
        }), " contao")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-creative-commons"
        }), " creative-commons")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-expeditedssl"
        }), " expeditedssl")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-firefox"
        }), " firefox")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-fonticons"
        }), " fonticons")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-genderless"
        }), " genderless")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-get-pocket"
        }), " get-pocket")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-gg"
        }), " gg")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-gg-circle"
        }), " gg-circle")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-hand-grab-o"
        }), " hand-grab-o ", HTML.SPAN({
          "class": "text-muted"
        }, "(alias)"))), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-hand-lizard-o"
        }), " hand-lizard-o")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-hand-paper-o"
        }), " hand-paper-o")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-hand-peace-o"
        }), " hand-peace-o")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-hand-pointer-o"
        }), " hand-pointer-o")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-hand-rock-o"
        }), " hand-rock-o")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-hand-scissors-o"
        }), " hand-scissors-o")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-hand-spock-o"
        }), " hand-spock-o")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-hand-stop-o"
        }), " hand-stop-o ", HTML.SPAN({
          "class": "text-muted"
        }, "(alias)"))), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-hourglass"
        }), " hourglass")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-hourglass-1"
        }), " hourglass-1 ", HTML.SPAN({
          "class": "text-muted"
        }, "(alias)"))), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-hourglass-2"
        }), " hourglass-2 ", HTML.SPAN({
          "class": "text-muted"
        }, "(alias)"))), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-hourglass-3"
        }), " hourglass-3 ", HTML.SPAN({
          "class": "text-muted"
        }, "(alias)"))), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-hourglass-end"
        }), " hourglass-end")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-hourglass-half"
        }), " hourglass-half")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-hourglass-o"
        }), " hourglass-o")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-hourglass-start"
        }), " hourglass-start")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-houzz"
        }), " houzz")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-i-cursor"
        }), " i-cursor")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-industry"
        }), " industry")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-internet-explorer"
        }), " internet-explorer")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-map"
        }), " map")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-map-o"
        }), " map-o")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-map-pin"
        }), " map-pin")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-map-signs"
        }), " map-signs")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-mouse-pointer"
        }), " mouse-pointer")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-object-group"
        }), " object-group")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-object-ungroup"
        }), " object-ungroup")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-odnoklassniki"
        }), " odnoklassniki")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-odnoklassniki-square"
        }), " odnoklassniki-square")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-opencart"
        }), " opencart")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-opera"
        }), " opera")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-optin-monster"
        }), " optin-monster")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-registered"
        }), " registered")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-safari"
        }), " safari")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-sticky-note"
        }), " sticky-note")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-sticky-note-o"
        }), " sticky-note-o")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-television"
        }), " television")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-trademark"
        }), " trademark")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-tripadvisor"
        }), " tripadvisor")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-tv"
        }), " tv ", HTML.SPAN({
          "class": "text-muted"
        }, "(alias)"))), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-vimeo"
        }), " vimeo")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-wikipedia-w"
        }), " wikipedia-w")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-y-combinator"
        }), " y-combinator")), "\n                ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-yc"
        }), " yc ", HTML.SPAN({
          "class": "text-muted"
        }, "(alias)"))), "\n\n            "), "\n        " ];
      });
    }), "\n            "), "\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n        ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Font Awesome / All icons")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n\n                        ", HTML.DIV({
          "class": "icons-box"
        }, "\n\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-rub"
        }), " fa-rub")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-ruble"
        }), " fa-ruble ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-rouble"
        }), " fa-rouble ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-pagelines"
        }), " fa-pagelines")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-stack-exchange"
        }), " fa-stack-exchange")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrow-circle-o-right"
        }), " fa-arrow-circle-o-right")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrow-circle-o-left"
        }), " fa-arrow-circle-o-left")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-caret-square-o-left"
        }), " fa-caret-square-o-left")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-toggle-left"
        }), " fa-toggle-left ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-dot-circle-o"
        }), " fa-dot-circle-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-wheelchair"
        }), " fa-wheelchair")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-vimeo-square"
        }), " fa-vimeo-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-try"
        }), " fa-try")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-turkish-lira"
        }), " fa-turkish-lira ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-plus-square-o"
        }), " fa-plus-square-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-automobile"
        }), " fa-automobile ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-bank"
        }), " fa-bank ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-behance"
        }), " fa-behance")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-behance-square"
        }), " fa-behance-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-bomb"
        }), " fa-bomb")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-building"
        }), " fa-building")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-cab"
        }), " fa-cab ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-car"
        }), " fa-car")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-child"
        }), " fa-child")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-circle-o-notch"
        }), " fa-circle-o-notch")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-circle-thin"
        }), " fa-circle-thin")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-codepen"
        }), " fa-codepen")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-cube"
        }), " fa-cube")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-cubes"
        }), " fa-cubes")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-database"
        }), " fa-database")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-delicious"
        }), " fa-delicious")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-deviantart"
        }), " fa-deviantart")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-digg"
        }), " fa-digg")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-drupal"
        }), " fa-drupal")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-empire"
        }), " fa-empire")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-envelope-square"
        }), " fa-envelope-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-fax"
        }), " fa-fax")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-file-archive-o"
        }), " fa-file-archive-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-file-audio-o"
        }), " fa-file-audio-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-file-code-o"
        }), " fa-file-code-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-file-excel-o"
        }), " fa-file-excel-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-file-image-o"
        }), " fa-file-image-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-file-movie-o"
        }), " fa-file-movie-o ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-file-pdf-o"
        }), " fa-file-pdf-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-file-photo-o"
        }), " fa-file-photo-o ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-file-picture-o"
        }), " fa-file-picture-o ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-file-powerpoint-o"
        }), " fa-file-powerpoint-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-file-sound-o"
        }), " fa-file-sound-o ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-file-video-o"
        }), " fa-file-video-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-file-word-o"
        }), " fa-file-word-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-file-zip-o"
        }), " fa-file-zip-o ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-ge"
        }), " fa-ge ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-git"
        }), " fa-git")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-git-square"
        }), " fa-git-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-google"
        }), " fa-google")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-graduation-cap"
        }), " fa-graduation-cap")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-hacker-news"
        }), " fa-hacker-news")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-header"
        }), " fa-header")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-history"
        }), " fa-history")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-institution"
        }), " fa-institution ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-joomla"
        }), " fa-joomla")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-jsfiddle"
        }), " fa-jsfiddle")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-language"
        }), " fa-language")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-life-bouy"
        }), " fa-life-bouy ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-life-ring"
        }), " fa-life-ring")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-life-saver"
        }), " fa-life-saver ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-mortar-board"
        }), " fa-mortar-board ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-openid"
        }), " fa-openid")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-paper-plane"
        }), " fa-paper-plane")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-paper-plane-o"
        }), " fa-paper-plane-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-paragraph"
        }), " fa-paragraph")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-paw"
        }), " fa-paw")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-pied-piper"
        }), " fa-pied-piper")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-pied-piper-alt"
        }), " fa-pied-piper-alt")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-pied-piper-square"
        }), " fa-pied-piper-square ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-qq"
        }), " fa-qq")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-ra"
        }), " fa-ra ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-rebel"
        }), " fa-rebel")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-recycle"
        }), " fa-recycle")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-reddit"
        }), " fa-reddit")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-reddit-square"
        }), " fa-reddit-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-send"
        }), " fa-send ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-send-o"
        }), " fa-send-o ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-share-alt"
        }), " fa-share-alt")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-share-alt-square"
        }), " fa-share-alt-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-slack"
        }), " fa-slack")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-sliders"
        }), " fa-sliders")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-soundcloud"
        }), " fa-soundcloud")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-space-shuttle"
        }), " fa-space-shuttle")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-spoon"
        }), " fa-spoon")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-spotify"
        }), " fa-spotify")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-steam"
        }), " fa-steam")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-steam-square"
        }), " fa-steam-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-stumbleupon"
        }), " fa-stumbleupon")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-stumbleupon-circle"
        }), " fa-stumbleupon-circle")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-support"
        }), " fa-support ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-taxi"
        }), " fa-taxi")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-tencent-weibo"
        }), " fa-tencent-weibo")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-tree"
        }), " fa-tree")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-university"
        }), " fa-university")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-vine"
        }), " fa-vine")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-wechat"
        }), " fa-wechat ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-weixin"
        }), " fa-weixin")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-wordpress"
        }), " fa-wordpress")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-yahoo"
        }), " fa-yahoo")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-adjust"
        }), " fa-adjust")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-anchor"
        }), " fa-anchor")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-archive"
        }), " fa-archive")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrows"
        }), " fa-arrows")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrows-h"
        }), " fa-arrows-h")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrows-v"
        }), " fa-arrows-v")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-asterisk"
        }), " fa-asterisk")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-ban"
        }), " fa-ban")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-bar-chart-o"
        }), " fa-bar-chart-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-barcode"
        }), " fa-barcode")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-bars"
        }), " fa-bars")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-beer"
        }), " fa-beer")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-bell"
        }), " fa-bell")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-bell-o"
        }), " fa-bell-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-bolt"
        }), " fa-bolt")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-book"
        }), " fa-book")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-bookmark"
        }), " fa-bookmark")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-bookmark-o"
        }), " fa-bookmark-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-briefcase"
        }), " fa-briefcase")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-bug"
        }), " fa-bug")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-building-o"
        }), " fa-building-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-bullhorn"
        }), " fa-bullhorn")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-bullseye"
        }), " fa-bullseye")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-calendar"
        }), " fa-calendar")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-calendar-o"
        }), " fa-calendar-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-camera"
        }), " fa-camera")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-camera-retro"
        }), " fa-camera-retro")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-caret-square-o-down"
        }), " fa-caret-square-o-down")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-caret-square-o-left"
        }), " fa-caret-square-o-left")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-caret-square-o-right"
        }), " fa-caret-square-o-right")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-caret-square-o-up"
        }), " fa-caret-square-o-up")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-certificate"
        }), " fa-certificate")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-check"
        }), " fa-check")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-check-circle"
        }), " fa-check-circle")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-check-circle-o"
        }), " fa-check-circle-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-check-square"
        }), " fa-check-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-check-square-o"
        }), " fa-check-square-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-circle"
        }), " fa-circle")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-circle-o"
        }), " fa-circle-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-clock-o"
        }), " fa-clock-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-cloud"
        }), " fa-cloud")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-cloud-download"
        }), " fa-cloud-download")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-cloud-upload"
        }), " fa-cloud-upload")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-code"
        }), " fa-code")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-code-fork"
        }), " fa-code-fork")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-coffee"
        }), " fa-coffee")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-cog"
        }), " fa-cog")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-cogs"
        }), " fa-cogs")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-comment"
        }), " fa-comment")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-comment-o"
        }), " fa-comment-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-comments"
        }), " fa-comments")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-comments-o"
        }), " fa-comments-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-compass"
        }), " fa-compass")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-credit-card"
        }), " fa-credit-card")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-crop"
        }), " fa-crop")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-crosshairs"
        }), " fa-crosshairs")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-cutlery"
        }), " fa-cutlery")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-dashboard"
        }), " fa-dashboard ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-desktop"
        }), " fa-desktop")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-dot-circle-o"
        }), " fa-dot-circle-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-download"
        }), " fa-download")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-edit"
        }), " fa-edit ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-ellipsis-h"
        }), " fa-ellipsis-h")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-ellipsis-v"
        }), " fa-ellipsis-v")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-envelope"
        }), " fa-envelope")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-envelope-o"
        }), " fa-envelope-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-eraser"
        }), " fa-eraser")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-exchange"
        }), " fa-exchange")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-exclamation"
        }), " fa-exclamation")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-exclamation-circle"
        }), " fa-exclamation-circle")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-exclamation-triangle"
        }), " fa-exclamation-triangle")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-external-link"
        }), " fa-external-link")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-external-link-square"
        }), " fa-external-link-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-eye"
        }), " fa-eye")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-eye-slash"
        }), " fa-eye-slash")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-female"
        }), " fa-female")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-fighter-jet"
        }), " fa-fighter-jet")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-film"
        }), " fa-film")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-filter"
        }), " fa-filter")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-fire"
        }), " fa-fire")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-fire-extinguisher"
        }), " fa-fire-extinguisher")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-flag"
        }), " fa-flag")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-flag-checkered"
        }), " fa-flag-checkered")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-flag-o"
        }), " fa-flag-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-flash"
        }), " fa-flash ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-flask"
        }), " fa-flask")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-folder"
        }), " fa-folder")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-folder-o"
        }), " fa-folder-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-folder-open"
        }), " fa-folder-open")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-folder-open-o"
        }), " fa-folder-open-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-frown-o"
        }), " fa-frown-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-gamepad"
        }), " fa-gamepad")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-gavel"
        }), " fa-gavel")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-gear"
        }), " fa-gear ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-gears"
        }), " fa-gears ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-gift"
        }), " fa-gift")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-glass"
        }), " fa-glass")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-globe"
        }), " fa-globe")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-group"
        }), " fa-group ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-hdd-o"
        }), " fa-hdd-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-headphones"
        }), " fa-headphones")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-heart"
        }), " fa-heart")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-heart-o"
        }), " fa-heart-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-home"
        }), " fa-home")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-inbox"
        }), " fa-inbox")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-info"
        }), " fa-info")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-info-circle"
        }), " fa-info-circle")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-key"
        }), " fa-key")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-keyboard-o"
        }), " fa-keyboard-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-laptop"
        }), " fa-laptop")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-leaf"
        }), " fa-leaf")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-legal"
        }), " fa-legal ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-lemon-o"
        }), " fa-lemon-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-level-down"
        }), " fa-level-down")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-level-up"
        }), " fa-level-up")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-lightbulb-o"
        }), " fa-lightbulb-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-location-arrow"
        }), " fa-location-arrow")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-lock"
        }), " fa-lock")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-magic"
        }), " fa-magic")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-magnet"
        }), " fa-magnet")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-mail-forward"
        }), " fa-mail-forward ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-mail-reply"
        }), " fa-mail-reply ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-mail-reply-all"
        }), " fa-mail-reply-all")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-male"
        }), " fa-male")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-map-marker"
        }), " fa-map-marker")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-meh-o"
        }), " fa-meh-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-microphone"
        }), " fa-microphone")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-microphone-slash"
        }), " fa-microphone-slash")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-minus"
        }), " fa-minus")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-minus-circle"
        }), " fa-minus-circle")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-minus-square"
        }), " fa-minus-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-minus-square-o"
        }), " fa-minus-square-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-mobile"
        }), " fa-mobile")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-mobile-phone"
        }), " fa-mobile-phone ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-money"
        }), " fa-money")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-moon-o"
        }), " fa-moon-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-music"
        }), " fa-music")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-pencil"
        }), " fa-pencil")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-pencil-square"
        }), " fa-pencil-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-pencil-square-o"
        }), " fa-pencil-square-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-phone"
        }), " fa-phone")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-phone-square"
        }), " fa-phone-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-picture-o"
        }), " fa-picture-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-plane"
        }), " fa-plane")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-plus"
        }), " fa-plus")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-plus-circle"
        }), " fa-plus-circle")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-plus-square"
        }), " fa-plus-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-plus-square-o"
        }), " fa-plus-square-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-power-off"
        }), " fa-power-off")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-print"
        }), " fa-print")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-puzzle-piece"
        }), " fa-puzzle-piece")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-qrcode"
        }), " fa-qrcode")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-question"
        }), " fa-question")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-question-circle"
        }), " fa-question-circle")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-quote-left"
        }), " fa-quote-left")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-quote-right"
        }), " fa-quote-right")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-random"
        }), " fa-random")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-refresh"
        }), " fa-refresh")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-reply"
        }), " fa-reply")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-reply-all"
        }), " fa-reply-all")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-retweet"
        }), " fa-retweet")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-road"
        }), " fa-road")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-rocket"
        }), " fa-rocket")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-rss"
        }), " fa-rss")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-rss-square"
        }), " fa-rss-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-search"
        }), " fa-search")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-search-minus"
        }), " fa-search-minus")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-search-plus"
        }), " fa-search-plus")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-share"
        }), " fa-share")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-share-square"
        }), " fa-share-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-share-square-o"
        }), " fa-share-square-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-shield"
        }), " fa-shield")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-shopping-cart"
        }), " fa-shopping-cart")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-sign-in"
        }), " fa-sign-in")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-sign-out"
        }), " fa-sign-out")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-signal"
        }), " fa-signal")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-sitemap"
        }), " fa-sitemap")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-smile-o"
        }), " fa-smile-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-sort"
        }), " fa-sort")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-sort-alpha-asc"
        }), " fa-sort-alpha-asc")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-sort-alpha-desc"
        }), " fa-sort-alpha-desc")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-sort-amount-asc"
        }), " fa-sort-amount-asc")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-sort-amount-desc"
        }), " fa-sort-amount-desc")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-sort-asc"
        }), " fa-sort-asc")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-sort-desc"
        }), " fa-sort-desc")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-sort-down"
        }), " fa-sort-down ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-sort-numeric-asc"
        }), " fa-sort-numeric-asc")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-sort-numeric-desc"
        }), " fa-sort-numeric-desc")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-sort-up"
        }), " fa-sort-up ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-spinner"
        }), " fa-spinner")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-square"
        }), " fa-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-square-o"
        }), " fa-square-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-star"
        }), " fa-star")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-star-half"
        }), " fa-star-half")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-star-half-empty"
        }), " fa-star-half-empty ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-star-half-full"
        }), " fa-star-half-full ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-star-half-o"
        }), " fa-star-half-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-star-o"
        }), " fa-star-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-subscript"
        }), " fa-subscript")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-suitcase"
        }), " fa-suitcase")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-sun-o"
        }), " fa-sun-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-superscript"
        }), " fa-superscript")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-tablet"
        }), " fa-tablet")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-tachometer"
        }), " fa-tachometer")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-tag"
        }), " fa-tag")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-tags"
        }), " fa-tags")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-tasks"
        }), " fa-tasks")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-terminal"
        }), " fa-terminal")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-thumb-tack"
        }), " fa-thumb-tack")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-thumbs-down"
        }), " fa-thumbs-down")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-thumbs-o-down"
        }), " fa-thumbs-o-down")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-thumbs-o-up"
        }), " fa-thumbs-o-up")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-thumbs-up"
        }), " fa-thumbs-up")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-ticket"
        }), " fa-ticket")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-times"
        }), " fa-times")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-times-circle"
        }), " fa-times-circle")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-times-circle-o"
        }), " fa-times-circle-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-tint"
        }), " fa-tint")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-toggle-down"
        }), " fa-toggle-down ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-toggle-left"
        }), " fa-toggle-left ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-toggle-right"
        }), " fa-toggle-right ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-toggle-up"
        }), " fa-toggle-up ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-trash-o"
        }), " fa-trash-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-trophy"
        }), " fa-trophy")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-truck"
        }), " fa-truck")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-umbrella"
        }), " fa-umbrella")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-unlock"
        }), " fa-unlock")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-unlock-alt"
        }), " fa-unlock-alt")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-unsorted"
        }), " fa-unsorted ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-upload"
        }), " fa-upload")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-user"
        }), " fa-user")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-users"
        }), " fa-users")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-video-camera"
        }), " fa-video-camera")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-volume-down"
        }), " fa-volume-down")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-volume-off"
        }), " fa-volume-off")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-volume-up"
        }), " fa-volume-up")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-warning"
        }), " fa-warning ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-wheelchair"
        }), " fa-wheelchair")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-wrench"
        }), " fa-wrench")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-check-square"
        }), " fa-check-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-check-square-o"
        }), " fa-check-square-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-circle"
        }), " fa-circle")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-circle-o"
        }), " fa-circle-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-dot-circle-o"
        }), " fa-dot-circle-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-minus-square"
        }), " fa-minus-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-minus-square-o"
        }), " fa-minus-square-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-plus-square"
        }), " fa-plus-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-plus-square-o"
        }), " fa-plus-square-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-square"
        }), " fa-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-square-o"
        }), " fa-square-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-bitcoin"
        }), " fa-bitcoin ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-btc"
        }), " fa-btc")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-cny"
        }), " fa-cny ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-dollar"
        }), " fa-dollar ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-eur"
        }), " fa-eur")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-euro"
        }), " fa-euro ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-gbp"
        }), " fa-gbp")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-inr"
        }), " fa-inr")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-jpy"
        }), " fa-jpy")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-krw"
        }), " fa-krw")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-money"
        }), " fa-money")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-rmb"
        }), " fa-rmb ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-rouble"
        }), " fa-rouble ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-rub"
        }), " fa-rub")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-ruble"
        }), " fa-ruble ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-rupee"
        }), " fa-rupee ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-try"
        }), " fa-try")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-turkish-lira"
        }), " fa-turkish-lira ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-usd"
        }), " fa-usd")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-won"
        }), " fa-won ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-yen"
        }), " fa-yen ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-align-center"
        }), " fa-align-center")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-align-justify"
        }), " fa-align-justify")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-align-left"
        }), " fa-align-left")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-align-right"
        }), " fa-align-right")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-bold"
        }), " fa-bold")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-chain"
        }), " fa-chain ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-chain-broken"
        }), " fa-chain-broken")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-clipboard"
        }), " fa-clipboard")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-columns"
        }), " fa-columns")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-copy"
        }), " fa-copy ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-cut"
        }), " fa-cut ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-dedent"
        }), " fa-dedent ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-eraser"
        }), " fa-eraser")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-file"
        }), " fa-file")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-file-o"
        }), " fa-file-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-file-text"
        }), " fa-file-text")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-file-text-o"
        }), " fa-file-text-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-files-o"
        }), " fa-files-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-floppy-o"
        }), " fa-floppy-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-font"
        }), " fa-font")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-indent"
        }), " fa-indent")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-italic"
        }), " fa-italic")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-link"
        }), " fa-link")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-list"
        }), " fa-list")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-list-alt"
        }), " fa-list-alt")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-list-ol"
        }), " fa-list-ol")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-list-ul"
        }), " fa-list-ul")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-outdent"
        }), " fa-outdent")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-paperclip"
        }), " fa-paperclip")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-paste"
        }), " fa-paste ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-repeat"
        }), " fa-repeat")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-rotate-left"
        }), " fa-rotate-left ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-rotate-right"
        }), " fa-rotate-right ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-save"
        }), " fa-save ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-scissors"
        }), " fa-scissors")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-strikethrough"
        }), " fa-strikethrough")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-table"
        }), " fa-table")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-text-height"
        }), " fa-text-height")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-text-width"
        }), " fa-text-width")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-th"
        }), " fa-th")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-th-large"
        }), " fa-th-large")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-th-list"
        }), " fa-th-list")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-underline"
        }), " fa-underline")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-undo"
        }), " fa-undo")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-unlink"
        }), " fa-unlink ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-angle-double-down"
        }), " fa-angle-double-down")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-angle-double-left"
        }), " fa-angle-double-left")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-angle-double-right"
        }), " fa-angle-double-right")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-angle-double-up"
        }), " fa-angle-double-up")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-angle-down"
        }), " fa-angle-down")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-angle-left"
        }), " fa-angle-left")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-angle-right"
        }), " fa-angle-right")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-angle-up"
        }), " fa-angle-up")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrow-circle-down"
        }), " fa-arrow-circle-down")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrow-circle-left"
        }), " fa-arrow-circle-left")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrow-circle-o-down"
        }), " fa-arrow-circle-o-down")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrow-circle-o-left"
        }), " fa-arrow-circle-o-left")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrow-circle-o-right"
        }), " fa-arrow-circle-o-right")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrow-circle-o-up"
        }), " fa-arrow-circle-o-up")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrow-circle-right"
        }), " fa-arrow-circle-right")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrow-circle-up"
        }), " fa-arrow-circle-up")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrow-down"
        }), " fa-arrow-down")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrow-left"
        }), " fa-arrow-left")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrow-right"
        }), " fa-arrow-right")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrow-up"
        }), " fa-arrow-up")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrows"
        }), " fa-arrows")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrows-alt"
        }), " fa-arrows-alt")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrows-h"
        }), " fa-arrows-h")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrows-v"
        }), " fa-arrows-v")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-caret-down"
        }), " fa-caret-down")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-caret-left"
        }), " fa-caret-left")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-caret-right"
        }), " fa-caret-right")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-caret-square-o-down"
        }), " fa-caret-square-o-down")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-caret-square-o-left"
        }), " fa-caret-square-o-left")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-caret-square-o-right"
        }), " fa-caret-square-o-right")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-caret-square-o-up"
        }), " fa-caret-square-o-up")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-caret-up"
        }), " fa-caret-up")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-chevron-circle-down"
        }), " fa-chevron-circle-down")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-chevron-circle-left"
        }), " fa-chevron-circle-left")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-chevron-circle-right"
        }), " fa-chevron-circle-right")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-chevron-circle-up"
        }), " fa-chevron-circle-up")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-chevron-down"
        }), " fa-chevron-down")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-chevron-left"
        }), " fa-chevron-left")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-chevron-right"
        }), " fa-chevron-right")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-chevron-up"
        }), " fa-chevron-up")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-hand-o-down"
        }), " fa-hand-o-down")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-hand-o-left"
        }), " fa-hand-o-left")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-hand-o-right"
        }), " fa-hand-o-right")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-hand-o-up"
        }), " fa-hand-o-up")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-long-arrow-down"
        }), " fa-long-arrow-down")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-long-arrow-left"
        }), " fa-long-arrow-left")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-long-arrow-right"
        }), " fa-long-arrow-right")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-long-arrow-up"
        }), " fa-long-arrow-up")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-toggle-down"
        }), " fa-toggle-down ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-toggle-left"
        }), " fa-toggle-left ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-toggle-right"
        }), " fa-toggle-right ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-toggle-up"
        }), " fa-toggle-up ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-arrows-alt"
        }), " fa-arrows-alt")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-backward"
        }), " fa-backward")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-compress"
        }), " fa-compress")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-eject"
        }), " fa-eject")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-expand"
        }), " fa-expand")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-fast-backward"
        }), " fa-fast-backward")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-fast-forward"
        }), " fa-fast-forward")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-forward"
        }), " fa-forward")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-pause"
        }), " fa-pause")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-play"
        }), " fa-play")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-play-circle"
        }), " fa-play-circle")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-play-circle-o"
        }), " fa-play-circle-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-step-backward"
        }), " fa-step-backward")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-step-forward"
        }), " fa-step-forward")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-stop"
        }), " fa-stop")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-youtube-play"
        }), " fa-youtube-play")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-adn"
        }), " fa-adn")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-android"
        }), " fa-android")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-apple"
        }), " fa-apple")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-bitbucket"
        }), " fa-bitbucket")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-bitbucket-square"
        }), " fa-bitbucket-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-bitcoin"
        }), " fa-bitcoin ")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-btc"
        }), " fa-btc")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-css3"
        }), " fa-css3")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-dribbble"
        }), " fa-dribbble")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-dropbox"
        }), " fa-dropbox")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-facebook"
        }), " fa-facebook")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-facebook-square"
        }), " fa-facebook-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-flickr"
        }), " fa-flickr")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-foursquare"
        }), " fa-foursquare")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-github"
        }), " fa-github")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-github-alt"
        }), " fa-github-alt")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-github-square"
        }), " fa-github-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-gittip"
        }), " fa-gittip")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-google-plus"
        }), " fa-google-plus")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-google-plus-square"
        }), " fa-google-plus-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-html5"
        }), " fa-html5")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-instagram"
        }), " fa-instagram")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-linkedin"
        }), " fa-linkedin")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-linkedin-square"
        }), " fa-linkedin-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-linux"
        }), " fa-linux")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-maxcdn"
        }), " fa-maxcdn")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-pagelines"
        }), " fa-pagelines")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-pinterest"
        }), " fa-pinterest")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-pinterest-square"
        }), " fa-pinterest-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-renren"
        }), " fa-renren")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-skype"
        }), " fa-skype")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-stack-exchange"
        }), " fa-stack-exchange")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-stack-overflow"
        }), " fa-stack-overflow")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-trello"
        }), " fa-trello")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-tumblr"
        }), " fa-tumblr")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-tumblr-square"
        }), " fa-tumblr-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-twitter"
        }), " fa-twitter")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-twitter-square"
        }), " fa-twitter-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-vimeo-square"
        }), " fa-vimeo-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-vk"
        }), " fa-vk")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-weibo"
        }), " fa-weibo")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-windows"
        }), " fa-windows")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-xing"
        }), " fa-xing")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-xing-square"
        }), " fa-xing-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-youtube"
        }), " fa-youtube")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-youtube-play"
        }), " fa-youtube-play")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-youtube-square"
        }), " fa-youtube-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-ambulance"
        }), " fa-ambulance")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-h-square"
        }), " fa-h-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-hospital-o"
        }), " fa-hospital-o")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-medkit"
        }), " fa-medkit")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-plus-square"
        }), " fa-plus-square")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-stethoscope"
        }), " fa-stethoscope")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-user-md"
        }), " fa-user-md")), "\n                            ", HTML.DIV({
          "class": "infont col-md-2"
        }, HTML.A({
          href: "#"
        }, HTML.I({
          "class": "fa fa-wheelchair"
        }), " fa-wheelchair")), "\n                        "), "\n        " ];
      });
    }), "\n            "), "\n        "), "\n\n    "), "\n    " ];
  }) ];
}));

})();
