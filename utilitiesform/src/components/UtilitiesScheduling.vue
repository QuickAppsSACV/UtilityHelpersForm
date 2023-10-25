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
                            <v-col>
                                <h1 color="red" class="red--text text-center  mb-4">THIS ADDRESS HAS HOA CABLE</h1>
                                <p color="blue" class="blue-text text-center font-italic comic-sans-font mb-4">SCRIPTING</p>
                                <p>Great news!!! Your Homeowners Association handles some or all of your Internet, TV, and telephone service. That will definitely save you some money!</p>
                                <p>Because the HOA coordinates with your provider we don't know exactly what they cover, do you happen to know?</p>
                                <h2 color="red" class="red--text text-center  mb-4">____________________________________</h2>
                            </v-col>
                        </v-row>
                        <v-row class="mt-0">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Available Internet Provider(s)"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row class="mt-0">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Available TV Provider(s)"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row class="mt-0">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Available Phone Provider(s)"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <p> New Address</p>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field
                                dense
                                outlined
                                label="Street Address"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field
                                dense
                                outlined
                                label="City"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field
                                dense
                                outlined
                                label="State/Region/Province"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field
                                dense
                                outlined
                                label="Postal/Zip Code"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <br>
                        <v-row dense class="mt-0">
                            <v-col>
                                <v-img
                                    :src="require('../assets/Imagen1.png')"
                                    width="250px"
                                    class="mx-auto"
                                ></v-img>
                                <h3 class="red--text text-center">CURRENT PROMOTIONS</h3>
                                <v-list >
                                    <v-list-item-title>$100 Visa Gift Card with 2 Gig</v-list-item-title>
                                    <v-list-item-title>$10 Off per month with AutoPay</v-list-item-title>
                                    <v-list-item-title>FREE PRO INSTALL!!!</v-list-item-title>
                                    <v-list-item-title>1 EERO WiFi Router Included Free! ($10 per mo each additional)</v-list-item-title>
                                    <v-list-item-title>Unlimited Digital Voice Only $20</v-list-item-title>
                                </v-list>
                            </v-col>
                        </v-row>
                        <br>
                        <p>Cable Services Requested</p>
                        <v-row dense class="mt-0">
                            <v-col>
                                <v-checkbox
                                    dense
                                    label="Internet">
                                </v-checkbox>
                            </v-col>
                            <v-col>
                                <v-checkbox
                                    dense
                                    label="TV">
                                </v-checkbox>
                            </v-col>
                            <v-col>
                                <v-checkbox
                                    dense
                                    label="Phone">
                                </v-checkbox>
                            </v-col>
                            <v-col>
                                <v-checkbox
                                    dense
                                    label="(None)">
                                </v-checkbox>
                            </v-col>
                        </v-row>
                        <br>
                        <h2 color="black" class="black--text">--INTERNET--</h2>
                        <br>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-select
                                    label="Who's Name will Internet be in?"
                                    :items="['Primary', 'Secondary']"
                                    hint="Select Primary or Secondary"
                                    persistent-hint
                                    outlined>
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-select
                                    outlined
                                    label="Selected Internet Provider"
                                    :items="['AT&amp;T', 'Altice USA','Brightspeed', 'COX','CenturyLink','Frontier', 'HughesNet', 'Kinetic - Windstream', 'Mediacom', 'Metronet', 'Optimum', 'Rise Broadband', 'Spectrum', 'SuddenLink', 'United Communications', 'Verizon', 'Viasat', 'WOW', 'Xfinity']">
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Internet Plan, Speed, and Equipment"
                                hint="Enter all data pertinet to the package selection and equipment that you'd like displayed in the confirmation email. (ie: 400Mbps Ultra High- Speed Internet with Modem and Routert)"
                                persistent-hint
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <p> Previous Address (OLD)</p>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field
                                dense
                                outlined
                                label="Street Address"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field
                                dense
                                outlined
                                label="City"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field
                                dense
                                outlined
                                label="State/Region/Province"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field
                                dense
                                outlined
                                label="Postal/Zip Code"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field
                                dense
                                outlined
                                label="Country"
                                value="United States"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-select
                                    label="Installation Type (Internet)"
                                    :items="['Professional Install', 'In-Store Pickup', 'Ship to Home']"
                                    outlined>
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0 mb-4">
                            <v-col cols="6">
                                <v-select
                                    label="Will there be any pets present during the installation?"
                                    :items="['Yes', 'No']"
                                    hint="If yes, read below to Customer:
                                            That's great, we love pets! Frontier asks that your pets be secured while their technician is on premises and inside your home, so they can move about freely to perform their job, and keep your pets safe."
                                    persistent-hint
                                    outlined>
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col
                                cols="6"
                                lg="6"
                                >
                                <v-menu
                                    ref="internetInstallMenu"
                                    v-model="internetInstallMenu"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="internetInstallDateFormatted"
                                        label="Internet Install/Delivery Date"
                                        dense
                                        outlined
                                        hint="MM/DD/YYYY format"
                                        persistent-hint
                                        prepend-icon="mdi-calendar"
                                        v-bind="attrs"
                                        @blur="internetInstallDate = parseDate(internetInstallDateFormatted)"
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="internetInstallDate"
                                        no-title
                                        @input="internetInstallMenu = false"
                                    ></v-date-picker>
                                    </v-menu>
                                    <!-- <p>Date in ISO format: <strong>{{ date }}</strong></p> -->
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0 mb-2">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Internet Install Time Window"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-select
                                    label="Security Question (Internet)"
                                    :items="groupChoiceATT"
                                    outlined>
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0 mb-4">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Security Answer (Internet)"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0 mb-4">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Security Pin (Internet)"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0 mb-4">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Internet Account/Workorder Number"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <br>
                        <h2 color="black" class="black--text">--MOBILE PHONE--</h2>
                        <v-row dense class="mt-0 mb-4">
                            <v-col cols="6">
                                <v-select
                                    label="Mobile Phone Provider"
                                    :items="['Spectrum']"
                                    hint="If activating Spectrum Mobile You'll need to complete the Internetr/TV order with customer, then call ( 855) 392-9910 to add the FREE Mobile line. Be sure to give them our SAID# (22778) to receive credit for the sale."
                                    persistent-hint
                                    outlined>
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row  class="mt-0">
                            <v-col cols="6">
                                <v-text-field
                                dense
                                outlined
                                label="Number of Mobile Lines Purchased"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col
                                cols="6"
                                lg="6"
                                >
                                <v-menu
                                    ref="mobileActivationMenu"
                                    v-model="mobileActivationMenu"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="mobileActivationDateFormatted"
                                        label="Mobile Activation Date"
                                        dense
                                        outlined
                                        hint="MM/DD/YYYY format"
                                        persistent-hint
                                        prepend-icon="mdi-calendar"
                                        v-bind="attrs"
                                        @blur="mobileActivationDate = parseDate(mobileActivationDateFormatted)"
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="mobileActivationDate"
                                        no-title
                                        @input="mobileActivationMenu = false"
                                    ></v-date-picker>
                                    </v-menu>
                                    <!-- <p>Date in ISO format: <strong>{{ date }}</strong></p> -->
                            </v-col>
                        </v-row>
                        <v-row class="pt-0">
                                <v-col>
                                    <v-textarea
                                    label="Mobile Notes"
                                    outlined
                                    dense
                                    ></v-textarea>
                                </v-col>
                        </v-row>
                        <h2 color="black" class="black--text">--TV--</h2>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-select
                                    v-model="selectedTV" 
                                    label="Selected TV Provider"
                                    :items="['Altice USA','COX', 'DirecTV Stream', 'DirecTV', 'Mediacom', 'Optimum', 'Spectrum', 'SuddenLink', 'Verizon', 'WOW', 'Xfinity', 'YouTube TV', 'Other']"
                                    outlined>
                                </v-select>
                                <v-text-field
                                    dense
                                    outlined
                                    v-if="(selectedTV == 'Other')"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-select
                                    label="Who's Name will TV be in?"
                                    :items="['Primary', 'Secondary']"
                                    hint="Select Primary or Secondary"
                                    persistent-hint
                                    outlined>
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0 mb-2">
                            <v-col cols="6">
                                <v-checkbox
                                    label="TV ESSENTIALS (not counted as an RGU)"
                                    hint="Check this box if customer selects TV Essentials."
                                    persistent-hint></v-checkbox>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0 mb-2">
                            <v-col cols="6">
                                <v-text-field
                                    dense
                                    outlined
                                    label="TV PLAN and Equipment"
                                    hint="Enter all data pertinent to the package selection and equipment that you'd like displayed in the confirmation email. (ie: Gold TV, with 2 DVR receivers and 1 HD reciever)"
                                    persistent-hint>
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-select
                                    label="Installation Type(TV) (IF SAME AS INTERNET, SKIP THIS STEP)"
                                    :items="['Professional Install', 'In-Store Pickup', 'Ship to Home']"
                                    outlined>
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col
                                cols="6"
                                lg="6"
                                >
                                <v-menu
                                    ref="tvInstallMenu"
                                    v-model="tvInstallMenu"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="tvInstallDateFormatted"
                                        label="TV Install/Delivery Date"
                                        dense
                                        outlined
                                        hint="MM/DD/YYYY format"
                                        persistent-hint
                                        prepend-icon="mdi-calendar"
                                        v-bind="attrs"
                                        @blur="tvInstallDate = parseDate(tvInstallDateFormatted)"
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="tvInstallDate"
                                        no-title
                                        @input="tvInstallMenu = false"
                                    ></v-date-picker>
                                    </v-menu>
                                    <!-- <p>Date in ISO format: <strong>{{ date }}</strong></p> -->
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0 mb-2">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="TV Install Time Window"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-select
                                outlined
                                    label="Security Question (TV)"
                                    :items="groupChoiceCox"
                                    >
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Security Answer (TV)"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Security Pin (TV)"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="TV Account/Workorder Number"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <br>
                        <h2 color="black" class="black--text">--PHONE--</h2>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-select
                                    v-model="selectedPhone"
                                    label="Selected Phone Provider"
                                    :items="['AT&amp;T', 'Altice USA','Brightspeed', 'COX','CenturyLink','Frontier', 'Mediacom', 'Metronet', 'Optimum', 'Spectrum', 'SuddenLink', 'United Communications', 'Verizon', 'WOW', 'Xfinity', 'Other']"
                                    outlined>
                                </v-select>
                                <v-text-field
                                    v-if="(selectedPhone=='Other')"
                                    dense
                                    outlined>
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-select
                                    label="Who's Name will Phone be in?"
                                    :items="['Primary', 'Secondary']"
                                    hint="Select Primary or Secondary"
                                    persistent-hint
                                    outlined>
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field
                                    dense
                                    outlined
                                    label="Phone Plan and Equipment"
                                    hint="Enter all data pertinent to the package selection and equipment that you'd like displayed in the confirmation email. (ie: Unlimited calling to US, Canada, Mexico)"
                                    persistent-hint>
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-select
                                    label="Installatin Type (Phone) (IF SAME AS INTERNET, SKIP THIS STEP)"
                                    :items="['Professional Install', 'In-Store Pickup', 'Ship to Home']"
                                    outlined>
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col
                                cols="6"
                                lg="6"
                                >
                                <v-menu
                                    ref="phoneInstallMenu"
                                    v-model="phoneInstallMenu"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="phoneInstallDateFormatted"
                                        label="Phone Install/Delivery Date"
                                        dense
                                        outlined
                                        hint="MM/DD/YYYY format"
                                        persistent-hint
                                        prepend-icon="mdi-calendar"
                                        v-bind="attrs"
                                        @blur="phoneInstallDate = parseDate(phoneInstallDateFormatted)"
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="phoneInstallDate"
                                        no-title
                                        @input="phoneInstallMenu = false"
                                    ></v-date-picker>
                                    </v-menu>
                                    <!-- <p>Date in ISO format: <strong>{{ date }}</strong></p> -->
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field
                                    dense
                                    outlined
                                    label="Phone Install Time Window">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-select
                                outlined
                                    label="Security Question (Phone)"
                                    :items="groupChoiceCox"
                                    >
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Security Answer (Phone)"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Security Pin (Phone)"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Phone Account/Workorder Number"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <br>
                        <h1 color="black" class="black--text">--REQUIRED INFO FOR ORDERS--</h1>
                        <br>
                        <v-row dense class="mt-0">
                            <v-col
                                cols="6"
                                lg="6"
                                >
                                <v-menu
                                    ref="primaryBirthMenu"
                                    v-model="primaryBirthMenu"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="primaryBirthDateFormatted"
                                        label="Primary Date of Birth"
                                        dense
                                        outlined
                                        hint="MM/DD/YYYY format"
                                        persistent-hint
                                        prepend-icon="mdi-calendar"
                                        v-bind="attrs"
                                        @blur="primaryBirthDate = parseDate(primaryBirthDateFormatted)"
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="primaryBirthDate"
                                        no-title
                                        @input="primaryBirthMenu = false"
                                    ></v-date-picker>
                                    </v-menu>
                                    <!-- <p>Date in ISO format: <strong>{{ date }}</strong></p> -->
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Primary SSN for Cable (No Dashes)"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Last 4 of SSN"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col
                                cols="6"
                                lg="6"
                                >
                                <v-menu
                                    ref="secondaryBirthMenu"
                                    v-model="secondaryBirthMenu"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="secondaryBirthDateFormatted"
                                        label="Secondary Date of Birth"
                                        dense
                                        outlined
                                        hint="MM/DD/YYYY format"
                                        persistent-hint
                                        prepend-icon="mdi-calendar"
                                        v-bind="attrs"
                                        @blur="secondaryBirthDate = parseDate(secondaryBirthDateFormatted)"
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="secondaryBirthDate"
                                        no-title
                                        @input="secondaryBirthMenu = false"
                                    ></v-date-picker>
                                    </v-menu>
                                    <!-- <p>Date in ISO format: <strong>{{ date }}</strong></p> -->
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Secondary SSN for Cable (No Dashes)"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-select
                                    label="Collect CC Info for AutoPay or Initial Payment"
                                    :items="['Yes']"
                                    outlined>
                                </v-select>
                            </v-col>
                        </v-row>
                        <h2 color="black" class="black--text">--Payment Info--</h2>
                        <br>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-select
                                    label="Card Type"
                                    :items="['Visa', 'Mastercard', 'Discover', 'American Express']"
                                    outlined>
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Credit Card Number"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Expiration"
                                hint="MM/YY"
                                persistent-hint
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Name on Card"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Billing Zip Code"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-text-field 
                                dense
                                outlined
                                label="Card Verification Code"
                                hint="3 or 4 Digit Code on the Back of the Card. (May be embossed on the front of some cards)"
                                persistent-hint
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-select
                                    label="Create Ticket? (Internet)"
                                    :items="['Place Order', 'Delayed Cable Order', 'Convert to Pro Install', 'Error Received (Re-Key)']"
                                    outlined>
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-select
                                    label="Create Ticket? (TV)"
                                    :items="['Place Order', 'Delayed Cable Order', 'Convert to Pro Install', 'Error Received (Re-Key)']"
                                    outlined>
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row class="mt-0">
                                <v-col cols="">
                                    <v-textarea
                                    label="Ticket Notes"
                                    outlined
                                    dense
                                    hint="Provide any details that will help Support with handlind the tickets."
                                    persistent-hint
                                    ></v-textarea>
                                </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col cols="6">
                                <v-checkbox
                                label="I have reviewed all fees associated with the customer"
                                hint="(ie: Installation, Equipment, DVR Fees, Broadcast Fees)"
                                persistent-hint></v-checkbox>
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
<!-- ------------------------------------------------STEP 4 ------------------------------------------------------------------------------------------------ -->
                    <v-stepper-content step="4">
                        <v-card
                        class="mb-12"
                        flat
                       
                        >
                        <v-card-title class="bluelight-text">
                        Home Security:
                    </v-card-title>
                    <v-card-text>

                    </v-card-text>
                    <v-card-actions>
                            <v-btn @click="e1 = 3">
                                Back
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="primary"
                            @click="e1 = 5"
                            >
                            Next
                        </v-btn>
                    </v-card-actions>
                    </v-card>
                    </v-stepper-content>
