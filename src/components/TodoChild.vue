<template>
  <div class='row mt-3 mb-2'  >
    <div class="col-5">
      <label>Имя
        <input 
          class="form-control nameChild" 
          type="text" 
          name="name"
          placeholder='Петр'
          required
        >
      </label>
    </div>
    <div class="col-5">
      <label>Возраст
        <input 
          class="form-control ageChild" 
          type="number"
          name="age"
          min="0"
          max="50"
          placeholder=99 
          required
        >
      </label>
    </div>
    <div class="col-2">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TodoChild',

  props:[
    'nameValue',
    'ageValue'
  ],
  data(){
    return{

    }

  },
  methods: {

  }

}

</script>

<style scoped type="css">
 

</style>