<template>
  <FormCard :cvv="isCVV"/>
  <form action="#">
    <UICardNumField/>
    <UICardNameField/>
    <UICardDateField/>
    <UICardCVVField @focus="isCVV = true" @blur="isCVV = false"/>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import UICardNumField from '@/components/UI/UICardNumField'
import UICardCVVField from '@/components/UI/UICardCVVField'
import UICardDateField from '@/components/UI/UICardDateField'
import UICardNameField from '@/components/UI/UICardNameField'
import { ref } from 'vue'
import FormCard from '@/components/AppForm/Form/FormCard'

export default {
  name: 'AppForm',
  components: {
    FormCard,
    UICardNumField,
    UICardCVVField,
    UICardDateField,
    UICardNameField
  },
  setup () {
    const isCVV = ref(false)
    return { isCVV }
  }
}
</script>

<style scoped>

</style>
