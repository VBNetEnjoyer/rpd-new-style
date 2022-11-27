<template>
    <v-card class="pa-4 ma-4 elevation-4 table-card">
        <!--<v-card class="pb-5 pt-1 px-5 ma-4 elevation-4 table-card">-->
        <!--<v-card-title class="ma-0 pa-0 mb-4">Менеджер ПО</v-card-title>-->
        <GridHeader title="Менеджер ПО">
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
                    <span>Добавить ПО</span>
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
                
        <DxDataGrid ref="ITGrid"
                    :data-source="ITList"
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
                      data-field="programName"
                      width="25%" />
            <DxColumn caption="Описание"
                      data-field="description"
                      width="25%" />
            <DxColumn caption="Реквезиты подтвердж. док-во"
                      data-field="requisites"
                      width="20%" />
            <DxColumn caption="Отечественное"
                      data-field="isNational"
                      data-type="boolean"
                      width="10%" />
            <DxColumn caption="Свободное"
                      data-field="isFree"
                      data-type="boolean"
                      width="10%" />
            <DxColumn caption="Актуален"
                      data-field="isActual"
                      data-type="boolean"
                      width="10%" />
        </DxDataGrid>
    </v-card>
</template>

<script>
    // import { mdiPlus, mdiDelete } from '@mdi/js';
    import { DxColumn, DxDataGrid, DxEditing, } from 'devextreme-vue/data-grid';
    import { DxTextBox } from 'devextreme-vue/text-box';
    import GridHeader from './GridHeader.vue';

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            DxEditing,
            DxTextBox,
            GridHeader,
        },
        props: {
            ITList: {},
        },
        data() {
            return {
                // mdiDelete,
                // mdiPlus,
                selectedRowKeys: [],

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
                this.$refs.ITGrid.instance.addRow();
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

/*    .v-card__title {
        font-weight: 700;
        color: white;
        position: relative;
        z-index: 9;
    }
    .table-card::after {
        content: ' ';
        width: 100%;
        height: 40px;
        background: #3c063e;
        position: absolute;
        z-index: 8;
        top: 0px;
        left: 0px;
    }*/
</style>