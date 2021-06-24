<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-text-field :rules="rules.name" label="Name Of Department" v-model="form.name"></v-text-field>
        <v-text-field :rules="rules.code" label="Code" v-model="form.code"></v-text-field>
        <v-textarea :rules="rules.description" label="Description" rows="2" v-model="form.description"></v-textarea>
        <v-switch :rules="rules.active" label="Activate" v-model="form.active"></v-switch>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    export default {
        name: 'DepartmentForm',
        props: {
            errors: {
                type: Object
            },
            department: {
                type: Object
            },
            button: {
                type: String
            }
        },
        watch: {
            errors(value) {
                this.validate(this.$refs.form, value.errors)
            }
        },
        data() {
            return {
                valid: false,
                rules: {
                    'name': [this.required(), this.api('name')],
                    'code': [this.required(), this.api('code')],
                    'description': [this.required(), this.api('description')],
                    'active': [this.api('active')]
                },
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
