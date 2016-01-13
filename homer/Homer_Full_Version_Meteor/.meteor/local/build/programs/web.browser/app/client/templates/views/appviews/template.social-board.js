(function(){
Template.__checkName("socialBoard");
Template["socialBoard"] = new Template("Template.socialBoard", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Social board"),
      desc: Spacebars.call("Message board for social interactions."),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n    ", HTML.DIV({
      "class": "content"
    }, "\n\n        ", HTML.DIV({
      "class": "row social-board"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hblue"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a4.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.H5("Anna Smith"), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "21.03.2015"), "\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
      "class": "social-content m-t-md"
    }, "\n                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        ", HTML.DIV({
      "class": "social-talk"
    }, "\n                            ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                                ", HTML.A({
      "class": "pull-left"
    }, "\n                                    ", HTML.IMG({
      src: "images/a1.jpg",
      alt: "profile-picture"
    }), "\n                                "), "\n\n                                ", HTML.DIV({
      "class": "media-body"
    }, "\n                                    ", HTML.SPAN({
      "class": "font-bold"
    }, "John Novak"), "\n                                    ", HTML.SMALL({
      "class": "text-muted"
    }, "21.03.2015"), "\n\n                                    ", HTML.DIV({
      "class": "social-content"
    }, "\n                                        Injected humour, or randomised words which don't look even slightly believable.\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "social-talk"
    }, "\n                            ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                                ", HTML.A({
      "class": "pull-left"
    }, "\n                                    ", HTML.IMG({
      src: "images/a3.jpg",
      alt: "profile-picture"
    }), "\n                                "), "\n\n                                ", HTML.DIV({
      "class": "media-body"
    }, "\n                                    ", HTML.SPAN({
      "class": "font-bold"
    }, "Mark Smith"), "\n                                    ", HTML.SMALL({
      "class": "text-muted"
    }, "14.04.2015"), "\n                                    ", HTML.DIV({
      "class": "social-content"
    }, "\n                                        Many desktop publishing packages and web page editors.\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "social-form"
    }, "\n                            ", HTML.INPUT({
      "class": "form-control",
      placeholder: "Your comment"
    }), "\n                        "), "\n                    "), "\n                "), "\n                ", HTML.DIV({
      "class": "hpanel hyellow"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                            ", HTML.SPAN({
      "class": "label label-warning pull-right"
    }, "NEW"), "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a2.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.H5("Ivan Novak"), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "26.11.2015"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "social-content m-t-md"
    }, "\n                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        ", HTML.DIV({
      "class": "social-talk"
    }, "\n                            ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                                ", HTML.A({
      "class": "pull-left"
    }, "\n                                    ", HTML.IMG({
      src: "images/a4.jpg",
      alt: "profile-picture"
    }), "\n                                "), "\n\n                                ", HTML.DIV({
      "class": "media-body"
    }, "\n                                    ", HTML.SPAN({
      "class": "font-bold"
    }, "John Novak"), "\n                                    ", HTML.SMALL({
      "class": "text-muted"
    }, "21.03.2015"), "\n\n                                    ", HTML.DIV({
      "class": "social-content"
    }, "\n                                        Injected humour, or randomised words which don't look even slightly believable.\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "social-form"
    }, "\n                            ", HTML.INPUT({
      "class": "form-control",
      placeholder: "Your comment"
    }), "\n                        "), "\n                    "), "\n                "), "\n                ", HTML.DIV({
      "class": "hpanel hgreen"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a7.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.H5("John Smith"), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "13.05.2015"), "\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
      "class": "social-content m-t-md"
    }, "\n                            There are many variations of passages of Lorem Ipsum available, but the majority have By injected humour, or randomised words which don't look even slightly believable.\n                            ", HTML.IMG({
      "class": "img-responsive m-t-md",
      src: "images/p2.jpg",
      alt: ""
    }), "\n\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        ", HTML.DIV({
      "class": "social-talk"
    }, "\n                            ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                                ", HTML.A({
      "class": "pull-left"
    }, "\n                                    ", HTML.IMG({
      src: "images/a1.jpg",
      alt: "profile-picture"
    }), "\n                                "), "\n\n                                ", HTML.DIV({
      "class": "media-body"
    }, "\n                                    ", HTML.SPAN({
      "class": "font-bold"
    }, "John Novak"), "\n                                    ", HTML.SMALL({
      "class": "text-muted"
    }, "21.03.2015"), "\n\n                                    ", HTML.DIV({
      "class": "social-content"
    }, "\n                                        Injected humour, or randomised words which don't look even slightly believable.\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "social-talk"
    }, "\n                            ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                                ", HTML.A({
      "class": "pull-left"
    }, "\n                                    ", HTML.IMG({
      src: "images/a3.jpg",
      alt: "profile-picture"
    }), "\n                                "), "\n\n                                ", HTML.DIV({
      "class": "media-body"
    }, "\n                                    ", HTML.SPAN({
      "class": "font-bold"
    }, "Mark Smith"), "\n                                    ", HTML.SMALL({
      "class": "text-muted"
    }, "14.04.2015"), "\n                                    ", HTML.DIV({
      "class": "social-content"
    }, "\n                                        Many desktop publishing packages and web page editors.\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "social-form"
    }, "\n                            ", HTML.INPUT({
      "class": "form-control",
      placeholder: "Your comment"
    }), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hgreen"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a7.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.H5("John Smith"), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "13.05.2015"), "\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
      "class": "social-content m-t-md"
    }, "\n                            There are many variations of passages of Lorem Ipsum available, but the majority have By injected humour, or randomised words which don't look even slightly believable.\n                            ", HTML.BR(), HTML.BR(), "\n                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.\n\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        ", HTML.DIV({
      "class": "social-talk"
    }, "\n                            ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                                ", HTML.A({
      "class": "pull-left"
    }, "\n                                    ", HTML.IMG({
      src: "images/a1.jpg",
      alt: "profile-picture"
    }), "\n                                "), "\n\n                                ", HTML.DIV({
      "class": "media-body"
    }, "\n                                    ", HTML.SPAN({
      "class": "font-bold"
    }, "John Novak"), "\n                                    ", HTML.SMALL({
      "class": "text-muted"
    }, "21.03.2015"), "\n\n                                    ", HTML.DIV({
      "class": "social-content"
    }, "\n                                        Injected humour, or randomised words which don't look even slightly believable.\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "social-talk"
    }, "\n                            ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                                ", HTML.A({
      "class": "pull-left"
    }, "\n                                    ", HTML.IMG({
      src: "images/a3.jpg",
      alt: "profile-picture"
    }), "\n                                "), "\n\n                                ", HTML.DIV({
      "class": "media-body"
    }, "\n                                    ", HTML.SPAN({
      "class": "font-bold"
    }, "Mark Smith"), "\n                                    ", HTML.SMALL({
      "class": "text-muted"
    }, "14.04.2015"), "\n                                    ", HTML.DIV({
      "class": "social-content"
    }, "\n                                        Many desktop publishing packages and web page editors.\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "social-form"
    }, "\n                            ", HTML.INPUT({
      "class": "form-control",
      placeholder: "Your comment"
    }), "\n                        "), "\n                    "), "\n                "), "\n                ", HTML.DIV({
      "class": "hpanel hblue"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a4.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.H5("Anna Smith"), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "10.06.2015"), "\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
      "class": "social-content m-t-md"
    }, "\n                            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        ", HTML.DIV({
      "class": "social-talk"
    }, "\n                            ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                                ", HTML.A({
      "class": "pull-left"
    }, "\n                                    ", HTML.IMG({
      src: "images/a1.jpg",
      alt: "profile-picture"
    }), "\n                                "), "\n\n                                ", HTML.DIV({
      "class": "media-body"
    }, "\n                                    ", HTML.SPAN({
      "class": "font-bold"
    }, "John Novak"), "\n                                    ", HTML.SMALL({
      "class": "text-muted"
    }, "21.03.2015"), "\n\n                                    ", HTML.DIV({
      "class": "social-content"
    }, "\n                                        Injected humour, or randomised words which don't look even slightly believable.\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "social-talk"
    }, "\n                            ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                                ", HTML.A({
      "class": "pull-left"
    }, "\n                                    ", HTML.IMG({
      src: "images/a3.jpg",
      alt: "profile-picture"
    }), "\n                                "), "\n\n                                ", HTML.DIV({
      "class": "media-body"
    }, "\n                                    ", HTML.SPAN({
      "class": "font-bold"
    }, "Mark Smith"), "\n                                    ", HTML.SMALL({
      "class": "text-muted"
    }, "14.04.2015"), "\n                                    ", HTML.DIV({
      "class": "social-content"
    }, "\n                                        Many desktop publishing packages and web page editors.\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "social-form"
    }, "\n                            ", HTML.INPUT({
      "class": "form-control",
      placeholder: "Your comment"
    }), "\n                        "), "\n                    "), "\n                "), "\n                ", HTML.DIV({
      "class": "hpanel hyellow"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                            ", HTML.SPAN({
      "class": "label label-warning pull-right"
    }, "NEW"), "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a6.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.H5("Mark Smith"), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "02.02.2015"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "social-content m-t-md"
    }, "\n                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        ", HTML.DIV({
      "class": "social-talk"
    }, "\n                            ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                                ", HTML.A({
      "class": "pull-left"
    }, "\n                                    ", HTML.IMG({
      src: "images/a2.jpg",
      alt: "profile-picture"
    }), "\n                                "), "\n\n                                ", HTML.DIV({
      "class": "media-body"
    }, "\n                                    ", HTML.SPAN({
      "class": "font-bold"
    }, "John Novak"), "\n                                    ", HTML.SMALL({
      "class": "text-muted"
    }, "21.03.2015"), "\n\n                                    ", HTML.DIV({
      "class": "social-content"
    }, "\n                                        Injected humour, or randomised words which don't look even slightly believable.\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "social-form"
    }, "\n                            ", HTML.INPUT({
      "class": "form-control",
      placeholder: "Your comment"
    }), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hyellow"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                            ", HTML.SPAN({
      "class": "label label-warning pull-right"
    }, "NEW"), "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a6.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.H5("Mark Smith"), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "02.02.2015"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "social-content m-t-md"
    }, "\n                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        ", HTML.DIV({
      "class": "social-talk"
    }, "\n                            ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                                ", HTML.A({
      "class": "pull-left"
    }, "\n                                    ", HTML.IMG({
      src: "images/a2.jpg",
      alt: "profile-picture"
    }), "\n                                "), "\n\n                                ", HTML.DIV({
      "class": "media-body"
    }, "\n                                    ", HTML.SPAN({
      "class": "font-bold"
    }, "John Novak"), "\n                                    ", HTML.SMALL({
      "class": "text-muted"
    }, "21.03.2015"), "\n\n                                    ", HTML.DIV({
      "class": "social-content"
    }, "\n                                        Injected humour, or randomised words which don't look even slightly believable.\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "social-form"
    }, "\n                            ", HTML.INPUT({
      "class": "form-control",
      placeholder: "Your comment"
    }), "\n                        "), "\n                    "), "\n                "), "\n                ", HTML.DIV({
      "class": "hpanel hgreen"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a7.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.H5("John Smith"), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "13.05.2015"), "\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
      "class": "social-content m-t-md"
    }, "\n                            There are many variations of passages of Lorem Ipsum available, but the majority have By injected humour, or randomised words which don't look even slightly believable (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance\n                            .\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        ", HTML.DIV({
      "class": "social-talk"
    }, "\n                            ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                                ", HTML.A({
      "class": "pull-left"
    }, "\n                                    ", HTML.IMG({
      src: "images/a1.jpg",
      alt: "profile-picture"
    }), "\n                                "), "\n\n                                ", HTML.DIV({
      "class": "media-body"
    }, "\n                                    ", HTML.SPAN({
      "class": "font-bold"
    }, "John Novak"), "\n                                    ", HTML.SMALL({
      "class": "text-muted"
    }, "21.03.2015"), "\n\n                                    ", HTML.DIV({
      "class": "social-content"
    }, "\n                                        Injected humour, or randomised words which don't look even slightly believable.\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "social-form"
    }, "\n                            ", HTML.INPUT({
      "class": "form-control",
      placeholder: "Your comment"
    }), "\n                        "), "\n                    "), "\n                "), "\n                ", HTML.DIV({
      "class": "hpanel hblue"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a9.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.H5("Michael Smith"), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "21.03.2015"), "\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
      "class": "social-content m-t-md"
    }, "\n                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        ", HTML.DIV({
      "class": "social-talk"
    }, "\n                            ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                                ", HTML.A({
      "class": "pull-left"
    }, "\n                                    ", HTML.IMG({
      src: "images/a1.jpg",
      alt: "profile-picture"
    }), "\n                                "), "\n\n                                ", HTML.DIV({
      "class": "media-body"
    }, "\n                                    ", HTML.SPAN({
      "class": "font-bold"
    }, "John Novak"), "\n                                    ", HTML.SMALL({
      "class": "text-muted"
    }, "21.03.2015"), "\n\n                                    ", HTML.DIV({
      "class": "social-content"
    }, "\n                                        Injected humour, or randomised words which don't look even slightly believable.\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "social-talk"
    }, "\n                            ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                                ", HTML.A({
      "class": "pull-left"
    }, "\n                                    ", HTML.IMG({
      src: "images/a3.jpg",
      alt: "profile-picture"
    }), "\n                                "), "\n\n                                ", HTML.DIV({
      "class": "media-body"
    }, "\n                                    ", HTML.SPAN({
      "class": "font-bold"
    }, "Mark Smith"), "\n                                    ", HTML.SMALL({
      "class": "text-muted"
    }, "14.04.2015"), "\n                                    ", HTML.DIV({
      "class": "social-content"
    }, "\n                                        Many desktop publishing packages and web page editors.\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "social-talk"
    }, "\n                            ", HTML.DIV({
      "class": "media social-profile clearfix"
    }, "\n                                ", HTML.A({
      "class": "pull-left"
    }, "\n                                    ", HTML.IMG({
      src: "images/a1.jpg",
      alt: "profile-picture"
    }), "\n                                "), "\n\n                                ", HTML.DIV({
      "class": "media-body"
    }, "\n                                    ", HTML.SPAN({
      "class": "font-bold"
    }, "Mark Smith"), "\n                                    ", HTML.SMALL({
      "class": "text-muted"
    }, "14.04.2015"), "\n                                    ", HTML.DIV({
      "class": "social-content"
    }, "\n                                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "social-form"
    }, "\n                            ", HTML.INPUT({
      "class": "form-control",
      placeholder: "Your comment"
    }), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n\n    "), "\n\n    " ];
  }) ];
}));

})();
