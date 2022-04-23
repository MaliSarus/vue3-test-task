<template>
  <label class="label">
    <span>Card num</span>
    <cleave
      v-model="cardNum"
      :options="options"
      @input="inputHandler"
    />
  </label>
</template>

<script>
import Cleave from 'vue-cleave-component'
import useCreditCard from '@/hooks/useCreditCard'

export default {
  name: 'UICardNumField',
  components: {
    Cleave
  },
  setup () {
    const {
      cardNumValue,
      options,
      cardType,
      inputHandler
    } = useCreditCard()
    return {
      cardNum: cardNumValue,
      options,
      cardType,
      inputHandler
    }
  }
}
</script>

<style scoped>

</style>
