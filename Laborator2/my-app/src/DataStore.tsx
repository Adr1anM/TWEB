import { makeAutoObservable } from "mobx";

class DataStore {
    name = "Melnic Adrian";
    age = 20;
    location = "Chisinau";
    group = "CR-221";

    constructor(){
        makeAutoObservable(this);
    }
}

const dataStore = new DataStore();
export default dataStore;
