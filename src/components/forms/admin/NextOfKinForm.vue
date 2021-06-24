<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-select :rules="rules.user_meta_id" items="" label="User" v-model="form.user_meta_id"/>
        <v-text-field :rules="rules.full_name" label="Full Name" v-model="form.full_name"></v-text-field>
        <v-menu :close-on-content-click="false" :nudge-right="40" min-width="auto" offset-y
                transition="scale-transition" v-model="dateMenu">
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                        label="Date Of Birth"
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
        <v-text-field :rules="rules.rel" label="Relationship" v-model="form.rel"></v-text-field>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
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
        data() {
            return {
                valid: false,
                rules: {
                    user_meta_id: [this.required(), this.api('user_meta.id')],
                    full_name: [this.required(), this.api('full_name')],
                    date: [this.required(), this.api('date')],
                    rel: [this.required(), this.api('rel')]
                },
                dateMenu: false,
                form: {
                    user_meta_id: '',
                    full_name: '',
                    date: '',
                    rel: '',
                }
            }
        },
    }
</script>

<style scoped>

</style>
