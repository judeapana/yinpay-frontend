<template>
    <div>
        <empty class="text-center">
            <v-btn color="primary" @click="showDrawer">Create Now</v-btn>
        </empty>


    </div>
</template>

<script>
    import {Empty} from 'ant-design-vue'

    export default {
        name: 'UserSpouse',
        components: {
            Empty
        },
        data() {
            return {
                visible: false,
            }
        },
        methods: {
            OnUpdate(pk) {
                console.log(pk)
            },
            OnDelete(pk) {
                console.log(pk)
            },
            afterVisibleChange(val) {
                console.log('visible', val);
            },
            showDrawer() {
                this.visible = true;
            },
            onClose() {
                this.visible = false;
            },
        }
    }
</script>

<style scoped>

</style>

