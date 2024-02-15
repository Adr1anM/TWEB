import { makeAutoObservable } from "mobx";

class DataStore {
    name = "Melnic Adrian";
    age = 21;
    location = "Chisinau";
    Group = "CR-221"

    constructor() {
        makeAutoObservable(this);
    }

   
}

const dataStore = new DataStore();
export default dataStore;