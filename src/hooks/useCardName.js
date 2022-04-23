import { ref } from 'vue'
const cardName = ref('')

export default function useCardName () {
  const inputHandler = (e) => {
    e.target.value = e.target.value.toUpperCase().replace(/[^A-z-\s}]|(\s{2,})/g, '')
    cardName.value = e.target.value
  }
  return {
    cardName,
    inputHandler
  }
}
