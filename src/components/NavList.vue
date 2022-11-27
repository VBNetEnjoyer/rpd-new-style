<template>
    <v-list nav dense>
        <v-list-item-group
            active-class="primary--text">
            <v-list-item v-for="item in notNestedNavList" :key="item.id" @click="$emit('changeNav', $event.target)">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
            
            <v-list-group :value="false" v-for="item in nestedNavList" :key="item.id" > 
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </template>

                <v-list-item v-for="nestedItem in item.childs" :key="nestedItem.id" @click="$emit('changeNav', $event.target)">
                    <v-list-item-title>{{ nestedItem.title }}</v-list-item-title>
                </v-list-item>
                
            </v-list-group>

        </v-list-item-group>
    </v-list>
</template>

<script>
    export default {
        props: {
            navList: Array,
        },
        data() {
            return {
                notNestedNavList: [],
                nestedNavList: [],
            };
        },
        created() {
            this.navList.forEach(element => {
                element.childs ? this.nestedNavList.push(element) : this.notNestedNavList.push(element)
            });
        }
    }
</script>

<style scoped>
    .on-hover {
        background-color: rgba(60, 6, 62, 0.1);
        color: #3c063e !important;
    }
</style>