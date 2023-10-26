<template>
    <div>
        <v-card
        class="mb-12"
        flat
        >
        <v-card-title class="bluelight-text">
        PODS and/or Pro Movers:
    </v-card-title>
    <v-card-text>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-select
                    label="PODS or Pro Mover?"
                    :items="['PODS','Pro Mover','Both']"
                    outlined
                    ></v-select>
            </v-col>
        </v-row>
        <h2>Rental Trucks</h2>
        <v-divider></v-divider>
        <br>
        <h2 class="bluelight-text">PODS</h2>
        <h3 class="red--text">(Complete w/ customer on the phone)</h3>
        <v-divider></v-divider>
        <br>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-text-field
                    label="Unloading Zip Code"
                    hint="Verify this is where they want to UNLOAD their POD"
                    persistent-hint
                    outlined></v-text-field>
            </v-col>
        </v-row>
        <v-row dense class="mt-0">
            <v-col class="d-flex justify-center mb-6 bg-surface-variant">
                <a 
            href="https://www.pods.com/partners/utilityhelpers?utm_medium=managed-referral&utm_source=utility_helpers&utm_campaign=utility_helper_website_referrals&utm_content=affiliate"
            class="green--text text-h6 text-center">CLICK HERE TO LAUNCH PODS OFFERS</a>
            </v-col>
        </v-row>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-text-field
                    label="PODS Quote Number"
                    hint="Example: #P10050872"
                    persistent-hint
                    outlined></v-text-field>
            </v-col>
        </v-row>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-select
                    label="Rental Truck Company"
                    :items="['Uhaul']"
                    outlined
                    ></v-select>
            </v-col>
        </v-row>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-select
                    label="Type of Move"
                    :items="['One-Way','In-Town']"
                    outlined
                    ></v-select>
            </v-col>
        </v-row>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-text-field
                    label="Size & Equipment"
                    hint="(ie: 15' Truck, Pickup Truck, or Tow Dolly)(Also add-ons like Appliance Dolly, etc.)"
                    persistent-hint
                    outlined></v-text-field>
            </v-col>
        </v-row>
        <v-row dense class="mt-2">
                            <v-col
                                cols="6"
                                lg="6"
                                >
                                <v-menu
                                    ref="pickupMenu"
                                    v-model="pickupMenu"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="pickupDateFormatted"
                                        label="Moving Truck Pick Up Date"
                                        dense
                                        outlined
                                        hint="MM/DD/YYYY format"
                                        persistent-hint
                                        prepend-icon="mdi-calendar"
                                        v-bind="attrs"
                                        @blur="pickupDate = parseDate(pickupDateFormatted)"
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="pickupDate"
                                        no-title
                                        @input="pickupMenu = false"
                                    ></v-date-picker>
                                    </v-menu>
                                    <!-- <p>Date in ISO format: <strong>{{ date }}</strong></p> -->
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-2">
                            <v-col
                                cols="6"
                                lg="6"
                                >
                                <v-menu
                                    ref="dropOffMenu"
                                    v-model="dropOffMenu"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="dropOffDateFormatted"
                                        label="Moving Truck Pick Up Date"
                                        dense
                                        outlined
                                        hint="MM/DD/YYYY format"
                                        persistent-hint
                                        prepend-icon="mdi-calendar"
                                        v-bind="attrs"
                                        @blur="dropOffDate = parseDate(dropOffDateFormatted)"
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="dropOffDate"
                                        no-title
                                        @input="dropOffMenu = false"
                                    ></v-date-picker>
                                    </v-menu>
                                    <!-- <p>Date in ISO format: <strong>{{ date }}</strong></p> -->
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field
                                    label="Rental Truck Confirmation Number (Required)"
                                    outlined></v-text-field>
                            </v-col>
                        </v-row>
                        <h3 class="black--text">Pro Movers</h3>
                        <v-divider></v-divider>
                        <v-row dense class="mt-4">
                            <v-col cols="6">
                                <v-select
                                    label="Pro Moving Company"
                                    :items="['Bekins (National)', 'Rocks Moving (Tampa Bay Area)']"
                                    outlined
                                    ></v-select>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col>
                                <p >
                                    <span class="indigo--text text-accent-3 font-weight-bold">Rocks Moving</span> 
                                    <span class="black--text"> (727) 579-0214</span>
                                    <br>Warm Transfer Available: 
                                    <br>Mon-Fri: 8:30am - 5:30pm 
                                    <br>Sat: 9:00am - 1:00pm
                                </p>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col>
                                <p >
                                    <span class="indigo--text text-accent-3 font-weight-bold">Bekins</span> 
                                    <span class="black--text"> (754) 243-7128</span> Dan Fiallo
                                    <br>
                                    <span class="black--text"> (754) 243-7125</span> Joe Mazza
                                    <br>Warm Transfer Available: 
                                    <br>Mon-Fri: 8:30am - 5:00pm 
                                </p>
                            </v-col>
                        </v-row>
                        <v-row class="mt-0">
                                <v-col cols="">
                                    <v-textarea
                                    label="Pro Mover Notes"
                                    outlined
                                    dense
                                    hint="Name of who client was transferred to, and any notes to the Pro Moving Company"
                                    persistent-hint
                                    ></v-textarea>
                                </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-select
                                    label="How Sent to Pro Mover?"
                                    :items="['Warm Transfer', 'Request Call Back']"
                                    outlined
                                    ></v-select>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col>
                                <h2 class="red--text text-center text-h4">SKIP SOLAR SECTION</h2>
                                <p class="text-center black--text text-p">Solar Program Only Available in Florida at this Time</p>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col>
                                <p><span class="blue--text text-subtitle-1 yellow pa-0">Solar Consultation:</span></p>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col>
                                <p class="text-body-1">We are always looking for ways to save our customers money! so the next thing on our list is solar energy.  There is a new solar program that offers no money out of pocket, no debt, and no financing. You will simply see a reduction in your electric bill, and prevent your bill from increasing with electric rates in the future.  There are also some federal incentives currently to help make solar affordable.</p>
                                <p class="text-body-1">If you'd like we can schedule a no obligation energy consult for a technician to asses if adding solar would benefit you. Typically we recommend scheduling that for about 6 weeks after you move in, so you have a full electric bill to asses your usage. Would that be good for you?</p>
                            </v-col>
                        </v-row>
                        <v-row class="mt-0">
                                <v-col>
                                    <v-checkbox
                                    class="blue--text"
                                    >
                                    <template v-slot:label><div class="indigo--text text-lighten-1">Customer would like a Solar Consultation</div></template>
                                </v-checkbox>
                                </v-col>
                        </v-row>
                        <v-row dense class="mt-2">
                            <v-col
                                cols="6"
                                lg="6"
                                >
                                <v-menu
                                    ref="solarConMenu"
                                    v-model="solarConMenu"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="solarConDateFormatted"
                                        label="Solar Consultation Date"
                                        dense
                                        outlined
                                        hint="MM/DD/YYYY format"
                                        persistent-hint
                                        prepend-icon="mdi-calendar"
                                        v-bind="attrs"
                                        @blur="solarConDate = parseDate(solarConDateFormatted)"
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="solarConDate"
                                        no-title
                                        @input="solarConMenu = false"
                                    ></v-date-picker>
                                    </v-menu>
                                    <!-- <p>Date in ISO format: <strong>{{ date }}</strong></p> -->
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-select
                                    label="Solar Consultation Time Window"
                                    :items="[
                                        '11am - 1pm', 
                                        '1pm - 3pm',
                                        '3pm - 5pm',
                                        '5pm - 7pm',
                                        '7pm -9pm']"
                                    hint="Check Calendar for Available Times (Appointment must be after closing)"
                                    outlined
                                    persistent-hint
                                    ></v-select>
                            </v-col>
                        </v-row>
                        <v-row class="mt-0">
                                <v-col cols="">
                                    <v-textarea
                                    label="Solar Notes"
                                    outlined
                                    dense
                                    >
                                </v-textarea>
                                </v-col>
                        </v-row>
    </v-card-text>
    </v-card>
    </div>
</template>
<script>

export default {
    data: vm=>( {
     
        e1: 1,
        pickupMenu: false,
        pickupDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        pickupDateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        dropOffMenu: false,
        dropOffDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        dropOffDateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        solarConMenu: false,
        solarConDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        solarConDateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        
        
    }),
    watch: {
        pickupDate (val) {
            this.pickupDateFormatted = this.formatDate(this.pickupDate)
        },
        dropOffDate (val) {
            this.dropOffDateFormatted = this.formatDate(this.dropOffDate)
        },
        solarConDate (val) {
            this.solarConDateFormatted = this.formatDate(this.solarConDate)
        },
    },
    computed: {
      
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