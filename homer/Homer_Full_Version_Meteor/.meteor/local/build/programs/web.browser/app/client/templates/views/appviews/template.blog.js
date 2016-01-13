(function(){
Template.__checkName("blog");
Template["blog"] = new Template("Template.blog", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Blog"),
      desc: Spacebars.call("Article board for blog page."),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n    ", HTML.DIV({
      "class": "content"
    }, "\n\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-md-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel blog-box"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        ", HTML.DIV({
      "class": "media clearfix"
    }, "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a3.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.SMALL("Created by: ", HTML.SPAN({
      "class": "font-bold"
    }, "Mike Smith"), " "), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "21.03.2015, 06:45 pm"), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "blogDetails"
        }));
      }
    }, " ", HTML.H4("Article about new design")), "\n                        ", HTML.P("\n                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in\n                            some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum...\n                        "), "\n                        ", HTML.P("\n                            Praesent eget euismod nibh. Fusce ac tellus eu nisl lobortis maximus ac eget sapien. Nulla malesuada mauris non nulla imperdiet ullamcorper.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                ", HTML.SPAN({
      "class": "pull-right"
    }, "\n                    ", HTML.I({
      "class": "fa fa-comments-o"
    }, " "), " 22 comments\n                "), "\n                        ", HTML.I({
      "class": "fa fa-eye"
    }, " "), " 142 views\n                    "), "\n                "), "\n\n                ", HTML.DIV({
      "class": "hpanel blog-box"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        ", HTML.DIV({
      "class": "media clearfix"
    }, "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a5.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.SMALL("Created by: ", HTML.SPAN({
      "class": "font-bold"
    }, "John Wilkins"), " "), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "17.05.2015, 10:25 pm"), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "blogDetails"
        }));
      }
    }, " ", HTML.H4("Cras eleifend")), "\n                        ", HTML.P("\n                            Donec malesuada diam sit amet arcu suscipit, nec lacinia nulla aliquet. Nullam non pellentesque ligula. Integer semper nulla ut nulla tristique, nec rhoncus sem mollis.\n                        "), "\n                        ", HTML.P("\n                            Praesent eget euismod nibh. Fusce ac tellus eu nisl lobortis maximus ac eget sapien. Nulla malesuada mauris non nulla imperdiet ullamcorper.\n                        "), "\n                        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "blogDetails"
        }));
      },
      "class": "btn btn-primary btn-xs"
    }, "Read more"), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                ", HTML.SPAN({
      "class": "pull-right"
    }, "\n                    ", HTML.I({
      "class": "fa fa-comments-o"
    }, " "), " 8 comments\n                "), "\n                        ", HTML.I({
      "class": "fa fa-eye"
    }, " "), " 22 views\n                    "), "\n                "), "\n\n                ", HTML.DIV({
      "class": "hpanel blog-box"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        ", HTML.DIV({
      "class": "media clearfix"
    }, "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a6.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.SMALL("Created by: ", HTML.SPAN({
      "class": "font-bold"
    }, "John Wilkins"), " "), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "22.12.2015, 04:17 pm"), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "blogDetails"
        }));
      }
    }, " ", HTML.H4("Vivamus eu rutrum metus")), "\n                        ", HTML.P("\n                            Duis ut iaculis ipsum, et viverra risus. Sed et risus fermentum, tempor ante vitae, faucibus libero. Curabitur ut cursus diam, at accumsan nibh.\n                            Cras feugiat iaculis massa vitae facilisis. Phasellus vestibulum nulla sed leo facilisis, sit amet sollicitudin leo porta.\n                        "), "\n                        ", HTML.P("\n                            Aenean aliquet, nibh vitae auctor commodo, justo odio rutrum lorem, a suscipit massa justo at purus. Suspendisse ullamcorper eros est, in finibus justo dignissim nec.\n                        "), "\n                        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "blogDetails"
        }));
      },
      "class": "btn btn-primary btn-xs"
    }, "Read more"), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                ", HTML.SPAN({
      "class": "pull-right"
    }, "\n                    ", HTML.I({
      "class": "fa fa-comments-o"
    }, " "), " 59 comments\n                "), "\n                        ", HTML.I({
      "class": "fa fa-eye"
    }, " "), " 167 views\n                    "), "\n                "), "\n\n            "), "\n\n            ", HTML.DIV({
      "class": "col-md-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel blog-box"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        ", HTML.DIV({
      "class": "media clearfix"
    }, "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a1.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.SMALL("Created by: ", HTML.SPAN({
      "class": "font-bold"
    }, "Mark Word"), " "), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "22.04.2015, 10:15 pm"), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "blogDetails"
        }));
      }
    }, " ", HTML.H4("Many desktop publishing packages")), "\n                        ", HTML.P("\n                            Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n                        "), "\n                        ", HTML.P("\n                            Aenean aliquet, nibh vitae auctor commodo, justo odio rutrum lorem, a suscipit massa justo at purus. Suspendisse ullamcorper eros est, in finibus justo dignissim nec.\n                        "), "\n                        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "blogDetails"
        }));
      },
      "class": "btn btn-primary btn-xs"
    }, "Read more"), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                ", HTML.SPAN({
      "class": "pull-right"
    }, "\n                    ", HTML.I({
      "class": "fa fa-comments-o"
    }, " "), " 56 comments\n                "), "\n                        ", HTML.I({
      "class": "fa fa-eye"
    }, " "), " 144 views\n                    "), "\n                "), "\n\n                ", HTML.DIV({
      "class": "hpanel blog-box"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        ", HTML.DIV({
      "class": "media clearfix"
    }, "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a7.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.SMALL("Created by: ", HTML.SPAN({
      "class": "font-bold"
    }, "Selena Jackson"), " "), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "01.02.2015, 10:40 pm"), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "blogDetails"
        }));
      }
    }, " ", HTML.H4("Cras eleifend quam ipsum")), "\n                        ", HTML.P("\n                            Donec nec nunc tempor, pulvinar lacus id, molestie nulla. Nam accumsan accumsan ex, non porta orci cursus ac. Pellentesque et pharetra libero.\n                        "), "\n                        ", HTML.P("\n                            Nam sollicitudin ornare tincidunt. Nulla sit amet urna vitae lectus scelerisque sodales. Sed semper condimentum egestas.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                ", HTML.SPAN({
      "class": "pull-right"
    }, "\n                    ", HTML.I({
      "class": "fa fa-comments-o"
    }, " "), " 32 comments\n                "), "\n                        ", HTML.I({
      "class": "fa fa-eye"
    }, " "), " 98 views\n                    "), "\n                "), "\n\n                ", HTML.DIV({
      "class": "hpanel blog-box"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        ", HTML.DIV({
      "class": "media clearfix"
    }, "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a4.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.SMALL("Created by: ", HTML.SPAN({
      "class": "font-bold"
    }, "Anna Smith"), " "), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "10.07.2015, 02:12 am"), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-image"
    }, "\n                        ", HTML.IMG({
      "class": "img-responsive",
      src: "images/p1.jpg",
      alt: ""
    }), "\n                        ", HTML.DIV({
      "class": "title"
    }, "\n                            ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "blogDetails"
        }));
      }
    }, " ", HTML.H4("Standard chunk of Lorem Ipsum")), "\n                            ", HTML.SMALL("Even slightly believable"), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.P("\n                            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n                        "), "\n                        ", HTML.P("\n                            Nam sollicitudin ornare tincidunt. Nulla sit amet urna vitae lectus scelerisque sodales. Sed semper condimentum egestas.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                ", HTML.SPAN({
      "class": "pull-right"
    }, "\n                    ", HTML.I({
      "class": "fa fa-comments-o"
    }, " "), " 10 comments\n                "), "\n                        ", HTML.I({
      "class": "fa fa-eye"
    }, " "), " 62 views\n                    "), "\n                "), "\n\n            "), "\n\n            ", HTML.DIV({
      "class": "col-md-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel blog-box"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        ", HTML.DIV({
      "class": "media clearfix"
    }, "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a2.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.SMALL("Created by: ", HTML.SPAN({
      "class": "font-bold"
    }, "John Jackson"), " "), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "11.10.2015, 11:46 pm"), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "blogDetails"
        }));
      }
    }, " ", HTML.H4("Latin professor at Hampden-Sydney College")), "\n                        ", HTML.P("\n                            Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections\n                        "), "\n                        ", HTML.P("\n                            Duis diam ipsum, ullamcorper in imperdiet eu, venenatis ac felis. Phasellus interdum tellus sed leo fringilla, id ornare nulla mollis.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                ", HTML.SPAN({
      "class": "pull-right"
    }, "\n                    ", HTML.I({
      "class": "fa fa-comments-o"
    }, " "), " 66 comments\n                "), "\n                        ", HTML.I({
      "class": "fa fa-eye"
    }, " "), " 250 views\n                    "), "\n                "), "\n\n                ", HTML.DIV({
      "class": "hpanel blog-box"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        ", HTML.DIV({
      "class": "media clearfix"
    }, "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a8.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.SMALL("Created by: ", HTML.SPAN({
      "class": "font-bold"
    }, "Selena Jackson"), " "), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "16.02.2015, 08:34 pm"), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "blogDetails"
        }));
      }
    }, " ", HTML.H4("Sed laoreet pulvinar mauris")), "\n                        ", HTML.P("\n                            Aliquam varius, odio nec facilisis convallis, nulla augue efficitur enim, eu iaculis urna nisi id erat. Sed iaculis orci id diam porttitor, nec sagittis dui sodales. Quisque in libero erat. Etiam luctus\n                        "), "\n                        ", HTML.P("\n                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce ullamcorper nisl risus, a scelerisque dui hendrerit nec.\n                        "), "\n                        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "blogDetails"
        }));
      },
      "class": "btn btn-primary btn-xs"
    }, "Read more"), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                ", HTML.SPAN({
      "class": "pull-right"
    }, "\n                    ", HTML.I({
      "class": "fa fa-comments-o"
    }, " "), " 10 comments\n                "), "\n                        ", HTML.I({
      "class": "fa fa-eye"
    }, " "), " 183 views\n                    "), "\n                "), "\n\n                ", HTML.DIV({
      "class": "hpanel blog-box"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        ", HTML.DIV({
      "class": "media clearfix"
    }, "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a5.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.SMALL("Created by: ", HTML.SPAN({
      "class": "font-bold"
    }, "John Wilkins"), " "), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "17.05.2015, 10:25 pm"), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "blogDetails"
        }));
      }
    }, " ", HTML.H4("Cras eleifend")), "\n                        ", HTML.P("\n                            Donec malesuada diam sit amet arcu suscipit, nec lacinia nulla aliquet. Nullam non pellentesque ligula. Integer semper nulla ut nulla tristique, nec rhoncus sem mollis.\n                        "), "\n                        ", HTML.P("\n                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce ullamcorper nisl risus, a scelerisque dui hendrerit nec.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                ", HTML.SPAN({
      "class": "pull-right"
    }, "\n                    ", HTML.I({
      "class": "fa fa-comments-o"
    }, " "), " 8 comments\n                "), "\n                        ", HTML.I({
      "class": "fa fa-eye"
    }, " "), " 22 views\n                    "), "\n                "), "\n\n            "), "\n\n            ", HTML.DIV({
      "class": "col-md-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel blog-box"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        ", HTML.DIV({
      "class": "media clearfix"
    }, "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a4.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.SMALL("Created by: ", HTML.SPAN({
      "class": "font-bold"
    }, "Anna Smith"), " "), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "10.07.2015, 02:12 am"), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-image"
    }, "\n                        ", HTML.IMG({
      "class": "img-responsive",
      src: "images/p1.jpg",
      alt: ""
    }), "\n                        ", HTML.DIV({
      "class": "title"
    }, "\n                            ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "blogDetails"
        }));
      }
    }, " ", HTML.H4("Standard chunk of Lorem Ipsum")), "\n                            ", HTML.SMALL("Even slightly believable"), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.P("\n                            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n                        "), "\n                        ", HTML.P("\n                            Etiam aliquam elit vestibulum, convallis risus at, rutrum ex. Aliquam erat volutpat. Morbi blandit nisi a magna vestibulum, eget volutpat risus sodales.\n                        "), "\n                        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "blogDetails"
        }));
      },
      "class": "btn btn-primary btn-xs"
    }, "Read more"), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                ", HTML.SPAN({
      "class": "pull-right"
    }, "\n                    ", HTML.I({
      "class": "fa fa-comments-o"
    }, " "), " 10 comments\n                "), "\n                        ", HTML.I({
      "class": "fa fa-eye"
    }, " "), " 62 views\n                    "), "\n                "), "\n\n                ", HTML.DIV({
      "class": "hpanel blog-box"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        ", HTML.DIV({
      "class": "media clearfix"
    }, "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a3.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.SMALL("Created by: ", HTML.SPAN({
      "class": "font-bold"
    }, "Mike Smith"), " "), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "21.03.2015, 06:45 pm"), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "blogDetails"
        }));
      }
    }, " ", HTML.H4("Article about new design")), "\n                        ", HTML.P("\n                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in\n                            some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum...\n                        "), "\n                        ", HTML.P("\n                            Praesent at sodales lectus. Donec et viverra est. Sed eu est fermentum felis placerat pretium sit amet sed ligula. Morbi nec faucibus odio.\n                        "), "\n                        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "blogDetails"
        }));
      },
      "class": "btn btn-primary btn-xs"
    }, "Read more"), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                ", HTML.SPAN({
      "class": "pull-right"
    }, "\n                    ", HTML.I({
      "class": "fa fa-comments-o"
    }, " "), " 22 comments\n                "), "\n                        ", HTML.I({
      "class": "fa fa-eye"
    }, " "), " 142 views\n                    "), "\n                "), "\n\n                ", HTML.DIV({
      "class": "hpanel blog-box"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                        ", HTML.DIV({
      "class": "media clearfix"
    }, "\n                            ", HTML.A({
      "class": "pull-left"
    }, "\n                                ", HTML.IMG({
      src: "images/a1.jpg",
      alt: "profile-picture"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "media-body"
    }, "\n                                ", HTML.SMALL("Created by: ", HTML.SPAN({
      "class": "font-bold"
    }, "Mark Word"), " "), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL({
      "class": "text-muted"
    }, "22.04.2015, 10:15 pm"), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "blogDetails"
        }));
      }
    }, " ", HTML.H4("Many desktop publishing packages")), "\n                        ", HTML.P("\n                            Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n                        "), "\n                        ", HTML.P("\n                            Nunc pellentesque dui nisi, vel convallis quam malesuada ornare. Nunc ac purus velit. Cras aliquet porta sodales. Proin blandit ornare bibendum.\n                        "), "\n                        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "blogDetails"
        }));
      },
      "class": "btn btn-primary btn-xs"
    }, "Read more"), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                ", HTML.SPAN({
      "class": "pull-right"
    }, "\n                    ", HTML.I({
      "class": "fa fa-comments-o"
    }, " "), " 56 comments\n                "), "\n                        ", HTML.I({
      "class": "fa fa-eye"
    }, " "), " 144 views\n                    "), "\n                "), "\n\n            "), "\n        "), "\n\n    "), "\n\n    " ];
  }) ];
}));

})();
