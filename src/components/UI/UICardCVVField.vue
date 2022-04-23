<template>
  <label class="label">
    <span>Card CVV</span>
    <cleave
      v-model="cardCVV"
      :options="options"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
  </label>
</template>

<script>
import useCardCVV from '@/hooks/useCardCVV'
import Cleave from 'vue-cleave-component'

export default {
  name: 'UICardCVVField',
  components: {
    Cleave
  },
  setup () {
    const {
      cardCVV,
      options
    } = useCardCVV()

    return {
      cardCVV,
      options
    }
  }
}
</script>

<style scoped>

</style>
