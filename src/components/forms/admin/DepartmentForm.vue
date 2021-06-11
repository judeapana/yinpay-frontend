<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form">
        <v-text-field label="Name Of Department" v-model="form.name"></v-text-field>
        <v-text-field label="Code" v-model="form.code"></v-text-field>
        <v-textarea label="Description" rows="2" v-model="form.description"></v-textarea>
        <v-switch label="Activate" v-model="form.active"></v-switch>
        <v-btn type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    export default {
        name: 'DepartmentForm',
        props: {errors: {
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
