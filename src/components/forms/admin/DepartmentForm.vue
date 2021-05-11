<template>
    <v-form @submit.prevent="$emit('on-submit',form)">

    </v-form>
</template>

<script>
    export default {
        name: 'DepartmentForm',
        props: {
            department: {
                type: Object
            },
            button: {
                type: String
            }
        },
        data() {
            return {
                form: {
                    name: '',
                    code: '',
                    description: '',
                    active: false
                }
            }
        },
    }
</script>

<style scoped>

</style>
