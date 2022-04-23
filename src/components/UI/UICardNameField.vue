<template>
  <label class="label">
    <span>Card Name</span>
    <input type="text" @input="inputHandler">
  </label>
</template>

<script>
import useCardName from '@/hooks/useCardName'

export default {
  name: 'UICardNameField',

  setup () {
    const {
      cardName,
      inputHandler
    } = useCardName()

    return {
      cardName,
      inputHandler
    }
  }
}
</script>

<style scoped>

</style>
