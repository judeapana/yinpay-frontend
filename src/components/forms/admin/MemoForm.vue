<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-text-field :rules="rules.title" label="Title" v-model="form.title"></v-text-field>
        <v-menu :close-on-content-click="false" :nudge-right="40" min-width="auto" offset-y
                transition="scale-transition" v-model="dateMenu">
            <template v-slot:activator="{ on, attrs }">
                <v-text-field :rules="rules.date"
                              label="Date Of Memo"
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

        <v-textarea :rules="rules.text" label="Text" rows="4" v-model="form.text"></v-textarea>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    export default {
        name: 'MemoForm',
        props: {
            errors: {
                type: Object
            },
            button: {
                type: String
            },
            memo: {
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
                rules: {
                    title: [this.required(), this.api('title')],
                    date: [this.required(), this.api('date')],
                    text: [this.required(), this.api('text')],
                },
                dateMenu: false,
                form: {
                    title: '',
                    date: '',
                    text: ''
                }
            }
        },
    }
</script>

<style scoped>

</style>
