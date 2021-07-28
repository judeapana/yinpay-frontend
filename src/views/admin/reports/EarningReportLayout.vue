<template>
    <v-card class="mx-auto" id="printable" tile>
        <v-card-title class="text-md-center">Payslip for {{data.period.name}}</v-card-title>
        <v-card-actions>
            <v-row>
                <v-col class="" md="6">
                    <table class="text-muted">
                        <tr>
                            <td>Company Name: {{getCurrentBs.name}}</td>
                        </tr>
                        <tr>
                            <td>Type: {{getCurrentBs.btype}}</td>
                        </tr>
                        <tr>
                            <td>Address : {{getCurrentBs.address}}</td>
                        </tr>
                        <tr>
                            <td>Our Email Address : {{getCurrentBs.support_email}}</td>
                        </tr>
                        <tr>
                            <td>Our Phone Number : {{getCurrentBs.phone_number}}</td>
                        </tr>
                    </table>
                </v-col>
                <v-col md="5">
                    <h4>Worker Information</h4>
                    <p>Worker Name: {{data.user.user_meta.title}} {{data.user.first_name +" "+data.user.last_name}}</p>
                    <p>Email Address: {{data.user.email_address}}</p>
                    <p>Phone Number: {{data.user.phone_number}}</p>
                </v-col>
                <v-col md="1">
                    <v-img :src="getCurrentBs.logo" class="float-right" width="100"></v-img>
                </v-col>
            </v-row>
        </v-card-actions>

        <v-card-actions>
            <v-btn @click="printSection" class="d-print-none" fab small>
                <v-icon>mdi-printer</v-icon>
            </v-btn>
        </v-card-actions>
        <v-card-text>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="text-left">
                            Payslip Details
                        </th>
                        <th class="text-left"></th>
                    </tr>
                    </thead>
                    <!---->
                    <thead>
                    <tr>
                        <th class="text-left">
                            Earning
                        </th>
                        <th class="text-left">
                            Amount(GH)
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Basic Salary</td>
                        <td>{{data.basic_salary}}</td>
                    </tr>

                    <tr>
                        <td>Gross Salary</td>
                        <td>{{data.gross_salary}}</td>
                    </tr>
                    <tr>
                        <td>Net Pay</td>
                        <td>{{data.net_pay}}</td>
                    </tr>

                    <tr>
                        <td>Total Earning AMT</td>
                        <td>{{data.total_earning_amt}}</td>
                    </tr>


                    <tr>
                        <td>Total Allowance AMT</td>
                        <td>{{data.total_allowance_amt}}</td>
                    </tr>
                    </tbody>

                    <thead>
                    <tr>
                        <th class="text-left">
                            Earning Allowances
                        </th>
                        <th class="text-left"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr :key="index" v-for="(item,index) in data.earning_allowances">
                        <td>{{Object.keys(item)[0]}}</td>
                        <td>{{item[Object.keys(item)[0]]}}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card-text>
    </v-card>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        props: ['data'],
        name: 'EarningReportLayout',
        computed: {
            ...mapGetters('business', ['getCurrentBs'])
        }, methods: {
            printSection() {
                this.$htmlToPaper("printable");
            }

        }

    }
</script>
