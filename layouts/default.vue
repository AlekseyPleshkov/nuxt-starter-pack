<template lang='pug'>
  div
    <nuxt/>
</template>

<script>
export default {
  mounted () {
    console.log('////////////////////////////////////////')
    console.log('Разработка сайта - alekseypleshkov.ru')
    console.log('Хайль Гидра!')
    console.log('////////////////////////////////////////')
  }
}
</script>

<style lang='stylus'>
@import '~assets/stylus/app'

html,
body 
  font(color-text, fs-normal, ff-normal)
  width: 100%
  min-height: 100%
  margin: 0
  padding: 0
  letter-spacing: normal
  background: color-bg

h1 
  font(color-text, fs-h1, ff-normal, bold)
  padding: 0
  margin: 0

h2 
  font(color-text, fs-h2, ff-normal, bold)
  padding: 0
  margin: 0

h3 
  font(color-text, fs-h3, ff-normal, bold)
  padding: 0
  margin: 0

h4 
  font(color-text, fs-h4, ff-normal, bold)
  padding: 0
  margin: 0

h5 
  font(color-text, fs-h5, ff-normal, bold)
  padding: 0
  margin: 0

h6 
  font(color-text, fs-h6, ff-normal, bold)
  padding: 0
  margin: 0

p 
  font(color-text, fs-normal, ff-normal, bold)
  padding: 0
  margin: 0

small 
  font(color-text, fs-small, ff-normal, bold)

a 
  transition: color .3s ease

input 
  input()
  placeholder-color(color-text)
  display: inline-block
  box-sizing: border-box
  
  border-radius: rem(4)
  border: rem(1) solid #dfdfdf

button
  button()
  border-radius: rem(4)
  // background: linear-gradient(to bottom, lighten($color-accent, 15%), $color-accent)
  // box-shadow: inset 0 rem(2) 0 0 lighten($color-accent, 25%)
  border: rem(1) solid transparent
  display: inline-block
  cursor: pointer

ul
  padding: 0
  margin: 0

.container
  container(width-container)
  box-sizing: border-box

.grid
  size(width-container)
  grid()
  box-sizing: border-box

  &--column
    flex-direction: column
    box-sizing: border-box
  
  .column 
    column(12)
    box-sizing: border-box

.block 
  display: block

.inline-block 
  display: inline-block

.hide 
  display: none !important

.no-visible 
  visibility: hidden !important

.focus 
  border-color: color-accent !important

.error
  placeholder-color(red)
  border: rem(1) solid red !important
  color: red !important
</style>
