import {CityType} from "../02/02-02";


export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => (h.address.street.title !== street))
}