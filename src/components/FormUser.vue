<template>
  <div class="container">
    <div class="form-items">
      <form>
        <div class="row justify-content-center my-3 ">
          <div class="col-md-8 col-12 mt-3 mb-2">
            <p class="title">Персональные данные</p>
            <label>Имя
              <input 
                class="form-control" 
                type="text" 
                name="name"
                v-model="this.nameValue"
                placeholder="Петр"
                required
              >
            </label>
          </div>
          <div class="col-md-8 col-12 mt-3 mb-2">
            <label>Возраст
              <input 
                class="form-control" 
                type="number"
                min="0"
                max="100"
                name="age"
                v-model="ageValue"
                placeholder=99
                required
              >
            </label>
          </div>
          <div class="col-md-8 col-12 mt-5 mb-2">
            <div class="d-flex justify-content-between align-items-center">
              <p class="title">Дети (макс. 5)</p>
              <button 
                class=""
                @click="addChild"
                :disabled='disabled'
                type="button"
              >
              + Добавить ребенка
              </button>
            </div>
              <TodoChild 
                v-for="(item, index) in user" 
                :key="item" 
                :ageValue="this.ageValue"
                :index="this.index"
                :nameValue="this.nameValue"
              >
                <button 
                  class="bg-none"
                  @click="removeChild(index)"
                  type="button" 
                >
                  Удалить
                </button>
              </TodoChild>
            
            
          </div> 
          <div class="col-md-8 col-12 mt-5 mb-2 form-button mt-5 text-start">
            <button 
              id="submit" 
              type="button" 
              class="btn btn-primary bg-revers"
              @click="addName"
            >
            Сохранить
            </button>
          </div> 
        </div>
      </form>
    </div> 
  </div>
</template>

<script>
import TodoChild from "@/components/TodoChild.vue";

export default {

  name: 'RegisterUser',
  
  components: {
    TodoChild
  },
  data(){
    return{
      nameValue: '',
      ageValue: '',
      disabled:false,
      index: null,
      user: [],
      arrayPreview: []
    }
  },
  methods:{
    addChild(){
      
      if(this.user.length >= 5){
        this.disabled = true;
      }else{
        this.user.push({'name': this.nameValue, 'age': this.ageValue})
      }  
    },
    removeChild(index){
      this.user.splice(index, 1)
      this.disabled = false;
    },
    addPreview(){
      let childs = [],
        chiName = document.querySelectorAll('input.nameChild'),
        chiAge = document.querySelectorAll('input.ageChild')

        for (var i = 0; i < chiName.length; i++){
          childs.push({'nameChild': chiName[i].value, 'ageChild': +chiAge[i].value})
        }
        this.$store.dispatch('addChilds', childs)
    },
    addName(){
      this.addPreview()
      this.$store.dispatch('addName', this.nameValue)
      this.$store.dispatch('addAge', this.ageValue)
    }
  },
  
}
</script>


<style lang="css">
  p{
    margin: 0;
  }
  button{
    color:#01A7FD;
    background: #ffffff;
    border-radius: 30px!important;
    border: 2px solid #01A7FD!important;
    padding: 10px 20px ;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
  button.bg-none{
    border: none!important;
  }
  button.bg-revers{
    color:#ffffff;
    background: #01A7FD;
  }
  .title{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #111111;
    text-align: start;
    margin-bottom: 20px;
    padding: 0;
    margin: 0;
  }
  label{
    border: 1px solid #F1F1F1;
    border-radius: 4px;
    text-align: start;
    padding: 10px;
    padding: 0.375rem 0.75rem;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: rgba(17, 17, 17, 0.48);
    width: 100%;
  }
  input, input:active, input:hover, input:focus {
    outline: 0!important;
    outline-offset: 0!important;
    box-shadow: none!important;
    border: none!important;
    padding:0!important;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px!important;
    line-height: 24px!important;
    color: #111111;
  }
</style>
