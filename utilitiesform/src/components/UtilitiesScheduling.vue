<template>
    <div>
        <v-card elevation="10" class="pa-10 ma-10">
            <v-card-title>
               <p>Enterprix Copy of Utilities Scheduling Flow 2.0</p> <br>
                <p class="">For use by Rep on call to streamline the entry process</p>
            </v-card-title>
            <v-card-text>
                <v-stepper   alt-labels v-model="e1">
<!-- ---------------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- ---------------------------------------HEADER------------------------------------------------------------------------------------------------------------------- -->
                    <v-stepper-header>
                        <v-stepper-step
                            :complete="e1 > 1"
                            step="1"
                        >
                            <small>
                                Customer Info Verification
                            </small>
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step
                            :complete="e1 > 2"
                            step="2"
                        >
                           <small> Available Provider Synopsis</small>
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step step="3">
                            <small>Cable/Internet/Phone</small>
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="4">
                            <small>Home Security</small>
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="5">
                            <small>Homeowners Insurance</small>
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="6">
                            <small>PODS / Pro Movers</small>
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="7">
                            <small>Electric</small>
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="8">
                            <small>Water/Sewer/Trash</small>
                        </v-stepper-step>
                    </v-stepper-header>
<!-- ---------------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- ------------------------------------------ITEMS---------------------------------------------------------------------------------------------------------------- -->
                    <v-stepper-items>
                    <v-stepper-content step="1">
                        <v-card
                        flat
                        class="mb-12"
                        >
                        <v-card-title class="bluelight-text" >
                            Verify Info:
                        </v-card-title>
                        <v-card-subtitle>
                            <ul>
                                <li> Legal Primary & Secondary Names (Spelling)</li>
                                <li> New & Previous Addresses</li>
                                <li> Secondary Info</li>
                                <li> Email Addresses</li>
                            </ul>
                        </v-card-subtitle>
                        <v-card-text>
                            <v-text-field
                            dense
                            outlined
                            label="Template Instructions"
                            ></v-text-field>
                            <v-text-field
                            dense
                            label="Zoho CRM *"
                            outlined
                            ></v-text-field>

                            <h2 color="blue" class="blue-text">--Primary--</h2>
                            <v-divider class="mt-2 mb-7"></v-divider>
                            
                            <v-row>
                                <v-col class="" cols="8">
                                    <v-text-field
                                    dense
                                    outlined
                                    label="Primary Email"
                                    >
                                </v-text-field>
                            </v-col>
                            </v-row>
                            <v-row class="mt-0">
                                <v-col>
                                    <v-text-field
                                    hint="First"
                                    persistent-hint
                                    dense
                                    outlined
                                    label="Primary Name"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                    dense
                                    outlined
                                    persistent-hint
                                    hint="Last"
                                    label=""
                                     ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="mt-0">
                                <v-col cols="8">
                                    <v-text-field
                                    dense
                                    outlined
                                    label="Primary Phone"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <h2 color="green" class="green-text">--Secondary--</h2>
                            <v-divider class="mt-2 mb-7"></v-divider>
                            <v-row dense>
                                <v-col class="" cols="8">
                                    <v-text-field
                                    dense
                                    outlined
                                    label="Secondary Email"
                                    >
                                </v-text-field>
                            </v-col>
                            </v-row>
                            <v-row class="mt-0">
                                <v-col>
                                    <v-text-field
                                    hint="First"
                                    persistent-hint
                                    dense
                                    outlined
                                    label="Secondary Name"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                    dense
                                    outlined
                                    persistent-hint
                                    hint="Last"
                                    label=""
                                     ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row  dense class="mt-0">
                                <v-col cols="8">
                                    <v-text-field
                                    dense
                                    outlined
                                    label="Secondary Phone"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row dense class="mt-0">
                                <v-col cols="8">
                                    <v-select
                                    dense
                                    outlined
                                    v-model="whoIspeak"
                                    label="Who am i Speaking to? *"
                                    :items="['Primary','Secondary','Both']"
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <v-row  v-if="whoIspeak == 'Secondary'"  dense cass="mt-0">
                                <h2 class="mb-5">Be sure to verify the Primary info as well.</h2>
                            </v-row>
                            <v-row dense class="mt-0">
                                <v-col cols="8">
                                    <v-select
                                    dense
                                    outlined
                                    v-model="anyServices"
                                    label="Will Any services be in the Secondary's name? *"
                                    :items="['Yes','No']"
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <v-row dense class="mt-0">
                                <v-col cols="8">
                                    <v-select
                                    dense
                                    disabled
                                    outlined
                                    :items="['Agent','Landlord','Builder','Buyer','Transaction Coordinator','Lender','Title Company','Inspector','Uhaul Rental Only','Uhaul Customer Wants to Use Utility Helpers','Other']"
                                    v-model="whoSubmmited"
                                    label="Who submitted the request"
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <v-row dense class="mt-0">
                                <v-col cols="8">
                                    <v-text-field
                                    dense
                                    disabled
                                    outlined
                                    label="Referral Partner"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row dense class="mt-0">
                                <v-col cols="8">
                                    <v-text-field
                                    
                                    dense
                                    disabled
                                    outlined
                                    label="Brokerage/Company"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row dense class="mt-0">
                                <v-col cols="8">
                                    <v-text-field
                                    v-if="whoSubmmited == 'Builder'"
                                    dense
                                    disabled
                                    outlined
                                    label="Builder"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row dense class="mt-0">
                                <v-col cols="8">
                                    <v-text-field
                                    v-if="whoSubmmited =='Landlord'"
                                    dense
                                    disabled
                                    outlined
                                    label="Landlord/ Managment Co"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="mt-0">
                                <v-col cols="">
                                    <v-text-field
                                    dense
                                    disabled
                                    hint="First"
                                    persistent-hint
                                    outlined
                                    label="Agent"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="">
                                    <v-text-field
                                    dense
                                    hint="Last"
                                    persistent-hint
                                    disabled
                                    outlined
                                    label=""
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="mt-0">
                                <v-col cols="">
                                    <v-text-field
                                    dense
                                    disabled
                                    hint="First"
                                    persistent-hint
                                    outlined
                                    label="Assistant"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="">
                                    <v-text-field
                                    dense
                                    hint="Last"
                                    persistent-hint
                                    disabled
                                    outlined
                                    label=""
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="mt-0" v-if="whoSubmmited == 'Title Company'">
                                <v-col cols="">
                                    <v-text-field
                                    dense
                                    disabled
                                    hint="First"
                                    persistent-hint
                                    outlined
                                    label="Title Rep"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="">
                                    <v-text-field
                                    dense
                                    hint="Last"
                                    persistent-hint
                                    disabled
                                    outlined
                                    label=""
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="mt-0" v-if="whoSubmmited=='Lender'">
                                <v-col cols="">
                                    <v-text-field
                                    dense
                                    disabled
                                    hint="First"
                                    persistent-hint
                                    outlined
                                    label="Lender"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="">
                                    <v-text-field
                                    dense
                                    hint="Last"
                                    persistent-hint
                                    disabled
                                    outlined
                                    label=""
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                           <p> New Address (Moving To)</p>
                            <v-row dense class="mt-0">
                                <v-col>
                                    <v-text-field
                                    dense
                                    outlined
                                    label="Street Address"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row dense class="mt-0">
                                <v-col>
                                    <v-text-field
                                    dense
                                    outlined
                                    label="City"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row dense class="mt-0">
                                <v-col>
                                    <v-text-field
                                    dense
                                    outlined
                                    label="State/Region/Province"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row dense class="mt-0">
                                <v-col>
                                    <v-text-field
                                    dense
                                    outlined
                                    label="Postal/Zip Code"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row dense class="mt-0">
                                <v-col
                                cols="6"
                                lg="6"
                                >
                                    <v-menu
                                    ref="menu2"
                                    v-model="menu2"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="dateFormatted"
                                        label="Expected Closing Date"
                                        dense
                                        outlined
                                        hint="MM/DD/YYYY format"
                                        persistent-hint
                                        prepend-icon="mdi-calendar"
                                        v-bind="attrs"
                                        @blur="date = parseDate(dateFormatted)"
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="date"
                                        no-title
                                        @input="menu2 = false"
                                    ></v-date-picker>
                                    </v-menu>
                                    <!-- <p>Date in ISO format: <strong>{{ date }}</strong></p> -->
                            </v-col>
                            </v-row>
                            <v-row v-if="anyServices == 'Yes'" class="mt-0">
                                <v-col>
                                    Some Services will be in the Secondary Name 
                                    Did you add/verify Secondary data?* 
                                    <v-checkbox
                                    label="Yes"
                                    ></v-checkbox>
                                </v-col>

                            </v-row>

                        </v-card-text>
                        <v-card-actions>
                            <v-spacer>
                            </v-spacer>
                                <v-btn
                                color="primary"
                                @click="e1 = 2"
                                >
                                Next
                                </v-btn>

                        </v-card-actions>
                        </v-card>
                        1/8
                    </v-stepper-content>
