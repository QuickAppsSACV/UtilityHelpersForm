<template>
    <div>
        <v-card
        flat
        class="mb-12"
        >
            <v-card-title class="bluelight-text" >
                Water/Sewer/TrashActivation:
            </v-card-title>
            <v-card-text>
                <v-row class="mt-0">
                <v-col cols="8">
                    <v-text-field
                    dense
                    v-model="availableWater"
                    outlined
                    label="Available Water/Sewer"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row v-if="!avaiableWaterAux.includes(availableWater)"  justify="center" class="pb-10">
                <h2 class="center" style="color:Black"> <mark> ***SEE EMAIL FOR CUSTOMER INSTRUCTIONS***</mark></h2>
            </v-row>
            <div v-if="availableWater == 'CSWR Florida - City of Clermont - FL'">
                <v-row justify="center">
                    <p class="green  black--text text-h6 font-weight-bold pa-0 ma-0" >We will set up the Water Account w/ CSWR</p>
                </v-row>
                <v-row class="pt-5 pb-10 " justify="center">
                    <mark> <h2>*Customer instructions for Sewer/Trash w/ City of Clermont will be in email*</h2></mark>
                </v-row>
            </div>
            <v-row v-if="avaiableWaterAux.includes(availableWater)" class="mt-10">
                <v-col cols="6">
                    <v-autocomplete
                    label="Activated Water Provided"
                    dense
                    v-model="activatedWaterSelected"
                    hint="Select ONLY if we are activating the customer"
                    outlined
                    persistent-hint
                    :items="activatedWaterItems"
                    ></v-autocomplete>
                </v-col>
            </v-row>
            <v-row v-if="activatedWaterSelected=='Indiana American Water - City of Seymour - IN' && avaiableWaterAux.includes(availableWater)" justify="center">
                    <p style="font-size: large;"> <span style="color:red"><b> Important:</b></span> <mark>We will be setting up <b>only the water portion</b> with <b>Indiana American Water</b> for the customer.
                        <b>The customer will receive instructions in their confirmation email</b> to set up the <b>sewer and trash</b> through <b>City of Seymour.</b></mark></p>
            </v-row>
            <div v-if="(activatedWaterSelected == 'Colorado Springs Utilities' || activatedWaterSelected == 'City of Columbia - SouthWest Water Company - SC')&& avaiableWaterAux.includes(availableWater)" class="pt-10 pb-10">
                <v-row>
                    <p style="font-size: large;color:black"><b style="color:red">**IMPORTANT**</b> Please insure you have the following information for the Secondary as the provider requires Emergency Contact Info:</p>
                </v-row>
                <v-row >
                    <p>
                        <ul>
                            <li> <b style="color:black">Name</b> <i>(first & last)</i></li>
                            <li><b style="color:black"> Phone Number</b></li>
                        </ul> 
                    </p>
                </v-row>
            </div>
         <v-row v-if="avaiableWaterAux.includes(availableWater)" >
            <v-col cols="6">
                <v-select
                outlined
                dense
                label="Who's Name will Water be in?"
                v-model="whosNamewillWater"
                :items="['Primary','Secondary']"
                ></v-select>
            </v-col>
        </v-row>
            <v-row v-if="avaiableWaterAux2.includes(availableWater)">
                <v-col cols="6">
                    <v-text-field
                    label="Driver's Licence Number (Primary)"
                    dense
                    hint="Enter Number and State"
                    persistent-hint
                    outlined
                    v-model="driversLicenceNo"
                    ></v-text-field> 
                </v-col>
            </v-row>
            <v-row v-if="avaiableWaterAux2.includes(availableWater)">
                <v-col cols="6">
                    <v-text-field
                    label="Driver's Licence Number (Secondary)"
                    dense
                    outlined
                    v-model="driversLicenceNoSecondary"
                    ></v-text-field> 
                </v-col>
            </v-row>
            <v-row v-if="avaiableWaterAux.includes(availableWater)" >
                <v-col cols="6">
                    <v-text-field
                    label="SSN for Water/Sewer"
                    dense
                    outlined
                    v-model="SSNwaterSewer"
                    ></v-text-field> 
                </v-col>
            </v-row>
            <v-row v-if="availableWater == 'City of El Segundo - CA' ||availableWater == 'Evansville Water and Sewer Utility - EWSU'">
                <v-col cols="6">
                    <v-text-field
                    prefix="123"
                    label="Last 4 of SSN for Water/Sewer"
                    dense
                    outlined
                    v-model="last4SSN"
                    ></v-text-field> 
                </v-col>
            </v-row>
            <v-row  v-if="this.$store.state.stepSeven.primaryDOBFormatedStore == '' && this.$store.state.stepThree.primaryBirthDateFormattedStore == '' && whosNamewillWater =='Primary' && avaiableWaterAux.includes(availableWater)" dense class="mt-0">
                <v-col
                cols="6"
                lg="6"
                >
                    <v-menu
                    ref="primaryDOBMenu"
                    v-model="primaryDOBMenu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                        v-model="primaryDOBFormatedStore"
                        label="Primary DOB"
                        dense
                        outlined
                        hint="MM/DD/YYYY"
                        persistent-hint
                        append-icon="mdi-calendar"
                        v-bind="attrs"
                        @blur="primaryDOBDate = parseDate(primaryDOBFormatedStore)"
                        v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="primaryDOBDate"
                        no-title
                        @input="primaryDOBMenu = false"
                    ></v-date-picker>
                    </v-menu>
                </v-col>
            </v-row>
            <v-row  v-if=" this.$store.state.stepThree.secondaryBirthDateFormattedStore == '' && whosNamewillWater =='Secondary' && avaiableWaterAux.includes(availableWater)"  dense class="mt-0">
                <v-col
                cols="6"
                lg="6"
                >
                    <v-menu
                    ref="SecondaryDOBMenu"
                    v-model="SecondaryDOBMenu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                        v-model="secondaryDOBFormatedStore"
                        label="Secondary DOB"
                        dense
                        outlined
                        hint="MM/DD/YYYY"
                        persistent-hint
                        append-icon="mdi-calendar"
                        v-bind="attrs"
                        @blur="secondaryDOBDate = parseDate(secondaryDOBFormatedStore)"
                        v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="secondaryDOBDate"
                        no-title
                        @input="SecondaryDOBMenu = false"
                    ></v-date-picker>
                    </v-menu>
                </v-col>
            </v-row>
            <v-row v-if="availableWater =='El Paso Water - TX'" justify="center">
                <p style="font-size:large;color:black">El Paso Water - TX  <span style="color:red">Requires the customer to create a <u><b>4 Digit Pin</b></u> to secure their account</span></p>
            </v-row>
            <v-row v-if="availableWater =='El Paso Water - TX'">
                <v-col cols="6">
                    <v-text-field
                    outlined
                    dense
                    label="Security Pin for Water"
                    v-model="securityPIN"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row v-if="avaiableWaterAux.includes(availableWater)" >
                <v-col
                cols="6"
                lg="6"
                >
                    <v-menu
                    ref="wateractDateMenu"
                    v-model="wateractDateMenu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                        v-model="waterActivationDateStore"
                        label="Water Activation Date"
                        dense
                        outlined
                        hint="MM/DD/YYYY"
                        persistent-hint
                        append-icon="mdi-calendar"
                        v-bind="attrs"
                        @blur="waterActivationDate = parseDate(waterActivationDateStore)"
                        v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="waterActivationDate"
                        no-title
                        @input="wateractDateMenu = false"
                    ></v-date-picker>
                    </v-menu>
                </v-col>
            </v-row>
            <v-row v-if="avaiableWaterAux.includes(availableWater)" >
                <v-col cols="6">
                    <v-checkbox
                    label="Haver Support Key the Water Order?"
                    v-model="haveSupportboolean"
                    ></v-checkbox>
                </v-col>
            </v-row>
            <v-row v-if="haveSupportboolean && avaiableWaterAux.includes(availableWater)">
                <v-col cols=6>
                    <v-textarea
                    dense
                    outlined
                    label="Ticket Notes"
                    v-model="ticketNotes"
                    ></v-textarea>
                </v-col>
            </v-row>
            <v-row v-if="avaiableWaterAux.includes(availableWater)" >
                <v-col cols="6">
                    <v-text-field
                    dense
                    outlined
                    label="Water Tracking Number"
                    v-model="waterTrackingNo"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row v-if="avaiableWaterAux.includes(availableWater)" >
                <v-col cols="6">
                    <v-text-field
                    label="Water Access Key"
                    outlined
                    dense
                    v-model="waterAccessKey"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="pb-5">
                <h1 style="color:rgb(35, 59, 235)">Standalone Trash Activation:</h1>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <v-text-field
                    dense
                    outlined
                    disabled
                    label="Available Trash Provider(s)"
                    v-model="availableTrash"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="">
                <v-col cols="6">
                    <v-select
                    outlined
                    dense
                    label="Who's Name Will Trash Be in?"
                    v-model="whosNamewillTrash"
                    :items="['Primary','Secondary']"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <v-text-field
                    outlined
                    dense
                    label="DL# for Trash"
                    v-model="DLforTrash"
                    hint="Enter Number and State"
                    persistent-hint
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <v-select
                    dense
                    outlined
                    v-model="activatedTrashSelected"
                    :items="activatedTrashItems"
                    label="Activated Trash ´Provider"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                cols="6"
                lg="6"
                >
                    <v-menu
                    ref="trashactDateMenu"
                    v-model="trashactDateMenu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                        v-model="trashActivationDateStore"
                        label="Trash Activation Date"
                        dense
                        outlined
                        hint="MM/DD/YYYY"
                        persistent-hint
                        append-icon="mdi-calendar"
                        v-bind="attrs"
                        @blur="trashActivationDate = parseDate(trashActivationDateStore)"
                        v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="trashActivationDate"
                        no-title
                        @input="trashactDateMenu = false"
                    ></v-date-picker>
                    </v-menu>
                </v-col>
            </v-row>
            <v-row class="mt-10">
                <p style="font-size: 22px; color:black" >Finalize Orders</p>
            </v-row>
            <v-divider></v-divider>
            </v-card-text>
            <v-row class="mt-2">
                <v-col>
                    <v-textarea
                    outlined
                    dense
                    v-model="callNotes"
                    height="100px"
                    label="Call Notes 1"
                    hint="Who? What? When? Why? How? Next Steps?"
                    persistent-hint
                    ></v-textarea>
                </v-col>
            </v-row>
            <v-row class="mt-2">
                <v-col cols="6">
                    <v-select
                    v-model="salesRep"
                    label="Sales Rep *"
                    outlined
                    :items="salesRepItems"
                    dense
                    hint="Select your Name for Sales Reporting"
                    persistent-hint
                    ></v-select>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="6">
                   <v-checkbox
                   dense
                   v-model="error"
                   label="Errors in Research?"
                   color="red"
                   ></v-checkbox>
                </v-col>
            </v-row>
            <v-row v-if="error==true" class="mt-0">
                <v-col cols="6">
                    <v-text-field
                    dense
                    outlined
                    v-model="errorField"
                    label="What was the Research Error?"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-5">
                <v-col>
                    <p style="color:black;font-size:18px">Thank you for trusting Utility Helpers! We strive to provide 5 star service. If you found your service helpful it would mean the world to us if when you receive that confirmation email, you took a moment to leave us a review about your experience today. What else I can do for you today to earn your 5 Star review?</p>
                </v-col>
            </v-row>
            <v-row class="mt-4">
                <v-col>
                    <v-checkbox
                    v-model="usedUtilityTool"
                    label="Used Utility Flow tool?"
                    ></v-checkbox>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>
