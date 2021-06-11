<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form">
        <v-text-field label="Full Name" v-model="form.full_name"></v-text-field>
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
                    v-model="form.date"
            ></v-date-picker>
        </v-menu>
        <v-text-field label="Relationship" v-model="form.rel"></v-text-field>
        <v-btn type="submit" v-text="button"></v-btn>
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
                dateMenu: false,
                form: {
                    full_name: '',
                    dob: '',
                    rel: '',
                }
            }
        },
    }
</script>

<style scoped>

</style>
