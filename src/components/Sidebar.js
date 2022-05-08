import User from './User';

function Suggestion(props) {
    return (
        <div class="sugestao">
            <User userImage={props.src} user={props.profile} reason={props.reason} isUser={false} />

            <div class="seguir">Seguir</div>
        </div>
    )
}

function Suggestions() {
    const suggestions = [
        {src: "assets/img/bad.vibes.memes.svg", profile: "bad.vibes.memes", reason: "Segue você"},
        {src: "assets/img/chibirdart.svg", profile: "chibirdart", reason: "Segue você"},
        {src: "assets/img/razoesparaacreditar.svg", profile: "razoesparaacreditar", reason: "Novo no Instagram"},
        {src: "assets/img/adorable_animals.svg", profile: "adorable_animals", reason: "Segue você"},
        {src: "assets/img/smallcutecats.svg", profile: "smallcutecats", reason: "Segue você"}
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestions.map(suggestion => <Suggestion src={suggestion.src} profile={suggestion.profile} reason={suggestion.reason} />)}
        </div>
    )
}

export default function Sidebar() {
    return (
        <div class="sidebar">
            <User userImage="assets/img/catanacomics.svg" user="catanacomics" alias="Catana" isUser={true} />

            <Suggestions />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}