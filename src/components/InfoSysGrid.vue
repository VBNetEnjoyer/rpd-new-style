<template>
    <v-card class="pa-4 ma-4 elevation-4 table-card">
       
        <GridHeader title="Менеджер ИИС">
            <DxTextBox class="grid-header__element" placeholder="Поиск..." />
            <div class="grid-header__element">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <div v-on="on">
                            <v-btn elevation="0"
                                   v-bind="attrs"
                                   height="24"
                                   width="24"
                                   fab
                                   x-small
                                   @click="addNewRow">
                                <v-icon>
                                    mdi-plus
                                </v-icon>
                            </v-btn>
                        </div>
                    </template>
                    <span>Добавить</span>
                </v-tooltip>
            </div>
            <div class="grid-header__element">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <div v-on="on">
                            <v-btn elevation="0"
                                   v-bind="attrs"
                                   height="24"
                                   width="24"
                                   fab
                                   x-small
                                   @click="deleteAll">
                                <v-icon>
                                    mdi-delete
                                </v-icon>
                            </v-btn>
                        </div>
                    </template>
                    <span>Удалить все</span>
                </v-tooltip>
            </div>
        </GridHeader>
                
        <DxDataGrid ref="InfoSysGrid"
                    :data-source="SysList"
                    key-expr="id"
                    :show-borders="true"
                    :show-row-lines="true"
                    :show-column-lines="true"
                    :allow-column-reordering="true"
                    :column-auto-width="true"
                    :allow-column-resizing="true"
                    @row-updated="onRowUpdated"
                    @row-removed="onRowRemoved">
            <DxEditing :allow-updating="true"
                       :allow-deleting="true"
                       :confirm-delete="false"
                       :use-icons="true"
                       mode="cell" />
            <DxColumn caption="Название"
                      data-field="title"
                      width="35%" />
            <DxColumn caption="Ссылка"
                      data-field="link"
                      width="35%" />
            <DxColumn caption="Тип"
                      data-field="typeId"
                      width="20%">
                <DxLookup :data-source="types"
                          display-expr="title"
                          value-expr="id" />
            </DxColumn>
            <DxColumn caption="Актуален"
                      data-field="isActual"
                      data-type="boolean"
                      width="10%" />
        </DxDataGrid>
    </v-card>
</template>

<script>
    // import { mdiPlus, mdiDelete } from '@mdi/js';
    import { DxColumn, DxDataGrid, DxEditing, DxLookup, } from 'devextreme-vue/data-grid';
    import { DxTextBox } from 'devextreme-vue/text-box';
    import GridHeader from './GridHeader.vue';


    export default {
        components: {
            DxDataGrid,
            DxColumn,
            DxEditing,
            DxTextBox,
            DxLookup, 
            GridHeader,
        },
        data() {
            return {
                // mdiDelete,
                // mdiPlus,
                SysList: [
                    { id: 1, title: "Item #1", link: "", typeId: 0, isActual: true, },
                    { id: 2, title: "Item #2", link: "", typeId: 0, isActual: true, },
                    { id: 3, title: "Item #3", link: "", typeId: 0, isActual: true, },
                    { id: 4, title: "Item #4", link: "", typeId: 0, isActual: true, },
                ],
                types: [
                    { id: 0, title: "Неизвестный",},
                    { id: 1, title: "База данных",},
                    { id: 2, title: "ИСС",},
                ],

            };
        },
        methods: {
            onRowUpdated(e) {
                console.log(e);
                //manager.update();
            },
            onRowRemoved(e) {
                console.log(e);
                
            },
            addNewRow() {
                this.$refs.InfoSysGrid.instance.addRow();
            },
            deleteAll() {

            },
        },

    };
</script>
<style scoped>
    .table-card {
        max-width: 992px;
        position: relative;
    }
</style>