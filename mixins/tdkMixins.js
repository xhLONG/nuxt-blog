export default {
  head() {
    return {
      title: this.$options.title(),
      meta: [
        {
          name: 'description',
          content: this.$options.description(),
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$options.description(),
        },
      ],
      script: this.$options.structuredData().map((item) => {
        return {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(item),
        }
      }),
      __dangerouslyDisableSanitizers: ['script'],
    }
  },
}
