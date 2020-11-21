import react from "react"

const UserCard = ({name, username, email}) => (
    <article className="card">
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center"> {name} </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/617b5418-a3c2-4e6d-adf0-3f39d6e62226.jpeg" alt=""/>
                        </div>
                    </div>
                    <span className="small">{username}</span>
                </div>
            </div>
            <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="#"> {`$ ${email}`}  </a>
            </div>
        </div>
    </article>
)

export default UserCard