import {StudentType} from "../02/02";
import {GovernmentBuildingType} from "../02/02-02";

debugger
export const sum = (a: number, b: number) => {
    return a + b
}

export function sum2(a: number, b: number) {
    return a + b
}

export const addSkill =
    (st: StudentType, skill: string) => {
        st.technologies.push({
            id: new Date().getTime(),
            title: skill
        })
    }

export function addSkill2(st: StudentType, skill: string) {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
building.budget += budget;
}
