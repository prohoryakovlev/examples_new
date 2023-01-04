// const callback = (): number => {
//     alert("hey")
//     return 12;
// }
//
// window.setTimeout(callback, 1000)
//

const User = () => {

    const deleteUser = () => {
        alert("user have been deleted")
    }
    const saveUser = () => {
        alert("user have been saved")
    }

    const onNameChanged = () => {
        console.log("name changed")
    }

    return (
        <div> <textarea onChange={onNameChanged}>Dimych</textarea>
            <div onClick={deleteUser} >Delete</div>
            <div onClick={saveUser}>Save</div>
        </div>
    )
}

export default User