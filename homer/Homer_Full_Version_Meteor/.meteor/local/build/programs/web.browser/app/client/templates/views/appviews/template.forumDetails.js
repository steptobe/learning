(function(){
Template.__checkName("forumDetails");
Template["forumDetails"] = new Template("Template.forumDetails", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Topic"),
      desc: Spacebars.call("Topic for forum page."),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n    ", HTML.DIV({
      "class": "content"
    }, "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                ", HTML.DIV({
      "class": "hpanel forum-box"
    }, "\n\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        ", HTML.SPAN({
      "class": "pull-right"
    }, "\n                            ", HTML.I({
      "class": "fa fa-clock-o"
    }, " "), " Last modification: 10.12.2015, 10:22 am\n                        "), "\n                        ", HTML.SPAN({
      "class": "f"
    }, " General topics > Announcements > ", HTML.SPAN({
      "class": "text-success"
    }, "Free talks"), " "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "media"
    }, "\n                            ", HTML.DIV({
      "class": "media-image pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a4.jpg",
      alt: "profile-picture"
    }), "\n\n                                ", HTML.DIV({
      "class": "author-info"
    }, "\n                                    ", HTML.STRONG("Anna Smith"), HTML.BR(), "\n                                    April 11.2015\n                                    ", HTML.DIV({
      "class": "badges"
    }, "\n                                        ", HTML.I({
      "class": "fa fa-star text-warning"
    }), "\n                                        ", HTML.I({
      "class": "fa fa-shield text-success"
    }), "\n\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.H5("Vivamus luctus diam et magna"), "\n                                There are many variations of passages of Lorem Ipsum available, but the majority have\n                                suffered alteration in some form, by injected humour, or randomised words which don't\n                                look\n                                even slightly believable.\n                                Ut mollis mauris in quam scelerisque, nec euismod nulla rutrum. Vestibulum elementum\n                                porta pharetra. Praesent volutpat, mi sed laoreet facilisis, turpis erat ornare orci, a\n                                faucibus sapien eros quis nibh.\n                                ", HTML.BR(), "\n                                ", HTML.BR(), "\n                                Praesent tempus nunc in libero lacinia, nec auctor arcu commodo. Sed sagittis interdum\n                                varius. Cras quis ex dictum, laoreet enim quis, aliquam\n                                odio. Nunc ac risus ex. Nunc tempor a ex nec malesuada. Suspendisse efficitur varius\n                                mollis.\n                                ", HTML.BR(), "\n                                ", HTML.BR(), "\n                                Mauris tellus eros, faucibus vel fringilla sit amet, volutpat commodo erat. Nam\n                                fermentum tellus facilisis consectetur varius. Mauris et molestie leo. Cras mattis\n                                pellentesque massa, convallis accumsan dui sagittis vel.\n                                ", HTML.BR(), "\n                                ", HTML.BR(), "\n                                ", HTML.I("\n                                    - Best regards, Anna Smith\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "media"
    }, "\n                            ", HTML.DIV({
      "class": "media-image pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a2.jpg",
      alt: "profile-picture"
    }), "\n\n                                ", HTML.DIV({
      "class": "author-info"
    }, "\n                                    ", HTML.STRONG("Robert Jackson"), HTML.BR(), "\n                                    May 01.2015\n                                    ", HTML.DIV({
      "class": "badges"
    }, "\n                                        ", HTML.I({
      "class": "fa fa-star text-warning"
    }), "\n                                        ", HTML.I({
      "class": "fa fa-star text-warning"
    }), "\n                                        ", HTML.I({
      "class": "fa fa-star text-warning"
    }), "\n\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.H5("Nam fermentum tellus"), "\n                                Vivamus luctus diam et magna bibendum, quis tristique urna cursus. In dignissim tellus\n                                eu metus pharetra vulputate. Proin eu tempus tortor, vitae bibendum est. Nam placerat\n                                hendrerit rhoncus. Ut finibus, orci ut euismod gravida, felis elit lobortis purus, eget\n                                bibendum tortor sapien sit amet turpis. Integer porttitor ligula ac felis imperdiet\n                                volutpat. Praesent sit amet libero id eros convallis fringilla tempus vitae est.\n                                ", HTML.BR(), "\n                                ", HTML.BR(), "\n                                Sed venenatis dui non blandit semper. Proin sed ullamcorper arcu, et ullamcorper mauris.\n                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n                                Nullam vitae efficitur urna. Integer vitae mi commodo, porttitor nulla vitae,\n                                sollicitudin eros.\n                                ", HTML.BR(), "\n                                ", HTML.BR(), "\n                                ", HTML.I("\n                                    - Best regards, Robert Jackson\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "media"
    }, "\n                            ", HTML.DIV({
      "class": "media-image pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a1.jpg",
      alt: "profile-picture"
    }), "\n\n                                ", HTML.DIV({
      "class": "author-info"
    }, "\n                                    ", HTML.STRONG("Mark Smith"), HTML.BR(), "\n                                    May 01.2015\n                                    ", HTML.DIV({
      "class": "badges"
    }, "\n                                        ", HTML.I({
      "class": "fa fa-shield text-success"
    }), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.H5("Aenean molestie lorem ut sem"), "\n                                Nam fermentum tellus facilisis consectetur varius. Mauris et molestie leo. Cras mattis\n                                pellentesque massa, convallis accumsan dui sagittis vel. Ut mollis mauris in quam\n                                scelerisque, nec euismod nulla rutrum. Vestibulum elementum porta pharetra. Praesent\n                                volutpat, mi sed laoreet facilisis, turpis erat ornare orci, a faucibus sapien eros quis\n                                nibh. Praesent tempus nunc in libero lacinia, nec auctor arcu commodo. Sed sagittis\n                                interdum varius. Cras quis ex dictum, laoreet enim quis, aliquam odio. Nunc ac risus ex.\n                                Nunc tempor a ex nec malesuada. Suspendisse efficitur varius mollis.\n                                ", HTML.BR(), "\n                                ", HTML.BR(), "\n                                Sed venenatis dui non blandit semper. Proin sed ullamcorper arcu, et ullamcorper mauris.\n                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n                                Nullam vitae efficitur urna. Integer vitae mi commodo, porttitor nulla vitae,\n                                sollicitudin eros.\n                                ", HTML.BR(), "\n                                ", HTML.BR(), "\n                                ", HTML.I("\n                                    - Best regards, Mark Smith\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n\n\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "media"
    }, "\n                            ", HTML.DIV({
      "class": "media-image pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a6.jpg",
      alt: "profile-picture"
    }), "\n\n                                ", HTML.DIV({
      "class": "author-info"
    }, "\n                                    ", HTML.STRONG("John Jackson"), HTML.BR(), "\n                                    Oct 21.2015\n                                    ", HTML.DIV({
      "class": "badges"
    }, "\n                                        ", HTML.I({
      "class": "fa fa-shield text-success"
    }), "\n                                        ", HTML.I({
      "class": "fa fa-shield text-success"
    }), "\n                                        ", HTML.I({
      "class": "fa fa-star text-warning"
    }), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.H5("Fusce tristique massa turpis"), "\n                                Sed venenatis dui non blandit semper. Proin sed ullamcorper arcu, et ullamcorper mauris.\n                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n                                Nullam vitae efficitur urna. Integer vitae mi commodo, porttitor nulla vitae,\n                                sollicitudin eros.\n                                ", HTML.BR(), "\n                                ", HTML.BR(), "\n                                Proin eu tempus tortor, vitae bibendum est. Nam placerat hendrerit rhoncus. Ut finibus,\n                                orci ut euismod gravida, felis elit lobortis purus, eget bibendum tortor sapien sit amet\n                                turpis. Integer porttitor ligula ac felis imperdiet volutpat. Praesent sit amet libero\n                                id eros convallis fringilla tempus vitae est.\n                                ", HTML.BR(), "\n                                ", HTML.BR(), "\n                                Quisque gravida maximus rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing\n                                elit. Donec eget felis dictum, aliquam nunc vitae, pharetra dolor. Aenean sapien erat,\n                                molestie sit amet faucibus non, pharetra a dui. Aenean ut venenatis dolor, et volutpat\n                                odio. Nam ultrices gravida ligula sed porta.\n                                ", HTML.BR(), "\n                                ", HTML.BR(), "\n                                ", HTML.I("\n                                    - Best regards, John Jackson\n                                "), "\n\n                                ", HTML.Comment(" Comments "), "\n                                ", HTML.DIV({
      "class": "forum-comments"
    }, "\n                                    ", HTML.DIV({
      "class": "media"
    }, "\n                                        ", HTML.A({
      "class": "pull-left"
    }, "\n                                            ", HTML.IMG({
      src: "images/a1.jpg",
      alt: "profile-picture"
    }), "\n                                        "), "\n\n                                        ", HTML.DIV({
      "class": "media-body"
    }, "\n                                            ", HTML.SPAN({
      "class": "font-bold"
    }, "John Novak"), "\n                                            ", HTML.SMALL({
      "class": "text-muted"
    }, "21.03.2015"), "\n\n                                            ", HTML.DIV({
      "class": "social-content"
    }, "\n                                                Injected humour, or randomised words which don't look even slightly\n                                                believable.\n                                                Proin eu tempus tortor, vitae bibendum est. Nam placerat hendrerit\n                                                rhoncus.\n                                            "), "\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "media"
    }, "\n                                        ", HTML.A({
      "class": "pull-left"
    }, "\n                                            ", HTML.IMG({
      src: "images/a3.jpg",
      alt: "profile-picture"
    }), "\n                                        "), "\n\n                                        ", HTML.DIV({
      "class": "media-body"
    }, "\n                                            ", HTML.SPAN({
      "class": "font-bold"
    }, "Mark Smith"), "\n                                            ", HTML.SMALL({
      "class": "text-muted"
    }, "14.04.2015"), "\n                                            ", HTML.DIV({
      "class": "social-content"
    }, "\n                                                Many desktop publishing packages and web page editors.Morbi imperdiet\n                                                sem non dignissim vulputate.\n                                                Cras maximus porttitor dui sed placerat. Integer eleifend pulvinar arcu\n                                                at mattis. Ut porta tellus id enim volutpat, non pharetra elit\n                                                vestibulum.\n                                            "), "\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "media"
    }, "\n                                        ", HTML.A({
      "class": "pull-left"
    }, "\n                                            ", HTML.IMG({
      src: "images/a9.jpg",
      alt: "profile-picture"
    }), "\n                                        "), "\n\n                                        ", HTML.DIV({
      "class": "media-body"
    }, "\n                                            ", HTML.SPAN({
      "class": "font-bold"
    }, "John Smith"), "\n                                            ", HTML.SMALL({
      "class": "text-muted"
    }, "22.11.2015"), "\n                                            ", HTML.DIV({
      "class": "social-content"
    }, "\n                                                Nunc egestas eu odio ut pellentesque. Fusce sagittis quam et lobortis\n                                                scelerisque. Nulla in libero lacinia, fringilla magna in, congue diam.\n                                                Vivamus fermentum eget erat hendrerit mattis. Nulla facilisi.\n                                            "), "\n                                        "), "\n                                    "), "\n\n                                    ", HTML.FORM("\n                                        ", HTML.INPUT({
      "class": "form-control",
      placeholder: "Your comment"
    }), "\n                                    "), "\n                                "), "\n\n                            "), "\n                        "), "\n                    "), "\n\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "media"
    }, "\n                            ", HTML.DIV({
      "class": "media-image pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a2.jpg",
      alt: "profile-picture"
    }), "\n\n                                ", HTML.DIV({
      "class": "author-info"
    }, "\n                                    ", HTML.STRONG("Robert Jackson"), HTML.BR(), "\n                                    May 01.2015\n                                    ", HTML.DIV({
      "class": "badges"
    }, "\n                                        ", HTML.I({
      "class": "fa fa-star text-warning"
    }), "\n                                        ", HTML.I({
      "class": "fa fa-star text-warning"
    }), "\n                                        ", HTML.I({
      "class": "fa fa-star text-warning"
    }), "\n\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.H5("Nam fermentum tellus"), "\n                                Vivamus luctus diam et magna bibendum, quis tristique urna cursus. In dignissim tellus\n                                eu metus pharetra vulputate. Proin eu tempus tortor, vitae bibendum est. Nam placerat\n                                hendrerit rhoncus. Ut finibus, orci ut euismod gravida, felis elit lobortis purus, eget\n                                bibendum tortor sapien sit amet turpis. Integer porttitor ligula ac felis imperdiet\n                                volutpat. Praesent sit amet libero id eros convallis fringilla tempus vitae est.\n                                ", HTML.BR(), "\n                                ", HTML.BR(), "\n                                Sed venenatis dui non blandit semper. Proin sed ullamcorper arcu, et ullamcorper mauris.\n                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n                                Nullam vitae efficitur urna. Integer vitae mi commodo, porttitor nulla vitae,\n                                sollicitudin eros.\n                                ", HTML.BR(), "\n                                ", HTML.BR(), "\n                                ", HTML.I("\n                                    - Best regards, Robert Jackson\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "media"
    }, "\n                            ", HTML.DIV({
      "class": "media-image pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a4.jpg",
      alt: "profile-picture"
    }), "\n\n                                ", HTML.DIV({
      "class": "author-info"
    }, "\n                                    ", HTML.STRONG("Anna Smith"), HTML.BR(), "\n                                    April 11.2015\n                                    ", HTML.DIV({
      "class": "badges"
    }, "\n                                        ", HTML.I({
      "class": "fa fa-star text-warning"
    }), "\n                                        ", HTML.I({
      "class": "fa fa-shield text-success"
    }), "\n\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.H5("Vivamus luctus diam et magna"), "\n                                There are many variations of passages of Lorem Ipsum available, but the majority have\n                                suffered alteration in some form, by injected humour, or randomised words which don't\n                                look\n                                even slightly believable.\n                                Ut mollis mauris in quam scelerisque, nec euismod nulla rutrum. Vestibulum elementum\n                                porta pharetra. Praesent volutpat, mi sed laoreet facilisis, turpis erat ornare orci, a\n                                faucibus sapien eros quis nibh.\n                                ", HTML.BR(), "\n                                ", HTML.BR(), "\n                                Praesent tempus nunc in libero lacinia, nec auctor arcu commodo. Sed sagittis interdum\n                                varius. Cras quis ex dictum, laoreet enim quis, aliquam\n                                odio. Nunc ac risus ex. Nunc tempor a ex nec malesuada. Suspendisse efficitur varius\n                                mollis.\n                                ", HTML.BR(), "\n                                ", HTML.BR(), "\n                                Mauris tellus eros, faucibus vel fringilla sit amet, volutpat commodo erat. Nam\n                                fermentum tellus facilisis consectetur varius. Mauris et molestie leo. Cras mattis\n                                pellentesque massa, convallis accumsan dui sagittis vel.\n                                ", HTML.BR(), "\n                                ", HTML.BR(), "\n                                ", HTML.I("\n                                    - Best regards, Anna Smith\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "media"
    }, "\n                            ", HTML.DIV({
      "class": "media-image pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a6.jpg",
      alt: "profile-picture"
    }), "\n\n                                ", HTML.DIV({
      "class": "author-info"
    }, "\n                                    ", HTML.STRONG("John Jackson"), HTML.BR(), "\n                                    Oct 21.2015\n                                    ", HTML.DIV({
      "class": "badges"
    }, "\n                                        ", HTML.I({
      "class": "fa fa-shield text-success"
    }), "\n                                        ", HTML.I({
      "class": "fa fa-shield text-success"
    }), "\n                                        ", HTML.I({
      "class": "fa fa-star text-warning"
    }), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.H5("Fusce tristique massa turpis"), "\n                                Sed venenatis dui non blandit semper. Proin sed ullamcorper arcu, et ullamcorper mauris.\n                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n                                Nullam vitae efficitur urna. Integer vitae mi commodo, porttitor nulla vitae,\n                                sollicitudin eros.\n                                ", HTML.BR(), "\n                                ", HTML.BR(), "\n                                Proin eu tempus tortor, vitae bibendum est. Nam placerat hendrerit rhoncus. Ut finibus,\n                                orci ut euismod gravida, felis elit lobortis purus, eget bibendum tortor sapien sit amet\n                                turpis. Integer porttitor ligula ac felis imperdiet volutpat. Praesent sit amet libero\n                                id eros convallis fringilla tempus vitae est.\n                                ", HTML.BR(), "\n                                ", HTML.BR(), "\n                                Quisque gravida maximus rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing\n                                elit. Donec eget felis dictum, aliquam nunc vitae, pharetra dolor. Aenean sapien erat,\n                                molestie sit amet faucibus non, pharetra a dui. Aenean ut venenatis dolor, et volutpat\n                                odio. Nam ultrices gravida ligula sed porta.\n                                ", HTML.BR(), "\n                                ", HTML.BR(), "\n                                ", HTML.I("\n                                    - Best regards, John Jackson\n                                "), "\n\n                                ", HTML.Comment(" Comments "), "\n                                ", HTML.DIV({
      "class": "forum-comments"
    }, "\n                                    ", HTML.DIV({
      "class": "media"
    }, "\n                                        ", HTML.A({
      "class": "pull-left"
    }, "\n                                            ", HTML.IMG({
      src: "images/a1.jpg",
      alt: "profile-picture"
    }), "\n                                        "), "\n\n                                        ", HTML.DIV({
      "class": "media-body"
    }, "\n                                            ", HTML.SPAN({
      "class": "font-bold"
    }, "John Novak"), "\n                                            ", HTML.SMALL({
      "class": "text-muted"
    }, "21.03.2015"), "\n\n                                            ", HTML.DIV({
      "class": "social-content"
    }, "\n                                                Injected humour, or randomised words which don't look even slightly\n                                                believable.\n                                                Proin eu tempus tortor, vitae bibendum est. Nam placerat hendrerit\n                                                rhoncus.\n                                            "), "\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "media"
    }, "\n                                        ", HTML.A({
      "class": "pull-left"
    }, "\n                                            ", HTML.IMG({
      src: "images/a3.jpg",
      alt: "profile-picture"
    }), "\n                                        "), "\n\n                                        ", HTML.DIV({
      "class": "media-body"
    }, "\n                                            ", HTML.SPAN({
      "class": "font-bold"
    }, "Mark Smith"), "\n                                            ", HTML.SMALL({
      "class": "text-muted"
    }, "14.04.2015"), "\n                                            ", HTML.DIV({
      "class": "social-content"
    }, "\n                                                Many desktop publishing packages and web page editors.Morbi imperdiet\n                                                sem non dignissim vulputate.\n                                                Cras maximus porttitor dui sed placerat. Integer eleifend pulvinar arcu\n                                                at mattis. Ut porta tellus id enim volutpat, non pharetra elit\n                                                vestibulum.\n                                            "), "\n                                        "), "\n                                    "), "\n                                    ", HTML.FORM("\n                                        ", HTML.INPUT({
      "class": "form-control",
      placeholder: "Your comment"
    }), "\n                                    "), "\n                                "), "\n\n                            "), "\n                        "), "\n                    "), "\n                "), "\n\n            "), "\n        "), "\n\n\n    "), "\n\n    " ];
  }) ];
}));

})();
