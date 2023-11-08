<template>
    <div>
        <v-card
        class="mb-12"
        flat
        >
    <v-card-title class="bluelight-text">
        Cable Activation Info:
    </v-card-title>
    
    <v-card-text>
        <v-row v-if="this.$store.state.stepOne.cablehandledHOA == true" class="mt-0">
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
                v-model="availableInternetProviders"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row class="mt-0">
            <v-col cols="6">
                <v-text-field 
                dense
                outlined
                label="Available TV Provider(s)"
                v-model="availableTVProviders"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row class="mt-0">
            <v-col cols="6">
                <v-text-field 
                dense
                outlined
                label="Available Phone Provider(s)"
                v-model="availablePhoneProviders"
                ></v-text-field>
            </v-col>
        </v-row>
        <p> New Address</p>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-text-field
                dense
                outlined
                disabled
                label="Street Address"
                v-model="streetAddress"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-text-field
                dense
                outlined
                label="City"
                disabled
                v-model="city"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-text-field
                dense
                outlined
                disabled
                label="State/Region/Province"
                v-model="stateRegion"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-text-field
                dense
                outlined
                disabled
                label="Postal/Zip Code"
                v-model="zipCode"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row v-if="availableInternetProviders.toLowerCase().includes('frontier')" dense class="mt-2">
            <v-col>
                <v-img
                    :src="require('../../assets/Imagen1.png')"
                    width="250px"
                    class="mx-auto"
                ></v-img>
                <h3 class="red--text text-center">CURRENT PROMOTIONS</h3>
                <ul>
                    <li class="black--text font-weight-bold">$100 Visa Gift Card with <span class="yellow">2 Gig</span></li>
                    <li class="black--text font-weight-bold">$10 Off per month with AutoPay</li>
                    <li class="black--text font-weight-bold">FREE PRO INSTALL!!!</li>
                    <li ><span class="black--text font-weight-bold">1 EERO WiFi Router Included Free!</span> ($10 per mo each additional)</li>
                    <li class="black--text font-weight-bold">Unlimited Digital Voice Only $20</li>
                </ul>
            </v-col>
        </v-row>
        <div v-if="this.$store.state.stepOne.cablehandledHOA != true">
        <br>
        <p>Cable Services Requested</p>
            <v-row dense class="mt-0">
                <v-col>
                    <v-checkbox
                        dense
                        label="Internet"
                        v-model="internetCheckbox">
                    </v-checkbox>
                </v-col>
                <v-col>
                    <v-checkbox
                        dense
                        label="TV"
                        v-model="tvCheckbox">
                    </v-checkbox>
                </v-col>
                <v-col>
                    <v-checkbox
                        dense
                        label="Phone"
                        v-model="phoneCheckbox">
                    </v-checkbox>
                </v-col>
                <v-col>
                    <v-checkbox
                        dense
                        label="(None)"
                        v-model="noneCheckbox">
                    </v-checkbox>
                </v-col>
            </v-row>
            <br>
        </div>
        <div v-if="internetCheckbox">     
            <h2 color="black" class="black--text">--INTERNET--</h2>
            <br>
        </div>
        <v-row v-if="internetCheckbox" dense class="mt-0">
            <v-col cols="6">
                <v-select
                    label="Who's Name will Internet be in?"
                    :items="['Primary', 'Secondary']"
                    hint="Select Primary or Secondary"
                    persistent-hint
                    outlined
                    v-model="whosNameWillinternet">
                </v-select>
            </v-col>
        </v-row>
        <v-row v-if="internetCheckbox" dense class="mt-0">
            <v-col cols="6">
                <v-select
                    outlined
                    label="Selected Internet Provider"
                    :items="['','AT&T', 'Altice USA','Brightspeed', 'COX','CenturyLink','Frontier', 'HughesNet', 'Kinetic - Windstream', 'Mediacom', 'Metronet', 'Optimum', 'Rise Broadband', 'Spectrum', 'SuddenLink', 'United Communications', 'Verizon', 'Viasat', 'WOW', 'Xfinity']"
                    v-model="selectedInternetProvider">
                </v-select>
            </v-col>
        </v-row>
        <v-row v-if="selectedInternetProvider == 'Xfinity' && internetCheckbox" dense class="mt-0">
            <v-col >
                <p class="red--text text-center font-weight-bold text-h6 ma-0 pb-0">
                    <span class="light-green accent-3 black--text text-h5 font-weight-bold pa-0 ma-0">IF ACTIVATION IS WITHIN 4 BUSINESS DAYS</span>
                    COMPLETE CABLE ACTIVATION
                    <br class="">
                    W/ CUSTOMER ON PHONE
                </p>
            </v-col>
        </v-row>
        <div v-if="selectedInternetProvider == 'Xfinity' && internetCheckbox">
            <v-row justify="center">
                <v-img
                :src="require('../../assets/map.png')"
                contain
                class="mx-auto"
                height="250"
                />
            </v-row>
            <v-row  class="pt-5" justify="center">
                <p class="text-h4"> <mark>You must check available <br>
                <u>Install Options</u> in the portal!</mark></p>
            </v-row>
        </div>
        <div v-if="availableInternetProviders.toLowerCase().includes('rise broadband')">
            <v-img
                :src="require('../../assets/RiseBroadband.png')"
                contain
                class="mx-auto"
                height="150"
            />
            <br>
            <v-img
                :src="require('../../assets/tableRiseBroadband.png')"
                contain
                class="mx-auto"
                height="40vh"
            />
        </div>
        <div v-if="selectedInternetProvider== 'Frontier'  && internetCheckbox">
            <v-row class="pb-0">
                <v-col>
                    <p> <span class="text-h6" style="color:#3399ff">Frontier Equipment</span> <br>
                    <span  style="color:black;font-size: large;" >Modem and 1 Eero Router is included at <u>no cost!</u>
                        Whole Home WiFi: Adds <u>2 additional Eeros:</u> $10 per month (optional)</span></p>
                </v-col>
            </v-row>
            <v-row class="pb-0">
                <v-col>
                    <p > <span class="text-h6" style="color:#3399ff">Frontier Install Fees:</span> <br>
                    <span  style="color:black;font-size: large;" >$50 Professional Install (Can be billed $25/$25 on 1st 2 bills)</span></p>
                </v-col>
            </v-row>
            <v-row justify="center">
                <h1 style="color:red">Now Available in the Frontier Portal!</h1>
            </v-row>
            <v-row class="pt-7">
                <v-img
                :src="require('../../assets/youtubeTV.png')"
                contain
                class="mx-auto"
                height="150"
                />
            </v-row>
            <v-row>
                <v-img
                :src="require('../../assets/topchanels.png')"
                contain
                class="mx-auto"
                height="150"
                />
            </v-row>
            <v-row class="pt-5" justify="center">                
                    <p class="text-h6" style="color:black"><b>YouTubeTV $72.99</b> (-$10 for Frontier Bundle) = <b ><span style="color:green">$62.99</span> for 12 Months</b></p>
            </v-row>
            <v-row justify="center">
                <p class="text-h6" style="color:black"><b>YouTube TV Spanish Package</b> (28+ channels): <b ><span style="color:green"> $34.99</span> for 12 Months</b></p>
            </v-row>
            <v-row justify="center">
                <p style="color:green" class="text-h5"> <b>NO BROADCAST FEE!!!</b></p>
            </v-row>
            <v-row  justify="center">
                <p  style="color:black;  text-align: center" class="text-h6"><span style="color:#3399ff">Equipment:</span> <b>Google Chromecast 4K <span style="color:green">$49.99</span></b> each <br>
                    (<span style="color:red">Not Required</span> as long as they have a streaming device <br> or smart tv that supports YouTubeTV)</p>
            </v-row>
        </div>
        <div v-if="selectedInternetProvider== 'Spectrum'  && internetCheckbox">
            <p class="text-h6" style="color:red">***UPDATED PRICING 8/10/23***</p>
            <p style="font-size: large;"> <b>Important Update:</b></p>
            <p style="color:#3399ff;font-size: large;"><b>Autopay is required to receive advertised prices on all Spectrum plans.<br>
                (If autopay is not selected the price increases by $5)</b></p>
            <br>
            <p style="color:black;font-size: large;"><b>TV Select is now being split into 2 offerings in almost all areas:</b></p>
            <p style="font-size: large;"><ul>
                <li>TV Select Signature $59.99 – with No Regional Sports Networks (150+ channels)</li>
                <li>TV Select Plus $69.99 – with Regional Sports Networks (160+channels)</li>
            </ul></p>
            <p  style="font-size: large;"><b style="color:#3399ff;">Spectrum Equipment:</b><br>
                <span style="color:black;font-size: medium;">Modem is included at no cost!</span><br>
                <span style="font-size:medium">WiFi: $5 (sometimes free promo)<br>
                HD/DRV Boxes: $10.99<br>
                DVR Service: $4.99 per TV</span></p>
            <p  style="font-size: large;"><b style="color:#3399ff;">Install Fees:</b><br>
                <span  style="font-size:medium">
                Pro Install: $59.99 <br>
                Service Activation: $24.99
                </span></p>
                <p  style="font-size: large;"><b style="color:#3399ff;">TV Fees:</b><br>
                <span  style="font-size:medium">
                Broadcast Fee: $23.20 per mo <br>
                Sports View Fee: $7.00
                </span></p>
        </div>
        <v-row class="pb-10"></v-row>
        <div v-if="selectedInternetProvider== 'WOW' && internetCheckbox" >
            <p  style="font-size: large;"><b style="color:#3399ff;">WOW Equipment:</b><br>
                <span  style="font-size:medium">
                Broadcast Fee: $23.20 per mo <br>
                Sports View Fee: $7.00
                </span>
            </p>
            <p style="font-size: medium;">
              <b style="color:#3399ff">Phone:</b> $10.00  
            </p>
            <p  style="font-size: medium;"><b style="color:#3399ff;">Fees:</b><br>
                <span  style="font-size:medium">
                $5 discount with AutoPay<br>
                (Internet Only) Network Enhancement Fee: $1.00 per mo <br>
                (TV Only) Broadcast Fee: $26.00 per mo <br>
                (TV Only) Sports Surcharge: $11.00 per mo
                </span>
            </p>
        </div>
        <v-row  v-if="selectedInternetProvider == 'Brightspeed' && internetCheckbox " dense class="mt-0">
            <v-col>
                <p class="red--text text-center font-weight-bold text-h6">
                    <span class="yellow pa-0">COMPLETE CABLE ACTIVATION</span>
                    <br><span class="yellow pa-0">W/ CUSTOMER ON PHONE</span>
                </p>
                <p class="text-center text-h6">
                    <span class="yellow black--text">
                        Select 
                        <span class="font-weight-bold text-decoration-underline">ONLY:</span>
                        <span class="font-weight-bold"> TEXT</span>
                        or
                        <span class="font-weight-bold">EMAIL</span>
                        for consent
                    </span>
                    <br>
                    <span class="red--text font-weight-bold">DO NOT SELECT <span class="text-decoration-underline">VERBAL CONSENT</span>!</span>
                    
                </p>
            </v-col>
        </v-row>
        <v-row v-if="internetCheckbox" dense class="mt-0">
            <v-col cols="6">
                <v-text-field 
                dense
                outlined
                label="Internet Plan, Speed, and Equipment"
                hint="Enter all data pertinet to the package selection and equipment that you'd like displayed in the confirmation email. (ie: 400Mbps Ultra High- Speed Internet with Modem and Routert)"
                persistent-hint
                v-model="internetPlan"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row v-if="selectedInternetProvider== 'Frontier'  && internetCheckbox" class="pa-10">
            <h2 style="color:red">If Customer requests to use own router (only) Read this to Customer:</h2>
            <p class="pt-5" style="color:black;font-size:large">Dear Mr. Valued Customer, Our technician is planning to verify the successful activation of your internet service using our router. If after discussion with the technician regarding the benefits of using our router and confirming that it is not required to provide your service, 
                you can request to use your own router and we will remove ours at the time the job is completed.</p>
        </v-row>
        <p> Previous Address (OLD)</p>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-text-field
                dense
                outlined
                label="Street Address"
                v-model="previousStreet"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-text-field
                dense
                outlined
                label="City"
                v-model="previousCity"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-text-field
                dense
                outlined
                label="State/Region/Province"
                v-model="previousState"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-text-field
                dense
                outlined
                label="Postal/Zip Code"
                v-model="previousZipCode"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-text-field
                dense
                outlined
                label="Country"
                v-model="previousCountry"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row v-if="selectedInternetProvider=='AT&T'  && internetCheckbox">
            <v-col>
                <p style="font-size:medium">
                    <b style="color:#3399ff;">AT&T Install Windows:</b>
                    <br>
                    (8am-10am) (10am-12pm) (12pm-2pm) (2pm-4pm)
                </p>
            </v-col>
        </v-row>
        <v-row v-if="selectedInternetProvider== 'COX'  && internetCheckbox">
            <v-col>
                <p style="font-size:medium">
                    <b style="color:#3399ff;">Cox Install Windows:</b>
                    <br>
                   <b> (Mon-Sat)
                    <br>
                    (8am-10am) (10am-12pm) (1pm-3pm) (3pm-5pm)</b>
                </p>
            </v-col>
        </v-row>
        <v-row v-if="selectedInternetProvider== 'Frontier'  && internetCheckbox">
            <v-col>
                <p style="font-size:medium">
                    <b style="color:#3399ff;">Frontier Install Windows:</b>
                    <br>
                    (8am-12pm)  (1pm-5pm)
                </p>
            </v-col>
        </v-row>
        <v-row v-if="selectedInternetProvider== 'WOW' && internetCheckbox  || InstallationTypeInternet == 'Ship to Home' && internetCheckbox ">
            <v-col>
                <p style="font-size:medium">
                    <b style="color:#3399ff;">WOW Delivery Windows:</b>
                    <br>
                    (8am-10am) (10am-12pm) (11am-1pm) (1pm-3pm) (3pm-5pm) (4pm-6pm) 
                </p>
            </v-col>
        </v-row>
        <v-row v-if="internetCheckbox" dense class="mt-0">
            <v-col cols="6">
                <v-select
                    dense
                    label="Installation Type (Internet)"
                    :items="['','Professional Install', 'In-Store Pickup', 'Ship to Home']"
                    outlined
                    v-model="InstallationTypeInternet">
                </v-select>
            </v-col>
        </v-row>
        <div v-if="(selectedInternetProvider== 'Xfinity' || InstallationTypeInternet == 'Professional Install') && internetCheckbox">
            <p class="text-h5" style="text-align: center">
                <b style="color:red">If requested install is within 30 days:</b> <br>
                <mark>You must <u>complete the order in the portal </u>now with customer<br>
                    because they'll need to receive a confirmation text.</mark></p>
        </div>
        <div v-if="(selectedInternetProvider== 'Xfinity' || InstallationTypeInternet == 'Ship to Home') && internetCheckbox"  >
            <p class="text-h5" style="text-align: center">
                <b style="color:red">If requested delivery is within 7 days:</b> <br>
                <mark>You must <u>complete the order in the portal </u>now with customer<br>
                    because they'll need to receive a confirmation text.</mark></p>
        </div>
        <div v-if="InstallationTypeInternet == 'Ship to Home' && selectedInternetProvider == 'COX'  && internetCheckbox">
            <v-row class="pa-5">
                <p class="text-h5" style="color:black"><b><u>Ship to home</u> delivery is  <span style="color:red">not available for Mondays.</span></b></p>
            </v-row>
            <v-row>
                <p style="color:black" class="text-h5 pl-5 pb-5"><u>If customer request Monday delivery:</u> offer <b>Tuesday</b> delivery, <b>pro-install</b>, or <b>in-store pickup.</b></p>
            </v-row>
        </div>
        <v-row v-if="selectedInternetProvider== 'Frontier'&& InstallationTypeInternet == 'Professional Install'  && internetCheckbox" dense class="mt-5 mb-4">
            <v-col cols="6">
                <v-select
                    label="Will there be any pets present during the installation?"
                    :items="['Yes', 'No']"
                    hint="a"
                    persistent-hint
                    outlined
                    v-model="anyPets">
                    <template v-slot:message><div class="">
                        <span style="color:red"> <b>If yes,</b></span> <u>read below to Customer:</u> <br>
                         That's great, we love pets! Frontier asks that your pets be secured while their technician is on premises and inside your home,
                         so they can move about freely to perform their job, and keep your pets safe.</div></template>
                </v-select>
            
            </v-col>
        </v-row>
        <v-row v-if="selectedInternetProvider== 'Spectrum'  && internetCheckbox">
            <v-col>
                <p style="font-size:medium">
                    <b style="color:#3399ff;">Spectrum Install Windows:</b>
                    <br>
                   <b> (7 Days a Week)
                    <br>
                    (8am-9am) (9am-10am) (11am-12pm) (12pm-1pm) (2pm-3pm) (3pm-4pm) (5pm-6pm) </b>
                </p>
            </v-col>
        </v-row>
        <v-row v-if="selectedInternetProvider== 'Verizon'  && internetCheckbox">
            <v-col>
                <p style="font-size:medium">
                    <b style="color:#3399ff;">Verizon Install Windows:</b>
                    <br>
                    <b>(9am-11am) (11am-1pm) (1pm-3pm) (3pm-5pm)</b>
                </p>
            </v-col>
        </v-row>
        <v-row v-if="selectedInternetProvider== 'WOW' && InstallationTypeInternet == 'Professional Install' && internetCheckbox ">
            <v-col>
                <p style="font-size:medium">
                    <b style="color:#3399ff;">WOW Install Windows:</b>
                    <br>
                    <b>(8am-10am) (9am-11am) (10am-12pm) (11am-1pm) (1pm-3pm) (3pm-5pm) </b>
                </p>
            </v-col>
        </v-row>
        <v-row v-if="selectedInternetProvider== 'Xfinity'  && internetCheckbox">
            <v-col>
                <p style="font-size:medium">
                    <b style="color:#3399ff;">Xfinity Install Windows:</b>
                    <br>
                    <b style="color:red">(8am-10am) (10am-12pm) (12pm-2pm) (2pm-4pm) (3pm-5pm)</b>
                </p>
            </v-col>
        </v-row>
        <v-row v-if="internetCheckbox" dense class="mt-0">
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
        <v-row v-if="InstallationTypeInternet == 'Professional Install'  && internetCheckbox" dense class="mt-0 mb-2">
            <v-col cols="6">
                <v-text-field 
                dense
                outlined
                v-model="internetInstallTime"
                label="Internet Install Time Window"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row  v-if="internetCheckbox" dense class="mt-0">
            <v-col cols="6">
                <v-select
                    dense
                    label="Security Question (Internet)"
                    :items="securityQuestionItems"
                    v-model="securityQuestion"
                    outlined>
                </v-select>
            </v-col>
        </v-row>
        <v-row v-if="(selectedInternetProvider== 'AT&T'||selectedInternetProvider== 'COX'||selectedInternetProvider== 'United Communications')&& internetCheckbox"  dense class="mt-0 mb-4">
            <v-col cols="6">
                <v-text-field 
                dense
                outlined
                v-model="securityAnswer"
                label="Security Answer (Internet)"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row v-if="selectedInternetProvider == 'AT&T' && internetCheckbox|| selectedInternetProvider == 'COX' && internetCheckbox || selectedInternetProvider == 'WOW' && internetCheckbox ||selectedInternetProvider == 'United Communications' && internetCheckbox   " dense class="mt-0 mb-4">
            <v-col cols="6">
                <v-text-field 
                dense
                outlined
                v-model="securityPin"
                label="Security Pin (Internet)"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row v-if="InstallationTypeInternet != ''" dense class="mt-0 mb-4">
            <v-col cols="6">
                <v-text-field 
                dense
                outlined
                v-model="internetAccountWorkorder"
                label="Internet Account/Workorder Number"
                ></v-text-field>
            </v-col>
        </v-row>
        <br>
        <h2 v-if="availableInternetProviders == ''" color="black" class="black--text pb-5">--MOBILE PHONE--</h2>
        <v-row v-if="availableInternetProviders == ''" dense class="mt-0 mb-4">
            <v-col cols="6">
                <v-select
                    label="Mobile Phone Provider"
                    :items="['','Spectrum']"
                    v-model="mobilePhoneProvider"
                    hint="If activating Spectrum Mobile You'll need to complete the Internetr/TV order with customer, then call ( 855) 392-9910 to add the FREE Mobile line. Be sure to give them our SAID# (22778) to receive credit for the sale."
                    persistent-hint
                    outlined>
                </v-select>
            </v-col>
        </v-row>
        <v-row  v-if="availableInternetProviders == ''" class="mt-0">
            <v-col cols="6">
                <v-text-field
                dense
                v-model="noMobileLines"
                outlined
                label="Number of Mobile Lines Purchased"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row v-if="availableInternetProviders == ''" dense class="mt-0">
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
        <v-row v-if="availableInternetProviders == ''" class="pt-0">
                <v-col>
                    <v-textarea
                    label="Mobile Notes"
                    outlined
                    v-model="mobileNotes"
                    dense
                    ></v-textarea>
                </v-col>
        </v-row>
        <h2 v-if="tvCheckbox" color="black" class="black--text">--TV--</h2>
        <v-row  v-if="tvCheckbox" dense class="mt-0">
            <v-col cols="6">
                <v-select
                    dense
                    v-model="selectedTV" 
                    label="Selected TV Provider"
                    :items="['','Altice USA','COX', 'DirecTV Stream', 'DirecTV', 'Mediacom', 'Optimum', 'Spectrum', 'SuddenLink', 'Verizon', 'WOW', 'Xfinity', 'YouTube TV', 'Other']"
                    outlined>
                </v-select>
                <v-text-field
                    dense
                    v-model="otherTV"
                    outlined
                    v-if="selectedTV == 'Other' && tvCheckbox"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row v-if="tvCheckbox" dense class="mt-0">
            <v-col cols="6">
                <v-select
                    label="Who's Name will TV be in?"
                    :items="['Primary', 'Secondary']"
                    v-model="whosNameWillTv"
                    hint="Select Primary or Secondary"
                    persistent-hint
                    outlined>
                </v-select>
            </v-col>
        </v-row>
        <v-row v-if="selectedTV == 'Spectrum' && tvCheckbox" dense class="mt-0 mb-2">
            <v-col cols="6">
                <v-checkbox
                    v-model="tvEssentials"
                    label="TV ESSENTIALS (not counted as an RGU)"
                    hint="Check this box if customer selects TV Essentials."
                    persistent-hint></v-checkbox>
            </v-col>
        </v-row>
        <v-row v-if="tvCheckbox" dense class="mt-0 mb-2">
            <v-col cols="6">
                <v-text-field
                    v-model="tvPlanEquipment"
                    dense
                    outlined
                    label="TV PLAN and Equipment"
                    hint="Enter all data pertinent to the package selection and equipment that you'd like displayed in the confirmation email. (ie: Gold TV, with 2 DVR receivers and 1 HD reciever)"
                    persistent-hint>
                </v-text-field>
            </v-col>
        </v-row>
        <v-row v-if="tvCheckbox" dense class="mt-0">
            <v-col cols="6">
                <v-select
                    v-model="installationTypeSelectedTV"
                    label="Installation Type(TV) (IF SAME AS INTERNET, SKIP THIS STEP)"
                    :items="['','Professional Install', 'In-Store Pickup', 'Ship to Home']"
                    outlined>
                </v-select>
            </v-col>
        </v-row>
        <v-row v-if="tvCheckbox" dense class="mt-0">
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
        <v-row v-if="installationTypeSelectedTV == 'Professional Install' && tvCheckbox" dense class="mt-0 mb-2">
            <v-col cols="6">
                <v-text-field 
                dense
                outlined
                v-model="tvInstallTime"
                label="TV Install Time Window"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row  v-if="installationTypeSelectedTV != '' && tvCheckbox" dense class="mt-0">
            <v-col cols="6">
                <v-select
                    dense
                    outlined
                    v-model="securityQuestionTV"
                    label="Security Question (TV)"
                    :items="securityQuestionItemsTV"
                    >
                </v-select>
            </v-col>
        </v-row>
        <v-row v-if="(selectedTV == 'COX'||selectedTV == 'DirecTV Stream') && tvCheckbox " dense class="mt-0">
            <v-col cols="6">
                <v-text-field 
                dense
                outlined
                v-model="securityAnswerTv"
                label="Security Answer (TV)"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row v-if="selectedTV == 'DirecTV Stream'|| selectedTV == 'DirecTV'|| selectedTV == 'COX'||selectedTV== 'WOW'" dense class="mt-0">
            <v-col cols="6">
                <v-text-field 
                dense
                v-model="securityPinTv"
                outlined
                label="Security Pin (TV)"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row v-if="installationTypeSelectedTV != '' && tvCheckbox" dense class="mt-0">
            <v-col cols="6">
                <v-text-field 
                v-model="tvAccountWorkorder"
                dense
                outlined
                label="TV Account/Workorder Number"
                ></v-text-field>
            </v-col>
        </v-row>
        <br>
        <h2 v-if="phoneCheckbox" color="black" class="black--text">--PHONE--</h2>
        <v-row v-if="phoneCheckbox" dense class="mt-0">
            <v-col cols="6">
                <v-select
                    v-model="selectedPhone"
                    label="Selected Phone Provider"
                    :items="['','AT&T', 'Altice USA','Brightspeed', 'COX','CenturyLink','Frontier', 'Mediacom', 'Metronet', 'Optimum', 'Spectrum', 'SuddenLink', 'United Communications', 'Verizon', 'WOW', 'Xfinity', 'Other']"
                    outlined>
                </v-select>
                <v-text-field
                    v-if="selectedPhone=='Other' && phoneCheckbox"
                    dense
                    v-model="otherPhone"
                    outlined>
                </v-text-field>
            </v-col>
        </v-row>
        <v-row  v-if="phoneCheckbox" dense class="mt-0">
            <v-col cols="6">
                <v-select
                    label="Who's Name will Phone be in?"
                    :items="['Primary', 'Secondary']"
                    hint="Select Primary or Secondary"
                    v-model="whosNameWillPhone"
                    persistent-hint
                    outlined>
                </v-select>
            </v-col>
        </v-row>
        <v-row v-if="phoneCheckbox" dense class="mt-0">
            <v-col cols="6">
                <v-text-field
                    dense
                    outlined
                    v-model="phonePlanEquipment"
                    label="Phone Plan and Equipment"
                    hint="Enter all data pertinent to the package selection and equipment that you'd like displayed in the confirmation email. (ie: Unlimited calling to US, Canada, Mexico)"
                    persistent-hint>
                </v-text-field>
            </v-col>
        </v-row>
        <v-row v-if="phoneCheckbox" dense class="mt-0">
            <v-col cols="6">
                <v-select
                    v-model="installationTypePhone"
                    label="Installation Type (Phone) (IF SAME AS INTERNET, SKIP THIS STEP)"
                    :items="['','Professional Install', 'In-Store Pickup', 'Ship to Home']"
                    outlined>
                </v-select>
            </v-col>
        </v-row>
        <v-row  v-if="phoneCheckbox" dense class="mt-0">
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
        <v-row v-if="installationTypePhone == 'Professional Install' && phoneCheckbox" dense class="mt-0">
            <v-col cols="6">
                <v-text-field
                    dense
                    outlined
                    v-model="phoneInstallTime"
                    label="Phone Install Time Window">
                </v-text-field>
            </v-col>
        </v-row>
        <v-row  v-if="phoneCheckbox && installationTypePhone != ''" dense class="mt-0">
            <v-col cols="6">
                <v-select
                outlined
                label="Security Question (Phone)"
                :items="groupChoiceCox"
                v-model="securityQuestionPhone"
                >
                </v-select>
            </v-col>
        </v-row>
        <v-row v-if="phoneCheckbox" dense class="mt-0">
            <v-col cols="6">
                <v-text-field 
                dense
                outlined
                v-model="securityAnswerPhone"
                label="Security Answer (Phone)"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row v-if="selectedPhone == 'AT&T'|| selectedPhone == 'COX'|| selectedPhone== 'WOW'" dense class="mt-0">
            <v-col cols="6">
                <v-text-field 
                dense
                v-model="securityPinPhone"
                outlined
                label="Security Pin (Phone)"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row v-if="installationTypePhone != ''" dense class="mt-0">
            <v-col cols="6">
                <v-text-field
                v-model="phoneAccountNumber"
                dense
                outlined
                label="Phone Account/Workorder Number"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row v-if="InstallationTypeInternet=='In-Store Pickup' && internetCheckbox || installationTypeSelectedTV== 'In-Store Pickup' && tvCheckbox || installationTypePhone == 'In-Store Pickup' && phoneCheckbox" justify="center">
            <h2><a class="pa-5" href="https://www.spectrum.com/stores" target="_blank">Spectrum Store Locator</a></h2>
            <h2><a class="pa-5" href="https://www.xfinity.com/local/store-offers" target="_blank">Xfinity Store Locator</a></h2>
            <h2><a class="pa-5" href="https://www.cox.com/local/search" target="_blank">Cox Store Locator</a></h2>
        </v-row>
        <v-row class="pt-10 pb-10">
            <h1 color="black" class="black--text">--REQUIRED INFO FOR ORDERS--</h1>
        </v-row>
            <v-row v-if="whosNameWillinternet == 'Primary'&& internetCheckbox || whosNameWillTv== 'Primary' && tvCheckbox || whosNameWillPhone== 'Primary' && phoneCheckbox" dense class="mt-0">
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
            </v-col>
        </v-row>
        <v-row v-if="internetProviderAux1.includes(selectedInternetProvider)||selectTVproviderAux.includes(selectedTV)|| selectPhoneProviderAux.includes(selectedPhone)" dense class="mt-0">
            <v-col cols="6">
                <v-text-field 
                dense
                outlined
                v-model="primarySSN"
                label="Primary SSN for Cable (No Dashes)"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row v-if="selectedInternetProvider=='Viasat' && internetCheckbox" dense class="mt-0">
            <v-col cols="6">
                <v-text-field 
                dense
                v-model="last4ofSSN"
                outlined
                label="Last 4 of SSN"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row  v-if="whosNameWillinternet == 'Secondary'&& internetCheckbox || whosNameWillTv== 'Secondary' && tvCheckbox || whosNameWillPhone== 'Secondary' && phoneCheckbox" dense class="mt-0">
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
        <v-row v-if="internetProviderAux1.includes(selectedInternetProvider)||selectTVproviderAux.includes(selectedTV)|| selectPhoneProviderAux.includes(selectedPhone)" dense class="mt-0">
            <v-col cols="6">
                <v-text-field 
                dense
                v-model="secondarySSNforcable"
                outlined
                label="Secondary SSN for Cable (No Dashes)"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row v-if="(selectedInternetProvider== 'Frontier'||selectedInternetProvider== 'Spectrum' || selectedInternetProvider== 'Viasat') && internetCheckbox  " dense class="mt-0">
            <v-col cols="6">
                <v-select
                    v-model="collectCCInfo"
                    label="Collect CC Info for AutoPay or Initial Payment"
                    :items="['Yes','No']"
                    outlined>
                </v-select>
            </v-col>
        </v-row>
        <div v-if="(selectedInternetProvider== 'Frontier'||selectedInternetProvider== 'Spectrum' || selectedInternetProvider== 'Viasat') && internetCheckbox && collectCCInfo=='Yes'  ">
            <h2 color="black" class="black--text">--Payment Info--</h2>
            <br>
            <v-row dense class="mt-0">
                <v-col cols="6">
                    <v-select
                        label="Card Type"
                        dense
                        v-model="cardType"
                        :items="['','Visa', 'Mastercard', 'Discover', 'American Express']"
                        outlined>
                    </v-select>
                </v-col>
            </v-row>
            <v-row dense class="mt-0">
                <v-col cols="6">
                    <v-text-field 
                    v-model="CCNumber"
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
                    v-model="expiration"
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
                    v-model="NameonCard"
                    outlined
                    label="Name on Card"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row dense class="mt-0">
                <v-col cols="6">
                    <v-text-field 
                    dense
                    v-model="billingZipCode"
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
                    v-model="cardVerificationCode"
                    label="Card Verification Code"
                    hint="3 or 4 Digit Code on the Back of the Card. (May be embossed on the front of some cards)"
                    persistent-hint
                    ></v-text-field>
                </v-col>
            </v-row>
        </div>
        <div v-if="selectedInternetProvider != ''  && internetCheckbox || selectedTV != ''  && tvCheckbox">
            <v-row justify="center">
                <p class="text-h4" style="color:black">READ TO CUSTOMER:</p>
            </v-row>
            <v-row class="pb-10" justify="center">
                <p class="text-h5" style="color:red;font-size:medium">If necessary, one of my colleagues on our Support Team may reach out to gather any additional info the Provider requires to finalize your order the week of your activation date.</p>
            </v-row>    
        </div>
        <v-row v-if="internetCheckbox" dense class="mt-0">
            <v-col cols="6">
                <v-select
                    label="Create Ticket? (Internet)"
                    v-model="createTicketInternet"
                    :items="['','Place Order', 'Delayed Cable Order', 'Convert to Pro Install', 'Error Received (Re-Key)']"
                    outlined>
                </v-select>
            </v-col>
        </v-row>
        <v-row v-if="installationTypeSelectedTV != '' && tvCheckbox" dense class="mt-0">
            <v-col cols="6">
                <v-select
                    v-model="createTicketTV"
                    label="Create Ticket? (TV)"
                    :items="['','Place Order', 'Delayed Cable Order', 'Convert to Pro Install', 'Error Received (Re-Key)']"
                    outlined>
                </v-select>
            </v-col>
        </v-row>
        <v-row v-if="createTicketInternet != ''" class="mt-0">
                <v-col cols="">
                    <v-textarea
                    label="Ticket Notes"
                    v-model="ticketNotes"
                    outlined
                    dense
                    hint="Provide any details that will help Support with handlind the tickets."
                    persistent-hint
                    ></v-textarea>
                </v-col>
        </v-row>
        <v-row v-if="selectedInternetProvider != ''&& selectedTV!= ''  && internetCheckbox  && tvCheckbox " dense class="mt-0">
            <v-col cols="6">
                <v-checkbox
                v-model="ihaveReviewed"
                label="I have reviewed all fees associated with the customer"
                hint="(ie: Installation, Equipment, DVR Fees, Broadcast Fees)"
                persistent-hint></v-checkbox>
            </v-col>
        </v-row>
    </v-card-text>

    </v-card>
    </div>
