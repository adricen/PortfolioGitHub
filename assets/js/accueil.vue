<template lang="html">
  <div class="background_img"></div>
  <h2>{{ userName }}</h2>
  <h3>Technical artist</h3>
  <div class="effects">
    <ul class="icons">
      <li><a href="https://twitter.com/whad111" class="icon style2 fa-twitter" title="Twitter" target="_blank" rel="noopener"><span class="label">Twitter</span></a></li>
      <li><a href="https://www.facebook.com/adricen111" class="icon style2 fa-facebook" title="facebook"><span class="label">Facebook</span></a></li>
      <li><a href="https://codepen.io/Adricen" class="icon style2 fa-codepen" title="Codepen" target="_blank" rel="noopener"><span class="label">Codepen</span></a></li>
      <li><a href="https://github.com/adricen" class="icon style2 fa-github" title="gitHub" target="_blank" rel="noopener"><span class="label">Github</span></a></li>
      <li><a href="#" class="icon style2 fa-linkedin"><span class="label" target="_blank" rel="noopener">Dribbble</span></a></li>
    </ul>
    <!-- <p class="major"></p> -->
    <blockquote><em><i class="fa fa-quote-left" aria-hidden="true"></i>{{ bio }} <i class="fa fa-quote-right" aria-hidden="true"></i></em></br><a v-bind:href="gitHub_tagUrl" target="_blank">{{ "@ " + gitHub_tagName }}</a></blockquote>
    <ul class="actions vertical">
      <li><a href="#first" class="button big wide smooth-scroll-middle" v-on:click="display_menu"><i class="fa fa-bars" aria-hidden="true"></i>Menu</a></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'accueil',
  data () {
    return {
      userName: persoCard.userName,
      userPics_url: persoCard.userPics_url,
      gitHub_tagName: persoCard.gitHub_tagName,
      gitHub_tagUrl: persoCard.gitHub_tagUrl,

    }
  }
}
</script>

<style lang="css">
</style>
