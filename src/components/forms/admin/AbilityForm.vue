<template>
    <v-form @submit="$emit('on-submit',form)">
        <v-text-field label="Name" v-model="form.name"></v-text-field>
        <v-textarea label="Description" v-model="form.description"></v-textarea>
        <v-switch label="Active" v-model="form.active"></v-switch>
        <v-btn v-text="button" type="submit"></v-btn>
    </v-form>
</template>

<script>
    export default {
        name: 'AbilityForm',
        props: {
            button: {
                type: String
            },
            ability: {
                type: Object
            }
        },
        data() {
            return {
                form: {
                    name: '',
                    description: '',
                    active: true
                }
            }
        },
    }
</script>

<style scoped>

</style>
