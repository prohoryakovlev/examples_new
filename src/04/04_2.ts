import {CityType, GovernmentBuildingType} from "../02/02-02";


export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => (h.address.street.title !== street))
}

export const getBuildingsWithStaffCountGreaterThen = (governmentBuildings: Array<GovernmentBuildingType>, number: number) => {
    return governmentBuildings.filter(b => b.staffCount > number)
}