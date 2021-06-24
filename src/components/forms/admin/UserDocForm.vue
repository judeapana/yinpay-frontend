<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-select :rules="rules.user_id" label="User" v-model="form.user_id"></v-select>
        <v-menu :close-on-content-click="false" :nudge-right="40" min-width="auto" offset-y
                transition="scale-transition" v-model="dateMenu">
            <template v-slot:activator="{ on, attrs }">
                <v-text-field :rules="rules.date"
                              label="Date Of Upload"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-model="form.date"
                              v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker
                    @input="dateMenu = false"
                    v-model="form.date"
            ></v-date-picker>
        </v-menu>
        <v-file-input :rules="rules.doc" label="Document" v-model="form.doc"></v-file-input>
        <v-textarea :rules="rules.description" label="Description" rows="3" v-model="form.description"></v-textarea>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    export default {
        name: 'UserDocForm',
        props: {
            errors: {
                type: Object
            },
            button: {
                type: String
            },
            doc: {
                type: Object
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
                dateMenu: false,
                rules: {
                    user_id: [this.required(), this.api('user_id')],
                    date: [this.required(), this.api('date')],
                    doc: [this.required(), this.api('doc')],
                    description: [this.required(), this.api('description')],
                },
                form: {
                    user_id: "",
                    date: '',
                    doc: [],
                    description: '',
                }
            }
        },
    }
</script>

<style scoped>

</style>
