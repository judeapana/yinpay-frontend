<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-btn v-text="button" type="submit"></v-btn>

    </v-form>
</template>

<script>
    export default {
        name: 'RoleForm',
        props: {
            role: {
                type: Object
            },
            button: {
                type: String
            }
        }, data() {
            return {
                form: {
                    name: '',
                    description: '',
                    active: false,
                    abilities: [

                    ]
                }
            }
        },
    }
</script>

<style scoped>

</style>