<script>
// import activatedWaterItems from "../../../src/activatedWaterItems.json"
export default {
    data: vm=>( {
        error: false,
        primaryDOBMenu:false,
        SecondaryDOBMenu:false,
        wateractDateMenu:false,
        trashactDateMenu:false,
        primaryDOBDate:'',
        secondaryDOBDate:'',
        waterActivationDate:'',
        trashActivationDate:'',
        primaryDOBFormated:'',
        // activatedWaterItems: activatedWaterItems,
        activatedTrashItems:[
        "",
        "City of Hendersonville - TN",       
        "City of Miami - FL",
        "Oak Hill - TN"
        ],
        salesRepItems:[
        "",
        "andrew@utilityhelpers.com",
        "billy@utilityhelpers.com",
        "blake@utilityhelpers.com",
        "christian@utilityhelpers.com",
        "elijah@utilityhelpers.com",
        "jb@utilityhelpers.com",
        "jenny@utilityhelpers.com",
        "nicole@utilityhelpers.com",
        "savana@utilityhelpers.com",
        "stormi@utilityhelpers.com",
        "vito@utilityhelpers.com"
        ],
        avaiableWaterAux:[
        "California Water Services",
        "City of Lubbock - TX",
        "Colorado Springs Utilities",
        "GRU - Gainesville Regional Utilities",
        "Indiana American Water",
        "Indiana American Water - City of Seymour - IN",
        "Indian River County - FL",
        "JEA Utilities - FL",
        "Miami-Dade County - FL",
        "Missouri American Water",
        "Missouri American Water - City Of Joplin - MO",
        "NJ American Water - NJ",
        "NJ American Water - Twp Middletown Sewerage Authority - NJ",
        "NJ American Water - West Orange - NJ",
        "Orange County - FL",
        "Round Rock - RRTX",
        "City of Tampa - FL",
        "City of El Segundo - CA",
        "Pennsylvania American Water",
        "White House Utility District - TN",
        "City of Concord - NC",
        "Hendersonville Utility District - TN",
        "Tampa - Hillsborough - FL",
        "TOHO Water - FL",
        "Town of Gilbert - AZ",
        "City of Oakwood - OH",
        "CSWR - FL",
        "CSWR Florida - City of Clermont - FL",
        "Fayette County - GA",
        "Widefield Water and Sanitation - CO",
        "Magnolia Water Utilities - LA",
        "Western Virginia Water Authority",
        "Kannapolis - NC",
        "Babcock Ranch Utilities - FL",
        "Jefferson County PWSD 1 - American Water - MO",
        "Tennessee American Water",
        "Evansville Water and Sewer Utility - EWSU",
        "California American Water",
        "White House Utility - Hendersonville Utility - TN",
        "Bowling Green Municipal Utilities - KY",
        "Indiana American Water - City of Kokomo - IN",
        "City of Venice - FL",
        "Greater Cincinnati Water Works - OH",
        "Citizens Energy Group - West Central Conservancy District-IN",
        "Tennessee American Water",
        "Indiana American Water - Town of Mooresville - IN",
        "Indiana American Water - American Suburban Utilities - IN",
        "Hillsborough - Tampa - FL",
        "Greenville Water - City of Simpsonville - SC",
        "Greenville Water - SC",
        "Missouri American Water - Metropolitan St Louis Sewer District - MO",
        "Indiana American Water - City of Noblesville - IN",
        "Indiana American Water - City of Terra Haute - IN",
        "NJ American Water - Middletown Twp Sewerage Authority - NJ",
        "California Water Services - City of Livermore - CA",
        "Indiana American Water - City of Crawfordsville - IN",
        "Clark Public Utilities - WA",
        "S C Rossi & Co - Western Virginia Water Authority - VA",
        "City of Nampa - ID",
        "Tacoma Public Utilities - WA",
        "Lansing Board of Water & Light - Southern Clinton County Municipal Utilities Authority - MI",
        "Lansing Board of Water & Light - MI",
        "Illinois American Water - City of South Beloit - IL",
        "Southwest Water Company - TX",
        "City of Olathe - KS",
        "Waterone - Johnson County Wastewater - KS",
        "City of Grandville - MI",
        "Loudoun Water - VA",
        "Las Vegas Valley Water District - NV",
        "Las Vegas Valley Water District - City of Las Vegas - NV",
        "Houston Public Works - TX",
        "El Paso Water - TX",
        "Indiana American Water - Muncie Sanitary District - IN",
        "Security Water and Sanitation District - CO",
        "City of Columbia - SouthWest Water Company - SC",
        "City of Independence - MO",
        "West Virginia American Water",
        "Eastern Municipal Water District - CA"
        ],
        avaiableWaterAux2:[
        "City of El Segundo - CA",
        "City of Lubbock - TX",
        "GRU - Gainesville Regional Utilities",
        "JEA Utilities - FL",
        "Missouri American Water",
        "TOHO Water - FL",
        "Evansville Water and Sewer Utility - EWSU",
        "Southwest Water Company - TX",
        "Illinois American Water - City of South Beloit - IL",
        "American Water Illinois",
        "Las Vegas Valley Water District - NV",
        "Las Vegas Valley Water District - City of Las Vegas - NV",
        "El Paso Water - TX",
        "City of Columbia - SouthWest Water Company - SC"
        ]
    }),
    watch: {
        primaryDOBDate (val) {
            this.primaryDOBFormatedStore  = this.formatDate(this.primaryDOBDate)
        },
        secondaryDOBDate (val) {
            this.secondaryDOBFormatedStore  = this.formatDate(this.secondaryDOBDate)
        },
        waterActivationDate(val){
            this.waterActivationDateStore  = this.formatDate(this.waterActivationDate)
        },
        trashActivationDate(val){
            this.trashActivationDateStore  = this.formatDate(this.trashActivationDate)
        
        },
    },
    computed: {
        activatedWaterItems:{
            get() {
                return this.$store.state.stepEight.activatedWaterItems;
            },
            set(value) {
                this.$store.state.stepEight.activatedWaterItems = value;
            },
        },
        trashActivationDateStore:{
            get() {
                return this.$store.state.stepEight.trashActivationDateStore;
            },
            set(value) {
                this.$store.state.stepEight.trashActivationDateStore = value;
            },
        },
        activatedTrashSelected:{
            get() {
                return this.$store.state.stepEight.activatedTrashSelected;
            },
            set(value) {
                this.$store.state.stepEight.activatedTrashSelected = value;
            },
        },
        DLforTrash:{
            get() {
                return this.$store.state.stepEight.DLforTrash;
            },
            set(value) {
                this.$store.state.stepEight.DLforTrash = value;
            },
        },
        whosNamewillTrash:{
            get() {
                return this.$store.state.stepEight.whosNamewillTrash;
            },
            set(value) {
                this.$store.state.stepEight.whosNamewillTrash = value;
            },
        },
        availableTrash: {
            get() {
                return this.$store.state.stepTwo.availableTrash;
            },
            set(value) {
                this.$store.state.stepTwo.availableTrash = value;
            },
        },
        waterAccessKey:{
            get() {
                return this.$store.state.stepEight.waterAccessKey;
            },
            set(value) {
                this.$store.state.stepEight.waterAccessKey = value;
            },
        },
        waterTrackingNo:{
            get() {
                return this.$store.state.stepEight.waterTrackingNo;
            },
            set(value) {
                this.$store.state.stepEight.waterTrackingNo = value;
            },
        },
        ticketNotes:{
            get() {
                return this.$store.state.stepEight.ticketNotes;
            },
            set(value) {
                this.$store.state.stepEight.ticketNotes = value;
            },
        },
        haveSupportboolean:{
            get() {
                return this.$store.state.stepEight.haveSupportboolean;
            },
            set(value) {
                this.$store.state.stepEight.haveSupportboolean = value;
            },
        },
        waterActivationDateStore:{
            get() {
                return this.$store.state.stepEight.waterActivationDateStore;
            },
            set(value) {
                this.$store.state.stepEight.waterActivationDateStore = value;
            },
        },
        securityPIN:{
            get() {
                return this.$store.state.stepEight.securityPIN;
            },
            set(value) {
                this.$store.state.stepEight.securityPIN = value;
            },
        },
        secondaryDOBFormatedStore:{
            get() {
                return this.$store.state.stepSeven.secondaryDOBFormatedStore;
            },
            set(value) {
                this.$store.state.stepSeven.secondaryDOBFormatedStore = value;
            },
        },
        last4SSN:{
            get() {
                return this.$store.state.stepEight.last4SSN;
            },
            set(value) {
                this.$store.state.stepEight.last4SSN = value;
            },
        },
        SSNwaterSewer:{
            get() {
                return this.$store.state.stepEight.SSNwaterSewer;
            },
            set(value) {
                this.$store.state.stepEight.SSNwaterSewer = value;
            },
        },
        driversLicenceNoSecondary:{
            get() {
                return this.$store.state.stepEight.driversLicenceNoSecondary;
            },
            set(value) {
                this.$store.state.stepEight.driversLicenceNoSecondary = value;
            },
        },
        driversLicenceNo:{
            get() {
                return this.$store.state.stepEight.driversLicenceNo;
            },
            set(value) {
                this.$store.state.stepEight.driversLicenceNo = value;
            },
        },
        activatedWaterSelected:{
            get() {
                return this.$store.state.stepEight.activatedWaterSelected;
            },
            set(value) {
                this.$store.state.stepEight.activatedWaterSelected = value;
            },
        },
        whosNamewillWater:{
            get() {
                return this.$store.state.stepEight.whosNamewillWater;
            },
            set(value) {
                this.$store.state.stepEight.whosNamewillWater = value;
            },
        },
        primaryDOBFormatedStore: {
            get() {
                return this.$store.state.stepSeven.primaryDOBFormatedStore;
            },
            set(value) {
                this.$store.state.stepSeven.primaryDOBFormatedStore = value;
            },
        },
        availableWater: {
            get() {
                return this.$store.state.stepTwo.availableWater;
            },
            set(value) {
                this.$store.state.stepTwo.availableWater = value;
            },
        },
        callNotes: {
            get() {
                return this.$store.state.stepEight.callNotes;
            },
            set(value) {
                this.$store.state.stepEight.callNotes = value;
            },
        },
        salesRep: {
            get() {
                return this.$store.state.stepEight.salesRep;
            },
            set(value) {
                this.$store.state.stepEight.salesRep = value;
            },
        },
        errorField: {
            get() {
                return this.$store.state.stepEight.errorField;
            },
            set(value) {
                this.$store.state.stepEight.errorField = value;
            },
        },
        usedUtilityTool: {
            get() {
                return this.$store.state.stepEight.usedUtilityTool;
            },
            set(value) {
                this.$store.state.stepEight.usedUtilityTool = value;
            },
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
    .comic-sans-font{
        font-family: 'Comic Sans MS';
    }
</style>