<!-- ----------------------------------------------STEP 2------------------------------------------------------------------------------------------------- -->
                    <v-stepper-content step="2">
                        <v-card
                        flat
                        >
                        <v-card-title  class="bluelight-text">
                            All Available Providers
                        </v-card-title>
                        <v-card-text>
                            <v-row class="pt-0">
                                <v-col cols="">
                                    <v-textarea
                                    label="Research Notes:"
                                    outlined
                                    dense
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                            <v-row class="mt-0">
                                <v-col cols="6">
                                    <v-text-field
                                    outlined
                                    dense
                                    label="1. Available Power Provider(s)"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="mt-0">
                                <v-col cols="6">
                                    <v-text-field
                                    outlined
                                    dense
                                    label="2. Available Gas Provider"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="mt-0">
                                <v-col cols="6">
                                    <v-text-field
                                    outlined
                                    dense
                                    label="3. Available Water/Sewer Service"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="mt-0">
                                <v-col cols="6">
                                    <v-text-field
                                    outlined
                                    dense
                                    label="4. Available Trash Provider"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="mt-0">
                                <v-col cols="6">
                                    <v-text-field
                                    outlined
                                    dense
                                    label="Trash Days"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="mt-0">
                                <v-col cols="6">
                                    <v-text-field
                                    outlined
                                    dense
                                    label="Recycle Days"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="mt-0">
                                <v-col cols="6">
                                    <v-text-field
                                    outlined
                                    dense
                                    persistent-hint
                                    hint="if blank (EVERY WEEK)"
                                    label="Recycle is collected:"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="mt-0">
                                <v-col cols="6">
                                    <v-text-field
                                    outlined
                                    dense
                                    label="Yard Days"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="mt-0">
                                <v-col cols="6">
                                    <v-text-field
                                    outlined
                                    dense
                                    persistent-hint
                                    hint="if blank (EVERY WEEK)"
                                    label="Yard is collected"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn @click="e1 = 1">
                                Back
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="primary"
                            @click="e1 = 3"
                            >
                            Next
                        </v-btn>
                    </v-card-actions>
                    </v-card>
                        2/8
                    </v-stepper-content>
