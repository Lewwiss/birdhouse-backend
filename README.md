<img src="./.github/showcase.png" />

# Birdhouse Backend (Shockbyte)
> Built using [NestJS](https://nestjs.com/) and [Typescript](https://www.typescriptlang.org/)

## Setup & Functions

All functions below interact with the "houses" array from **house.service.ts** this is used to simulate interacting with a database (such as SQL).

Within **house.service.ts** I created a few different functions. Each of these functions are accessible to the **house.controller.ts** and helped clean up the controller to see which parameters were taken into each of the routes

 - getAllHouses()
 - getHouseById()
 - updateHouseById()
 - createHouse()
 - updateResidencyById()
 - deleteHouseById()
 - authenticateUbidFromId()
 - pruneHouses()

## Authenication
After setting up these routes I tried to think of the best way to authenticate using the UBID, so I decided to create a registration array and store each UBID along with their birdhouse ID's.

I could use this registration array in the **house.middleware.ts** on all protected routes. The middleware function will verify the existence of the UBID.

The registration array is also used in the **house.service.ts** to check that a specific ID being updated or deleted belongs to a specific UBID. I also added a check within the createHouse() method, that will append the newly created ID to an existing UBID if it is present in the request header.

## Generating IDs and UBIDs
To keep my API as simple as possible, I used this function to generate a random string to use for both of my ID and UBIDs.
```typescript
// Example: 7ceb649518cd9
const id = Math.random().toString(16).slice(2);
const ubid = Math.random().toString(16).slice(2);
```

## House & Residency Models
```typescript
export class House {
    constructor(
        public id: String,
        public name: String,
        public longitude: Number,
        public latitude: Number,
        public residency: Residency[] = [],
        public created: Number,
        public updated: Number
    ) {}
};
```
```typescript
export class Residency {
    constructor(
        public date: Number,
        public birds: Number,
        public eggs: Number
    ) {}
};
```

## Registration Model
```typescript
export class Registration {
    constructor(
	public ubid: String,
	public ids: String[]
    ) {}
};
```
```typescript
import { Registration } from "./registration.model";

export const registrations: Registration[] = [];
```
