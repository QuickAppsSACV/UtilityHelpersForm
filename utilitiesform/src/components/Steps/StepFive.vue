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
            <v-row dense>
                    <v-col class="" cols="6">
                        <v-text-field
                        dense
                        outlined
                        v-model="newState"
                        label="New State"
                        >
                    </v-text-field>
                </v-col>
                </v-row>
                <v-row dense class="mt-2">
                    <v-col cols="6">
                        <v-select
                        dense
                        outlined
                        v-model="insuranceQuoteRequested"
                        label="Insurance quote requested?"
                        :items="['Yes','No']"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row dense class="mt-0">
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
                <v-row dense class="">
                    <v-col cols="6">
                        <v-select
                        dense
                        outlined
                        v-model="whoIsTheHomeGoing"
                        label="Who is the home going to be occupied by?"
                        :items="['Owner','Renter','Unoccupied']"                     
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row dense class="">
                    <v-col cols="6">
                        <v-select
                        dense
                        outlined
                        v-model="howIsThisResidendeGoing"
                        label="​How is this residence going to be used?"
                        :items="['Primary','Secondary','Seasonal']"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row dense class="">
                    <v-col cols="6">
                        <v-select
                        dense
                        outlined
                        v-model="howManyMonth"
                        label="​How many months to be occupied?"
                        :items="['9 Months or More','0-3 Months','4-8 Months']"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row dense>
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
                <v-row dense>
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
                <v-row dense>
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
                <v-row dense class="">
                    <v-col cols="6">
                        <v-select
                        dense
                        outlined
                        v-model="willYouHaveAMonitored"
                        label="​Will you have a monitored home security system?"
                        :items="['Yes','No','Not sure yet']"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row dense>
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
                <v-row dense class="">
                    <v-col cols="6">
                        <v-select
                        dense
                        outlined
                        v-model="howManyDogs"
                        label="How many dogs do you have?"
                        :items="['1','2','3','4','5','6','7','8','9','10+']"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row dense>
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
                <v-row dense class="">
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
                <v-row dense>
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
                    <v-col class="" cols="6">
                        <v-text-field
                        dense
                        outlined
                        v-model="secondaryFirstName"
                        label="Secondary First Name"
                        >
                    </v-text-field>
                </v-col>
                </v-row>
                <v-row dense>
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
                <v-row dense class="mt-0">
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
                <v-row dense>
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
                <v-row dense>
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
                <v-row class="pt-0">
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
        dateOfBirthDate:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        dateOfBirthFormated:vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        secondaryDateOfBirthMenu:false,
        secondaryDateOfBirthDate:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        secondaryDateOfBirthFormated:vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        
    }),
    watch: {
        dateOfBirthDate (val) {
            this.dateOfBirthFormated = this.formatDate(this.dateOfBirthDate)
        },
        secondaryDateOfBirthDate (val) {
            this.secondaryDateOfBirthFormated = this.formatDate(this.secondaryDateOfBirthDate)
        },
    },
    computed: {
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