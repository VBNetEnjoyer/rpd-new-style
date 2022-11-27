<template>
    <div class="grid-header" >
        <div class="grid-header__title">
            {{ title }}
        </div>
        <div class="grid-header__elements-group">
            <slot></slot> 
            <!--Что бы были отступы между элементами, на элемент нужен класс grid-header__element -->
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {type: String}
        },
    };
</script>
<style scoped>

    .grid-header {
        display: flex;
        border-radius: 7px 7px 0 0; 
        justify-content: space-between; 
        padding-top: 5px; 
        padding-bottom: 5px; 
        background-color: #3e0e40;
    }

    .grid-header__title {
        font-weight: 500; 
        color: rgb(255 255 255); 
        font-size: 16px; 
        margin: 0px 0 0px 10px; 
        font-family: Segoe UI;
    }

    .grid-header__elements-group {
        display: flex;
    }

    .grid-header__element {
        margin-right: 8px;
    }
</style>