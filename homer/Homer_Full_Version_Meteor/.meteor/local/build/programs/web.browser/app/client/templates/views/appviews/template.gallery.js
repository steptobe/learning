(function(){
Template.__checkName("gallery");
Template["gallery"] = new Template("Template.gallery", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Gallery"),
      desc: Spacebars.call("Touch-enabled, responsive and customizable image & video gallery."),
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
      "class": "hpanel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n\n                        ", HTML.DIV({
      "class": "lightBoxGallery"
    }, "\n\n                            ", HTML.P("\n                                ", HTML.STRONG("Blueimp Gallery"), "  is a touch-enabled, responsive and customizable image & video gallery, carousel and\n                                lightbox, optimized for both mobile and desktop web browsers.\n                                It features swipe, mouse and keyboard navigation, transition effects, slideshow\n                                functionality, fullscreen support and on-demand content loading and can be extended to\n                                display additional content types.\n                            "), "\n                            ", HTML.A({
      href: "images/gallery/1.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/1s.jpg"
    })), "\n                            ", HTML.A({
      href: "images/gallery/2.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/2s.jpg"
    })), "\n                            ", HTML.A({
      href: "images/gallery/3.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/3s.jpg"
    })), "\n                            ", HTML.A({
      href: "images/gallery/4.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/4s.jpg"
    })), "\n                            ", HTML.A({
      href: "images/gallery/5.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/5s.jpg"
    })), "\n                            ", HTML.A({
      href: "images/gallery/6.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/6s.jpg"
    })), "\n                            ", HTML.A({
      href: "images/gallery/7.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/7s.jpg"
    })), "\n                            ", HTML.A({
      href: "images/gallery/8.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/8s.jpg"
    })), "\n                            ", HTML.A({
      href: "images/gallery/9.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/9s.jpg"
    })), "\n                            ", HTML.A({
      href: "images/gallery/10.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/10s.jpg"
    })), "\n\n                            ", HTML.A({
      href: "images/gallery/1.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/1s.jpg"
    })), "\n                            ", HTML.A({
      href: "images/gallery/2.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/2s.jpg"
    })), "\n                            ", HTML.A({
      href: "images/gallery/3.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/3s.jpg"
    })), "\n                            ", HTML.A({
      href: "images/gallery/4.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/4s.jpg"
    })), "\n                            ", HTML.A({
      href: "images/gallery/5.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/5s.jpg"
    })), "\n                            ", HTML.A({
      href: "images/gallery/6.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/6s.jpg"
    })), "\n                            ", HTML.A({
      href: "images/gallery/7.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/7s.jpg"
    })), "\n                            ", HTML.A({
      href: "images/gallery/8.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/8s.jpg"
    })), "\n                            ", HTML.A({
      href: "images/gallery/9.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/9s.jpg"
    })), "\n                            ", HTML.A({
      href: "images/gallery/10.jpg",
      title: "Image from Unsplash",
      "data-gallery": ""
    }, HTML.IMG({
      src: "images/gallery/10s.jpg"
    })), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        ", HTML.I({
      "class": "fa fa-picture-o"
    }, " "), " 20 pimages\n                    "), "\n                "), "\n            "), "\n        "), "\n    "), "\n    ", HTML.Comment(" The Gallery as lightbox dialog, should be a child element of the document body "), "\n    ", HTML.DIV({
      id: "blueimp-gallery",
      "class": "blueimp-gallery"
    }, "\n        ", HTML.DIV({
      "class": "slides"
    }), "\n        ", HTML.H3({
      "class": "title"
    }), "\n        ", HTML.A({
      "class": "prev"
    }, "‹"), "\n        ", HTML.A({
      "class": "next"
    }, "›"), "\n        ", HTML.A({
      "class": "close"
    }, "×"), "\n        ", HTML.A({
      "class": "play-pause"
    }), "\n        ", HTML.OL({
      "class": "indicator"
    }), "\n    "), "\n\n    " ];
  }) ];
}));

})();
