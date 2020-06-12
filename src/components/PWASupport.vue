<template>
</template>

<script>
  export default {
    
    name: 'PWASupport',

    metaInfo: {
      link:[
        {rel: "apple-touch-icon", href: "<%= BASE_URL %>apple-touch-icon.png"}
      ],
      title: 'Note Trainer',
      meta: [
        { name: "apple-mobile-web-app-capable", content: "yes"},
        { name: "apple-mobile-web-app-status-bar-style", content: "black"},
        { name: "apple-mobile-web-app-title", content: "Note Trainer" }
      ]

    },

    props: {
    },

    data: function () {
        return {
            
        }
    },

    mounted () {
    },

    methods: {
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>
