# carbon-footprint-tracker
## Welcome to EcoPath!
EcoPath is your personal environmental companion designed to help you monitor and minimize your ecological footprint with ease. With a user-friendly interface and a suite of indispensable tools, EcoPath is a web app that empowers you to make informed decisions and take actionable steps toward a more sustainable lifestyle.
## Documentation
DECIDE IF CARBON FOOTPRINT FOR A DAY, MONTH OR A YEAR
opted option for each question sub category
Airplane:
1. Did you travel via airplane in the past? (qid: airplane_travel_bool_start)

Datatype: boolean (yes/no)

element: options

	a. Where did you travel to? And from where? Choose No to avoid Sharing information (qid: airplane_travel_loc_start)

	Datatype: String (text) --> connect with Places API to find airports --> find distance between both --> send distance to backend

	element: input => text

	
	b. Future: When did you travel? (qid: airplane_travel_date)

	Datatype: String (date)

	element: input => date

	
	c. If a. is No => What was the distance you travelled? (qid: airplane_travel_num_km)

	Datatype: Integer --> send distance to backend

	element: input => number

	
	d. How many trips did you have? -- Mention the number whose information you know and you can provide (qid: airplane_travel_trips_num)

	Datatype: Integer --> loop a. & c. for number of times

	element: input => number


2. Have you used trains to travel? (qid: train_travel_bool_start)

Datatype: boolean (yes/no)

element: options

	a. Same as airplane travel (qid: train_travel_loc_start)

	b. Same as airplane travel (qid: train_travel_date)

	c. Same as airplane travel (qid: train_travel_num_km)

	d. Same as airplane travel (qid: train_travel_trips_num)

	e. Was the train electric/diesel/hybrid? (qid: train_travel_fuel_type)

	Datatype: string (diesel: 0/electric: 1/hybrid: 2)

	element: options


3. Have you used your city transit trains/metro? (qid: metro_travel_bool_start)

Datatype: boolean (yes/no)

element: options

	a. How often do you commute? (qid: metro_travel_trips_num)

	Datatype: String (text -- weekly: 52, monthly: 12, daily: 365, annually: 1, quaterly: 3) 

	element: options


	b. What is the place you frequently go to and from where? Chhose No to avoid Sharing Information (qid: metro_travel_loc_start)

	Datatype: String (text) --> connect with Places API to find stations --> find distance between both --> send distance to backend

	element: input => text


	c. How many coaches are in train on average? (qid: metro_travel_coach_num)

	Datatype: Integer --> send to backend

	element: input => number


	d. Was the train/metro electric/diesel/hybrid? (qid: metro_travel_fuel_type)

	Datatype: String (diesel: 0/electric: 1/hybrid: 2)

	element: options



4. Do you have a car that you use? (qid: car_travel_loc_start)

Datatype: boolean (yes/no)

element: options

	a. What purposes do you use the car for? (qid: car_travel_purposes)

	Datatype: String (text -- commuting to work (car_travel_work), commuting to school (car_travel_school), vacation/business trips (car_travel_vacbus))

	element: multiselect --> loop depending on options


	b. What is the distance between your place of work and the place where you live? (qid: car_travel_work_dist_num)

	Datatype: Integer --> send distance to backend

	element: input => number


	c. What is the distance between your school and the place where you live? (qid: car_travel_school_dist_num)

	Datatype: Integer --> send distance to backend

	element: input => number


	d. How many vacation/business trips do you take in a year? (qid: car_travel_vacbus_num)

	Datatype: Integer

	element: input => number


	e. What was the distance between your destination and the place you left from for the vacation/business trip? (qid: car_travel_vacbus_dist_num)

	Datatype: Integer --> send distance to backend --> loop d. times

	element: input => number 

	f. what was the average distance between your destination and the place you left from? (qid: car_travel_vacbus_avg_dist_num)

	Datatype: Integer --> send distance to backend

	element: input => number

	g. What was the average time you spent commuting in car for your business/vacation trips? (qid: car_travel_vacbus_avg_time_num);

	Datatype: Integer --> Send days hrs min value to backend

	element: input => number


	h. How many cars do you have? (qid: car_travel_num)

	Datatype: Integer --> send number to backend

	element: input => number


	i. What fuel does majority of your cars use? (qid: car_travel_fuel_type)

	Datatype: String (text-- electric/gas/hybrid)

	element: options


	

	
