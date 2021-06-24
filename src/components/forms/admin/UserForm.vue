<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field :rules="rules.username" label="User Name" v-model="form.username"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field :rules="rules.password" label="Password" v-model="form.password"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field :rules="rules.first_name" label="First Name" v-model="form.first_name"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field :rules="rules.last_name" label="Last Name" v-model="form.last_name"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field :rules="rules.email_address" label="Email Address"
                              v-model="form.email_address"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field :rules="rules.phone_number" label="Phone Number"
                              v-model="form.phone_number"></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
                <v-switch :rules="rules.disabled" label="Disabled"
                          v-model="form.disabled"></v-switch>
            </v-col>
        </v-row>

        <v-expansion-panels class="mb-5" v-model="status">
            <v-expansion-panel>
                <v-expansion-panel-header>Others Information</v-expansion-panel-header>
                <v-expansion-panel-content v-if="status===0">
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-select :items="['MRS', 'MISS', 'MR', 'MS']" :rules="rules.user_meta.title" label="Title"
                                      v-model="form.user_meta.title"></v-select>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-select :items="['Married', 'Divorced', 'Widowed', 'Single']"
                                      :rules="rules.user_meta.marital_status" label="Marital Status"
                                      v-model="form.user_meta.marital_status"></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-select :items="['Male','Female']" :rules="rules.user_meta.gender" label="Gender"
                                      v-model="form.user_meta.gender"></v-select>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field :rules="rules.user_meta.religion" label="Religion"
                                          v-model="form.user_meta.religion"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-select :items="pgs" :loading="psLoading" :rules="rules.user_meta.personnel_group_id"
                                      item-text="name" item-value="id"
                                      label="Personnel Group"
                                      v-model="form.user_meta.personnel_group_id"></v-select>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-select :items="departments" :loading="dtLoading" :rules="rules.user_meta.department_id"
                                      item-text="name" item-value="id"
                                      label="Department"
                                      v-model="form.user_meta.department_id"></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-menu :close-on-content-click="false" :nudge-right="40" min-width="auto" offset-y
                                    transition="scale-transition" v-model="dateMenu">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field :rules="rules.user_meta.dob"
                                                  label="Date Of Birth"
                                                  prepend-icon="mdi-calendar"
                                                  readonly
                                                  v-bind="attrs"
                                                  v-model="form.user_meta.dob"
                                                  v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                        @input="dateMenu = false"
                                        v-model="form.user_meta.dob"
                                ></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field :rules="rules.user_meta.addr" label="Address"
                                          v-model="form.user_meta.addr"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-text-field :rules="rules.user_meta.ssn" label="SSN"
                                          v-model="form.user_meta.ssn"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field :rules="rules.user_meta.tin" label="TIN"
                                          v-model="form.user_meta.tin"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-switch :rules="rules.user_meta.retired" label="Retired"
                                      v-model="form.user_meta.retired"></v-switch>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-switch :rules="rules.user_meta.resigned" label="Resigned"
                                      v-model="form.user_meta.resigned"></v-switch>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-switch :rules="rules.user_meta.disabled" label="Disabled"
                                      v-model="form.disabled"></v-switch>
                        </v-col>
                    </v-row>

                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>

    </v-form>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'UserForm',
        props: {
            errors: {
                type: Object
            },
            user: {
                type: Object
            },
            button: {
                type: String
            }
        },
        mounted() {
            this._get_personnel_group({page: -1}).then((response) => {
                this.pgs = response.data
            })
            this._get_department({page: -1}).then((response) => {
                this.departments = response.data
            })

        },
        watch: {
            errors(value) {
                this.validate(this.$refs.form, value.errors)
            },
            status(value) {
                value !== 0 ? delete this.form.user_meta : this.form['user_meta'] = this.user_meta
            }
        },
        methods: {
            ...mapActions('personnel_group', ['_get_personnel_group']),
            ...mapActions('department', ['_get_department']),
        },
        computed: {
            ...mapGetters('personnel_group', {psLoading: 'getLoading'}),
            ...mapGetters('department', {dtLoading: 'getLoading'}),
        },
        data() {
            return {
                dateMenu: false,
                departments: null,
                pgs: null,
                valid: false,
                status: null,
                rules: {
                    username: [this.required(), this.username(), this.api('username')],
                    password: [this.required(), this.api('password')],
                    first_name: [this.required(), this.api('first_name')],
                    last_name: [this.required(), this.api('last_name')],
                    email_address: [this.required(), this.email(), this.api('email_address')],
                    phone_number: [this.required(), this.phone(), this.api('phone_number')],
                    disabled: [this.api('disabled')],
                    user_meta: {
                        title: [this.api('title')],
                        marital_status: [this.api('marital_status')],
                        gender: [this.api('gender')],
                        religion: [this.api('religion')],
                        personnel_group_id: [this.api('personnel_group_id')],
                        department_id: [this.api('department_id')],
                        dob: [this.api('dob')],
                        addr: [this.api('addr')],
                        ssn: [this.api('ssn')],
                        tin: [this.api('tin')],
                        retired: [this.api('retired')],
                        resigned: [this.api('resigned')],
                        disabled: [this.api('disabled')],
                    }
                },
                user_meta: {
                    personnel_group_id: '',
                    department_id: '',
                    title: '',
                    marital_status: '',
                    gender: '',
                    religion: '',
                    retired: false,
                    resigned: false,
                    dob: '',
                    addr: '',
                    ssn: '',
                    tin: '',
                },
                form: {
                    username: '',
                    password: '',
                    first_name: '',
                    last_name: '',
                    email_address: '',
                    phone_number: '',
                    disabled: false,

                }
            }
        },
    }
</script>

<style scoped>

</style>
