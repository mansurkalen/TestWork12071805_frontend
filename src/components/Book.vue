<template>
  <div class="container">
      Title: {{book.title}}
      Author: {{book.author}}
      Year: {{book.year}}
  </div>
</template>

<script>
export default {
  name: 'book',
  data(){
    return {
      book: {}
    }
  },
  mounted() {
    this.getBook(this.$route.params.id)
  },
  methods:{
    getBook(id) {
      this.$axios.get('books/'+id )
      .then((res) =>{
        if(res.data.success){
          this.book = res.data.book;
        }
      })
      .catch((e)=>{
        console.log(e);
      })
    }
  }
}
</script>

