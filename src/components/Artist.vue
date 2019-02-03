<template>
  <li>
    <h2>
      <a :href="artist.url" target="_blank">
        {{ artist.name }}
      </a>
    </h2>
    <img :src="artist.image[2]['#text']" >
  </li>
</template>

<script>
export default {
  name: 'artist',
  props: ['artist']
}  
</script>

<style type="text/css" scoped>
li {
  display: block;
  margin: 10px 0;
}
</style>