<!-- ------------------------------------------------STEP 5 ------------------------------------------------------------------------------------------------ -->
                    <v-stepper-content step="5">
                        <v-card
                        class="mb-12"
                        flat
                       
                        >
                        <v-card-title class="bluelight-text">
                        Homeowners Insurance Quotes:
                    </v-card-title>
                    <v-card-text>

                    </v-card-text>
                    <v-card-actions>
                            <v-btn @click="e1 = 4">
                                Back
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="primary"
                            @click="e1 = 6"
                            >
                            Next
                        </v-btn>
                    </v-card-actions>
                    </v-card>
                    </v-stepper-content>
<!-- ------------------------------------------------STEP 6 ------------------------------------------------------------------------------------------------ -->
                    <v-stepper-content step="6">
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
                    </v-card-text>
                    <v-card-actions>
                            <v-btn @click="e1 = 5">
                                Back
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="primary"
                            @click="e1 = 7"
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
     
        e1: 6,
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        menu2: false,
        whoSubmmited: '',
        anyServices: '',
        whoIspeak:'',
        internetInstallMenu: false,
        internetInstallDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        internetInstallDateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        groupChoiceATT : [
            "What's your favorite Restaurant?", 
            "Who is your favorite actor?", 
            "Who is your favorite singer?", 
            "Who was your childhood hero?"
        ],
        groupChoiceCox: [
            "What is the first concert you attended?", 
            "What is the name of the road you lived on in 3rd grade?", 
            "What was the name of your first pet?"
        ],
        groupChoiceUC: [
            "What is the Last 4 of Your SSN or EIN number?", 
            "What is the name of your first school teacher?", 
            "What is your favorite sports team?", 
            "What was the make and model of your first car?", 
            "What was the name of your High School?",
            "What was the name of your first pet?", 
            "Who was your first employer?"
        ],
        mobileActivationMenu: false,
        mobileActivationDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        mobileActivationDateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        selectedTV: "",
        tvInstallMenu: false,
        tvInstallDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        tvInstallDateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        selectedPhone: "",
        phoneInstallMenu: false,
        phoneInstallDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        phoneInstallDateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        primaryBirthMenu: false,
        primaryBirthDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        primaryBirthDateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        secondaryBirthMenu: false,
        secondaryBirthDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        secondaryBirthDateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        
    }),
    watch: {
        date (val) {
            this.dateFormatted = this.formatDate(this.date)
        },
        internetInstallDate (val) {
            this.internetInstallDateFormatted = this.formatDate(this.internetInstallDate)
        },
        mobileActivationDate (val) {
            this.mobileActivationDateFormatted = this.formatDate(this.mobileActivationDate)
        },
        tvInstallDate (val) {
            this.tvInstallDateFormatted = this.formatDate(this.tvInstallDate)
        },
        phoneInstallDate (val) {
            this.phoneInstallDateFormatted = this.formatDate(this.phoneInstallDate)
        },
        primaryBirthDate (val) {
            this.primaryBirthDateFormatted = this.formatDate(this.primaryBirthDate)
        },
        secondaryBirthDate (val) {
            this.secondaryBirthDateFormatted = this.formatDate(this.secondaryBirthDate)
        },
    },
    computed: {
        computedDateFormatted () {
            return this.formatDate(this.date)
        },
        computedInternetInstallDateFormatted () {
            return this.formatDate(this.internetInstallDate)
        }
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