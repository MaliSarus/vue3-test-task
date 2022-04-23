<template>
  <label class="label">
    <span>Card date</span>
    <cleave
      v-model="cardDate"
      :options="options"
    />
  </label>
</template>

<script>
import Cleave from 'vue-cleave-component'
import useCardDate from '@/hooks/useCardDate'

export default {
  name: 'UICardDateField',

  components: {
    Cleave
  },
  setup () {
    const { cardDate, options } = useCardDate()
    return {
      cardDate,
      options
    }
  }
}
</script>

<style scoped>

</style>
