import { computed, ref } from 'vue'

const visaCardRegex = /^1234/
const mastercardCardRegex = /^4321/
const cardNumValue = ref('')
const cardType = computed(() => {
  let result = 'unknown'
  if (cardNumValue.value.match(visaCardRegex)) {
    result = 'visa'
    return result
  }
  if (cardNumValue.value.match(mastercardCardRegex)) {
    result = 'mastercard'
    return result
  }
  return result
})

export default function useCreditCard () {
  const options = {
    blocks: [4, 4, 4, 4],
    delimiter: ' '
  }
  const inputHandler = (e) => {
    console.log(e)
    e.target.value = e.target.value.replace(/[^\d]/g, '')
  }

  return {
    cardNumValue,
    options,
    cardType,
    inputHandler
  }
}
