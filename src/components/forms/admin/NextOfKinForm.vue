<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-select :items="users" :rules="rules.user_meta_id" item-text="username" item-value="user_meta.id" label="User"
                  v-model="form.user_meta_id"/>
        <v-text-field :rules="rules.first_name" label="First Name" v-model="form.first_name"></v-text-field>
        <v-text-field :rules="rules.last_name" label="Last Name" v-model="form.last_name"></v-text-field>
        <v-text-field :rules="rules.middle_name" label="Middle Name" v-model="form.middle_name"></v-text-field>
        <v-menu :close-on-content-click="false" :nudge-right="40" min-width="auto" offset-y
                transition="scale-transition" v-model="dateMenu">
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                        label="Date Of Birth"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-model="form.dob"
                        v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker
                    @input="dateMenu = false"
                    v-model="form.dob"
            ></v-date-picker>
        </v-menu>

        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: 'NextOfKinForm',
        props: {
            errors: {
                type: Object
            },
            next_of_kin: {
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
        methods: {
            ...mapActions('user', ['_get_user'])
        },
        mounted() {
            this._get_user({page: -1}).then((users) => {
                this.users = users.data
            })
        },
        data() {
            return {
                valid: false,
                users: [],
                rules: {
                    user_meta_id: [this.required(), this.api('user_meta.id')],
                    first_name: [this.required(), this.api('first_name')],
                    last_name: [this.required(), this.api('last_name')],
                    middle_name: [this.required(), this.api('middle_name')],
                    dob: [this.required(), this.api('dob')],
                },
                dateMenu: false,
                form: {
                    user_meta_id: this.next_of_kin?.user_meta_id || '',
                    first_name: this.next_of_kin?.first_name || '',
                    last_name: this.next_of_kin?.last_name || '',
                    middle_name: this.next_of_kin?.middle_name || '',
                    dob: this.next_of_kin?.dob || '',
                }
            }
        },
    }
</script>

<style scoped>

</style>
