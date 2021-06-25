<template>
  <div class="container">
      <label for="title">Title</label>
      <input type="text" id="title" v-model="book.title" />

      <label for="author">Author</label>
      <input type="text" id="author" v-model="book.author" />

      <label for="year">Title</label>
      <input type="number" id="year" v-model="book.year" />

      <button v-if="book.id" @click="update">Update</button>
      <button v-else @click="create">Create</button>
  </div>
</template>

<script>
export default {
  name: 'form',
  data(){
    return {
      book: {
        title: "",
        author: "",
        year: null,
      }
    }
  },
  mounted() {
    if(this.$route.params.id){
      this.getBook(this.$route.params.id)
    }
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
    },
    update() {
      this.$axios.put('books/'+this.book.id, this.book )
      .then((res) =>{
        if(res.data.success){
          this.$router.push('/');
        }
      })
      .catch((e)=>{
        console.log(e);
      })
    },
    create() {
      this.$axios.post('books', this.book )
      .then((res) =>{
        if(res.data.success){
          this.$router.push('/');
        }
      })
      .catch((e)=>{
        console.log(e);
      })
    }
  }
}
</script>

