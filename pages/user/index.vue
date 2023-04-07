<template>
  <div class="user-index">user page</div>
</template>

<script>
import tdkObj from '../../pageConfig/tdk/user'
import structuredData from '../../pageConfig/structuredData/user'
import tdkMixins from '../../mixins/tdkMixins'
export default {
  title() {
    return tdkObj.title
  },
  description() {
    return tdkObj.description
  },
  structuredData() {
    return structuredData
  },
  mixins: [tdkMixins],
  mounted() {},
}
</script>

<style lang="scss" scoped>
.user-index {
  color: rgb(134, 79, 8);
}
</style>
