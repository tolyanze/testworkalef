<template>
  <div class="container">
    <div class="row justify-content-center my-3 ">
      <div class="col-md-8 col-12 mt-3 mb-4">
        <p class="title mb-4">Персональные данные</p>
        <div class="text-start">
          <p 
            class="name"
            v-if="this.$store.state.names"
          >
            {{this.$store.state.names}}
            , 
            <span class="text-danger" v-if="!this.$store.state.ages || this.$store.state.ages > 100">
              заполните корректно свой возраст!
            </span>
            <span v-if="this.$store.state.ages && this.$store.state.ages < 100">
              {{this.$store.state.ages}} 
              {{this.declination(this.$store.state.ages)}}
            </span>
          </p>
          <p v-else class="text-danger">
            Заполните форму и сохраните данные!
          </p>
        </div>
      </div>
      <div 
        class="col-md-8 col-12 mt-3"
        v-if="this.$store.state.childs.length>0"
      >
        <p class="title  mb-4">Дети</p>
        <div 
          class="text-start"
          v-for="item in this.$store.state.childs"
          :key="item"
        >
          <p class="name bg">
            {{item.nameChild}}, {{item.ageChild}} {{this.declination(item.ageChild)}}
          </p>
        </div>
      </div>
      <div
        class="col-md-8 col-12 mt-3"
        v-else
      >
        <p class="title  mb-4">Дети</p>
        <div class="text-start">
          <p class="name bg">Нет</p>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>

export default { 
  data(){
    return{
      userAge:'',
      userName: 'Василий',
      arrayPreview: this.$store.state.childs
    }
  },
  methods:{
    declination(x){
      let cases = [2, 0, 1, 1, 1, 2],
          txt = ['год', 'года', 'лет' ];
      return txt[(x % 100 > 4 && x % 100 < 20) ? 2 : cases[(x % 10 < 5) ? x % 10 : 5]];
    }
  }
}
</script>

<style scoped>
  .name{
    display: inline-block;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  .bg{
    padding: 10px 20px;
    background: #F1F1F1;
  }
</style>