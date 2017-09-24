import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import './stylus/main.styl'
import TrialInitiation from './components/TrialInitiation'
import TrialTypeSelection from './components/TrialTypeSelection'
import ManagersSelection from './components/ManagerSelection'
import SitesSelection from './components/SitesSelection'
import HomeComponent from './components/Home'
import TrialCreated from './components/TrialCreationSuccess'

Vue.use(Vuetify)
Vue.use(VueRouter)


const router = new VueRouter({
    routes: [
        { path: '/trial-initiation', name: 'TrialInitiation', component: TrialInitiation },
        { path: '/trial-type-selection', name: 'TrialTypeSelection', component: TrialTypeSelection },
        { path: '/managers-selection', name: 'ManagersSelection', component: ManagersSelection },
        { path: '/sites-selection', name: 'SitesSelection', component: SitesSelection },
        { path: '/trial-created', name: 'TrialCreated', component: TrialCreated },
        { path: '/', name: 'Home', component: HomeComponent }
    ]
})



new Vue({
  el: '#app',
    router,
  render: h => h(App)
})
