<template>
    <li>
      {{ todo.name }}
      <button @click="$emit('delete')">Delete</button>
    </li>
  </template>
  
  <script>
  export default {
    name: 'TodoItem',
    props: {
      todo: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style>
  /* Styles here */
  </style>
  