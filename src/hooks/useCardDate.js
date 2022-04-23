import { ref } from 'vue'

const cardDate = ref('')

export default function useCardDate () {
  const options = {
    date: true,
    datePattern: ['m', 'y']
  }
  return {
    cardDate,
    options
  }
}
