function Left() {
    return (
        <div>
            <div class="logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div class="separador"></div>
                <img src="assets/img/logo.png" alt="Instagram logo" />
            </div>

            <div class="logo-mobile">
                <ion-icon name="logo-instagram"></ion-icon>
            </div>
        </div>
    )
}

function Center() {
    return (
        <div>
            <div class="pesquisa">
                <input type="text" placeholder="Pesquisar" />
            </div>

            <div class="instagram-mobile">
                <img src="assets/img/logo.png" alt="Instagram logo" />
            </div>
        </div>
    )
}

function Right() {
    return (
        <div>
            <div class="icones">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>

            <div class="icones-mobile">
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
        </div>
    )
}

export default function NavBar() {
    return (
        <div class="navbar">
            <div class="container">
                <Left />
                <Center />
                <Right />
            </div>
        </div>
    )
}