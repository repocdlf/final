<template>

  <section class="src-components-top">

    <input 
      type="text"
      v-model="textoEntrada"
    >
    <Sub :entrada="pasarAminuscula(textoEntrada)"/>

  </section>

</template>

<script lang="js">
  import Sub from './Sub.vue'
  export default  {
    name: 'src-components-top',
    components : {
      Sub
    },
    props: [],
    mounted () {
    },
    data () {
      return {
        textoEntrada: ''
      }
    },
    methods: {
      pasarAminuscula(t){
        return t.toLowerCase()
      }

    },
    computed: {
   
    }
}


</script>

<style scoped lang="css">
  .src-components-top {

  }
</style>
