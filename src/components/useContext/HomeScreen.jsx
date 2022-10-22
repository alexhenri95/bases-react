import useUser from "../../hooks/useUser"

const HomeScreen = () => {

    const { saludo } = useUser()
    console.log(saludo);

    return (
        <div>
            <h1>Home Screen</h1>
            <hr />
            
        </div>
    )
}

export default HomeScreen