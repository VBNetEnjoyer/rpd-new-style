import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css';
import '@/assets/vuetify.custom-scheme.css'

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
            primary: '#3c063e',
            secondary: '#3c063e',
            accent: "#3c063e", 
            error: '#f44336', 
            info: '#2196F3',
            success: '#8bc34a', 
            warning: '#ffc107', 
        },
        dark: {
            primary: '#3c063e',
            secondary: '#3c063e',
            accent: "#3c063e", 
            error: '#f44336', 
            info: '#2196F3',
            success: '#8bc34a', 
            warning: '#ffc107', 
        }
      },
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
  })

export default vuetify;
