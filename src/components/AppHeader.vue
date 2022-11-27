<template>
    <div>
        <!-- temporary -->
        <v-navigation-drawer v-model="drawer" app :temporary="checkbox"> 
            <div class="logo-container" v-if="logo" @click="logo = !logo">
                <div class="logo"> LOGO </div>
            </div>
            
            
            <nav-list :navList="navList" @changeNav="changeNav"></nav-list>
            
            <v-switch v-model="checkbox" class="ml-2" label="Nav Style Switcher"></v-switch>
            
            </v-navigation-drawer>

        <v-app-bar app class="primary" dense>
            <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
            
            <v-toolbar-title class="white--text">Менеджеры</v-toolbar-title>
            <v-spacer></v-spacer>
        
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                <div style="display: flex; align-items: center; position: relative;" 
                    v-bind="attrs"
                    v-on="on">
                    <div style="border-radius: 50%; border: 1px solid black; overflow: hidden;">
                        <v-icon class="white--text" style="background: black"> mdi-account </v-icon>
                    </div>
                    
                    <div class="mx-2 white--text">
                        Admin <v-icon class="white--text"> mdi-menu-down </v-icon>
                    </div>
                </div>
                </template>
                <v-list dense>
                    <v-list-item-group
                    active-class="primary--text"
                    hover-class="primary--text">

                    <v-list-item>
                        <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
                        <v-list-item-title>Личный кабинет</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon><v-icon>mdi-run</v-icon></v-list-item-icon>
                        <v-list-item-title>Выход</v-list-item-title>
                    </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>
        </v-app-bar>
    </div>
</template>

<script>
    import NavList from './NavList.vue';
    export default {
        components: {
            NavList,
        },
        props: {
            navList: Array,
        },
        data() {
            return {
                drawer: false,
                logo: true,
                checkbox: false,
            };
        },
        methods: {
            changeNav(target) {
                this.drawer = !this.drawer;
                this.$emit('changeNav', target);
            }
        }
    }
</script>

<style>

</style>