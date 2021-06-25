<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 ">
        <a href="#" class="btn btn-primary text-white" @click="addBook()">Add Book</a>
        <table class="table table-bordered mt-3">
          <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Year</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="book in books" :key="book.id">
            <td>{{book.id}}</td>
            <td>{{book.title}}</td>
            <td>{{book.author}}</td>
            <td>{{book.year}}</td>
            <td>
              <a href="#" class="btn btn-info text-white " @click="openBook(book.id)">Open</a>
              <a href="#" class="btn btn-warning text-white m-1" @click="editBook(book.id)">Edit</a>
              <a href="#"  class="btn btn-danger" @click="deleteBook(book.id)">Delete</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'books',
    data(){
      return{
        books: []
      }
    },
    mounted() {
      this.getBooks()
    },
    methods: {
      getBooks() {
        this.$axios.get('books' )
        .then((res) =>{
          if(res.data.success){
            this.books = res.data.books;
          }
        })
        .catch((e)=>{
          console.log(e);
        })
      },
      openBook(id) {
        this.$router.push('/book/'+id+'/show');
      },
      editBook(id) {
        this.$router.push('/book/'+id+'/edit');
      },
      addBook() {
        this.$router.push('/create');
      },
      deleteBook(id) {
        this.$axios.delete('books/'+id )
        .then((res) =>{
          if(res.data.success){
            this.books = res.data.books;
          }
        })
        .catch((e)=>{
          console.log(e);
        })
      }
    }
  }
</script>

