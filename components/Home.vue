<template lang="pug">
  section.home
    h1 Header H1
    h2 Header H2
    h3 Header H3
    h4 Header H4
    h5 Header H5
    h6 Header H6
    p Normal text
      small Test small
    a(href='#') Normal link

    div.grid
      div.column
        p column 1
      div.column
        p column 2

    br
    form(v-form-send='{success: formSuccess, fail: formFail}' action='./send.php' method='post')
      input(v-form-input='{length: 5}' type='text' name='name' placeholder='User name')
      button Button send
</template>

<script>
  export default {
    methods: {
      formSuccess () {
        console.log('success')
      },
      formFail () {
        console.log('fail')
      }
    }
  }
</script>

<style scoped>
  .home {
    adaptive: 100% auto;
  }
</style>

