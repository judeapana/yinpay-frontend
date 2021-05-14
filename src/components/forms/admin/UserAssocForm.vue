<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
                <v-btn v-text="button" type="submit"></v-btn>

    </v-form>
</template>

<script>
    export default {
        name: 'UserAssocForm',
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
                    user_id: {},
                    assoc_id: {},
                }
            }
        },
    }
</script>

<style scoped>

</style>
