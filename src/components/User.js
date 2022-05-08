function UserText(props) {
    return (
        <div class="texto">
            <strong>{props.user}</strong>
            {props.alias}
        </div>
    )
}

function OtherUserText(props) {
    return (
        <div class="texto">
            <div class="nome">{props.user}</div>
            <div class="razao">{props.reason}</div>
        </div>
    )
}

export default function User(props) {
    const text = (props.isUser) ? (
        <UserText user={props.user} alias={props.alias} />
    ): <OtherUserText user={props.user} reason={props.reason} />;

    return (
        <div class="usuario">
            <img src={props.userImage} alt="Imagem do usuário"/>
            {text}
        </div>
    )
}