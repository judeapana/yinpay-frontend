<template>
    <Drawer :body-style="{paddingBottom: '80px'}"
            :closable="closable"
            :height="600"
            :placement="position"
            :title="title"
            :visible="visible"
            @close="$emit('onClose')"
            v-model="model">
        <slot></slot>
    </Drawer>
</template>

<script>
    import {Drawer} from "ant-design-vue";

    export default {
        watch: {
            visible(value) {
                this.model = value
            }
        },
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
        components: {Drawer},
        data() {
            return {
                model: false
            }
        }
    }
</script>

<style scoped>

</style>
