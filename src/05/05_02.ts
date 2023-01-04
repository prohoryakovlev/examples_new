import {GovernmentBuildingType, HouseType} from "../02/02-02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingType>) => {
    return buildings.map(b => b.address.street.title)
}


export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(b => b.address.street.title)
}

export function createMessages(houses: Array<HouseType>) {


    let callbackfn = (h: HouseType) => {
        debugger
        return `Hello guys from ${h.address.street.title}`;

    }
    let newArray = houses.map(callbackfn);
    return newArray

}