Category: Transportation

Sub Category: Airplane Travel
QMain_id: airplane_travel_

Main Question: Did you travel via airplane in the past?
qid: QMain_id + bool_start
answers: ["yes", "no"] --> "opted" values
logic: if "no" then don't continue this sub category
datatype: bool
element: options

- Main: How many trips did you have in the past month?
    qid: QMain_id + trips_num<br>
    sequence: default -> true, else false<br>
    loop_num: 
    opted: default -> yes<br>
    datatype: input => number
    answers: [1 - 100]<br>
    logic: send value to backend, start **loop** for further questions<br>
    1. What was the type of fuel used for majority of your flights?
        qid: QMain_id + fuel_type <br>
        opted: default -> yes <br>
        answers: ["jet fuel", "diesel", "petrol", "hydrogen", "electric"] <br>
        datatype: input => options <br>
    2. Sub: Where did you travel to? And from where?<br>
        qid: QMain_id + loc_start<br>
        opted: default -> yes, else no<br>
        answers: ["place A", "place B", "No"]<br>
        datatype: input => text
        logic: <br>
            if !"No":<br>
                use Google Maps Places Autcomplete API for airports for place A (onChange) and place B (onChange) --> find distance between airports using API --> send to backend --> dist * get cf em of fuel selected in (1) * metric<br>
            else:<br>
                Sub: What was the average duration of your flights? <br>
                qid: QMain_id + avg_time_num <br>
                opted: default -> yes <br>
                answers: [[days, hours, min]] <br>
                datatype: input => num <br>
                logic: get avg speed of plane 561 mph --> convert time to distance --> divide by avg number of passengers --> send to backend --> multiply by cf em factor
    
Sub Category: Train Travel <br>
QMain_id: train_travel_ <br>

Main Question: Have you used trains to travel? <br>
qid: QMain_id + bool_start <br>
answers: ["yes", "no"] --> "opted" values <br>
logic: if "no" then don't continue this sub category <br>
datatype: bool <br>
element: options <br>

- Main: How many trips did you have in the past month?
    qid: QMain_id + trips_num<br>
    sequence: default -> true, else false<br>
    loop_num: 
    opted: default -> yes<br>
    datatype: input => number
    answers: [1 - 100]<br>
    logic: send value to backend, start **loop** for further questions<br>
    1. Sub: What was the type of fuel used for majority of your rail trips?
        qid: QMain_id + fuel_type <br>
        opted: default -> yes <br>
        answers: ["biodiesel", "diesel", "petrol", "hydrogen", "electric"] <br>
        datatype: input => options <br>
    2. Sub: Where did you travel to? And from where?<br>
        qid: QMain_id + loc_start<br>
        opted: default -> yes, else no<br>
        answers: ["place A", "place B", "No"]<br>
        datatype: input => text
        logic: <br>
            if !"No":<br>
                use Google Maps Places Autcomplete API for railway stations for place A (onChange) and place B (onChange) --> find distance between railway stations using API --> send to backend --> dist * get cf em of fuel selected in (1) * metric<br>
            else:<br>
                Sub: What was the average duration of your rail trips? <br>
                qid: QMain_id + avg_time_num <br>
                opted: default -> yes <br>
                answers: [[days, hours, min]] <br>
                datatype: input => num <br>
                logic: get avg speed of train 24.23 mph --> convert time to distance --> divide by avg number of passengers --> send to backend --> multiply by cf em factor<br>

Sub Category: Metro Travel <br>
QMain_id: metro_travel_ <br>

Main Question: Have you used trains to travel? <br>
qid: QMain_id + bool_start <br>
answers: ["yes", "no"] --> "opted" values <br>
logic: if "no" then don't continue this sub category <br>
datatype: bool <br>
element: options <br>

- Main: How often do you commute by metro in a month?
    qid: QMain_id + trips_num<br>
        sequence: default -> true, else false<br>
        loop_num: 
        opted: default -> yes<br>
        datatype: input => options
        answers: [daily: 30, weekly: 4, biweekly: 2, monthly: 1]<br>
        logic: send value to backend, start **loop** for further questions<br>
        1. Sub: What is the place you frequently go to and from where? <br>
        qid: QMain_id + loc_start<br>
        opted: default -> yes, else no<br>
        answers: ["place A", "place B", "No"]<br>
        datatype: input => text
        logic: <br>
            if !"No":<br>
                use Google Maps Places Autcomplete API for metro stations for place A (onChange) and place B (onChange) --> find distance between metro stations using API --> send to backend --> dist * get cf em [report] * metric<br>
            else:<br>
                sequence: true
                a. Sub: How many coaches are in trains on average? <br>
                qid: QMain_id + coach_num <br>
                opted: default -> yes, else "No" and take 4 as avg value <br>
                answers: [2, 4, 6, 8, 10] <br>
                datatype: integer <br>
                element: input => slidebar <br>
                b. Sub: Was the train/metro electric/diesel/hybrid? <br>
                qid: QMain_id + fuel_type <br>
                opted: default -> yes <br>
                answers: [diesel, electric, hybrid] <br>
                datatype: string<br>
                element: input => options
                c. Sub: What was the average duration of your rail trips? <br>
                qid: QMain_id + avg_time_num <br>
                opted: default -> yes <br>
                answers: [[days, hours, min]] <br>
                datatype: integer
                element: input => num <br>
                logic: get avg speed of train 25 mph --> convert time to distance --> divide by avg number of passengers * coaches from (b) --> send to backend --> multiply by cf em factor<br>
    
        
        
         


