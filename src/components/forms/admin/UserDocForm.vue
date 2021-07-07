<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-select :items="users" :rules="rules.user_meta_id" item-text="username" item-value="user_meta.id" label="User"
                  v-model="form.user_meta_id"></v-select>
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
        <a :href="doc.doc" v-if="available_file">View Current File</a>
        <v-file-input :rules="rules.doc" label="Document"
                      v-model="form.doc"></v-file-input>
        <v-textarea :rules="rules.notes" label="Notes" rows="3" v-model="form.notes"></v-textarea>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    import {mapActions} from "vuex";

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
        methods: {
            ...mapActions('user', ['_get_user']),
        },
        computed: {
            available_file() {
                return !!this.doc?.doc
            },
        },
        mounted() {
            this._get_user({page: -1}).then((users) => {
                this.users = users.data
            })
        },
        data() {
            return {
                users: [],
                valid: false,
                dateMenu: false,
                rules: {
                    user_meta_id: [this.required(), this.api('user_meta_id')],
                    date: [this.required(), this.api('date')],
                    doc: [this.required(), this.api('doc')],
                    description: [this.required(), this.api('description')],
                },
                form: {
                    doc: [],
                    user_meta_id: this.doc?.user_meta_id || "",
                    date: this.doc?.date || '',
                    notes: this.doc?.notes || '',
                }
            }
        },
    }
</script>

<style scoped>

</style>
