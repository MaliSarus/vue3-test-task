import { ref } from 'vue'

const cardCVV = ref('')

export default function useCardCVV () {
  const options = {
    blocks: [3]
  }

  return {
    cardCVV,
    options
  }
}
