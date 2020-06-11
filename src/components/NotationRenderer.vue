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
        
        & svg{
            z-index: -100;
            transform: scale(2, 2);
            & rect {
                transform: translateY(8vh);
            }
            & path {
                transform: translateY(8vh);
                stroke: black;
            }
        }
    }
}
body {
    margin: 0px;
}
button{
    font-family: monospace;
    display:block;
    padding-left: 5%;
    padding-right: 5%;
    background-color: white; 
    border: none;
}
</style>
