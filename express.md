This is the express branch.

### Progress Update: Added Users Database Model
### Working On: Models of Categories & Linking with Users
### What's Left: Carbon Metric Finding Algorithm Functions

I am thinking of the following tables/documents for the firestore database.

- Users Collection: `first_name, last_name, email, date_of_birth, location`
- Transportation Subcollection: `vehicle_type, distance, frequency, date`
- Food Subcollection: `food_type, quantity, frequency, date`
- Waste Subcollection: `item, recyclable, frequency, date`

For the Express --> Firebase API endpoints, we could go with the following:
1. `POST /api/transportation`: Add a new transportation activity for a user.
2. `GET /api/transportation/:userId`: Retrieve a user's transportation activities.
3. `POST /api/food`: Add a new food consumption entry.
4. `GET /api/food/:userId`: Retrieve a user's food consumption entries.
5. `POST /api/waste`: Add a new waste management activity.
6. `GET /api/waste/:userId`: Retrieve a user's waste management activities.
7. `GET /api/carbon-footprint/:userId`: Calculate and retrieve the user's overall carbon footprint based on their activities.
8. `GET /api/carbon-footprint/transportation/:userId`: Calculate and retrieve the user's carbon footprint based on their responses for transportation category
9. `GET /api/carbon-footprint/food/:userId`: Calculate and retrieve the user's carbon footprint based on their responses for food category
10. `GET /api/carbon-footprint/waste/:userId`: Calculate and retrieve the user's carbon footprint based on their responses for waste category