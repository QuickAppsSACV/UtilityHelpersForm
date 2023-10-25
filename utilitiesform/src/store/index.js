import Vue from 'vue'
import Vuex from 'vuex'
import stepOne from './Modules/stepOne'
import stepTwo from './Modules/stepTwo'
import stepThree from './Modules/stepThree'
import stepFour from './Modules/stepFour'
import stepFive from './Modules/stepFive'
import stepSix from './Modules/stepSix'
import stepSeven from './Modules/stepSeven'
import stepEight from './Modules/stepEight'

Vue.use(Vuex)
const store = new Vuex.Store({

  modules: {
    stepOne,
    stepTwo,
    stepThree,
    stepFour,
    stepFive,
    stepSix,
    stepSeven,
    stepEight
  }
})
export default store;
// export default new Vuex.Store({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//     stepOne
//   }
// })
