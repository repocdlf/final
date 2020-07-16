<template>

  <section class="src-components-sub">
    <p>{{ entrada | codificar | pasarAmayuscula }}</p>
    <p>Respuestas: 1-b, 2-b, 3-c, 4-b, 5-b</p>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-sub',
    props: ['entrada'],
    mounted () {

    },
    data () {
      return {
        
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-sub {

  }
</style>
