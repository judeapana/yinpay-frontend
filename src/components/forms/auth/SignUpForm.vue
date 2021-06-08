<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="signup" v-model="valid">
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field :rules="rules.first_name" label="First Name"
                              v-model.trim="form.first_name"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field :rules="rules.last_name" label="Last Name" v-model.trim="form.last_name"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field :rules="rules.username" label="Username" v-model.trim="form.username"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field :rules="rules.email_address" label="Email Address" type="email"
                              v-model.trim="form.email_address"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field :rules="rules.phone_number" label="Phone Number" type="tel"
                              v-model="form.phone_number"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field :append-icon="value ?  'mdi-eye-off' : 'mdi-eye'"
                              :rules="rules.password"
                              :type="value ? 'password' : 'text'"
                              @click:append="() => value =!value"
                              label="Password"
                              v-model="form.password"></v-text-field>
            </v-col>
        </v-row>
        <v-btn :disabled="!valid" :loading="getLoading" type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        props: {
            errors: {
                type: Object
            },
            signUp: {
                type: Object
            },
            button: {
                type: String
            }
        },
        name: 'SignUpForm',
        watch: {
            errors(value) {
                this.validate(this.$refs.signup, value.errors)
            }
        },
        data() {
            return {
                value: String,
                valid: false,
                rules: {
                    username: [this.required(), this.username(), this.minLength(3), this.api('username')],
                    first_name: [this.required(), this.api('first_name')],
                    phone_number: [this.required(), this.phone(), this.api('phone_number')],
                    last_name: [this.required(), this.api('last_name')],
                    email_address: [this.required(), this.api('email_address')],
                    password: [this.required(), this.api('password')],
                },
                form: {
                    username: '',
                    first_name: '',
                    phone_number: '',
                    last_name: '',
                    email_address: '',
                    password: '',
                }
            }
        },
        computed: {
            ...mapGetters('auth', ['getLoading'])
        }
    }
</script>

<style scoped>

</style>
