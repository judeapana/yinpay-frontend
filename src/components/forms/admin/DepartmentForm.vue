<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-text-field :rules="rules.name" label="Name Of Department" v-model="form.name"></v-text-field>
        <v-text-field :rules="rules.abbr" label="Abbr/Code" v-model="form.abbr"></v-text-field>
        <v-textarea :rules="rules.notes" label="Notes" rows="2" v-model="form.notes"></v-textarea>
        <v-switch :rules="rules.disabled" label="Disabled" v-model="form.disabled"></v-switch>
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
                    'abbr': [this.required(), this.api('abbr')],
                    'notes': [this.required(), this.api('notes')],
                    'disabled': [this.api('disabled')]
                },
                form: {
                    name: this.department?.name || '',
                    abbr: this.department?.abbr || '',
                    notes: this.department?.notes || '',
                    disabled: this.department?.disabled || false
                }
            }
        },
    }
</script>

<style scoped>

</style>
