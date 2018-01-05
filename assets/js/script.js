// import Vue from 'vue';
// import Accueil from './accueil.vue';

var layout_page = new Vue({
  el: '#layout',
  data: {
    api:{
      userName: '',
      userPics_url: '',
      bio: '',
      gitHub_tagName:'',
      gitHub_tagUrl:'',
    },
    seen:{
      acceuil: {
        global: true,
        front: true,
        nav: false,
        background_01: true
      },
      dashboard: {
        global: false,
        front: true,
        background_01: true
      },
      docu : false,
    },
    layout: {
      general: "divided",
      accueil: 'banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right animated',
      bg_accueil: 'background_img background_01',
      dashboard: {
        global: 'content',
        navigation: 'navigation',
        board: 'dashboard',
        img: 'image background_01',
      },
      // ---
      panneau_01: "banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right animated zoomIn fadeIn",
      // ---
      fade_in : ' zoomIn fadeIn',
      fade_out : ' zoomOut fadeOut',
      slide_in : ' slideInUp fadeIn',
      slide_out : ' slideOutUp fadeOut',

    },
  },
  computed: {
    bg_global : function () {
      if( this.seen.dashboard.global ){
        return

      } else {
        return this.layout.bg_accueil;
      }
    },
    dashB : function () {
        if( this.seen.dashboard.global ){
          return this.layout.dashboard.board;
        } else {
          return this.layout.dashboard.img;
        }
    },
    navBar : {
      get: function () {
        if( this.seen.dashboard.global ){
          return this.layout.dashboard.global + ' ' + this.layout.dashboard.navigation;

        } else {
          return this.layout.dashboard.global;
        }
      },
      // ---
      set: function (newValue) {
        return this.layout[ newValue ];
      }
    },
    layout_div: {
      // ---
      get: function () {
        return this.layout.general;
      },
      // ---
      set: function (newValue) {
        return this.layout[ newValue ];
      }
    },
    layout_subdiv: {
      // ---
      get: function () {
        return this.layout.panneau_01;
      },
      // ---
      set: function ( newValue ) {
        var exportClass = "";
        if( Array.isArray( newValue ) ){
          for (var i = 0; i < newValue.length; i++) {
            exportClass +=  this.layout[ newValue[i] ];
          }
        } else {
          exportClass = this.layout[ newValue ]
        }
        this.layout.panneau_01 = exportClass;

      }
    },
  },
  methods: {
    display_global: function () {
      var scop = this;
        this.layout_subdiv = 'accueil';
        scop.seen.acceuil.front = true;
        scop.seen.acceuil.nav = false;
        scop.seen.dashboard.global = false;

    },
    display_menu: function () {
      this.layout_subdiv = 'accueil';

      var scop = this;
      if( this.seen.acceuil.front == true) {
        this.seen.acceuil.front = false;
        this.seen.acceuil.nav = true;
        this.seen.dashboard.global = true;
      } else {
        this.seen.acceuil.front = true;
        this.seen.acceuil.nav = false;
        this.seen.dashboard.global = false;
      }
    },
    docu_menu: function () {
      // this.layout_subdiv = 'accueil'
      console.log('un truc ');
      var scop = this;
      if( this.seen.docu == true) {
        this.seen.docu = false;
      } else {
        this.seen.docu =true;
      }
    }
  }
})
console.log('milieu de la page')
$(function(){
  // profil : https://api.github.com/users/adricen
  // repos : https://api.github.com/users/adricen/repos
  // test : https://api.github.com/repos/adricen/PortfolioGitHub/git/blobs"
  // repos : https://api.github.com/repos/{owner}/{repo}
  // get issue : https://api.github.com/repos/adricen/PortfolioGitHub/issues/1
  $.ajax( {
    	url : "https://api.github.com/users/adricen",
    	dataType : "jsonp",
    	success : function ( returndata ) {

        // console.log( returndata.data[15] )
        console.log( returndata )
        layout_page.api.userPics_url = returndata.data.avatar_url
        layout_page.api.userName = returndata.data.name
        layout_page.api.bio = returndata.data.bio
        layout_page.api.gitHub_tagName = returndata.data.login
        layout_page.api.gitHub_tagUrl = returndata.data.html_url
        // console.log( returndata.data )
        console.log(' Github/api : Ok')

    } // close success handler
  });
})
