import '@aws-amplify/ui-vue/styles.css';
import '@fontsource/inter/variable.css';

import { createApp } from 'vue'
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import './assets/index.postcss'
import AmplifyVue from '@aws-amplify/ui-vue';

const head = createHead()
const app = createApp(App)

Amplify.configure(awsExports);

app.use(router)
app.use(head)
app.use(AmplifyVue)
app.mount('#app')
