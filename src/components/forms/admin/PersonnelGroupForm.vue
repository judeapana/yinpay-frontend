<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-btn v-text="button" type="submit"></v-btn>

    </v-form>
</template>

<script>
    export default {
        name: 'PersonnelGroupForm',
        props: {
            personnel_group: {
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
                    active: false
                }
            }
        },
    }
</script>

<style scoped>

</style>
