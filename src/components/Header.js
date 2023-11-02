
export default function Header(props) {

    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={() => props.onDarkModeClick()}>
                {props.mode ? "Dark" : "Light"} Mode
            </button>
        </header >
    )
}