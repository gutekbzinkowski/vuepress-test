<template>
  <p class="demo">
    {{ data.msg }}
  </p>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello this is <demo-component>'
      }
    }
  }
</script>
