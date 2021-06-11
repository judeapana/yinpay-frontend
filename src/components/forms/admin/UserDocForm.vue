<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form">
        <v-select label="User" v-model="form.user_id"></v-select>
        <v-menu :close-on-content-click="false" :nudge-right="40" min-width="auto" offset-y
                transition="scale-transition" v-model="dateMenu">
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
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
        <v-file-input label="Document" v-model="form.doc"></v-file-input>
        <v-textarea label="Description" rows="3" v-model="form.description"></v-textarea>
        <v-btn type="submit" v-text="button"></v-btn>
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
                dateMenu:false,
                form: {
                    user_id: {},
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
