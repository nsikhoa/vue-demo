import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import Textarea from 'primevue/textarea'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Dialog from 'primevue/dialog'
import store from './store'

import 'primevue/resources/themes/lara-light-pink/theme.css'

const app = createApp(App)

// app.use(VeeValidate)
app.use(router)
app.use(store)
app.use(PrimeVue)
app.use(ToastService)

app.component('ButtonComponent', Button)
app.component('InputText', InputText)
app.component('PasswordComponent', Password)
app.component('TextareaComp', Textarea)
app.component('ToastComp', Toast)
app.component('Dialog', Dialog)

app.mount('#app')
