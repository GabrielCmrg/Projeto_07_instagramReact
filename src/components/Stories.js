function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.src} alt="Foto de perfil"/>
            </div>
            <div class="usuario">
                {props.profile}
            </div>
        </div>
    )
}

export default function Stories() {
    const stories = [
        {profile: "9gag", src: "assets/img/9gag.svg"},
        {profile: "meowed", src: "assets/img/meowed.svg"},
        {profile: "barked", src: "assets/img/barked.svg"},
        {profile: "nathanwpylestrangeplanet", src: "assets/img/nathanwpylestrangeplanet.svg"},
        {profile: "wawawicomics", src: "assets/img/wawawicomics.svg"},
        {profile: "respondeai", src: "assets/img/respondeai.svg"},
        {profile: "filomoderna", src: "assets/img/filomoderna.svg"},
        {profile: "memeriagourmet", src: "assets/img/memeriagourmet.svg"}
    ]

    return (
        <div class="stories">
            {stories.map(story => <Story profile={story.profile} src={story.src}/>)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}