<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-text-field :disabled="true"  :rules="rules.username" label="Username"
                      v-model.trim="form.username">

        </v-text-field>
        <v-text-field :rules="rules.first_name" label="First Name"
                      v-model.trim="form.first_name">

        </v-text-field>
        <v-text-field :rules="rules.last_name" label="Last Name"
                      v-model.trim="form.last_name">

        </v-text-field>
        <v-text-field :rules="rules.email_address" label="Email Address"
                      v-model.trim="form.email_address"></v-text-field>
        <v-text-field :rules="rules.phone_number" label="Phone Number"
                      v-model.trim="form.phone_number"></v-text-field>
        <v-textarea :rules="rules.notes" label="Notes"
                    v-model.trim="form.notes"></v-textarea>
        <v-btn :disabled="!valid" class="mt-5" type="submit" v-text="button"></v-btn>

    </v-form>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "ProfileForm",
        mounted() {
            this._get_profile().then((data) => {
                this.form = data
            }).catch(() => {
                this.$message.error('An error occurred whiles loading content')
            })
        },
        methods: {
            ...mapActions('profile', ['_get_profile'])
        },
        props: {
            errors: {
                type: Object
            },
            button: {
                type: String
            }
        },
        watch: {
            errors(value) {
                this.validate(this.$ref.form, value.errors)
            }
        },
        data() {
            return {
                valid: false,
                profile: null,
                rules: {
                    username: [this.required(), this.api('username')],
                    first_name: [this.required(), this.api('first_name')],
                    last_name: [this.required(), this.api('last_name')],
                    email_address: [this.required(), this.api('email_address')],
                    phone_number: [this.required(), this.api('phone_number')],
                    notes: [this.api('notes')]
                },
                form: {
                    username: this.settings?.username || "",
                    first_name: this.settings?.first_name || "",
                    last_name: this.settings?.last_name || "",
                    email_address: this.settings?.email_address || "",
                    phone_number: this.settings?.phone_number || "",
                    notes: this.settings?.notes || ""
                }
            }
        }
    }
</script>
