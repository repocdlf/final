import Vue from 'vue'

Vue.filter('codificar', function(value) {
    return value.replace(/a/g, "u").replace(/e/g, "o").replace(/o/g, "e").replace(/u/g, "a")
})

Vue.filter('pasarAmayuscula', function(value) {
    return value.toUpperCase()
})