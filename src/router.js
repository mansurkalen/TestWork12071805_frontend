import Vue from 'vue';
import Router from 'vue-router';
import Books from './components/Books';
import Book from './components/Book';
import Form from './components/Form';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'books',
      component: Books
    },
    {
      path: '/book/:id/show',
      component: Book
    },
    {
      path: '/book/:id/edit',
      component: Form
    },
    {
      path: '/create',
      component: Form
    },
  ]
});
