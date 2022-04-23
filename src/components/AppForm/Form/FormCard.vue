<template>
  <div class="card" :class="{[cardType]: cardType !== 'unknown',cvv: cvv}">
    <div class="card__front card-front">
      <div class="card-front__number">
        <cleave v-model="cardNum" :options="cardNumOptions" readonly placeholder="****************"
        />
      </div>
      <div class="card-front__bottom">
        <div class="card-front__holder">
          <span>Card holder</span>
          <input type="text" readonly placeholder="YOUR NAME" :value="cardName">
        </div>
        <div class="card-front__expiry">
          <span>expires</span>
          <cleave v-model="cardDate" :options="cardDateOptions" readonly placeholder="**/**"
          />
        </div>
      </div>
    </div>
    <div class="card__back card-back">
      <div class="card-back__stripe"></div>
      <div class="card-back__cvv">
        <span>CVV</span>
        <input type="text" readonly :value="cardCVV">
      </div>
    </div>
  </div>
</template>

<script>
import useCardDate from '@/hooks/useCardDate'
import useCreditCard from '@/hooks/useCreditCard'
import useCardCVV from '@/hooks/useCardCVV'
import useCardName from '@/hooks/useCardName'
import Cleave from 'vue-cleave-component'

export default {
  name: 'FormCard',
  props: {
    cvv: Boolean
  },
  components: {
    Cleave
  },
  setup () {
    const {
      cardNumValue,
      cardType,
      options: cardNumOptions
    } = useCreditCard()

    const {
      cardDate,
      options: cardDateOptions
    } = useCardDate()
    const { cardName } = useCardName()
    const { cardCVV } = useCardCVV()

    return {
      cardNum: cardNumValue,
      cardNumOptions,
      cardDate,
      cardDateOptions,
      cardType,
      cardName,
      cardCVV
    }
  }
}
</script>

<style scoped>

</style>
