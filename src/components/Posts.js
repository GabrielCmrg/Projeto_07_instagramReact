import react from "react";

function Top(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.from.src} alt="Imagem do criador do post"/>
                {props.from.profile}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function Bottom(props) {
    const [liked, setLiked] = react.useState(false);
    const [likes, setLikes] = react.useState(props.likes);
    let icon = (liked) ? "heart" : "heart-outline";
    let style = (liked) ? "red" : "";

    function toggleLike() {
        setLiked(!liked);
        let likesNumber = Number(likes.replace(".", ""));
        if (!liked) {
            likesNumber++;
        } else {
            likesNumber--;
        }
        setLikes(likesNumber.toLocaleString());
    }

    return (
        <div class="fundo">

            <div class="acoes">
                <div>
                    <ion-icon name={icon} onClick={toggleLike} id={style}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.from.src} alt="Imagem do destaque"/>
                <div class="texto">
                    Curtido por <strong>{props.from.profile}</strong> e <strong>outras {likes} pessoas</strong>
                </div>
            </div>

        </div>
    )
}

function Post(props) {
    return (
        <div class="post">
            <Top from={props.from} />

            <div class="conteudo">
                <img src={props.content} alt="Imagem do post"/>
            </div>

            <Bottom from={props.whoLiked} likes={props.likes} />
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