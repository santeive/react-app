import react, { Component } from "react"
import UserCard from "../Molecules/UserCard"

class Users extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
        .then( response => response.json())
        .then( response2 => {
            this.setState({
                users: response2
            })
        })
    }
 
    render() {
        const {users} = this.state
        return (
            <div className="ed-grid">
                <h1>Usuarios</h1>
                <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
                    {
                        users.map(u => (
                            <UserCard 
                                key={u.id} 
                                name={u.name} 
                                username={u.username} 
                                email={u.email} 
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Users;