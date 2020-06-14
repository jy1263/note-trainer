<template>
    <div id="help">
        
    </div>
</template>

<script>
  export default {
    
    name: 'Help',

    props: {
        type: {default() { return 'text'; }},
        value: {}                              // you can also add more restrictions here
    },
    data: function () {
        return {
        }
    },

    mounted () {
    },

    methods: {
        updateValue: function (value) {
            this.$emit('input', value);
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#help {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}
</style>
