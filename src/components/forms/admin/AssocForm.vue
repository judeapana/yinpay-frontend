<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-btn type="submit" v-text="button"></v-btn>

    </v-form>
</template>

<script>
    export default {
        name: 'AssocForm',
        props: {
            button: {
                type: String
            },
            assoc: {
                type: Object
            }
        },
        data() {
            return {
                form: {
                    name: '',
                    active: '',
                    description: ''

                }
            }
        },
    }
</script>

<style scoped>

</style>
