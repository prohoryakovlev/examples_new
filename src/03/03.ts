import {StudentType} from "../02/02";

debugger
export const sum = (a: number, b: number) => {
    return a + b
}
export function sum2 (a: number, b: number) {
    return a + b
}

export const addSkill =
    (st: StudentType, skill: string) => {
        st.technologies.push({
            id: new Date().getTime(),
            title: skill
        })
    }

