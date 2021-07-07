<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-text-field :rules="rules.name" label="Name Of Bank" v-model="form.name"></v-text-field>
        <v-textarea :rules="rules.notes" label="Note" rows="3" v-model="form.notes"></v-textarea>
        <v-switch :rules="rules.disabled" label="Disabled" v-model="form.disabled"></v-switch>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>

    </v-form>
</template>

<script>
    export default {
        name: 'BankForm',
        props: {
            errors: {
                type: Object
            },
            bank: {
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
                    name: [this.required(), this.api('name')],
                    notes: [this.required(), this.api('notes')],
                    disabled: [this.api('disabled')]
                },
                form: {
                    name: this.bank?.name || '',
                    notes: this.bank?.notes || '',
                    disabled: this.bank?.disabled || false
                }
            }
        },
    }
</script>

<style scoped>

</style>
