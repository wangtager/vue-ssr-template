<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  name: 'About',
  metaInfo: {
    title: 'About Pages', // set a title
    meta: [{                 // set meta
      name: 'keyWords',
      content: 'About Pages keyWords'
    }]
  },
}
</script>
<style scoped>
  .about {
    color: red;
  }
</style>