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

    return (
        <div>Dimych
            <button onClick={deleteUser}>Delete</button>
            <button onClick={saveUser}>Save</button>
        </div>
    )
}

export default User