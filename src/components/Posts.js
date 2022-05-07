function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.from.src} />
                    {props.from.profile}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.content} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.whoLiked.src} />
                    <div class="texto">
                        Curtido por <strong>{props.whoLiked.profile}</strong> e <strong>outras {props.likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    const posts = [
        {
            from: {profile: "meowed", src: "assets/img/meowed.svg"},
            content: "assets/img/gato-telefone.svg",
            whoLiked: {profile: "respondeai", src: "assets/img/respondeai.svg"},
            likes: "101.523"
        },
        {
            from: {profile: "barked", src: "assets/img/barked.svg"},
            content: "assets/img/dog.svg",
            whoLiked: {profile: "adorable_animals", src: "assets/img/adorable_animals.svg"},
            likes: "99.159"
        }
    ]

    return (
        <div class="posts">
            {posts.map(post => <Post from={post.from} content={post.content} whoLiked={post.whoLiked} likes={post.likes} />)}
        </div>
    )
}