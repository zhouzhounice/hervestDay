import ElContainer from './Container.vue'
import ElHeader from './Header.vue'
import ElFooter from './Footer.vue'
import ElAside from './Aside.vue'
import ElMain from './Main.vue'

console.log(ElHeader)
export default {
  install (app) {
    app.component('ElContainer', ElContainer)
    app.component('ElHeader', ElHeader)
    app.component('ElFooter', ElFooter)
    app.component('ElAside', ElAside)
    app.component('ElMain', ElMain)
  }
}