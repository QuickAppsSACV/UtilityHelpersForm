<template>
    <div>
        <v-card
            class="mb-12"
            flat
            >
            <v-card-title class="bluelight-text">
            Homeowners Insurance Quotes:
        </v-card-title>
        <v-card-text>
            <v-row v-if="this.$store.state.stepFour.alreadyRequestedThroughIntroEmail == 'Yes'" class="mt-5 mb-10">
                <v-col>
                    <v-row  justify="center" class="text-center"> <h2 style="color: black;" class="text-center"> Customer already requested insurance!</h2></v-row>
                    <v-row justify="center"> <h3  style="color: black;">(</h3><h3 style="color:red;font-size: large;font-style: italic;">NO ACTION NECESSARY</h3><h3  style="color: black;">)</h3></v-row>
                </v-col>
            </v-row>
            <v-row class="pt-10" dense>
                <v-col class="" cols="6">
                    <v-text-field
                        dense
                        outlined
                        disabled
                        v-model="newState"
                        label="New State"
                        >
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row v-if="this.$store.state.stepFour.alreadyRequestedThroughIntroEmail != 'Yes'" >
                <v-col>
                    <h2 style="color:red"  class="text-center"> ONLY OFFER INSURANCE IF NEW PROPERTY IS IN FLORIDA</h2>
                </v-col>
            </v-row>
            <v-row v-if="this.$store.state.stepFour.alreadyRequestedThroughIntroEmail != 'Yes'" >
                <v-col>
                    <h4   class="text-center">Next on our checklist is HOI, we partner with Insurance Helpers- they’ll shop over 40 <br> different providers to make sure you’re getting the best rates available.<br> I can have them reach out to you in the next 2-3 biz days with some no obligation quotes to review</h4>
                </v-col>
            </v-row>
                <v-row  v-if="this.$store.state.stepFour.alreadyRequestedThroughIntroEmail != 'Yes'" dense class="mt-10">
                    <v-col cols="6">
                        <v-select
                        clearable
                        dense
                        outlined
                        v-model="insuranceQuoteRequested"
                        label="Insurance quote requested?"
                        :items="['Yes','No']"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row  v-if="insuranceQuoteRequested == 'Yes'" class="ml-3 mt-5 mb-10">
                    <v-col cols="">
                        <v-row>
                            <h3>Ok great. I am going to ask a few quick questions for the insurance company to get you the most accurate quote.  If any of these are applicable, just let me know.
                                <br>You’ll get an email from Insurance Helpers where you'll be able to easily upload the documents needed for your policy.</h3>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row  v-if="this.$store.state.stepFour.alreadyRequestedThroughIntroEmail != 'Yes' && this.$store.state.stepThree.primaryBirthDateFormattedStore == ''" dense class="mt-0">
                    <v-col
                    cols="6"
                    lg="6"
                    >
                        <v-menu
                        ref="dateOfBirthMenu"
                        v-model="dateOfBirthMenu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                            v-model="dateOfBirthFormated"
                            label="What is your Date of Birth?"
                            dense
                            outlined
                            hint="MM/DD/YYYY"
                            persistent-hint
                            append-icon="mdi-calendar"
                            v-bind="attrs"
                            @blur="dateOfBirthDate = parseDate(dateOfBirthFormated)"
                            v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="dateOfBirthDate"
                            no-title
                            @input="dateOfBirthMenu = false"
                        ></v-date-picker>
                        </v-menu>
                </v-col>
                </v-row>
                <v-row  v-if="insuranceQuoteRequested == 'Yes'" dense class="">
                    <v-col cols="6">
                        <v-select
                        clearable
                        dense
                        outlined
                        v-model="whoIsTheHomeGoing"
                        label="Who is the home going to be occupied by?"
                        :items="['Owner','Renter','Unoccupied']"                     
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row  v-if="insuranceQuoteRequested == 'Yes'" dense class="">
                    <v-col cols="6">
                        <v-select
                        clearable
                        dense
                        outlined
                        v-model="howIsThisResidendeGoing"
                        label="​How is this residence going to be used?"
                        :items="['Primary','Secondary','Seasonal']"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row  v-if="insuranceQuoteRequested == 'Yes'" dense class="">
                    <v-col cols="6">
                        <v-select
                        clearable
                        dense
                        outlined
                        v-model="howManyMonth"
                        label="​How many months to be occupied?"
                        :items="['9 Months or More','0-3 Months','4-8 Months']"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row  v-if="insuranceQuoteRequested == 'Yes'" dense>
                    <v-col class="" cols="6">
                        <v-text-field
                        dense
                        outlined
                        v-model="doYouKnowRoughly"
                        label="Do you know roughly when the roof was last replaced?"
                        >
                    </v-text-field>
                </v-col>
                </v-row>
                <v-row  v-if="insuranceQuoteRequested == 'Yes'" dense>
                    <v-col class="" cols="6">
                        <v-text-field
                        dense
                        outlined
                        v-model="plumbingReplacedYear"
                        label="If the plumbing has ever been replaced, what year was that done?"
                        >
                    </v-text-field>
                </v-col>
                </v-row>
                <v-row  v-if="insuranceQuoteRequested == 'Yes'" dense>
                    <v-col class="" cols="6">
                        <v-text-field
                        dense
                        outlined
                        v-model="whatYearWasTheAir"
                        label="What year was the air conditioning/heater installed or replaced?"
                        >
                    </v-text-field>
                </v-col>
                </v-row>
                <v-row  v-if="insuranceQuoteRequested == 'Yes'" dense>
                    <v-col class="" cols="6">
                        <v-text-field
                        dense
                        outlined
                        v-model="ifTheWaterHeaterHasBeenReplaced"
                        label="If the water heater has been replaced, what year was that done?"
                        >
                    </v-text-field>
                </v-col>
                </v-row>
                <v-row  v-if="insuranceQuoteRequested == 'Yes'" dense class="">
                    <v-col cols="6">
                        <v-select
                        clearable
                        dense
                        outlined
                        v-model="willYouHaveAMonitored"
                        label="​Will you have a monitored home security system?"
                        :items="['Yes','No','Not sure yet']"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row v-if="willYouHaveAMonitored == 'Yes' &&insuranceQuoteRequested == 'Yes' " dense>
                    <v-col class="" cols="6">
                        <v-text-field
                        dense
                        outlined
                        v-model="whatAlarmCompany"
                        label="What alarm company will you use?"
                        >
                    </v-text-field>
                </v-col>
                </v-row>
                <v-row  v-if="insuranceQuoteRequested == 'Yes'" dense class="">
                    <v-col cols="6">
                        <v-select
                        clearable
                        dense
                        outlined
                        v-model="howManyDogs"
                        label="How many dogs do you have?"
                        :items="['0','1','2','3','4','5','6','7','8','9','10+']"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row v-if="howManyDogs != '0' && howManyDogs != '' && howManyDogs != null" dense>
                    <v-col class="" cols="6">
                        <v-text-field
                        dense
                        outlined
                        v-model="whatBrands"
                        label="What breed(s)?"
                        hint="Enter the breeds. Separate by comma if more than one."
                        persistent-hint
                        >
                    </v-text-field>
                </v-col>
                </v-row>
                <v-row  v-if="howManyDogs != '0' && howManyDogs != '' && howManyDogs != null" dense class="">
                    <v-col cols="6">
                        <v-select
                        dense
                        outlined
                        v-model="haveTheyEverBittenSomeone"
                        label="Have they ever bitten someone?"
                        :items="['Yes','No']"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row  v-if="insuranceQuoteRequested == 'Yes'" dense>
                    <v-col cols="6">
                        <v-checkbox 
                        v-model="willThereBeAnotherAdult"
                        label="Will there be another adult living in the home with you?"
                        hint="Check for Yes"
                        persistent-hint
                        ></v-checkbox>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col v-if="willThereBeAnotherAdult == true &&  insuranceQuoteRequested == 'Yes'" class="" cols="6">
                        <v-text-field
                        dense
                        outlined
                        v-model="secondaryFirstName"
                        label="Secondary First Name"
                        >
                    </v-text-field>
                </v-col>
                </v-row>
                <v-row  v-if="willThereBeAnotherAdult == true &&  insuranceQuoteRequested == 'Yes'" dense>
                    <v-col class="" cols="6">
                        <v-text-field
                        dense
                        outlined
                        v-model="secondaryLastName"
                        label="Secondary Last Name"
                        >
                    </v-text-field>
                </v-col>
                </v-row>
                <v-row v-if="willThereBeAnotherAdult == true &&  insuranceQuoteRequested == 'Yes'" dense class="mt-0">
                    <v-col
                    cols="6"
                    lg="6"
                    >
                        <v-menu
                        ref="secondaryDateOfBirthMenu"
                        v-model="secondaryDateOfBirthMenu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                            v-model="secondaryDateOfBirthFormated"
                            label="Secondary Date of Birth"
                            dense
                            outlined
                            hint="MM/DD/YYYY"
                            persistent-hint
                            append-icon="mdi-calendar"
                            v-bind="attrs"
                            @blur="secondaryDateOfBirthDate = parseDate(secondaryDateOfBirthFormated)"
                            v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="secondaryDateOfBirthDate"
                            no-title
                            @input="secondaryDateOfBirthMenu = false"
                        ></v-date-picker>
                        </v-menu>
                </v-col>
                </v-row>
                <v-row v-if="willThereBeAnotherAdult == true &&  insuranceQuoteRequested == 'Yes'" dense>
                    <v-col class="" cols="6">
                        <v-text-field
                        dense
                        outlined
                        v-model="secondaryPhone"
                        label="Secondary Phone"
                        >
                    </v-text-field>
                </v-col>
                </v-row>
                <v-row v-if="willThereBeAnotherAdult == true &&  insuranceQuoteRequested == 'Yes'" dense>
                    <v-col class="" cols="6">
                        <v-text-field
                        dense
                        outlined
                        v-model="secondaryEmail"
                        label="Secondary Email"
                        >
                    </v-text-field>
                </v-col>
                </v-row>
                <v-row v-if="insuranceQuoteRequested == 'Yes'" class="mt-5 mb-5">
                    <v-col>
                        <v-row>
                            <h3 style="color:black">Contact Number to Live Transfer & Share w/ Customer:</h3>
                        </v-row>
                        <v-row>
                            <h3 style="color:blue;font-size: large;">(813) 580-7899</h3>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row  v-if="insuranceQuoteRequested == 'Yes'" class="pt-0">
                    <v-col cols="">
                        <v-textarea
                        v-model="NotesForInsurceQuote"
                        label="Notes for Insurance Quote"
                        outlined
                        dense
                        ></v-textarea>
                    </v-col>
                </v-row>
        </v-card-text>
        </v-card>
        5/8
    </div>
