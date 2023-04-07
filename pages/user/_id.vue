<template>
  <div>
    {{ user }}
  </div>
</template>

<script>
export default {
  asyncData({ params, error, payload }) {
    const { id } = params;
    return {
      user: {
        id
      }
    }
  },
  data() {
    return {
      user: {}
    }
  }
}
</script>

<style>

</style>