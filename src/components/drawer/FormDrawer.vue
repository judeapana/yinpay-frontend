<template>
    <Drawer
            :body-style="{paddingBottom: '80px'}"
            :closable="closable"
            :height="600"
            :placement="position"
            :title="title"
            :visible="visible"
            @close="$emit('onClose')">
        <slot></slot>
    </Drawer>
</template>

<script>
    import {Drawer} from "ant-design-vue";

    export default {

        props: {
            position: {
                type: String,
                default: 'bottom'
            },
            title: {
                type: String
            },
            closable: {
                type: Boolean,
                default: true
            },
            visible: {
                type: Boolean,
                default: false
            }
        },
        name: 'FormDrawer',
        components: {Drawer}
    }
</script>

<style scoped>

</style>
