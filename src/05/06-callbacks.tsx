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
    const focusLostHandler = () => {
        console.log("focus lost")
    }

    return (
        <div> <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
            <input/>
            <button onClick={deleteUser} >Delete</button>
            <button onClick={saveUser}>Save</button>
        </div>
    )
}

export default User