<!-- ------------------------------------------------STEP 3 ------------------------------------------------------------------------------------------------ -->
                    <v-stepper-content step="3">
                        <v-card
                        class="mb-12"
                        flat
                       
                        >
                    <v-card-title class="bluelight-text">
                        Cable Activation Info:
                    </v-card-title>
                    
                    <v-card-text>
                        <v-row class="mt-0">
                            <v-col cols="8">
                                <v-text-field 
                                dense
                                outlined
                                label="Available Internet Provider(s)"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row class="mt-0">
                            <v-col cols="8">
                                <v-text-field 
                                dense
                                outlined
                                label="Available TV Provider(s)"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row class="mt-0">
                            <v-col cols="8">
                                <v-text-field 
                                dense
                                outlined
                                label="Available Phone Provider(s)"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    
                        <v-card-actions>
                            <v-btn @click="e1 = 2">
                                Back
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="primary"
                            @click="e1 = 4"
                            >
                            Next
                        </v-btn>
                    </v-card-actions>
                    </v-card>
                    </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    data: vm=>( {
     
        e1: 3,
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        menu2: false,
        whoSubmmited: '',
        anyServices: '',
        whoIspeak:'',
        
      
    }),
    watch: {
        date (val) {
            this.dateFormatted = this.formatDate(this.date)
        },
    },
    computed: {
        computedDateFormatted () {
            return this.formatDate(this.date)
        },
    },
    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      }
    }
}
</script>
<style>
    .blue-text {
        color: blue;
    }
    .green-text{
        color: green;
    }
    .bluelight-text{
        color:#3399ff;
    }
</style>