<img width="120px" src="https://camo.githubusercontent.com/5f54c0817521724a2deae8dedf0c280a589fd0aa9bffd7f19fa6254bb52e996a/68747470733a2f2f6e6573746a732e636f6d2f696d672f6c6f676f2d736d616c6c2e737667" align="right" />

# Birdhouse Backend
> Built using [NestJS](https://nestjs.com/) and [Typescript](https://www.typescriptlang.org/)

### Overview

I first tried to outline my main routes and create a simple layout of how my routes would function. I also decided to hardcode a "houses" array within **house.service.ts** to interact with (this would act as my database).

### Setup & Functions

Within **house.service.ts** I created a few different functions:

 - getAllHouses()
 - getHouseById()
 - updateHouseById()
 - createHouse()
 - updateResidencyById()
 - deleteHouseById()
 - authenticateUbidFromId()
 - pruneHouses()

Each of these functions are accessible to the **house.controller.ts** and helped clean up the controller to see which parameters were taken into each of the routes.

### Authenication
After setting up these routes I tried to think of the best way to authenticate using the UBID, so I decided to create a registration array and store each UBID along with their birdhouse ID's.

I could use this registration array in the **house.middleware.ts** on all protected routes. In the middleware function it would check to see if that UBID exists.

The registration array is also used in the **house.service.ts** to check that the specific ID being updated or deleted belongs to that specific UBID. I also added a check within the createHouse() method, that will append the newly created ID to an existing UBID if it is present in the request header and still exists in the registration array.

### Generating IDs and UBIDs
To keep my API as simple as possible, I used this function to generate a random string to use for both my ID and UBIDs.
```typescript
const id = Math.random().toString(16).slice(2);
const ubid = Math.random().toString(16).slice(2);
```

### House, Bird and Eggs Models
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

### Registration Model
```typescript
export class Registration  {
	constructor(
		public ubid: String,
		public ids: String[]
	)  {}
};
```
```typescript
import  {  Registration  }  from  "./registration.model";

export  const  registrations: Registration[] = [];
```
