<template>
    <div id="notation"></div>
</template>

<script>
  import Vex from 'vexflow/src/index.js'
  let VF = Vex.Flow;

  export default {
    name: 'NotationRenderer',

    props: {
    },

    data: function () {
        return {
            
        }
    },

    mounted () {
    },

    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.centeralign {
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & #notation {
        width: 20em !important;
        display: flex;
        align-items: center;
        justify-items: center;
        justify-content: center;
    }
}
body {
    margin: 0px;
}
</style>
