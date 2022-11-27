<template>
  <v-app>
    <app-header :navList="navList" @changeNav="changeNav"/>
    <v-main>
      <ITGrid :ITList="ITList" v-if="it"></ITGrid>
      <InfoSysGrid v-else></InfoSysGrid>
    </v-main>
  </v-app>
</template>

<script>
  import AppHeader from './components/AppHeader.vue';
  import ITGrid from './components/ITGrid.vue';
  import InfoSysGrid from './components/InfoSysGrid.vue';

  export default {
    components: {
      AppHeader,
      ITGrid,
      InfoSysGrid,
    },
    data() {
      return {
        navList: [
          { id:1, title: "РПД", },
          { id:2, title: "Литература", },
          { id:3, title: "Менеджеры", childs: [
            { id:1001, title: "Менеджер ПО", },
            { id:1002, title: "Менеджер ИИС", },
          ] },
          { id:4, title: "Натсройки", },
        ],
        ITList: [
          {id: 1, programName: "Addobe", description: "", requisites: "", isNational: false, isFree: false, isActual: false},
          {id: 2, programName: "Word", description: "", requisites: "", isNational: false, isFree: false, isActual: false},
          {id: 3, programName: "Excel", description: "", requisites: "", isNational: false, isFree: false, isActual: true},
          {id: 4, programName: "RPD", description: "", requisites: "", isNational: false, isFree: false, isActual: true},
          {id: 5, programName: "Eshe choto", description: "", requisites: "", isNational: false, isFree: false, isActual: true},
        ],
        it: true,
      };
    },
    methods: {
      changeNav(target) {
        if (target.textContent.toLowerCase() == "Менеджер ПО".toLowerCase()) {
          this.it = true;
        }
        if (target.textContent.toLowerCase() == "Менеджер ИИС".toLowerCase()) {
          this.it = false;
        }
        console.log(target.textContent);
      },
    }
  }
</script>

<style>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 1px solid black;
  cursor: pointer;
}
.logo {
  font-weight: 700;
  font-size: 36px;
}
.drop-down-menu {
  position: absolute;
  top: 0;
  left: 0;
}
</style>