</template>
<script>

export default {
    data: vm=>( {
        dateOfBirthMenu:false,
        dateOfBirthDate:'',
        dateOfBirthFormated:'',
        secondaryDateOfBirthMenu:false,
        secondaryDateOfBirthDate:'',
        secondaryDateOfBirthFormated:'',
        
    }),
    watch: {
        dateOfBirthDate (val) {
        this.dateOfBirthDateStore = this.dateOfBirthFormated = this.formatDate(this.dateOfBirthDate)
        },
        secondaryDateOfBirthDate (val) {
        this.secondaryDateOfBirthFormatedStore =   this.secondaryDateOfBirthFormated = this.formatDate(this.secondaryDateOfBirthDate)
        },
    },
    computed: {
        plumbingReplacedYear:{
            get() {
                return this.$store.state.stepFive.plumbingReplacedYear;
            },
            set(value) {
                this.$store.state.stepFive.plumbingReplacedYear = value;
            },
        },
        secondaryDateOfBirthFormatedStore:{
            get() {
                return this.$store.state.stepFive.secondaryDateOfBirthFormatedStore;
            },
            set(value) {
                this.$store.state.stepFive.secondaryDateOfBirthFormatedStore = value;
            },
        },
        dateOfBirthDateStore:{
            get() {
                return this.$store.state.stepFive.dateOfBirthDateStore;
            },
            set(value) {
                this.$store.state.stepFive.dateOfBirthDateStore = value;
            },
        },
        newState: {
            get() {
                return this.$store.state.stepFive.newState;
            },
            set(value) {
                this.$store.state.stepFive.newState = value;
            },
        },
        insuranceQuoteRequested: {
            get() {
                return this.$store.state.stepFive.insuranceQuoteRequested;
            },
            set(value) {
                this.$store.state.stepFive.insuranceQuoteRequested = value;
            },
        },
        whoIsTheHomeGoing: {
            get() {
                return this.$store.state.stepFive.whoIsTheHomeGoing;
            },
            set(value) {
                this.$store.state.stepFive.whoIsTheHomeGoing = value;
            },
        },
        howIsThisResidendeGoing: {
            get() {
                return this.$store.state.stepFive.howIsThisResidendeGoing;
            },
            set(value) {
                this.$store.state.stepFive.howIsThisResidendeGoing = value;
            },
        },
        howManyMonth: {
            get() {
                return this.$store.state.stepFive.howManyMonth;
            },
            set(value) {
                this.$store.state.stepFive.howManyMonth = value;
            },
        },
        doYouKnowRoughly: {
            get() {
                return this.$store.state.stepFive.doYouKnowRoughly;
            },
            set(value) {
                this.$store.state.stepFive.doYouKnowRoughly = value;
            },
        },
        whatYearWasTheAir: {
            get() {
                return this.$store.state.stepFive.whatYearWasTheAir;
            },
            set(value) {
                this.$store.state.stepFive.whatYearWasTheAir = value;
            },
        },
        ifTheWaterHeaterHasBeenReplaced: {
            get() {
                return this.$store.state.stepFive.ifTheWaterHeaterHasBeenReplaced;
            },
            set(value) {
                this.$store.state.stepFive.ifTheWaterHeaterHasBeenReplaced = value;
            },
        },
        willYouHaveAMonitored: {
            get() {
                return this.$store.state.stepFive.willYouHaveAMonitored;
            },
            set(value) {
                this.$store.state.stepFive.willYouHaveAMonitored = value;
            },
        },
        whatAlarmCompany: {
            get() {
                return this.$store.state.stepFive.whatAlarmCompany;
            },
            set(value) {
                this.$store.state.stepFive.whatAlarmCompany = value;
            },
        },
        howManyDogs: {
            get() {
                return this.$store.state.stepFive.howManyDogs;
            },
            set(value) {
                this.$store.state.stepFive.howManyDogs = value;
            },
        },
        whatBrands: {
            get() {
                return this.$store.state.stepFive.whatBrands;
            },
            set(value) {
                this.$store.state.stepFive.whatBrands = value;
            },
        },
        haveTheyEverBittenSomeone: {
            get() {
                return this.$store.state.stepFive.haveTheyEverBittenSomeone;
            },
            set(value) {
                this.$store.state.stepFive.haveTheyEverBittenSomeone = value;
            },
        },
        willThereBeAnotherAdult: {
            get() {
                return this.$store.state.stepFive.willThereBeAnotherAdult;
            },
            set(value) {
                this.$store.state.stepFive.willThereBeAnotherAdult = value;
            },
        },
        secondaryFirstName: {
            get() {
                return this.$store.state.stepFive.secondaryFirstName;
            },
            set(value) {
                this.$store.state.stepFive.secondaryFirstName = value;
            },
        },
        secondaryLastName: {
            get() {
                return this.$store.state.stepFive.secondaryLastName;
            },
            set(value) {
                this.$store.state.stepFive.secondaryLastName = value;
            },
        },
        secondaryPhone: {
            get() {
                return this.$store.state.stepFive.secondaryPhone;
            },
            set(value) {
                this.$store.state.stepFive.secondaryPhone = value;
            },
        },
        secondaryEmail: {
            get() {
                return this.$store.state.stepFive.secondaryEmail;
            },
            set(value) {
                this.$store.state.stepFive.secondaryEmail = value;
            },
        },
        NotesForInsurceQuote: {
            get() {
                return this.$store.state.stepFive.NotesForInsurceQuote;
            },
            set(value) {
                this.$store.state.stepFive.NotesForInsurceQuote = value;
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