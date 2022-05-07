import Stories from "./Stories"
import Posts from "./Posts"

function Main() {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    )
}

function User(props) {
    return (
        <div class="usuario">
            <img src={props.userImage} />
            <div class="texto">
                <strong>{props.user}</strong>
                {props.alias}
            </div>
        </div>
    )
}

function Suggestions() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src="assets/img/bad.vibes.memes.svg" />
                    <div class="texto">
                        <div class="nome">bad.vibes.memes</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src="assets/img/chibirdart.svg" />
                    <div class="texto">
                        <div class="nome">chibirdart</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src="assets/img/razoesparaacreditar.svg" />
                    <div class="texto">
                        <div class="nome">razoesparaacreditar</div>
                        <div class="razao">Novo no Instagram</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src="assets/img/adorable_animals.svg" />
                    <div class="texto">
                        <div class="nome">adorable_animals</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src="assets/img/smallcutecats.svg" />
                    <div class="texto">
                        <div class="nome">smallcutecats</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
        </div>
    )
}

function Sidebar() {
    return (
        <div class="sidebar">
            <User userImage="assets/img/catanacomics.svg" user="catanacomics" alias="Catana"/>

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

export default function Body() {
    return (
        <div class="corpo">
            <Main />
            <Sidebar />
        </div>
    )
}