</template>
<script>

export default {
    data: vm=>( {
        groupChoiceATT : [
            "",
            "What's your favorite Restaurant?", 
            "Who is your favorite actor?", 
            "Who is your favorite singer?", 
            "Who was your childhood hero?"
        ],
        groupChoiceCox: [
            "",
            "What is the first concert you attended?", 
            "What is the name of the road you lived on in 3rd grade?", 
            "What was the name of your first pet?"
        ],
        securityQuestionItems:[],
        securityQuestionItemsTv:[],
        internetInstallMenu: false,
        internetInstallDate: '',
        internetInstallDateFormatted: '',
        groupChoiceUC: [
            "",
            "What is the Last 4 of Your SSN or EIN number?", 
            "What is the name of your first school teacher?", 
            "What is your favorite sports team?", 
            "What was the make and model of your first car?", 
            "What was the name of your High School?",
            "What was the name of your first pet?", 
            "Who was your first employer?"
        ],
        mobileActivationMenu: false,
        mobileActivationDate: '',
        mobileActivationDateFormatted: '',
        tvInstallMenu: false,
        tvInstallDate: '',
        tvInstallDateFormatted: '',
        phoneInstallMenu: false,
        phoneInstallDate:'',
        phoneInstallDateFormatted: '',
        primaryBirthMenu: false,
        primaryBirthDate: '',
        primaryBirthDateFormatted: '',
        secondaryBirthMenu: false,
        secondaryBirthDate:'',
        secondaryBirthDateFormatted: '',
        internetProviderAux1:[
        "",
        "AT&T",
        "CenturyLink",
        "Frontier",
        "Altice USA",
        "SuddenLink",
        "Optimum",
        "Xfinity",
        "Verizon",
        "COX",
        "HughesNet",
        "Brightspeed"
        ],
        selectTVproviderAux:[
        "",
        "Xfinity",
        "COX",
        "DirecTV Stream",
        "DirecTV",
        "Altice USA",
        "Optimum",
        "SuddenLink",
        "Verizon"
        ],
        selectPhoneProviderAux:[
        "",
        "AT&T",
        "Xfinity",
        "COX",
        "Frontier",
        "Altice USA",
        "Optimum",
        "SuddenLink",
        "Verizon",
        "CenturyLink"
        ]
        // secondaryBirthDateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        
        
    }),
    watch: {
        internetInstallDate (val) {
        this.internetInstallDateFormattedStore = this.internetInstallDateFormatted = this.formatDate(this.internetInstallDate)
        },
        mobileActivationDate(val) {
          this.mobileActivationDateFormattedStore = this.mobileActivationDateFormatted = this.formatDate(this.mobileActivationDate)
        },
        tvInstallDate(val) {
          this.tvInstallDateFormattedStore = this.tvInstallDateFormatted = this.formatDate(this.tvInstallDate)
        },
        phoneInstallDate(val) {
          this.phoneInstallDateFormattedStore = this.phoneInstallDateFormatted = this.formatDate(this.phoneInstallDate)
        },
        primaryBirthDate(val) {
          this.primaryBirthDateFormattedStore = this.primaryBirthDateFormatted = this.formatDate(this.primaryBirthDate)
        },
        secondaryBirthDate(val) {
          this.secondaryBirthDateFormattedStore = this.secondaryBirthDateFormatted = this.formatDate(this.secondaryBirthDate)
        },
        selectedInternetProvider(val){
            if(this.selectedInternetProvider == 'COX'){
                this.securityQuestionItems = this.groupChoiceCox;

            }else if(this.selectedInternetProvider == 'United Communications'){
                this.securityQuestionItems = this.groupChoiceUC;
            }else if(this.selectedInternetProvider == 'AT&T'){
                this.securityQuestionItems = this.groupChoiceATT;
            }else{
                this.securityQuestionItems = [];
            }
        },
        selectedTV(val){
            if(this.selectedTV == 'COX' || this.selectedTV == 'DirecTV Stream' || this.selectedTV == 'DirecTV'){
                this.securityQuestionItemsTv =  this.groupChoiceCox;
            }else{
                this.securityQuestionItemsTv  = []
            }
            
        }
    },
    computed: {
        streetAddress: {
            get() {
                return this.$store.state.stepOne.streetAddress;
            },
            set(value) {
                this.$store.state.stepOne.streetAddress = value;
            },
        },
        city: {
            get() {
                return this.$store.state.stepOne.city;
            },
            set(value) {
                this.$store.state.stepOne.city = value;
            },
        },
        stateRegion: {
            get() {
                return this.$store.state.stepOne.stateRegion;
            },
            set(value) {
                this.$store.state.stepOne.stateRegion = value;
            },
        },
        zipCode: {
            get() {
                return this.$store.state.stepOne.zipCode;
            },
            set(value) {
                this.$store.state.stepOne.zipCode = value;
            },
        },
        secondaryBirthDateFormattedStore: {
            get() {
                return this.$store.state.stepThree.secondaryBirthDateFormattedStore;
            },
            set(value) {
                this.$store.state.stepThree.secondaryBirthDateFormattedStore = value;
            },
        },
        primaryBirthDateFormattedStore: {
            get() {
                return this.$store.state.stepThree.primaryBirthDateFormattedStore;
            },
            set(value) {
                this.$store.state.stepThree.primaryBirthDateFormattedStore = value;
            },
        },
        phoneInstallDateFormattedStore: {
            get() {
                return this.$store.state.stepThree.phoneInstallDateFormattedStore;
            },
            set(value) {
                this.$store.state.stepThree.phoneInstallDateFormattedStore = value;
            },
        },
        tvInstallDateFormattedStore: {
            get() {
                return this.$store.state.stepThree.tvInstallDateFormattedStore;
            },
            set(value) {
                this.$store.state.stepThree.tvInstallDateFormattedStore = value;
            },
        },
        mobileActivationDateFormattedStore: {
            get() {
                return this.$store.state.stepThree.mobileActivationDateFormattedStore;
            },
            set(value) {
                this.$store.state.stepThree.mobileActivationDateFormattedStore = value;
            },
        },
        internetInstallDateFormattedStore: {
            get() {
                return this.$store.state.stepThree.internetInstallDateFormattedStore;
            },
            set(value) {
                this.$store.state.stepThree.internetInstallDateFormattedStore = value;
            },
        },
        availableInternetProviders: {
            get() {
                return this.$store.state.stepThree.availableInternetProviders;
            },
            set(value) {
                this.$store.state.stepThree.availableInternetProviders = value;
            },
        },
        availableTVProviders: {
            get() {
                return this.$store.state.stepThree.availableTVProviders;
            },
            set(value) {
                this.$store.state.stepThree.availableTVProviders = value;
            },
        },
        availablePhoneProviders: {
            get() {
                return this.$store.state.stepThree.availablePhoneProviders;
            },
            set(value) {
                this.$store.state.stepThree.availablePhoneProviders = value;
            },
        },
        newStreetAddress: {
            get() {
                return this.$store.state.stepThree.newStreetAddress;
            },
            set(value) {
                this.$store.state.stepThree.newStreetAddress = value;
            },
        },
        newCity: {
            get() {
                return this.$store.state.stepThree.newCity;
            },
            set(value) {
                this.$store.state.stepThree.newCity = value;
            },
        },
        newState: {
            get() {
                return this.$store.state.stepThree.newState;
            },
            set(value) {
                this.$store.state.stepThree.newState = value;
            },
        },
        newZipCode: {
            get() {
                return this.$store.state.stepThree.newZipCode;
            },
            set(value) {
                this.$store.state.stepThree.newZipCode = value;
            },
        },
        internetCheckbox: {
            get() {
                return this.$store.state.stepThree.internetCheckbox;
            },
            set(value) {
                this.$store.state.stepThree.internetCheckbox = value;
            },
        },
        tvCheckbox: {
            get() {
                return this.$store.state.stepThree.tvCheckbox;
            },
            set(value) {
                this.$store.state.stepThree.tvCheckbox = value;
            },
        },
        phoneCheckbox: {
            get() {
                return this.$store.state.stepThree.phoneCheckbox;
            },
            set(value) {
                this.$store.state.stepThree.phoneCheckbox = value;
            },
        },
        noneCheckbox: {
            get() {
                return this.$store.state.stepThree.noneCheckbox;
            },
            set(value) {
                this.$store.state.stepThree.noneCheckbox = value;
            },
        },
        whosNameWillinternet: {
            get() {
                return this.$store.state.stepThree.whosNameWillinternet;
            },
            set(value) {
                this.$store.state.stepThree.whosNameWillinternet = value;
            },
        },
        selectedInternetProvider: {
            get() {
                return this.$store.state.stepThree.selectedInternetProvider;
            },
            set(value) {
                this.$store.state.stepThree.selectedInternetProvider = value;
            },
        },
        internetPlan: {
            get() {
                return this.$store.state.stepThree.internetPlan;
            },
            set(value) {
                this.$store.state.stepThree.internetPlan = value;
            },
        },
        previousStreet: {
            get() {
                return this.$store.state.stepThree.previousStreet;
            },
            set(value) {
                this.$store.state.stepThree.previousStreet = value;
            },
        },
        previousCity: {
            get() {
                return this.$store.state.stepThree.previousCity;
            },
            set(value) {
                this.$store.state.stepThree.previousCity = value;
            },
        },
        previousState: {
            get() {
                return this.$store.state.stepThree.previousState;
            },
            set(value) {
                this.$store.state.stepThree.previousState = value;
            },
        },
        previousZipCode: {
            get() {
                return this.$store.state.stepThree.previousZipCode;
            },
            set(value) {
                this.$store.state.stepThree.previousZipCode = value;
            },
        },
        previousCountry: {
            get() {
                return this.$store.state.stepThree.previousCountry;
            },
            set(value) {
                this.$store.state.stepThree.previousCountry = value;
            },
        },
        InstallationTypeInternet: {
            get() {
                return this.$store.state.stepThree.InstallationTypeInternet;
            },
            set(value) {
                this.$store.state.stepThree.InstallationTypeInternet = value;
            },
        },
        anyPets: {
            get() {
                return this.$store.state.stepThree.anyPets;
            },
            set(value) {
                this.$store.state.stepThree.anyPets = value;
            },
        },
        internetInstallTime: {
            get() {
                return this.$store.state.stepThree.internetInstallTime;
            },
            set(value) {
                this.$store.state.stepThree.internetInstallTime = value;
            },
        },
        securityQuestion: {
            get() {
                return this.$store.state.stepThree.securityQuestion;
            },
            set(value) {
                this.$store.state.stepThree.securityQuestion = value;
            },
        },
        securityAnswer: {
            get() {
                return this.$store.state.stepThree.securityAnswer;
            },
            set(value) {
                this.$store.state.stepThree.securityAnswer = value;
            },
        },
        securityPin: {
            get() {
                return this.$store.state.stepThree.securityPin;
            },
            set(value) {
                this.$store.state.stepThree.securityPin = value;
            },
        },
        internetAccountWorkorder: {
            get() {
                return this.$store.state.stepThree.internetAccountWorkorder;
            },
            set(value) {
                this.$store.state.stepThree.internetAccountWorkorder = value;
            },
        },
        mobilePhoneProvider: {
            get() {
                return this.$store.state.stepThree.mobilePhoneProvider;
            },
            set(value) {
                this.$store.state.stepThree.mobilePhoneProvider = value;
            },
        },
        noMobileLines: {
            get() {
                return this.$store.state.stepThree.noMobileLines;
            },
            set(value) {
                this.$store.state.stepThree.noMobileLines = value;
            },
        },
        mobileNotes: {
            get() {
                return this.$store.state.stepThree.mobileNotes;
            },
            set(value) {
                this.$store.state.stepThree.mobileNotes = value;
            },
        },
        selectedTV: {
            get() {
                return this.$store.state.stepThree.selectedTV;
            },
            set(value) {
                this.$store.state.stepThree.selectedTV = value;
            },
        },
        otherTV: {
            get() {
                return this.$store.state.stepThree.otherTV;
            },
            set(value) {
                this.$store.state.stepThree.otherTV = value;
            },
        },
        whosNameWillTv: {
            get() {
                return this.$store.state.stepThree.whosNameWillTv;
            },
            set(value) {
                this.$store.state.stepThree.whosNameWillTv = value;
            },
        },
        tvEssentials: {
            get() {
                return this.$store.state.stepThree.tvEssentials;
            },
            set(value) {
                this.$store.state.stepThree.tvEssentials = value;
            },
        },
        tvPlanEquipment: {
            get() {
                return this.$store.state.stepThree.tvPlanEquipment;
            },
            set(value) {
                this.$store.state.stepThree.tvPlanEquipment = value;
            },
        },
        installationTypeSelectedTV: {
            get() {
                return this.$store.state.stepThree.installationTypeSelectedTV;
            },
            set(value) {
                this.$store.state.stepThree.installationTypeSelectedTV = value;
            },
        },
        tvInstallTime: {
            get() {
                return this.$store.state.stepThree.tvInstallTime;
            },
            set(value) {
                this.$store.state.stepThree.tvInstallTime = value;
            },
        },
        securityQuestionTV: {
            get() {
                return this.$store.state.stepThree.securityQuestionTV;
            },
            set(value) {
                this.$store.state.stepThree.securityQuestionTV = value;
            },
        },
        securityAnswerTv: {
            get() {
                return this.$store.state.stepThree.securityAnswerTv;
            },
            set(value) {
                this.$store.state.stepThree.securityAnswerTv = value;
            },
        },
        securityPinTv: {
            get() {
                return this.$store.state.stepThree.securityPinTv;
            },
            set(value) {
                this.$store.state.stepThree.securityPinTv = value;
            },
        },
        tvAccountWorkorder: {
            get() {
                return this.$store.state.stepThree.tvAccountWorkorder;
            },
            set(value) {
                this.$store.state.stepThree.tvAccountWorkorder = value;
            },
        },
        selectedPhone: {
            get() {
                return this.$store.state.stepThree.selectedPhone;
            },
            set(value) {
                this.$store.state.stepThree.selectedPhone = value;
            },
        },
        otherPhone: {
            get() {
                return this.$store.state.stepThree.otherPhone;
            },
            set(value) {
                this.$store.state.stepThree.otherPhone = value;
            },
        },
        whosNameWillPhone: {
            get() {
                return this.$store.state.stepThree.whosNameWillPhone;
            },
            set(value) {
                this.$store.state.stepThree.whosNameWillPhone = value;
            },
        },
        phonePlanEquipment: {
            get() {
                return this.$store.state.stepThree.phonePlanEquipment;
            },
            set(value) {
                this.$store.state.stepThree.phonePlanEquipment = value;
            },
        },
        installationTypePhone: {
            get() {
                return this.$store.state.stepThree.installationTypePhone;
            },
            set(value) {
                this.$store.state.stepThree.installationTypePhone = value;
            },
        },
        phoneInstallTime: {
            get() {
                return this.$store.state.stepThree.phoneInstallTime;
            },
            set(value) {
                this.$store.state.stepThree.phoneInstallTime = value;
            },
        },
        securityQuestionPhone: {
            get() {
                return this.$store.state.stepThree.securityQuestionPhone;
            },
            set(value) {
                this.$store.state.stepThree.securityQuestionPhone = value;
            },
        },
        securityAnswerPhone: {
            get() {
                return this.$store.state.stepThree.securityAnswerPhone;
            },
            set(value) {
                this.$store.state.stepThree.securityAnswerPhone = value;
            },
        },
        securityPinPhone: {
            get() {
                return this.$store.state.stepThree.securityPinPhone;
            },
            set(value) {
                this.$store.state.stepThree.securityPinPhone = value;
            },
        },
        phoneAccountNumber: {
            get() {
                return this.$store.state.stepThree.phoneAccountNumber;
            },
            set(value) {
                this.$store.state.stepThree.phoneAccountNumber = value;
            },
        },
        primarySSN: {
            get() {
                return this.$store.state.stepThree.primarySSN;
            },
            set(value) {
                this.$store.state.stepThree.primarySSN = value;
            },
        },
        last4ofSSN: {
            get() {
                return this.$store.state.stepThree.last4ofSSN;
            },
            set(value) {
                this.$store.state.stepThree.last4ofSSN = value;
            },
        },
        secondarySSNforcable: {
            get() {
                return this.$store.state.stepThree.secondarySSNforcable;
            },
            set(value) {
                this.$store.state.stepThree.secondarySSNforcable = value;
            },
        },
        collectCCInfo: {
            get() {
                return this.$store.state.stepThree.collectCCInfo;
            },
            set(value) {
                this.$store.state.stepThree.collectCCInfo = value;
            },
        },
        cardType: {
            get() {
                return this.$store.state.stepThree.cardType;
            },
            set(value) {
                this.$store.state.stepThree.cardType = value;
            },
        },
        CCNumber: {
            get() {
                return this.$store.state.stepThree.CCNumber;
            },
            set(value) {
                this.$store.state.stepThree.CCNumber = value;
            },
        },
        expiration: {
            get() {
                return this.$store.state.stepThree.expiration;
            },
            set(value) {
                this.$store.state.stepThree.expiration = value;
            },
        },
        NameonCard: {
            get() {
                return this.$store.state.stepThree.NameonCard;
            },
            set(value) {
                this.$store.state.stepThree.NameonCard = value;
            },
        },
        billingZipCode: {
            get() {
                return this.$store.state.stepThree.billingZipCode;
            },
            set(value) {
                this.$store.state.stepThree.billingZipCode = value;
            },
        },
        cardVerificationCode: {
            get() {
                return this.$store.state.stepThree.cardVerificationCode;
            },
            set(value) {
                this.$store.state.stepThree.cardVerificationCode = value;
            },
        },
        createTicketInternet: {
            get() {
                return this.$store.state.stepThree.createTicketInternet;
            },
            set(value) {
                this.$store.state.stepThree.createTicketInternet = value;
            },
        },
        createTicketTV: {
            get() {
                return this.$store.state.stepThree.createTicketTV;
            },
            set(value) {
                this.$store.state.stepThree.createTicketTV = value;
            },
        },
        ticketNotes: {
            get() {
                return this.$store.state.stepThree.ticketNotes;
            },
            set(value) {
                this.$store.state.stepThree.ticketNotes = value;
            },
        },
        ihaveReviewed: {
            get() {
                return this.$store.state.stepThree.ihaveReviewed;
            },
            set(value) {
                this.$store.state.stepThree.ihaveReviewed = value;
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